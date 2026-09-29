export default function VaporwaveHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden" aria-hidden="true"
           style={{ background:'linear-gradient(180deg,#1a0030 0%,#4a1060 30%,#ff71ce 70%,#b967ff 100%)' }}>
        {/* Stars */}
        {[[8,8],[25,12],[60,6],[82,10],[15,22],[72,18],[45,4]].map(([l,t],i)=>(
          <div key={i} className="absolute rounded-full bg-white" style={{ left:`${l}%`,top:`${t}%`,width:2+i%2,height:2+i%2,opacity:0.8 }} />
        ))}

        {/* Sun */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top:'32%' }}>
          <div className="w-20 h-10 rounded-t-full relative overflow-hidden" style={{ background:'linear-gradient(180deg,#ffdf00,#ff6600 40%,#ff0080)', boxShadow:'0 0 30px #ff6600,0 0 60px rgba(255,0,128,0.3)' }}>
            {[15,30,45,65,80].map(y=>(
              <div key={y} className="absolute left-0 right-0 h-px" style={{ top:`${y}%`,background:'rgba(100,0,40,0.5)' }} />
            ))}
          </div>
        </div>

        {/* Horizon line */}
        <div className="absolute left-0 right-0" style={{ top:'52%',height:2,background:'linear-gradient(90deg,transparent,#ff71ce,#b967ff,#ff71ce,transparent)',boxShadow:'0 0 10px #ff71ce,0 0 20px #b967ff' }} />

        {/* Perspective grid */}
        <div className="absolute left-0 right-0" style={{ top:'52%',bottom:0 }}>
          {[10,22,34,46,58,70,82].map((b,i)=>(
            <div key={i} className="absolute left-0 right-0 h-px" style={{ bottom:`${b}%`,background:`linear-gradient(90deg,transparent 5%,rgba(255,113,206,${0.8-i*0.08}) 30%,rgba(185,103,255,${0.8-i*0.08}) 70%,transparent 95%)` }} />
          ))}
        </div>

        {/* Title */}
        <div className="absolute top-4 left-0 right-0 text-center z-10">
          <div className="text-[16px] font-black italic uppercase tracking-[0.2em] font-mono" style={{ color:'#ff71ce',textShadow:'0 0 10px #ff71ce,0 0 20px #b967ff' }}>
            ＶＡＰＯＲ
          </div>
          <div className="text-[14px] font-black italic uppercase tracking-[0.15em] font-mono mt-0.5" style={{ color:'#05ffa1',textShadow:'0 0 8px #05ffa1' }}>
            ＷＡＶＥ
          </div>
        </div>
      </div>
    </div>
  );
}
