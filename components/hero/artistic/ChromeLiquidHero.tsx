export default function ChromeLiquidHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden" aria-hidden="true"
           style={{ background:'linear-gradient(135deg,#1a1a1a 0%,#f5f5f5 25%,#888888 50%,#f8f8f8 70%,#1a1a1a 100%)' }}>
        {/* Specular highlight */}
        <div className="absolute" style={{ top:'12%',left:'-12%',width:'124%',height:'16%',background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.9) 40%,rgba(255,255,255,0.95) 50%,rgba(255,255,255,0.9) 60%,transparent)',transform:'rotate(-3deg)',filter:'blur(4px)' }} />

        {/* SVG flowing curves */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 130" preserveAspectRatio="none">
          <path d="M0,55 C40,38 80,72 120,50 C160,28 180,65 200,48" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none" />
          <path d="M0,75 C50,60 90,90 140,68 C170,54 190,78 200,66" stroke="rgba(200,200,200,0.45)" strokeWidth="1" fill="none" />
          <path d="M0,95 C35,82 75,108 120,88 C155,72 185,100 200,85" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" fill="none" />
          <path d="M0,38 C30,28 70,48 110,32 C150,18 175,40 200,28" stroke="rgba(255,255,255,0.35)" strokeWidth="0.7" fill="none" />
        </svg>

        {/* Dark gradient bottom */}
        <div className="absolute inset-0" style={{ background:'linear-gradient(180deg,transparent 40%,rgba(10,10,10,0.5) 100%)' }} />

        {/* Liquid blob */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-28 h-12" style={{ background:'linear-gradient(135deg,#2c2c2c,#e8e8e8 30%,#5a5a5a 55%,#f5f5f5 75%,#1a1a1a)',borderRadius:'40% 60% 55% 45% / 50% 35% 65% 50%',boxShadow:'0 4px 16px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.4)' }} />

        {/* Title */}
        <div className="absolute top-4 left-0 right-0 text-center">
          <div className="text-[11px] font-black uppercase tracking-[0.3em]" style={{ color:'transparent', WebkitTextStroke:'1px rgba(255,255,255,0.6)', letterSpacing:'0.3em' }}>
            LIQUID METAL
          </div>
        </div>
      </div>
    </div>
  );
}
