'use client';

import { useRef, useState } from 'react';

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  'data-language'?: string;
}

/* ── Shared copy button ─────────────────────────────────────── */
function CopyButton({
  copied,
  handleCopy,
  variant = 'default',
}: {
  copied: boolean;
  handleCopy: () => void;
  variant?: 'default' | 'prompt';
}) {
  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? 'Kopyalandı' : 'Kopyala'}
      className={[
        'flex items-center gap-1.5 h-7 px-2.5 rounded text-[11px] font-medium transition-all duration-150',
        'focus-visible:outline-none focus-visible:ring-1',
        variant === 'prompt'
          ? 'text-violet-500 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-violet-900/40 hover:text-violet-700 dark:hover:text-violet-300 focus-visible:ring-violet-500'
          : 'text-[#57606a] dark:text-[#8b949e] hover:bg-[#e9ecef] dark:hover:bg-[#21262d] hover:text-[#24292f] dark:hover:text-[#c9d1d9] focus-visible:ring-[#0969da] dark:focus-visible:ring-[#388bfd]',
      ].join(' ')}
    >
      {copied ? (
        <>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M1.5 7 L5 10.5 L11.5 2.5" stroke="#1a7f37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ color: '#1a7f37' }}>Kopyalandı</span>
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
  );
}

/* ── AI Prompt block ────────────────────────────────────────── */
function PromptBlock({
  children,
  preRef,
  copied,
  triggerCopy,
}: {
  children: React.ReactNode;
  preRef: React.RefObject<HTMLPreElement>;
  copied: boolean;
  triggerCopy: () => void;
}) {
  return (
    <div className="my-6 rounded-xl overflow-hidden border border-violet-200 dark:border-violet-900/60">

      {/* Header */}
      <div className="flex items-center justify-between px-4 h-10
                      bg-violet-50 dark:bg-violet-950/40
                      border-b border-violet-200 dark:border-violet-900/60">
        <div className="flex items-center gap-2">
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true"
               className="text-violet-500 dark:text-violet-400 flex-shrink-0">
            <path d="M7 1 L7.8 5.2 L12 7 L7.8 8.8 L7 13 L6.2 8.8 L2 7 L6.2 5.2 Z" fill="currentColor" />
          </svg>
          <span className="text-[11px] font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider select-none">
            AI Prompt
          </span>
        </div>
        <CopyButton copied={copied} handleCopy={triggerCopy} variant="prompt" />
      </div>

      {/* Prompt text */}
      <pre
        ref={preRef}
        className="m-0 px-5 py-4
                   text-[13.5px] leading-[1.8]
                   text-[#3D3C38] dark:text-[#C9D1D9]
                   bg-violet-50/40 dark:bg-violet-950/20
                   whitespace-pre-wrap break-words
                   font-sans"
      >
        {children}
      </pre>

      {/* Subtle one-line note */}
      <div className="px-4 py-2.5
                      bg-violet-50/60 dark:bg-violet-950/30
                      border-t border-violet-100 dark:border-violet-900/40">
        <p className="text-[11.5px] text-violet-400/80 dark:text-violet-500/70 leading-relaxed">
          ✦ Renk kodları, boyutlar ve bileşen isimleri örnektir — kendi projenize göre uyarlayın.
        </p>
      </div>

    </div>
  );
}

/* ── Main CodeBlock export ─────────────────────────────────────── */
export function CodeBlock({
  children,
  'data-language': lang,
  style,
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

  if (lang === 'text') {
    return (
      <PromptBlock preRef={preRef} copied={copied} triggerCopy={copy}>
        {children}
      </PromptBlock>
    );
  }

  const cleanStyle = style
    ? (Object.fromEntries(
        Object.entries(style).filter(([k]) => k !== 'backgroundColor' && k !== 'background')
      ) as React.CSSProperties)
    : undefined;

  return (
    <div className="relative group my-5 rounded-lg overflow-hidden border border-[#d0d7de] dark:border-[#30363d] text-[13px]">
      <div className="flex items-center justify-between px-4 h-10
                      bg-[#f6f8fa] dark:bg-[#161b22]
                      border-b border-[#d0d7de] dark:border-[#30363d]">
        <span className="font-mono text-[11px] font-medium text-[#57606a] dark:text-[#8b949e] select-none">
          {lang ?? 'code'}
        </span>
        <CopyButton copied={copied} handleCopy={copy} />
      </div>
      <pre
        ref={preRef}
        {...props}
        style={cleanStyle}
        className={['overflow-x-auto', 'px-5 py-4', 'leading-[1.6]', 'm-0', 'bg-white dark:bg-[#0d1117]', className ?? ''].join(' ')}
      >
        {children}
      </pre>
    </div>
  );
}
