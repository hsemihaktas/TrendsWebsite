export default function ArtDecoHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center" style={{ background:'#1a1410' }} aria-hidden="true">
        {/* Stepped arch frame */}
        <div className="absolute inset-4 border border-[#C9A84C]/40" />
        <div className="absolute inset-6 border border-[#C9A84C]/25" />

        {/* Vertical golden lines */}
        {[-40,-20,0,20,40].map((x,i)=>(
          <div key={i} className="absolute top-6 bottom-6 w-px" style={{ left:`calc(50% + ${x}px)`, background: i===2?'rgba(201,168,76,0.6)':'rgba(201,168,76,0.2)' }} />
        ))}

        {/* Art Deco sunburst top */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2">
          <svg width="80" height="40" viewBox="0 0 80 40">
            {Array.from({length:9},(_, i)=>{
              const angle = -90 + (i-4)*10;
              const rad = angle * Math.PI/180;
              return <line key={i} x1="40" y1="40" x2={40+35*Math.cos(rad)} y2={40+35*Math.sin(rad)} stroke="rgba(201,168,76,0.5)" strokeWidth="1" />;
            })}
          </svg>
        </div>

        {/* Center text */}
        <div className="relative z-10 text-center">
          <div className="text-[9px] uppercase tracking-[0.5em] mb-2" style={{ color:'rgba(201,168,76,0.7)' }}>Art Deco</div>
          <div className="text-[28px] font-black uppercase tracking-[0.15em]" style={{ color:'#C9A84C', fontFamily:'Georgia, serif', textShadow:'0 0 20px rgba(201,168,76,0.3)' }}>
            LUXURY
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="h-px flex-1" style={{ background:'rgba(201,168,76,0.5)' }} />
            <div className="text-[8px] uppercase tracking-[0.3em]" style={{ color:'rgba(201,168,76,0.6)' }}>◆</div>
            <div className="h-px flex-1" style={{ background:'rgba(201,168,76,0.5)' }} />
          </div>
          <div className="text-[8px] uppercase tracking-[0.4em] mt-1" style={{ color:'rgba(201,168,76,0.5)' }}>1920s — Geometric</div>
        </div>
      </div>
    </div>
  );
}
