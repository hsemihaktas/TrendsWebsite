export interface HeroInnerProps {
  className?: string;
}

export default function CyberpunkHero({ className }: HeroInnerProps) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* Near-black background */}
      <div
        className="relative w-full h-full bg-[#0a0a0f] flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        {/* Scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
          }}
        />

        {/* HUD corner — top-left */}
        <div className="absolute top-2 left-2 w-5 h-5 border-l-2 border-t-2 border-[#00ffff]" />
        {/* HUD corner — top-right */}
        <div className="absolute top-2 right-2 w-5 h-5 border-r-2 border-t-2 border-[#00ffff]" />
        {/* HUD corner — bottom-left */}
        <div className="absolute bottom-2 left-2 w-5 h-5 border-l-2 border-b-2 border-[#00ffff]" />
        {/* HUD corner — bottom-right */}
        <div className="absolute bottom-2 right-2 w-5 h-5 border-r-2 border-b-2 border-[#00ffff]" />

        {/* Main content */}
        <div className="relative z-20 flex flex-col items-center gap-3 px-4">
          {/* Neon title */}
          <div
            className="font-mono font-bold text-[#00ffff] text-xl tracking-[0.3em] uppercase"
            style={{ textShadow: '0 0 8px #00ffff, 0 0 20px #00ffff88' }}
          >
            CYBERPUNK
          </div>

          {/* Neon accent bar */}
          <div
            className="w-24 h-[2px] bg-[#ff00ff]"
            style={{ boxShadow: '0 0 6px #ff00ff' }}
          />

          {/* HUD data row */}
          <div className="flex gap-4 font-mono text-[10px] tracking-widest">
            <span className="text-[#ccff00]">SYS: 98%</span>
            <span className="text-[#00ffff]">NET: ONLINE</span>
            <span className="text-[#ff00ff]">PWR: MAX</span>
          </div>

          {/* Neon button mock */}
          <div
            className="mt-1 border border-[#00ffff] px-5 py-1 font-mono text-xs text-[#00ffff] tracking-widest uppercase"
            style={{ boxShadow: '0 0 8px #00ffff44, inset 0 0 8px #00ffff22' }}
          >
            JACK IN
          </div>
        </div>

        {/* Bottom status bar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[9px] text-[#00ffff]/50 tracking-[0.2em] uppercase z-20">
          NET_ID:// 0xFF·2077·NEON
        </div>
      </div>
    </div>
  );
}
