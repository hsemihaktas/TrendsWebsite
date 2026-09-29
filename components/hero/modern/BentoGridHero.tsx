export default function BentoGridHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="w-full h-full bg-[#F5F5F7] p-3" aria-hidden="true">
        <div className="w-full h-full grid gap-2.5" style={{ gridTemplateColumns:'repeat(3,1fr)', gridTemplateRows:'repeat(3,1fr)' }}>
          {/* 2×2 hero tile */}
          <div className="rounded-2xl bg-[#1C1C1E] p-4 flex flex-col justify-end" style={{ gridColumn:'span 2', gridRow:'span 2' }}>
            <div className="text-[8px] text-white/40 uppercase tracking-widest mb-1">Featured</div>
            <div className="text-[16px] font-bold text-white leading-tight">Design<br/>Trends</div>
            <div className="mt-2 w-12 h-0.5 bg-white/20" />
          </div>

          {/* 1×1 purple */}
          <div className="rounded-2xl flex flex-col items-center justify-center gap-1" style={{ background:'linear-gradient(135deg,#7c3aed,#a855f7)' }}>
            <div className="text-[16px]">🎨</div>
            <div className="text-[8px] text-white font-medium">Style</div>
          </div>

          {/* 1×1 coral */}
          <div className="rounded-2xl flex flex-col items-center justify-center gap-1" style={{ background:'linear-gradient(135deg,#f97316,#fb923c)' }}>
            <div className="text-[18px] font-black text-white">33</div>
            <div className="text-[7px] text-white/80">Trends</div>
          </div>

          {/* 2×1 teal */}
          <div className="rounded-2xl flex items-center gap-3 px-4" style={{ gridColumn:'span 2', background:'linear-gradient(135deg,#0891b2,#22d3ee)' }}>
            <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center text-[12px]">→</div>
            <div>
              <div className="text-[9px] text-white/70">New</div>
              <div className="text-[11px] font-semibold text-white">Explore All</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
