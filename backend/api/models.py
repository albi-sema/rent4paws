from django.db import models
from django.utils import timezone

class Car(models.Model):
    name = models.CharField(max_length=100)
    image = models.URLField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    transmission = models.CharField(
        max_length=50,
        choices=[('manual', 'Manual'), ('automatic', 'Automatic')],
        help_text="Transmission type"
    )
    number_of_seats = models.PositiveIntegerField(help_text="Number of seats in the car")
    number_of_baggages = models.PositiveIntegerField(help_text="Number of baggages the car can accommodate")
    number_of_doors = models.PositiveIntegerField(help_text="Number of doors in the car")
    fuel_type = models.CharField(
        max_length=50,
        choices=[('petrol', 'Petrol'), ('diesel', 'Diesel'), ('electric', 'Electric')],
        help_text="Fuel type"
    )

    def __str__(self):
        return self.name

class Booking(models.Model):
    car = models.ForeignKey(Car, related_name="bookings", on_delete=models.CASCADE)
    customer_name = models.CharField(max_length=100, default="Anonymous")
    customer_email = models.EmailField(max_length=254, default="anonymous@example.com")
    customer_phone = models.CharField(max_length=20, default="0000000000")
    booking_start = models.DateTimeField(
        default=timezone.now,
        help_text="Start date and time of the rental period"
    )
    booking_end = models.DateTimeField(
        default=timezone.now,
        help_text="End date and time of the rental period"
    )
    pickup_location = models.CharField(max_length=255, help_text="Pickup location for the rental")
    dropoff_location = models.CharField(max_length=255, help_text="Return location for the rental")

    def __str__(self):
        return f"{self.customer_name} - {self.car.name} from {self.booking_start} to {self.booking_end}" 