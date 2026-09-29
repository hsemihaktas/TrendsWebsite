export default function LoFiAestheticHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden" style={{ background:'linear-gradient(160deg,#1a1528 0%,#2d2040 50%,#1a1230 100%)' }} aria-hidden="true">
        {/* Warm window glow */}
        <div className="absolute rounded-full opacity-25 blur-2xl" style={{ width:80, height:80, background:'#ffb347', top:'15%', right:'25%' }} />

        {/* Study desk scene */}
        <div className="absolute bottom-8 left-0 right-0 h-1 bg-[#4a3a5a]/60" />

        {/* Lamp */}
        <div className="absolute flex flex-col items-center" style={{ bottom:'8%', right:'20%' }}>
          <div className="w-8 h-0" style={{ borderLeft:'6px solid transparent', borderRight:'6px solid transparent', borderTop:'10px solid #c8a84c' }} />
          <div className="w-0.5 h-10 bg-[#8a7030]" />
          <div className="w-6 h-1 bg-[#6a5020] rounded" />
          {/* Glow */}
          <div className="absolute top-3 rounded-full opacity-30 blur-xl" style={{ width:40, height:40, background:'#ffb347' }} />
        </div>

        {/* Cat figure (simple) */}
        <div className="absolute" style={{ bottom:'8%', left:'20%' }}>
          <div className="w-8 h-6 bg-[#9b8a7a] rounded-t-full rounded-b-lg relative">
            <div className="absolute -top-2 left-1 w-2 h-2 bg-[#9b8a7a] rounded-t-full" style={{ clipPath:'polygon(0 100%,50% 0,100% 100%)' }} />
            <div className="absolute -top-2 right-1 w-2 h-2 bg-[#9b8a7a] rounded-t-full" style={{ clipPath:'polygon(0 100%,50% 0,100% 100%)' }} />
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
              <div className="w-1 h-1 rounded-full bg-[#2d1f3d]" />
              <div className="w-1 h-1 rounded-full bg-[#2d1f3d]" />
            </div>
          </div>
        </div>

        {/* Vinyl record */}
        <div className="absolute rounded-full flex items-center justify-center" style={{ width:28, height:28, bottom:'12%', left:'38%', background:'radial-gradient(circle,#4a3a5a,#1a0a2e)' }}>
          <div className="w-4 h-4 rounded-full" style={{ background:'radial-gradient(circle,#2a1a3a,#4a3a5a)' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-[#9b8a7a]/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Text */}
        <div className="absolute top-4 left-4">
          <div className="text-[10px] font-medium" style={{ color:'rgba(255,180,100,0.8)' }}>lo-fi beats</div>
          <div className="text-[8px]" style={{ color:'rgba(200,168,220,0.5)' }}>to study / relax to</div>
        </div>

        {/* Rain effect */}
        {[15,30,45,60,75,85].map((l,i)=>(
          <div key={i} className="absolute w-px opacity-20" style={{ left:`${l}%`, top:'0%', height:`${30+i*5}%`, background:'linear-gradient(180deg,transparent,#7ab8d4,transparent)', transform:'rotate(5deg)' }} />
        ))}
      </div>
    </div>
  );
}
