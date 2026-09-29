export default function SolarpunkHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden" style={{ background:'linear-gradient(180deg,#87ceeb 0%,#f0f9e8 60%,#d4edda 100%)' }} aria-hidden="true">
        {/* Sun */}
        <div className="absolute rounded-full" style={{ width:48, height:48, top:'8%', right:'15%', background:'radial-gradient(circle,#ffd700,#ff8c00)', boxShadow:'0 0 20px rgba(255,215,0,0.5)' }}>
          {[0,45,90,135,180,225,270,315].map((a,i)=>(
            <div key={i} className="absolute w-px h-3 bg-[#ffd700]" style={{ transformOrigin:'0 0', left:'50%', top:'50%', transform:`rotate(${a}deg) translate(0,-130%)` }} />
          ))}
        </div>

        {/* Trees */}
        {[{l:'8%',h:60},{l:'18%',h:72},{l:'72%',h:55},{l:'82%',h:68}].map((t,i)=>(
          <div key={i} className="absolute flex flex-col items-center" style={{ left:t.l, bottom:'15%' }}>
            <div className="rounded-full" style={{ width:20, height:t.h*0.7, background:'#2d6a2d', borderRadius:'50% 50% 40% 40%' }} />
            <div className="w-1.5 h-4 bg-[#8B4513]" />
          </div>
        ))}

        {/* Solar panels on building */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-28 h-16 bg-[#d4f0dc] border border-[#88c988] rounded">
          <div className="grid grid-cols-4 gap-0.5 p-1 h-6">
            {Array.from({length:8}).map((_,i)=>(
              <div key={i} className="bg-[#1a3a6e] rounded-sm" />
            ))}
          </div>
          <div className="px-2 pt-1 space-y-1">
            <div className="h-1 bg-[#88c988] rounded" />
            <div className="h-1 w-3/4 bg-[#88c988]/60 rounded" />
          </div>
        </div>

        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#4a7c4e] rounded-t-[50%]" />

        <div className="absolute bottom-2 left-0 right-0 text-center text-[9px] font-medium text-white/80 uppercase tracking-widest">
          Solarpunk · Eco Future
        </div>
      </div>
    </div>
  );
}
