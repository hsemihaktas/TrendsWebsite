export default function MaterialDesignHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="w-full h-full bg-[#FFFBFE] flex flex-col p-4 gap-2.5" aria-hidden="true">
        {/* App bar */}
        <div className="flex items-center gap-3 px-2 py-1.5">
          <div className="w-4 h-4 rounded-full bg-[#6750A4] flex-shrink-0" />
          <div className="text-[11px] font-semibold" style={{ color:'#1C1B1F' }}>Material You</div>
          <div className="ml-auto flex gap-1.5">
            <div className="w-5 h-5 rounded-full bg-[#E8DEF8]" />
            <div className="w-5 h-5 rounded-full bg-[#E8DEF8]" />
          </div>
        </div>

        {/* Hero card — dp4 */}
        <div className="rounded-3xl p-4" style={{ background:'linear-gradient(135deg,#6750A4,#9C7AC8)', boxShadow:'0 4px 8px rgba(0,0,0,0.18)' }}>
          <div className="text-[8px] text-purple-200 mb-1">Featured</div>
          <div className="text-[13px] font-bold text-white">Expressive Design</div>
          <div className="text-[9px] text-white/70 mt-0.5 mb-3">Material You adapts to you.</div>
          <div className="flex gap-2">
            <div className="px-3 py-1 rounded-full bg-white text-[8px] font-semibold" style={{ color:'#6750A4' }}>Explore</div>
            <div className="px-3 py-1 rounded-full border border-white/40 text-[8px] text-white">Learn</div>
          </div>
        </div>

        {/* Cards row */}
        <div className="flex gap-2 flex-1">
          {[
            { label:'Components', n:'50+', bg:'#FEF7FF', acc:'#6750A4' },
            { label:'Themes', n:'∞', bg:'#F3EDF7', acc:'#7965AF' },
          ].map(c=>(
            <div key={c.label} className="flex-1 rounded-2xl p-3 flex flex-col justify-between" style={{ background:c.bg, boxShadow:'0 2px 4px rgba(0,0,0,0.08)' }}>
              <div className="text-[8px] font-medium" style={{ color:c.acc }}>{c.label}</div>
              <div className="text-[18px] font-bold" style={{ color:c.acc }}>{c.n}</div>
            </div>
          ))}
        </div>

        {/* FAB */}
        <div className="flex justify-end">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg text-white" style={{ background:'#6750A4', boxShadow:'0 6px 12px rgba(103,80,164,0.4)' }}>+</div>
        </div>
      </div>
    </div>
  );
}
