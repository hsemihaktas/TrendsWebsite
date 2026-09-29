'use client';

import { useEffect, useState } from 'react';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

/**
 * 150ms debounce uygulanmış arama kutusu bileşeni.
 * Kullanıcı yazmayı bıraktıktan 150ms sonra onChange tetiklenir.
 * Boş string girişi metin filtresini kaldırır.
 * Requirements: 11.1, 11.2, 11.6, 15.6
 */
export default function SearchBox({ value, onChange }: SearchBoxProps) {
  // Anlık (debounce uygulanmamış) input değerini tutan yerel state
  const [inputValue, setInputValue] = useState(value);

  // Dışarıdan gelen `value` prop değiştiğinde (örn. URL sıfırlandığında) yerel state güncellenir
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // 150ms debounce: son tuş vuruşundan 150ms sonra onChange çağrılır
  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(inputValue);
    }, 150);

    return () => clearTimeout(timer);
  }, [inputValue, onChange]);

  return (
    <div role="search" className="relative w-full">
      {/* Arama ikonu */}
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" aria-hidden="true">
        <svg
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <input
        type="search"
        aria-label="Trend ara"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Trend ara..."
        className="
          block w-full rounded-lg border border-gray-300
          bg-white py-2.5 pl-10 pr-4
          text-sm text-gray-900 placeholder-gray-400
          shadow-sm
          focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/20
          min-h-[44px]
        "
      />
    </div>
  );
}
