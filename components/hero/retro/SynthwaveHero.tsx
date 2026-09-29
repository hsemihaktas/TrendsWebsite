export default function SynthwaveHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden bg-[#0d0019]" aria-hidden="true">
        {/* Stars */}
        {[[15,8],[40,12],[65,6],[82,15],[22,20],[58,10],[90,8]].map(([l,t],i)=>(
          <div key={i} className="absolute rounded-full bg-white" style={{ left:`${l}%`,top:`${t}%`,width:1.5+i%2,height:1.5+i%2,opacity:0.7 }} />
        ))}

        {/* Sun orb */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top:'35%',transform:'translateX(-50%)' }}>
          <div className="w-16 h-16 rounded-full" style={{ background:'radial-gradient(circle at 50% 40%,#ffdf00,#ff6600 40%,#ff00ff 80%,transparent)', boxShadow:'0 0 30px #ff00ff,0 0 60px rgba(255,0,255,0.4)' }}>
            {[30,48,66].map(y=>(
              <div key={y} className="absolute left-0 right-0 h-px" style={{ top:`${y}%`,background:'rgba(100,0,50,0.7)' }} />
            ))}
          </div>
        </div>

        {/* Neon horizon */}
        <div className="absolute left-0 right-0" style={{ top:'53%',height:2,background:'linear-gradient(90deg,transparent,#ff00ff,#00ffff,#ff00ff,transparent)',boxShadow:'0 0 8px #ff00ff,0 0 16px rgba(0,255,255,0.5)' }} />

        {/* Neon cyan side lines */}
        <div className="absolute top-12 bottom-0 left-2 w-px" style={{ background:'linear-gradient(180deg,rgba(0,255,255,0.8),rgba(0,255,255,0))',boxShadow:'0 0 4px #00ffff' }} />
        <div className="absolute top-12 bottom-0 right-2 w-px" style={{ background:'linear-gradient(180deg,rgba(0,255,255,0.8),rgba(0,255,255,0))',boxShadow:'0 0 4px #00ffff' }} />

        {/* Grid floor */}
        <div className="absolute left-0 right-0" style={{ top:'53%',bottom:0 }}>
          {[12,24,38,54,72,88].map((b,i)=>(
            <div key={i} className="absolute left-0 right-0 h-px" style={{ bottom:`${b}%`,background:`linear-gradient(90deg,transparent 5%,rgba(255,0,255,${0.9-i*0.12}) 30%,rgba(0,255,255,${0.7-i*0.1}) 70%,transparent 95%)` }} />
          ))}
        </div>

        {/* Title */}
        <div className="absolute top-4 left-0 right-0 text-center">
          <div className="text-[14px] font-black uppercase tracking-[0.3em] font-mono" style={{ color:'#ff00ff',textShadow:'0 0 8px #ff00ff,0 0 16px rgba(255,0,255,0.5)' }}>
            SYNTHWAVE
          </div>
          <div className="text-[9px] font-mono tracking-[0.2em] uppercase mt-0.5" style={{ color:'#00ffff',textShadow:'0 0 6px #00ffff' }}>
            RETRO FUTURE / 1986
          </div>
        </div>
      </div>
    </div>
  );
}
