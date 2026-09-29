export default function CyberpunkHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full bg-[#0a0a0f] overflow-hidden flex items-center justify-center" aria-hidden="true">
        {/* Scanlines */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage:'repeating-linear-gradient(0deg,rgba(0,0,0,0.15) 0px,rgba(0,0,0,0.15) 1px,transparent 1px,transparent 2px)',
        }} />

        {/* HUD Corners */}
        <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#00ffff]" />
        <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#00ffff]" />
        <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#00ffff]" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#00ffff]" />

        {/* HUD lines */}
        <div className="absolute top-6 left-0 right-0 h-px bg-[#00ffff]/20" />
        <div className="absolute bottom-6 left-0 right-0 h-px bg-[#00ffff]/20" />

        <div className="relative z-10 flex flex-col items-center gap-2">
          {/* Main title */}
          <div className="text-[9px] font-mono tracking-[0.4em] uppercase" style={{ color:'#00ffff', textShadow:'0 0 10px #00ffff' }}>
            SYSTEM ONLINE
          </div>
          <div className="text-[28px] font-black font-mono uppercase tracking-widest" style={{ color:'#00ffff', textShadow:'0 0 20px #00ffff,0 0 40px rgba(0,255,255,0.4)' }}>
            CYBER
          </div>
          <div className="w-32 h-px my-1" style={{ background:'linear-gradient(90deg,transparent,#ff00ff,transparent)', boxShadow:'0 0 8px #ff00ff' }} />
          <div className="text-[28px] font-black font-mono uppercase tracking-widest" style={{ color:'#ff00ff', textShadow:'0 0 20px #ff00ff,0 0 40px rgba(255,0,255,0.4)' }}>
            PUNK
          </div>

          {/* Status row */}
          <div className="flex gap-3 mt-1">
            {[['NET','#00ffff'],['SYS','#ccff00'],['PWR','#ff00ff']].map(([l,c])=>(
              <div key={l} className="font-mono text-[8px]" style={{ color:c, textShadow:`0 0 6px ${c}` }}>
                {l}: <span>OK</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-1 border border-[#00ffff]/60 px-4 py-1 font-mono text-[9px] tracking-widest" style={{ color:'#00ffff', boxShadow:'0 0 8px rgba(0,255,255,0.3),inset 0 0 8px rgba(0,255,255,0.05)' }}>
            JACK IN ▶
          </div>
        </div>
      </div>
    </div>
  );
}
