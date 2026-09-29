export default function DarkModeHero({ className }: { className?: string }) {
  const bars = [40, 65, 50, 80, 55, 90, 70];
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="w-full h-full bg-[#121212] flex flex-col p-3 gap-2" aria-hidden="true">
        {/* Top stats */}
        <div className="flex gap-2">
          {[{l:'Sessions',v:'1,284'},{l:'Users',v:'348'},{l:'Revenue',v:'$9.2k'}].map(s=>(
            <div key={s.l} className="flex-1 bg-[#1e1e1e] rounded-lg px-2.5 py-2 border border-[#2a2a2a]">
              <div className="text-[7px] text-white/30 uppercase tracking-wide mb-0.5">{s.l}</div>
              <div className="text-[12px] font-semibold text-white/90">{s.v}</div>
            </div>
          ))}
        </div>

        {/* Chart card */}
        <div className="flex-1 bg-[#1e1e1e] rounded-lg p-3 border border-[#2a2a2a]">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[9px] font-medium text-white/80">Analytics</div>
            <div className="text-[8px] text-white/30">Last 7 days</div>
          </div>
          <div className="h-px bg-[#2a2a2a] mb-2" />
          <div className="flex items-end gap-1 h-12 mt-1">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-sm" style={{ height:`${h}%`, background: i===5?'rgba(99,102,241,0.8)':'rgba(99,102,241,0.25)' }} />
            ))}
          </div>
          <div className="flex gap-1 mt-1">
            {['M','T','W','T','F','S','S'].map((d,i)=>(
              <div key={i} className="flex-1 text-center text-[7px] text-white/20">{d}</div>
            ))}
          </div>
        </div>

        {/* Bottom list */}
        <div className="bg-[#1e1e1e] rounded-lg px-2.5 py-2 border border-[#2a2a2a] flex items-center justify-between">
          <div>
            <div className="text-[9px] text-white/80 font-medium">Dark Mode UI</div>
            <div className="text-[8px] text-white/30">Elevation surfaces</div>
          </div>
          <div className="text-[8px] text-white/20 font-mono">dp0→dp16</div>
        </div>
      </div>
    </div>
  );
}
