from django.db import models

class Car(models.Model):
    name = models.CharField(max_length=100)
    image = models.URLField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

class Booking(models.Model):
    car = models.ForeignKey(Car, related_name="bookings", on_delete=models.CASCADE)
    customer_name = models.CharField(max_length=100)
    booking_date = models.DateField()

    def __str__(self):
        return f"{self.customer_name} - {self.car.name} on {self.booking_date}" 