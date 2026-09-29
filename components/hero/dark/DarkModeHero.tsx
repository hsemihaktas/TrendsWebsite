export interface HeroInnerProps {
  className?: string;
}

export default function DarkModeHero({ className }: HeroInnerProps) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* dp0 base surface */}
      <div
        className="w-full h-full bg-[#121212] flex flex-col gap-2 p-4 overflow-hidden"
        aria-hidden="true"
      >
        {/* Top row — stats cards at dp8 */}
        <div className="flex gap-2">
          <div className="flex-1 bg-[#2d2d2d] rounded px-3 py-2 border border-[#333]">
            <div className="text-[9px] text-white/38 uppercase tracking-wider mb-1">Sessions</div>
            <div className="text-sm font-semibold text-white/90">1,284</div>
          </div>
          <div className="flex-1 bg-[#2d2d2d] rounded px-3 py-2 border border-[#333]">
            <div className="text-[9px] text-white/38 uppercase tracking-wider mb-1">Users</div>
            <div className="text-sm font-semibold text-white/90">348</div>
          </div>
          <div className="flex-1 bg-[#2d2d2d] rounded px-3 py-2 border border-[#333]">
            <div className="text-[9px] text-white/38 uppercase tracking-wider mb-1">Revenue</div>
            <div className="text-sm font-semibold text-white/90">$9.2k</div>
          </div>
        </div>

        {/* Middle — main card at dp1 with inner dp16 element */}
        <div className="flex-1 bg-[#1e1e1e] rounded border border-[#333] px-3 py-2 flex flex-col gap-2">
          {/* Card header */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium text-white/90">Analytics</span>
            <span className="text-[9px] text-white/38">Last 7 days</span>
          </div>

          {/* Divider */}
          <div className="border-t border-[#333]" />

          {/* Simulated bar chart — dp16 bars */}
          <div className="flex items-end gap-1 h-10">
            {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-[#383838] rounded-sm"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          {/* X-axis labels */}
          <div className="flex gap-1">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
              <div key={i} className="flex-1 text-center text-[8px] text-white/38">
                {d}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row — list items at dp1 */}
        <div className="bg-[#1e1e1e] rounded border border-[#333] px-3 py-1.5 flex items-center justify-between">
          <div>
            <div className="text-[10px] text-white/90">Dark Mode UI</div>
            <div className="text-[8px] text-white/60">Elevation surfaces</div>
          </div>
          <div className="text-[9px] text-white/38">dp0 → dp16</div>
        </div>
      </div>
    </div>
  );
}
