"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="mb-4 bg-gray-200 px-4 py-2 rounded"
    >
      Back
    </button>
  );
} 