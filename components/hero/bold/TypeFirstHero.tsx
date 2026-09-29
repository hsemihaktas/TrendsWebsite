export default function TypeFirstHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="w-full h-full bg-white flex flex-col items-start justify-center px-6 overflow-hidden" aria-hidden="true">
        {/* Outline text */}
        <div
          className="text-[72px] font-black leading-none select-none mb-0"
          style={{ color:'transparent', WebkitTextStroke:'2px #111', letterSpacing:'-3px' }}
        >
          TYPE
        </div>
        {/* Filled text */}
        <div
          className="text-[72px] font-black leading-none select-none -mt-2"
          style={{ color:'#111', letterSpacing:'-3px' }}
        >
          FIRST
        </div>
        {/* Accent bar */}
        <div className="w-20 h-1 bg-black mt-4 mb-4" />
        {/* Subtext */}
        <div className="text-[11px] tracking-[0.2em] uppercase text-gray-400">
          Typography as Design
        </div>
        {/* Floating text */}
        <div className="absolute right-5 top-5 text-[80px] font-black opacity-[0.04] select-none" style={{ color:'#000', letterSpacing:'-4px' }}>TY</div>
      </div>
    </div>
  );
}
