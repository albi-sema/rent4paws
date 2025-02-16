from rest_framework import serializers
from .models import Car, Booking

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = "__all__"

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = "__all__" 