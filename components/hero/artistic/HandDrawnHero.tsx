export default function HandDrawnHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full bg-[#faf8f4] overflow-hidden flex items-center justify-center" aria-hidden="true">
        {/* Lined paper effect */}
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage:'repeating-linear-gradient(0deg,transparent,transparent 20px,rgba(0,0,0,0.06) 20px,rgba(0,0,0,0.06) 21px)' }} />

        {/* Outer frame */}
        <div className="absolute border-2 border-dashed border-gray-600 rotate-1" style={{ inset:'10px',borderRadius:'2px' }} />
        <div className="absolute border border-dashed border-gray-400 -rotate-1" style={{ inset:'18px',borderRadius:'1px' }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-2.5" style={{ fontFamily:"'Georgia',serif" }}>
          {/* Sketchy icon */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8,34 C8,34 12,10 20,8 C28,6 34,14 30,22 C26,30 8,34 8,34Z" stroke="#374151" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M8,34 L22,12" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="32" cy="10" r="4" stroke="#374151" strokeWidth="1.2" fill="none" />
            <path d="M20,28 C24,26 28,22 30,18" stroke="#374151" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" />
          </svg>

          {/* Handwriting text */}
          <div className="text-gray-800 italic text-[18px] font-semibold" style={{ fontFamily:"'Georgia',serif",transform:'rotate(-1.5deg)' }}>
            hand-drawn
          </div>

          {/* Wavy underline */}
          <svg viewBox="0 0 88 8" width="88" height="8" style={{ transform:'rotate(-0.5deg)' }}>
            <path d="M0,4 C10,0 20,8 30,4 C40,0 50,8 60,4 C70,0 80,4 88,4" stroke="#374151" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>

          <div className="text-gray-500 italic text-[11px]" style={{ fontFamily:"'Georgia',serif",transform:'rotate(0.8deg)' }}>
            a warm, human feel
          </div>
        </div>

        {/* Corner doodles */}
        <div className="absolute border-2 border-dashed border-gray-500 rounded-full" style={{ width:28,height:28,top:'14%',left:'10%',transform:'rotate(10deg)' }} />
        <div className="absolute border-2 border-dashed border-gray-400 rounded-full" style={{ width:20,height:20,bottom:'18%',right:'12%',transform:'rotate(-8deg)' }} />

        {/* SVG arrow */}
        <svg className="absolute" style={{ top:'12%',right:'10%' }} width="28" height="28" viewBox="0 0 28 28">
          <path d="M4,24 C9,10 18,8 23,5" stroke="#374151" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M18,2 L23,5 L20,10" stroke="#374151" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg className="absolute" style={{ bottom:'16%',left:'10%' }} width="20" height="20" viewBox="0 0 20 20">
          <path d="M10,2 L12,7 L17,7 L13,11 L15,16 L10,13 L5,16 L7,11 L3,7 L8,7 Z" stroke="#4b5563" strokeWidth="1" fill="none" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
