'use client';

import { useEffect, useState } from 'react';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBox({ value, onChange }: SearchBoxProps) {
  const [local, setLocal] = useState(value);

  useEffect(() => { setLocal(value); }, [value]);

  useEffect(() => {
    const t = setTimeout(() => onChange(local), 150);
    return () => clearTimeout(t);
  }, [local, onChange]);

  return (
    <div role="search" className="relative w-full sm:w-64">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A8A49C] dark:text-[#5C5A57] pointer-events-none flex-shrink-0"
        viewBox="0 0 16 16" fill="none" aria-hidden="true"
      >
        <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 10l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        aria-label="Trend ara"
        value={local}
        onChange={e => setLocal(e.target.value)}
        placeholder="Trend ara..."
        className="w-full h-9 pl-9 pr-4 text-[13px]
                   text-[#111110] dark:text-[#EDEDE8]
                   placeholder-[#A8A49C] dark:placeholder-[#5C5A57]
                   bg-white dark:bg-[#1C1B19]
                   border border-[#E6E3DC] dark:border-[#2C2A27] rounded-md
                   focus:outline-none focus:border-[#111110] dark:focus:border-[#EDEDE8]
                   transition-colors"
      />
    </div>
  );
}
