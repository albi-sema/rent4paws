import Link from "next/link";
import Image from "next/image";
import BackButton from "../../components/BackButton";
import BookingForm from "../../components/BookingForm";
import ClientNavBar from "@/app/components/ClientNavBar";

export default async function CarDetail({ params }) {
  const { id } = await params;
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
  const res = await fetch(`${backendUrl}/api/cars/${id}/`, { cache: "no-store" });
  if (!res.ok) {
    return <div>Car not found</div>;
  }
  const car = await res.json();
  // Use car.photos if available, otherwise fallback to single image.
  const photos = car.photos && car.photos.length > 0 ? car.photos : [car.image];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <ClientNavBar />

      {/* Main content */}
      <main className="flex-grow bg-gradient-to-b from-blue-500 to-blue-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white text-black shadow-lg rounded-lg overflow-hidden">
            {/* Card Header: Back Button */}
            <div className="p-4">
              <BackButton />
            </div>

            {/* Card Body: Carousel & Car Details */}
            <div className="md:flex md:gap-8">
              {/* Left: Photo Carousel */}
              <div className="md:w-1/2 p-4">
                <div className="overflow-x-auto whitespace-nowrap space-x-4">
                  {photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`${car.name} ${index + 1}`}
                      className="inline-block w-full md:w-72 h-64 object-cover rounded"
                    />
                  ))}
                </div>
              </div>
              {/* Right: Car Details */}
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-blue-500 mb-4">{car.name}</h1>
                <p className="text-lg mb-4">
                  Price per day:{" "}
                  <span className="text-blue-500 font-bold">${car.price}</span>
                </p>
                {/* New: Car specifications icons */}
                <div className="flex flex-wrap gap-6 mt-4">
                  {/* Transmission */}
                  <div className="flex items-center gap-2">
                    <span role="img" aria-label="Transmission">
                      {car.transmission === "Manual" ? "⚙️" : "🔄"}
                    </span>
                    <span>{car.transmission}</span>
                  </div>
                  {/* Seats */}
                  <div className="flex items-center gap-2">
                    <span role="img" aria-label="Seats">💺</span>
                    <span>{car.seats} Seat{car.seats > 1 ? "s" : ""}</span>
                  </div>
                  {/* Baggages */}
                  <div className="flex items-center gap-2">
                    <span role="img" aria-label="Baggages">🧳</span>
                    <span>{car.baggages} Baggage{car.baggages > 1 ? "s" : ""}</span>
                  </div>
                  {/* Doors */}
                  <div className="flex items-center gap-2">
                    <span role="img" aria-label="Doors">🚪</span>
                    <span>{car.doors} Door{car.doors > 1 ? "s" : ""}</span>
                  </div>
                  {/* Fuel */}
                  <div className="flex items-center gap-2">
                    <span role="img" aria-label="Fuel">⛽</span>
                    <span>{car.fuel}</span>
                  </div>
                </div>
                {/* End of Car specifications icons */}
                {/* Add any additional car details or a short description here */}
              </div>
            </div>

            {/* Card Footer: Booking Form */}
            <div className="p-6 border-t">
              <div className="mt-6">
                <BookingForm carId={car.id} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Rent4Paws. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 