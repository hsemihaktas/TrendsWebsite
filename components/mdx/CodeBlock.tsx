'use client';

import { useRef, useState } from 'react';

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  'data-language'?: string;
}

export function CodeBlock({
  children,
  'data-language': lang,
  className,
  ...props
}: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const text = preRef.current?.innerText ?? '';
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard API not available */
    }
  };

  return (
    <div className="group relative my-6 rounded-xl overflow-hidden border border-[#E6E3DC] dark:border-[#2C2A27]">

      {/* ── Header bar ────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 h-9
                      bg-[#ECEAE3] dark:bg-[#222120]
                      border-b border-[#E6E3DC] dark:border-[#2C2A27]">
        {/* Language label */}
        <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#A8A49C] dark:text-[#5C5A57] select-none">
          {lang ?? 'code'}
        </span>

        {/* Copy button */}
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? 'Kopyalandı' : 'Kopyala'}
          className="flex items-center gap-1.5 h-6 px-2 rounded text-[11px] font-medium
                     text-[#9B9890] dark:text-[#5C5A57]
                     hover:text-[#6B6860] dark:hover:text-[#9B9890]
                     hover:bg-[#E6E3DC] dark:hover:bg-[#2C2A27]
                     transition-all duration-150
                     focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111110] dark:focus-visible:ring-[#EDEDE8]"
        >
          {copied ? (
            <>
              {/* Check icon */}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M1.5 6.5 L4.5 9.5 L10.5 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Kopyalandı</span>
            </>
          ) : (
            <>
              {/* Copy icon */}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M8 4V2.5A1.5 1.5 0 006.5 1h-4A1.5 1.5 0 001 2.5v4A1.5 1.5 0 002.5 8H4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              <span>Kopyala</span>
            </>
          )}
        </button>
      </div>

      {/* ── Code area ─────────────────────────────────── */}
      <pre
        ref={preRef}
        {...props}
        className={`overflow-x-auto p-5 text-[13px] leading-6 tabular-nums
                    bg-[#F5F3EE] dark:bg-[#161513]
                    ${className ?? ''}`}
      >
        {children}
      </pre>
    </div>
  );
}
