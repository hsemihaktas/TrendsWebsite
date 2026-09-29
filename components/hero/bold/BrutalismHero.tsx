export default function BrutalismHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full bg-white overflow-hidden" aria-hidden="true">
        {/* Top red bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-red-600" />

        {/* Big misaligned headline */}
        <div className="absolute top-4 left-3 z-10">
          <div className="text-[38px] font-black text-black leading-none uppercase font-serif">BRUTAL</div>
        </div>

        {/* Thick rule */}
        <div className="absolute top-14 left-0 right-1/4 h-1 bg-black" />

        {/* Right side text */}
        <div className="absolute top-6 right-3 text-right">
          <div className="text-[20px] font-black text-black font-serif uppercase leading-none">RAW</div>
          <div className="text-[14px] font-serif text-black uppercase">HONEST</div>
          <div className="text-[14px] font-serif text-black uppercase">DIRECT</div>
        </div>

        {/* URL-style text */}
        <div className="absolute top-1/2 left-3 font-mono text-[9px] text-gray-400 uppercase tracking-tight">
          HTTP://DESIGN.TRENDS/BRUTALISM
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div>
            <div className="font-mono text-[8px] text-gray-500 uppercase mb-0.5">No decoration. No compromise.</div>
            <div className="font-mono text-[8px] text-gray-400">Est. 1950s / Revived 2015</div>
          </div>
          <div className="font-black text-red-600 font-serif text-[14px] uppercase">NOW</div>
        </div>

        {/* Red block bottom right */}
        <div className="absolute bottom-0 right-0 w-20 h-12 bg-red-600" />

        {/* Bottom rule */}
        <div className="absolute bottom-12 left-0 right-0 h-px bg-black" />
      </div>
    </div>
  );
}
