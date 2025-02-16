import LandingHeader from "@/app/components/LandingHeader";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gradient-to-b from-blue-500 to-blue-100">
        <LandingHeader />
        {/* You can add additional home page content here */}
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