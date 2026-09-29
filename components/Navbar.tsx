"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Ana navigasyon"
      className="sticky top-0 z-50 bg-white border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Site adı / logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors min-h-[44px] min-w-[44px] flex items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            Design Trends
          </Link>

          {/* Masaüstü navigasyon linkleri (md ve üzeri) */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className="min-h-[44px] min-w-[44px] flex items-center px-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Ana Sayfa
            </Link>
          </div>

          {/* Mobil hamburger düğmesi (md altı) */}
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobil menü (hamburger açıkken gösterilir) */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-gray-200 bg-white"
        >
          <div className="px-4 py-2 space-y-1">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Ana Sayfa
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
