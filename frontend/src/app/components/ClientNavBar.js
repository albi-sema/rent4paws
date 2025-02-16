"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ClientNavBar() {
  const [language, setLanguage] = useState("en");
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  return (
    <nav className="w-full bg-blue-400 shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/icon.png"
              alt="Rent4Paws Logo"
              width={100}
              height={100}
              className="object-contain cursor-pointer"
            />
            <span className="ml-4 text-2xl font-bold text-white">
              Rent4Paws
            </span>
          </Link>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowLangDropdown(!showLangDropdown)}
            className="text-lg font-semibold text-white hover:text-blue-200 cursor-pointer focus:outline-none"
          >
            🌐 {language.toUpperCase()}
          </button>
          {showLangDropdown && (
            <div className="absolute right-0 mt-2 bg-white rounded shadow-lg">
              <button
                onClick={() => {
                  setLanguage("en");
                  setShowLangDropdown(false);
                }}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                English
              </button>
              <button
                onClick={() => {
                  setLanguage("sq");
                  setShowLangDropdown(false);
                }}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Shqip
              </button>
              <button
                onClick={() => {
                  setLanguage("it");
                  setShowLangDropdown(false);
                }}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Italiano
              </button>
              <button
                onClick={() => {
                  setLanguage("de");
                  setShowLangDropdown(false);
                }}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Deutsch
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
} 