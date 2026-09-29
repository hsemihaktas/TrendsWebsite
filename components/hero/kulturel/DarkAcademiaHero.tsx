export default function DarkAcademiaHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center" style={{ background:'linear-gradient(160deg,#1c1610 0%,#2d2014 50%,#1a1208 100%)' }} aria-hidden="true">
        {/* Warm light glow */}
        <div className="absolute rounded-full opacity-30 blur-3xl" style={{ width:120, height:120, background:'#d4a843', top:'20%', left:'30%' }} />

        {/* Book stack */}
        <div className="absolute bottom-6 left-6 flex flex-col gap-0.5">
          {[{w:36,bg:'#4a3520'},{w:40,bg:'#2d1f0e'},{w:32,bg:'#5a4530'},{w:44,bg:'#3d2815'}].map((b,i)=>(
            <div key={i} className="h-3 rounded-sm" style={{ width:b.w, background:b.bg, boxShadow:'inset 0 1px 0 rgba(255,255,255,0.05)' }}>
              <div className="h-full w-0.5 bg-[#c9a870]/20 ml-1" />
            </div>
          ))}
        </div>

        {/* Main text */}
        <div className="relative z-10 text-center px-6">
          <div className="text-[10px] uppercase tracking-[0.4em] mb-2" style={{ color:'rgba(201,168,112,0.6)', fontFamily:'Georgia,serif' }}>
            The Scholar
          </div>
          <div className="text-[24px] font-light" style={{ color:'#e8d5a8', fontFamily:'Georgia,serif', lineHeight:1.2 }}>
            Dark<br/>Academia
          </div>
          <div className="flex items-center gap-2 my-2">
            <div className="flex-1 h-px bg-[#c9a870]/30" />
            <div className="text-[10px]" style={{ color:'rgba(201,168,112,0.4)' }}>✦</div>
            <div className="flex-1 h-px bg-[#c9a870]/30" />
          </div>
          <div className="text-[8px] italic" style={{ color:'rgba(201,168,112,0.45)', fontFamily:'Georgia,serif' }}>
            &quot;The owl of Minerva spreads its wings only with the falling of the dusk.&quot;
          </div>
        </div>

        {/* Candle */}
        <div className="absolute bottom-5 right-6 flex flex-col items-center gap-0">
          <div className="w-1 h-3 bg-[#ffd700] opacity-80 rounded-t-full" />
          <div className="w-3 h-8 bg-[#f5f0e8] rounded-sm" />
          <div className="w-4 h-1 bg-[#d4a843]/40 rounded-full" />
        </div>
      </div>
    </div>
  );
}
