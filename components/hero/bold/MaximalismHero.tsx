export default function MaximalismHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden bg-[#FF3D8B]" aria-hidden="true">
        {/* BG text */}
        <div className="absolute -left-2 -top-2 text-[90px] font-black opacity-10 text-white select-none leading-none">MORE</div>
        <div className="absolute right-0 bottom-0 text-[80px] font-black opacity-10 text-yellow-300 select-none leading-none">BOLD</div>

        {/* Color patches */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-[#FFD700] opacity-90" style={{ clipPath:'polygon(0 0,100% 0,0 100%)' }} />
        <div className="absolute bottom-0 right-0 w-28 h-20 bg-[#00B4D8] opacity-80" />
        <div className="absolute top-8 right-8 w-16 h-16 bg-[#7B2FBE] opacity-90 rotate-12" />
        <div className="absolute bottom-8 left-4 w-20 h-8 bg-[#FF6B35] opacity-90 -rotate-3" />

        {/* Main content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-1">
          <div className="text-[11px] font-black uppercase tracking-[0.3em] text-white/80">Design 2024</div>
          <div className="text-[32px] font-black text-white leading-none" style={{ textShadow:'3px 3px 0 rgba(0,0,0,0.2)' }}>
            MAXIMUM
          </div>
          <div className="text-[32px] font-black text-[#FFD700] leading-none" style={{ textShadow:'3px 3px 0 rgba(0,0,0,0.2)' }}>
            IMPACT
          </div>
          <div className="flex gap-2 mt-2">
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-[#FFD700] rounded-full" />
            <div className="w-3 h-3 bg-[#00B4D8] rounded-full" />
          </div>
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage:'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)',
          backgroundSize:'12px 12px',
        }} />
      </div>
    </div>
  );
}
