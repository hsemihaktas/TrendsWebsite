export default function Y2KHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div
        className="relative w-full h-full overflow-hidden flex flex-col items-center justify-center gap-3 p-4"
        aria-hidden="true"
        style={{ background:'linear-gradient(135deg,#c0e0ff,#e0c0ff,#c0ffc0)' }}
      >
        {/* CD hologram overlay */}
        <div className="absolute inset-0 opacity-15" style={{ background:'conic-gradient(from 0deg,#ff0080,#ff8c00,#ffff00,#00ff00,#00e5ff,#8000ff,#ff0080)', mixBlendMode:'screen' }} />

        {/* Bubble decorations */}
        {[{t:'8%',l:'8%',s:20,c:'rgba(0,212,255,0.4)'},{t:'70%',l:'10%',s:14,c:'rgba(255,105,180,0.4)'},{t:'12%',r:'8%',s:18,c:'rgba(0,255,136,0.4)'},{t:'65%',r:'6%',s:12,c:'rgba(180,100,255,0.4)'}].map((b,i)=>(
          <div key={i} className="absolute rounded-full" style={{ width:b.s,height:b.s,top:b.t,left:'l' in b?b.l:undefined,right:'r' in b?(b as {r:string}).r:undefined, background:b.c, border:'1px solid rgba(255,255,255,0.7)', boxShadow:'inset 0 1px 0 rgba(255,255,255,0.9)' }} />
        ))}

        {/* Chrome text */}
        <div
          className="text-[32px] font-black tracking-wider relative z-10"
          style={{ background:'linear-gradient(180deg,#fff 0%,#a8d8ff 30%,#6060c0 55%,#c0e8ff 75%,#fff 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', filter:'drop-shadow(0 0 4px rgba(120,180,255,0.7))' }}
        >
          Y2K
        </div>

        {/* Plastic pills */}
        <div className="flex gap-2 relative z-10">
          {[['#00d4ff','© 2000'],['#ff69b4','CLICK!'],['#00ff88','NEW!']].map(([color,text],i)=>(
            <div key={i} className="px-3 py-1 rounded-full text-[9px] font-bold" style={{ background:'rgba(255,255,255,0.3)', border:'1px solid rgba(255,255,255,0.6)', color, textShadow:`0 0 6px ${color}`, boxShadow:'0 2px 8px rgba(255,255,255,0.4),inset 0 1px 0 rgba(255,255,255,0.8)' }}>
              {text}
            </div>
          ))}
        </div>

        {/* Glass card */}
        <div className="w-44 rounded-xl p-3 relative z-10" style={{ background:'rgba(255,255,255,0.3)', border:'1px solid rgba(255,255,255,0.6)', boxShadow:'0 4px 16px rgba(100,160,255,0.3),inset 0 1px 0 rgba(255,255,255,0.9)' }}>
          <div className="w-full h-px mb-2 rounded-full" style={{ background:'linear-gradient(90deg,#ff69b4,#00d4ff,#00ff88,#ff69b4)' }} />
          <div className="text-[9px] font-bold text-center" style={{ background:'linear-gradient(90deg,#0066cc,#cc00cc)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
            ENTER SITE ▶
          </div>
          <div className="text-[7px] text-center mt-0.5" style={{ color:'#6666cc' }}>Best viewed in IE 6.0</div>
        </div>
      </div>
    </div>
  );
}
