export default function QuietLuxuryHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="w-full h-full bg-[#F5F0E8] flex flex-col items-center justify-center px-8 py-7" aria-hidden="true"
           style={{ fontFamily:"Georgia,'Times New Roman',serif" }}>
        {/* Label */}
        <div className="text-[8px] uppercase tracking-[0.35em] text-[#B5A99A] mb-6">
          Collection · SS 2024
        </div>

        {/* Thin top rule */}
        <div className="w-16 h-px bg-[#C4B89A] mb-6" />

        {/* Hero text */}
        <div className="text-center mb-6">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[#8B8472] mb-1">
            Atelier
          </div>
          <div className="text-[26px] font-light text-[#2C2520] tracking-tight leading-tight">
            Quiet<br/>Luxury
          </div>
        </div>

        {/* Product card */}
        <div className="w-full flex items-center gap-4 py-3 border-t border-b border-[#D4C5A9]">
          <div className="w-12 h-12 bg-[#E8DFD0] rounded flex-shrink-0" />
          <div>
            <div className="text-[9px] uppercase tracking-widest text-[#8B8472] mb-0.5">Cashmere Coat</div>
            <div className="text-[11px] font-light text-[#2C2520]">The Essentials</div>
          </div>
          <div className="ml-auto text-[10px] text-[#5C5347]">₺8.200</div>
        </div>

        {/* Bottom dots */}
        <div className="flex gap-1.5 mt-5">
          {[1,0,0].map((a,i)=>(<div key={i} className={`w-1 h-1 rounded-full ${a?'bg-[#5C5347]':'bg-[#C4B89A]'}`} />))}
        </div>
      </div>
    </div>
  );
}
