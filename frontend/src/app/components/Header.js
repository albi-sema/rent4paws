"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-white shadow p-4 border-b border-yellow-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <Image src="/icon.png" alt="Rent4paws Logo" width={100} height={100} className="mr-2" />
          <h1 className="text-4xl font-bold text-black">rent4paws</h1>
        </div>
        <button 
          onClick={() => router.push("/search")}
          className="bg-yellow-400 text-black px-6 py-3 rounded shadow-lg hover:bg-yellow-500 transition"
        >
          Search Cars
        </button>
      </div>
    </header>
  );
} 