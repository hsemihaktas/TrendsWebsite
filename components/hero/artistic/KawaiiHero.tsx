export default function KawaiiHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center" aria-hidden="true"
           style={{ background:'linear-gradient(135deg,#FFB7C5 0%,#D4B8FF 60%,#FFF3B0 100%)' }}>
        {/* Scatter decorations */}
        {[{t:'7%',l:'7%',s:'★',c:'#FFD700'},{t:'10%',r:'10%',s:'✿',c:'#FF9CC2'},{b:'8%',l:'8%',s:'♥',c:'#C084FC'},{b:'10%',r:'7%',s:'★',c:'#FFD700'},{t:'38%',l:'5%',s:'✿',c:'#FF9CC2'},{t:'33%',r:'6%',s:'♥',c:'#C084FC'}].map((d,i)=>(
          <span key={i} className="absolute text-sm select-none" style={{ top:'t' in d?d.t:undefined,bottom:'b' in d?d.b:undefined,left:'l' in d?d.l:undefined,right:'r' in d?d.r:undefined,color:d.c }}>
            {d.s}
          </span>
        ))}

        {/* Character */}
        <div className="relative flex flex-col items-center gap-1 z-10">
          {/* Head */}
          <div className="relative flex items-center justify-center" style={{ width:72,height:72,borderRadius:'50%',background:'linear-gradient(135deg,#ffe0ec,#ffd6f5)',boxShadow:'0 4px 12px rgba(212,184,255,0.5)' }}>
            {/* Eyes */}
            <div className="absolute flex gap-3" style={{ top:'34%' }}>
              <div className="rounded-full bg-gray-800" style={{ width:11,height:13,borderRadius:'50%' }} />
              <div className="rounded-full bg-gray-800" style={{ width:11,height:13,borderRadius:'50%' }} />
            </div>
            {/* Shine dots */}
            <div className="absolute bg-white rounded-full" style={{ width:3,height:3,top:'34%',left:'27%' }} />
            <div className="absolute bg-white rounded-full" style={{ width:3,height:3,top:'34%',right:'24%' }} />
            {/* Rosy cheeks */}
            <div className="absolute rounded-full" style={{ width:12,height:7,background:'rgba(255,150,180,0.5)',borderRadius:'50%',bottom:'27%',left:'11%' }} />
            <div className="absolute rounded-full" style={{ width:12,height:7,background:'rgba(255,150,180,0.5)',borderRadius:'50%',bottom:'27%',right:'11%' }} />
            {/* Smile */}
            <svg className="absolute" style={{ bottom:'14%' }} width="22" height="10" viewBox="0 0 22 10">
              <path d="M2,2 Q11,10 20,2" stroke="#555" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          {/* Emote text */}
          <div className="text-pink-500 text-[12px] font-bold">◕‿◕</div>

          {/* Name badge */}
          <div className="px-3 py-1 rounded-full text-[9px] font-bold text-pink-600" style={{ background:'rgba(255,255,255,0.6)',border:'1px solid rgba(255,183,197,0.8)',backdropFilter:'blur(4px)' }}>
            Kawaii UI ♥
          </div>
        </div>

        {/* Flower decorations */}
        <div className="absolute rounded-full" style={{ width:18,height:18,background:'#FFF3B0',top:'18%',left:'18%',boxShadow:'0 0 0 4px rgba(255,183,197,0.5)' }} />
        <div className="absolute rounded-full" style={{ width:14,height:14,background:'#D4B8FF',bottom:'20%',right:'18%',boxShadow:'0 0 0 3px rgba(255,243,176,0.6)' }} />
      </div>
    </div>
  );
}
