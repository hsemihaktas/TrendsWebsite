'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      type="button"
      aria-label={isDark ? 'Açık moda geç' : 'Karanlık moda geç'}
      onClick={toggle}
      className="w-9 h-9 flex items-center justify-center rounded
                 text-[#6B6860] dark:text-[#9B9890]
                 hover:text-[#111110] dark:hover:text-[#EDEDE8]
                 hover:bg-[#E6E3DC] dark:hover:bg-[#2C2A27]
                 transition-colors
                 focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-[#111110] dark:focus-visible:ring-[#EDEDE8]
                 focus-visible:ring-offset-2"
    >
      {isDark ? (
        /* Sun */
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 1v1.5M8 13.5V15M15 8h-1.5M2.5 8H1M12.95 3.05l-1.06 1.06M4.11 11.89l-1.06 1.06M12.95 12.95l-1.06-1.06M4.11 4.11 3.05 3.05"
                stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ) : (
        /* Moon */
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M13.5 10A6 6 0 0 1 6 2.5a5.5 5.5 0 1 0 7.5 7.5z"
                stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8F7F4] dark:bg-[#111110] border-b border-[#E6E3DC] dark:border-[#2C2A27] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 h-13 sm:h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[14px] sm:text-[15px] font-semibold text-[#111110] dark:text-[#EDEDE8] tracking-tight hover:opacity-70 transition-opacity"
        >
          Design Trends
        </Link>

        <div className="flex items-center gap-1">
          {/* Desktop nav */}
          <nav aria-label="Ana navigasyon" className="hidden sm:flex items-center">
            <Link
              href="/"
              className="text-[13px] text-[#6B6860] dark:text-[#9B9890] hover:text-[#111110] dark:hover:text-[#EDEDE8]
                         px-3 py-1.5 rounded transition-colors
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111110] focus-visible:ring-offset-2"
            >
              Tüm Akımlar
            </Link>
          </nav>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(v => !v)}
            className="sm:hidden w-9 h-9 flex items-center justify-center
                       text-[#6B6860] dark:text-[#9B9890]
                       hover:text-[#111110] dark:hover:text-[#EDEDE8]
                       transition-colors rounded
                       focus-visible:outline-none focus-visible:ring-2
                       focus-visible:ring-[#111110] focus-visible:ring-offset-2"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {open ? (
                <path d="M2 2l14 14M16 2 2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="2" y1="5"  x2="16" y2="5"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="2" y1="9"  x2="16" y2="9"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="2" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-nav"
          className="sm:hidden border-t border-[#E6E3DC] dark:border-[#2C2A27]
                     bg-[#F8F7F4] dark:bg-[#111110]
                     px-4 py-3 transition-colors duration-200"
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center min-h-[44px] text-[14px] text-[#6B6860] dark:text-[#9B9890]
                       hover:text-[#111110] dark:hover:text-[#EDEDE8] transition-colors"
          >
            Tüm Akımlar
          </Link>
        </div>
      )}
    </header>
  );
}
