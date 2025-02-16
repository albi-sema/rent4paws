"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="mb-4 bg-blue-200 px-4 py-4 text-blue-500 font-bold rounded-full"
    >
      Back to Car Selection
    </button>
  );
} 