export default function FUIHUDHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full bg-[#020b14] overflow-hidden" aria-hidden="true">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage:'linear-gradient(rgba(0,200,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,255,0.4) 1px,transparent 1px)',
          backgroundSize:'20px 20px',
        }} />

        {/* Horizontal lines */}
        <div className="absolute top-5 left-4 right-4 h-px bg-[#00c8ff]/20" />
        <div className="absolute bottom-5 left-4 right-4 h-px bg-[#00c8ff]/20" />
        <div className="absolute left-6 top-4 bottom-4 w-px bg-[#00c8ff]/10" />
        <div className="absolute right-6 top-4 bottom-4 w-px bg-[#00c8ff]/10" />

        {/* SVG Gauge */}
        <svg className="absolute left-4 top-1/2 -translate-y-1/2" width="72" height="72" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r="28" fill="none" stroke="rgba(0,200,255,0.15)" strokeWidth="4" />
          <circle cx="36" cy="36" r="28" fill="none" stroke="#00c8ff" strokeWidth="4"
            strokeDasharray="175.93" strokeDashoffset="52.78" strokeLinecap="round"
            transform="rotate(-90 36 36)" style={{ filter:'drop-shadow(0 0 6px #00c8ff)' }} />
          <circle cx="36" cy="36" r="18" fill="none" stroke="rgba(0,200,255,0.1)" strokeWidth="1" />
          <text x="36" y="39" textAnchor="middle" fill="#00c8ff" fontSize="11" fontFamily="monospace" fontWeight="bold">74%</text>
        </svg>

        {/* Telemetry right */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-1.5">
          {[['ALT','3240 m'],['VEL','0.82 M'],['HDG','270°'],['PWR','91%']].map(([k,v])=>(
            <div key={k} className="flex gap-2">
              <div className="text-[8px] font-mono text-[#00c8ff]/50 w-8">{k}</div>
              <div className="text-[8px] font-mono text-[#00c8ff]" style={{ textShadow:'0 0 4px #00c8ff' }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Center data */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-7 flex gap-1 font-mono text-[7px] text-[#00c8ff]/30">
          0x4F · 0xB2 · 0x9E · 0x12
        </div>

        {/* Title */}
        <div className="absolute top-7 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.3em] uppercase text-[#00c8ff]" style={{ textShadow:'0 0 6px #00c8ff' }}>
          HUD v2.4
        </div>

        {/* Secondary gauge */}
        <svg className="absolute right-4 bottom-8" width="36" height="36" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="12" fill="none" stroke="rgba(0,255,136,0.2)" strokeWidth="3" />
          <circle cx="18" cy="18" r="12" fill="none" stroke="#00ff88" strokeWidth="3"
            strokeDasharray="75.4" strokeDashoffset="30" strokeLinecap="round"
            transform="rotate(-90 18 18)" style={{ filter:'drop-shadow(0 0 4px #00ff88)' }} />
          <text x="18" y="21" textAnchor="middle" fill="#00ff88" fontSize="6" fontFamily="monospace">60%</text>
        </svg>
      </div>
    </div>
  );
}
