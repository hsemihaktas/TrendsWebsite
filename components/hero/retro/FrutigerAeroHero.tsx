export default function FrutigerAeroHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden" aria-hidden="true"
           style={{ background:'linear-gradient(180deg,#00bfff 0%,#0096c7 40%,#006080 100%)' }}>
        {/* Lens flare */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-25 -translate-y-1/4 translate-x-1/4" style={{ background:'radial-gradient(circle,#ffffff 0%,#80dfff 40%,transparent 70%)' }} />

        {/* Nature SVG */}
        <svg className="absolute top-3 left-3 opacity-75" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M5 35 C5 35 8 10 25 8 C25 8 30 20 20 28 C15 32 5 35 5 35Z" fill="#00e87a" opacity="0.9" />
          <path d="M5 35 L20 15" stroke="#00c060" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <svg className="absolute bottom-5 right-5 opacity-60" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M6 26 C6 26 8 8 22 6 C22 6 26 16 18 22 C14 25 6 26 6 26Z" fill="#00e87a" opacity="0.8" />
          <path d="M6 26 L18 10" stroke="#00c060" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        {/* Water drop */}
        <svg className="absolute top-3 right-8 opacity-65" width="18" height="24" viewBox="0 0 18 24" fill="none">
          <path d="M9 2 C9 2 2 11 2 16 C2 20.5 5 23 9 23 C13 23 16 20.5 16 16 C16 11 9 2 9 2Z" fill="url(#dropG)" />
          <defs><linearGradient id="dropG" x1="3" y1="3" x2="15" y2="22"><stop offset="0%" stopColor="#80efff"/><stop offset="100%" stopColor="#0099cc"/></linearGradient></defs>
          <ellipse cx="6.5" cy="13" rx="1.5" ry="2.5" fill="rgba(255,255,255,0.5)" />
        </svg>

        {/* Glass buttons */}
        <div className="absolute left-0 right-0 flex justify-center gap-3" style={{ top:'50%',transform:'translateY(-50%)' }}>
          {['Start','Learn','Go!'].map((label,i)=>(
            <div key={i} className="relative overflow-hidden rounded-full px-4 py-2 text-[10px] font-bold" style={{ background:'rgba(255,255,255,0.38)',border:'1px solid rgba(255,255,255,0.6)',boxShadow:'0 4px 12px rgba(0,80,140,0.25),inset 0 1px 0 rgba(255,255,255,0.85)',color:'#003d5a' }}>
              <div className="absolute top-0 left-0 right-0 rounded-full" style={{ height:'45%',background:'linear-gradient(180deg,rgba(255,255,255,0.65),rgba(255,255,255,0.05))' }} />
              <span className="relative z-10">{label}</span>
            </div>
          ))}
        </div>

        {/* Notification */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 rounded-2xl px-4 py-2 flex items-center gap-2" style={{ background:'rgba(255,255,255,0.32)',border:'1px solid rgba(255,255,255,0.55)',boxShadow:'0 4px 16px rgba(0,80,160,0.2),inset 0 1px 0 rgba(255,255,255,0.8)' }}>
          <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ background:'radial-gradient(circle at 35% 30%,#80ffb0,#00b840 60%,#006630)',boxShadow:'0 0 4px #00e860' }} />
          <span className="text-[9px] font-semibold" style={{ color:'#003d5a' }}>Windows Vista — Welcome</span>
        </div>

        {/* Cloud blobs */}
        <div className="absolute bottom-0 left-0 right-0 h-12 opacity-15" style={{ background:'radial-gradient(ellipse 60% 50% at 30% 100%,#ffffff,transparent 70%),radial-gradient(ellipse 50% 40% at 70% 100%,#ffffff,transparent 70%)' }} />
      </div>
    </div>
  );
}
