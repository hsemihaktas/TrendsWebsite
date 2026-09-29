export default function ConstructivismHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full bg-[#F5F0E8] overflow-hidden" aria-hidden="true">
        {/* Diagonal red bar */}
        <div className="absolute bg-[#CC1A1A]" style={{ width:'140%', height:'45%', top:'15%', left:'-20%', transform:'rotate(-15deg)', transformOrigin:'center' }} />
        {/* Black bar */}
        <div className="absolute bg-black" style={{ width:'140%', height:'12px', top:'20%', left:'-20%', transform:'rotate(-15deg)', transformOrigin:'center' }} />
        {/* White diagonal */}
        <div className="absolute bg-[#F5F0E8]" style={{ width:'140%', height:'6px', top:'25%', left:'-20%', transform:'rotate(-15deg)', transformOrigin:'center' }} />

        {/* Large text blocks */}
        <div className="absolute top-3 left-3 z-10">
          <div className="text-[36px] font-black text-black leading-none uppercase">CON</div>
          <div className="text-[36px] font-black text-[#CC1A1A] leading-none uppercase">STR</div>
        </div>
        <div className="absolute bottom-3 right-3 z-10 text-right">
          <div className="text-[36px] font-black text-black leading-none uppercase">UCT</div>
          <div className="text-[36px] font-black text-white leading-none uppercase">IVE</div>
        </div>

        {/* Circle */}
        <div className="absolute w-12 h-12 rounded-full border-4 border-black z-20" style={{ top:'35%', right:'15%' }} />
        <div className="absolute top-4 right-4 z-20">
          <div className="text-[8px] uppercase tracking-widest text-black font-bold">1921</div>
        </div>
      </div>
    </div>
  );
}
