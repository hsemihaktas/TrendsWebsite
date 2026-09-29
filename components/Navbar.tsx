'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8F7F4] border-b border-[#E6E3DC]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[15px] font-semibold text-[#111110] tracking-tight hover:opacity-70 transition-opacity"
        >
          Design Trends
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Ana navigasyon" className="hidden sm:flex items-center gap-1">
          <Link
            href="/"
            className="text-[13px] text-[#6B6860] hover:text-[#111110] px-3 py-1.5 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111110] focus-visible:ring-offset-2"
          >
            Tüm Akımlar
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(v => !v)}
          className="sm:hidden w-8 h-8 flex items-center justify-center text-[#6B6860] hover:text-[#111110] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111110] focus-visible:ring-offset-2 rounded"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {open ? (
              <path d="M2 2l14 14M16 2 2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <line x1="2" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="2" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-nav" className="sm:hidden border-t border-[#E6E3DC] bg-[#F8F7F4] px-5 py-3">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block text-[14px] text-[#6B6860] hover:text-[#111110] py-2 transition-colors"
          >
            Tüm Akımlar
          </Link>
        </div>
      )}
    </header>
  );
}
