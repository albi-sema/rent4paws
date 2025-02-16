import SearchHeader from "@/app/components/SearchHeader";
import Link from "next/link";
import { GiGearStick } from "react-icons/gi";
import { FaSuitcase, FaGasPump } from "react-icons/fa";
import { MdPerson, MdOutlineDoorFront } from "react-icons/md";

export default async function SearchResults({ searchParams }) {
  // Ensure searchParams is awaitable and extract new query parameters
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const { pickupPlace, pickupDate, pickupTime, returnDate, returnTime } = resolvedSearchParams;

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
  const res = await fetch(
    `${backendUrl}/api/cars/?startDate=${pickupDate}&endDate=${returnDate}`,
    { cache: "no-store" }
  );
  const cars = await res.json();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gradient-to-b from-blue-500 to-blue-100">
        <SearchHeader initialParams={resolvedSearchParams} />
        <section className="max-w-6xl mx-auto p-4 bg-white text-black mt-8">
          <h1 className="text-3xl font-bold mb-4 text-blue-800">Available Cars</h1>
          <div className="p-4 mb-4 text-sm text-white rounded-lg bg-blue-500" role="alert">
            Pickup: {pickupPlace} on {pickupDate} at {pickupTime} — Return: {returnDate} at {returnTime}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cars.map((car) => (
              <Link key={car.id} href={`/car/${car.id}`}>
                <div className="border rounded shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="relative">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-48 object-cover rounded-t"
                    />
                    <div className="absolute bottom-0 right-0 bg-blue-600 bg-opacity-75 text-white p-1 m-2 text-lg font-bold rounded">
                      ${car.price}
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{car.name}</h2>
                    <div className="flex flex-wrap gap-3">
                      {/* Transmission */}
                      <div className="flex items-center gap-1 text-sm" title="Transmission">
                        <span>
                          <GiGearStick />
                        </span>
                        <span>{car.transmission}</span>
                      </div>
                      {/* Seats */}
                      <div className="flex items-center gap-1 text-sm" title="Number of Seats">
                        <span>
                          <MdPerson />
                        </span>
                        <span>{car.number_of_seats}</span>
                      </div>
                      {/* Baggages */}
                      <div className="flex items-center gap-1 text-sm" title="Baggage Capacity">
                        <span>
                          <FaSuitcase />
                        </span>
                        <span>{car.number_of_baggages}</span>
                      </div>
                      {/* Doors */}
                      <div className="flex items-center gap-1 text-sm" title="Number of Doors">
                        <span>
                          <MdOutlineDoorFront />
                        </span>
                        <span>{car.number_of_doors}</span>
                      </div>
                      {/* Fuel */}
                      <div className="flex items-center gap-1 text-sm" title="Fuel Type">
                        <span>
                          <FaGasPump />
                        </span>
                        <span>{car.fuel_type}</span>
                      </div>
                    </div>
                    {!car.available && (
                      <p className="text-red-500 font-bold mt-2">Unavailable</p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
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