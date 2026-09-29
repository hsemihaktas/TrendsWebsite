export default function KineticTypographyHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full bg-white overflow-hidden flex items-center justify-center" aria-hidden="true">
        <div className="relative select-none text-center">
          <div className="text-[72px] font-black leading-none tracking-tighter text-[#111] relative">
            <span className="relative inline-block">K</span>
            <span className="relative inline-block" style={{ color:'transparent', WebkitTextStroke:'2px #111' }}>I</span>
            <span className="relative inline-block">N</span>
            <span className="relative inline-block text-[40px] align-middle mx-1" style={{ color:'#6366f1' }}>✦</span>
            <span className="relative inline-block">E</span>
            <span className="relative inline-block" style={{ color:'transparent', WebkitTextStroke:'2px #111' }}>T</span>
            <span className="relative inline-block">I</span>
            <span className="relative inline-block">C</span>
          </div>
          <div className="h-px bg-black w-full my-2" />
          <div className="text-[11px] uppercase tracking-[0.4em] text-[#666]">Typography as Motion</div>
          <div className="text-[48px] font-black leading-none tracking-tighter text-[#111] mt-1" style={{ color:'transparent', WebkitTextStroke:'1.5px #111' }}>
            TYPE
          </div>
        </div>
        <div className="absolute bottom-4 right-5 text-[80px] font-black opacity-[0.05] select-none" style={{ color:'#000', letterSpacing:'-4px' }}>TY</div>
      </div>
    </div>
  );
}
