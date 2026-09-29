export interface HeroInnerProps {
  className?: string;
}

export default function FUIHUDHero({ className }: HeroInnerProps) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* Dark blue-black background */}
      <div
        className="relative w-full h-full bg-[#050810] flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        {/* Thin horizontal line diagrams */}
        <div className="absolute top-6 left-4 right-4 h-px bg-[#00ffff]/20" />
        <div className="absolute top-8 left-4 w-16 h-px bg-[#00ffff]/30" />
        <div className="absolute bottom-6 left-4 right-4 h-px bg-[#00ffff]/20" />

        {/* Thin vertical lines */}
        <div className="absolute left-8 top-4 bottom-4 w-px bg-[#00ffff]/15" />
        <div className="absolute right-8 top-4 bottom-4 w-px bg-[#00ffff]/15" />

        {/* Left panel — telemetry */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-1">
          <span className="font-mono text-[8px] text-[#00ff88] tracking-wider">ALT 3240</span>
          <span className="font-mono text-[8px] text-[#00ffff] tracking-wider">VEL 0.82</span>
          <span className="font-mono text-[8px] text-[#00ff88] tracking-wider">HDG 270°</span>
          <span className="font-mono text-[8px] text-[#00ffff] tracking-wider">PWR 91%</span>
        </div>

        {/* Centre — circular gauge */}
        <div className="relative flex items-center justify-center">
          {/* Outer ring */}
          <div className="w-20 h-20 rounded-full border-2 border-[#00ffff]/30 flex items-center justify-center">
            {/* Inner progress arc — simulated with border trick */}
            <div
              className="absolute w-20 h-20 rounded-full border-2 border-transparent"
              style={{
                borderTopColor: '#00ffff',
                borderRightColor: '#00ffff',
                transform: 'rotate(-30deg)',
                boxShadow: '0 0 8px #00ffff66',
              }}
            />
            {/* Mid ring */}
            <div className="w-12 h-12 rounded-full border border-[#00ffff]/20 flex items-center justify-center">
              <span
                className="font-mono text-[10px] font-bold text-[#00ffff]"
                style={{ textShadow: '0 0 6px #00ffff' }}
              >
                74%
              </span>
            </div>
          </div>
        </div>

        {/* Right panel — semi-transparent data block */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#00ffff]/10 border border-[#00ffff]/30 px-2 py-2 flex flex-col gap-1">
          <span className="font-mono text-[8px] text-[#00ffff]/80 tracking-wider">SIG ████░</span>
          <span className="font-mono text-[8px] text-[#00ff88]/80 tracking-wider">TMP 37.2</span>
          <span className="font-mono text-[8px] text-[#00ffff]/80 tracking-wider">LAT 48.8°</span>
        </div>

        {/* Bottom data stream */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[8px] text-[#00ffff]/40 tracking-[0.15em] whitespace-nowrap">
          0x4F3A · 0xB2C1 · 0x9E7D · 0x12FA
        </div>

        {/* Top label */}
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 font-mono text-[9px] text-[#00ffff] tracking-[0.3em] uppercase"
          style={{ textShadow: '0 0 6px #00ffff' }}
        >
          HUD v2.4
        </div>
      </div>
    </div>
  );
}
