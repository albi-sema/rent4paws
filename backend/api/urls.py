from django.urls import path
from .views import CarList, CarDetail, BookingCreate

urlpatterns = [
    path("cars/", CarList.as_view(), name="car-list"),
    path("cars/<int:pk>/", CarDetail.as_view(), name="car-detail"),
    path("bookings/", BookingCreate.as_view(), name="booking-create"),
] 