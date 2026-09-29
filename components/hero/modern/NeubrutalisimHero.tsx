export default function NeubrutalisimHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="w-full h-full bg-[#FFE500] flex flex-col justify-between p-5 overflow-hidden" aria-hidden="true">
        {/* Simüle nav */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black" />
            <div className="h-2 w-20 bg-black" />
          </div>
          <div className="flex gap-2">
            {['Projects','Work','About'].map(l => (
              <div key={l} className="border-2 border-black px-2 py-0.5 text-[9px] font-black uppercase">{l}</div>
            ))}
          </div>
        </div>

        {/* Hero headline */}
        <div>
          <div className="text-4xl font-black text-black uppercase leading-none mb-3" style={{letterSpacing:'-1px'}}>
            DESIGN<br/>MATTERS
          </div>
          <div className="flex gap-2 flex-wrap">
            <button className="border-2 border-black bg-black text-[#FFE500] px-4 py-1.5 text-[10px] font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
              Get Started →
            </button>
            <button className="border-2 border-black bg-white text-black px-4 py-1.5 text-[10px] font-black uppercase">
              View Work
            </button>
          </div>
        </div>

        {/* Cards row */}
        <div className="flex gap-3">
          {[
            { bg: '#FF3B3B', label: 'UI' },
            { bg: '#3B7FFF', label: 'UX' },
            { bg: 'white',   label: '33 Trends' },
          ].map(c => (
            <div key={c.label}
              className="flex-1 border-2 border-black px-3 py-2"
              style={{ background: c.bg, boxShadow:'3px 3px 0 0 #000' }}
            >
              <div className="text-[8px] font-black uppercase text-black opacity-60">Category</div>
              <div className="text-[12px] font-black text-black">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
