from io import BytesIO
from reportlab.pdfgen import canvas
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import EmailMessage
from .models import Booking

def generate_booking_pdf(booking):
    # Create a PDF file in memory with booking information
    buffer = BytesIO()
    c = canvas.Canvas(buffer)
    c.drawString(100, 800, "Booking Report")
    c.drawString(100, 780, f"Customer: {booking.customer_name}")
    c.drawString(100, 760, f"Email: {booking.customer_email}")
    c.drawString(100, 740, f"Phone: {booking.customer_phone}")
    c.drawString(100, 720, f"Car: {booking.car.name}")
    c.drawString(100, 700, f"Booking Start: {booking.booking_start}")
    c.drawString(100, 680, f"Booking End: {booking.booking_end}")
    c.drawString(100, 660, f"Pickup location: {booking.pickup_location}")
    c.drawString(100, 640, f"Dropoff location: {booking.dropoff_location}")
    c.save()
    pdf = buffer.getvalue()
    buffer.close()
    return pdf

def send_booking_email(booking, pdf):
    # Prepare and send an email with the PDF attached
    subject = f"Your Booking Confirmation for {booking.car.name}"
    message = "Thank you for your booking. Please find attached your booking details."
    email = EmailMessage(subject, message, to=[booking.customer_email])
    email.attach("booking_report.pdf", pdf, "application/pdf")
    email.send()

@receiver(post_save, sender=Booking)
def booking_post_save(sender, instance, created, **kwargs):
    # When a new booking is created, generate its PDF and send the email
    if created:
        pdf = generate_booking_pdf(instance)
        send_booking_email(instance, pdf) 