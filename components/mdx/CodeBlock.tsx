'use client';

import { useRef, useState } from 'react';

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  'data-language'?: string;
}

export function CodeBlock({
  children,
  'data-language': lang,
  style,   // shiki'nin inline style'ını intercept ediyoruz
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
    } catch {}
  };

  /*
   * shiki'nin inline background-color'ını sil, renk değişkenlerini (color vars) koru.
   * Arka planı biz CSS ile yönetiyoruz — GitHub'ın yaptığı gibi.
   */
  const cleanStyle = style
    ? (Object.fromEntries(
        Object.entries(style).filter(([k]) => k !== 'backgroundColor' && k !== 'background')
      ) as React.CSSProperties)
    : undefined;

  return (
    <div
      className="relative group my-5 rounded-lg overflow-hidden
                 border border-[#d0d7de] dark:border-[#30363d]
                 text-[13px]"
    >
      {/* ── GitHub-style header bar ─────────────────────── */}
      <div
        className="flex items-center justify-between px-4 h-10
                   bg-[#f6f8fa] dark:bg-[#161b22]
                   border-b border-[#d0d7de] dark:border-[#30363d]"
      >
        {/* Language label */}
        <span className="font-mono text-[11px] font-medium text-[#57606a] dark:text-[#8b949e] select-none">
          {lang ?? 'code'}
        </span>

        {/* Copy button */}
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? 'Kopyalandı' : 'Kopyala'}
          className="flex items-center gap-1.5 h-6 px-2 rounded text-[11px] font-medium
                     text-[#57606a] dark:text-[#8b949e]
                     hover:bg-[#e9ecef] dark:hover:bg-[#21262d]
                     hover:text-[#24292f] dark:hover:text-[#c9d1d9]
                     transition-all duration-150
                     focus-visible:outline-none focus-visible:ring-1
                     focus-visible:ring-[#0969da] dark:focus-visible:ring-[#388bfd]"
        >
          {copied ? (
            <>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M1.5 7 L5 10.5 L11.5 2.5" stroke="#1a7f37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[#1a7f37]">Kopyalandı</span>
            </>
          ) : (
            <>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <rect x="4.5" y="4.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M8.5 4.5V3A1.5 1.5 0 007 1.5H3A1.5 1.5 0 001.5 3v4A1.5 1.5 0 003 8.5H4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              <span>Kopyala</span>
            </>
          )}
        </button>
      </div>

      {/* ── Code area — tam GitHub gibi ─────────────────── */}
      <pre
        ref={preRef}
        {...props}
        style={cleanStyle}  /* background temizlendi, renk vars korundu */
        className={[
          'overflow-x-auto',
          'px-5 py-4',          /* GitHub: 16px yatay, 16px dikey — sıkışık ama nefes alan */
          'leading-[1.6]',
          'm-0',
          'bg-white dark:bg-[#0d1117]',  /* GitHub'ın tam renkleri */
          className ?? '',
        ].join(' ')}
      >
        {children}
      </pre>
    </div>
  );
}
