import LandingHeader from "@/app/components/LandingHeader";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gradient-to-b from-blue-500 to-blue-100">
        <LandingHeader />
      </main>
    </div>
  );
} 