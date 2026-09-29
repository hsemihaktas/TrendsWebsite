export default function ClaymorphismHero({ className }: { className?: string }) {
  const clay = (bg: string) => ({
    background: bg,
    boxShadow: `0 16px 40px rgba(0,0,0,0.12),inset 0 -6px 12px rgba(0,0,0,0.08),inset 0 6px 12px rgba(255,255,255,0.6)`,
    borderRadius: '24px',
  });
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="w-full h-full bg-[#f0eaff] flex items-center justify-center p-5" aria-hidden="true">
        <div className="w-full max-w-[220px] flex flex-col gap-3">
          {/* Top row */}
          <div className="flex gap-3">
            <div className="flex-1 p-4" style={clay('#c084fc')}>
              <div className="text-[9px] font-bold text-white/80 mb-1">Trends</div>
              <div className="text-[22px] font-black text-white">33</div>
            </div>
            <div className="flex-1 p-4" style={clay('#f472b6')}>
              <div className="text-[9px] font-bold text-white/80 mb-1">Views</div>
              <div className="text-[22px] font-black text-white">8k</div>
            </div>
          </div>

          {/* Main card */}
          <div className="p-4" style={clay('#818cf8')}>
            <div className="text-[10px] font-bold text-white/80 mb-2">Featured Trend</div>
            <div className="text-[14px] font-black text-white mb-3">Claymorphism</div>
            <div className="h-2 w-full rounded-full bg-white/25 mb-1.5">
              <div className="h-full w-3/4 rounded-full bg-white/70" />
            </div>
            <div className="h-2 w-full rounded-full bg-white/25">
              <div className="h-full w-1/2 rounded-full bg-white/50" />
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex gap-3">
            <div className="flex-1 h-10 flex items-center justify-center" style={{ ...clay('#34d399') }}>
              <span className="text-[10px] font-black text-white">Explore →</span>
            </div>
            <div className="flex-1 h-10 flex items-center justify-center" style={{ ...clay('#fb923c') }}>
              <span className="text-[10px] font-black text-white">Save ♥</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
