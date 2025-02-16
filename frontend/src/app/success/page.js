export default function Success() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gradient-to-b from-blue-500 to-blue-100 p-8">
        <h1 className="text-3xl font-bold mb-4">Booking Successful!</h1>
        <p>Thank you for choosing rent4paws. Your booking has been confirmed.</p>
        <a
          href="/"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
        >
          Return Home
        </a>
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