"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingForm({ carId }) {
  const router = useRouter();
  const [customerName, setCustomerName] = useState("");
  const [bookingDate, setBookingDate] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
    try {
      const res = await fetch(`${backendUrl}/api/bookings/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          car: carId,
          customer_name: customerName,
          booking_date: bookingDate,
        }),
      });
      if (res.ok) {
        router.push("/success");
      } else {
        router.push("/error");
      }
    } catch (error) {
      router.push("/error");
    }
  };

  return (
    <form onSubmit={handleBooking} className="flex flex-col gap-4">
      <div>
        <label className="block">Your Name:</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="border p-2"
          required
        />
      </div>
      <div>
        <label className="block">Booking Date:</label>
        <input
          type="date"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
          className="border p-2"
          required
        />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Confirm Booking
      </button>
    </form>
  );
} 