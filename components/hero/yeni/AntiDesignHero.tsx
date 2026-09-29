export default function AntiDesignHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full bg-white overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-2 bg-red-600" />
        <div className="absolute top-3 right-3 text-[9px] font-mono text-gray-400 text-right">
          HTTP://ANTI.DESIGN/v2.0<br />BREAKING ALL RULES
        </div>
        <div className="absolute top-6 left-2 z-10">
          <div className="text-[44px] font-black text-black leading-none uppercase font-serif">ANTI</div>
        </div>
        <div className="absolute top-5 right-2 text-right z-10">
          <div className="text-[20px] font-black text-black font-serif uppercase">DESIGN</div>
          <div className="text-[14px] font-serif text-red-600 uppercase">RULES</div>
          <div className="text-[11px] font-mono text-gray-500">— broken</div>
        </div>
        <div className="absolute top-[72px] left-0 w-2/3 h-[2px] bg-black" />
        <div className="absolute top-1/2 left-3 font-mono text-[8px] text-gray-400 uppercase tracking-tight">
          GRID: BROKEN / ALIGN: CHAOS / FEEL: RAW
        </div>
        <div className="absolute bottom-12 left-2 right-2">
          <div className="font-mono text-[7px] text-gray-500 uppercase mb-0.5">The user doesn&apos;t need hand-holding.</div>
          <div className="font-mono text-[7px] text-gray-400 uppercase">Raw. Honest. Unpolished.</div>
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-10 bg-red-600" />
        <div className="absolute bottom-10 left-0 right-0 h-px bg-black" />
        <div className="absolute bottom-3 left-3 font-serif font-black text-[13px] text-red-600 uppercase">NOW</div>
      </div>
    </div>
  );
}
