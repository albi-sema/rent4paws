from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Car, Booking
from .serializers import CarSerializer, BookingSerializer
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.parsers import JSONParser

class CarList(APIView):
    def get(self, request):
        start_date = request.query_params.get("startDate")
        end_date = request.query_params.get("endDate")
        cars = Car.objects.all()

        # If both dates are provided, perform an availability check using booking_start and booking_end.
        if start_date and end_date:
            data = []
            for car in cars:
                # A booking overlaps if its start is before the requested end and its end is after the requested start.
                is_booked = car.bookings.filter(
                    booking_start__lt=end_date,
                    booking_end__gt=start_date
                ).exists()
                car_data = CarSerializer(car).data
                # Mark available as True if no overlapping booking is found.
                car_data["available"] = not is_booked
                data.append(car_data)
            return Response(data)
        else:
            serializer = CarSerializer(cars, many=True)
            return Response(serializer.data)

class CarDetail(APIView):
    def get(self, request, pk):
        try:
            car = Car.objects.get(pk=pk)
        except Car.DoesNotExist:
            return Response({"error": "Car not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = CarSerializer(car)
        return Response(serializer.data)

@method_decorator(csrf_exempt, name='dispatch')
class BookingCreate(APIView):
    # Explicitly parse incoming JSON data    
    parser_classes = [JSONParser]
    
    def post(self, request):
        serializer = BookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 