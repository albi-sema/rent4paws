import SearchHeader from "@/app/components/SearchHeader";

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
              <div key={car.id} className="border p-4 rounded shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h2 className="text-xl font-semibold mb-2">{car.name}</h2>
                <p className="mb-2">
                  Price per day: <span className="text-blue-500 font-bold">${car.price}</span>
                </p>
                {car.available === false ? (
                  <p className="text-red-500 font-bold">Unavailable</p>
                ) : (
                  <a
                    href={`/car/${car.id}`}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Book This Car
                  </a>
                )}
              </div>
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