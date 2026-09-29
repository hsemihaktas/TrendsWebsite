export default function CollageDesignHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden bg-[#f5f2ee]" aria-hidden="true">
        {/* Fragments */}
        <div className="absolute" style={{ width:'58%',height:'60%',top:'-10%',left:'-8%',background:'#2dd4bf',transform:'rotate(3deg)',opacity:0.9,zIndex:1 }} />
        <div className="absolute" style={{ width:'48%',height:'52%',top:'8%',right:'-6%',background:'#ef4444',transform:'rotate(-5deg) skewX(2deg)',opacity:0.85,zIndex:2 }} />
        <div className="absolute" style={{ width:'42%',height:'44%',bottom:'-7%',left:'4%',background:'#fbbf24',transform:'rotate(-3deg) skewY(1deg)',opacity:0.88,zIndex:3 }} />
        <div className="absolute" style={{ width:'36%',height:'40%',bottom:'4%',right:'4%',background:'#1e293b',transform:'rotate(4deg)',opacity:0.92,zIndex:2 }} />
        <div className="absolute" style={{ width:'32%',height:'36%',top:'28%',left:'34%',background:'rgba(255,255,255,0.78)',transform:'rotate(-2deg)',zIndex:4,borderLeft:'3px solid rgba(0,0,0,0.15)',borderTop:'2px solid rgba(0,0,0,0.1)' }} />
        <div className="absolute" style={{ width:'24%',height:'30%',top:'16%',left:'26%',background:'#7c3aed',transform:'rotate(6deg)',opacity:0.8,zIndex:5 }} />
        <div className="absolute" style={{ width:'62%',height:'8px',top:'46%',left:'8%',background:'#f472b6',transform:'rotate(-1.5deg)',zIndex:6 }} />

        {/* Collage label */}
        <div className="absolute z-10" style={{ top:'5%',right:'5%' }}>
          <div className="text-[8px] font-black uppercase tracking-wider text-white bg-black px-2 py-1" style={{ transform:'rotate(3deg)' }}>
            COLLAGE
          </div>
        </div>
      </div>
    </div>
  );
}
