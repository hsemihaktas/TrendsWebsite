export default function MonochromeUIHero({ className }: { className?: string }) {
  const tones = ['#1a1a1a','#2d2d2d','#404040','#555','#6b6b6b','#808080','#999','#b3b3b3','#ccc','#e0e0e0','#f5f5f5'];
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="w-full h-full bg-white flex flex-col" aria-hidden="true">
        {/* Palette swatches */}
        <div className="flex h-10 flex-shrink-0">
          {tones.map((c,i)=>(<div key={i} className="flex-1" style={{ background:c }} />))}
        </div>

        {/* Dashboard */}
        <div className="flex-1 flex flex-col p-3 gap-2 bg-[#f5f5f5]">
          {/* Header */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-[#1a1a1a]" />
            <div className="h-1.5 w-16 rounded bg-[#555]" />
            <div className="ml-auto h-5 w-5 rounded bg-[#d0d0d0]" />
          </div>
          {/* Stats */}
          <div className="flex gap-2">
            {[{v:'87%',l:'Usage',bg:'#1a1a1a'},{v:'1.2k',l:'Items',bg:'#555'},{v:'99%',l:'Uptime',bg:'#999'}].map(s=>(
              <div key={s.l} className="flex-1 rounded-lg p-2" style={{ background:s.bg }}>
                <div className="text-[12px] font-bold text-white">{s.v}</div>
                <div className="text-[7px] text-white/60 uppercase">{s.l}</div>
              </div>
            ))}
          </div>
          {/* Bars */}
          {[70,45,85,55].map((w,i)=>(
            <div key={i} className="flex items-center gap-2">
              <div className="w-6 h-1.5 rounded bg-[#1a1a1a]" />
              <div className="flex-1 h-1.5 rounded-full bg-[#e0e0e0]">
                <div className="h-full rounded-full" style={{ width:`${w}%`, background:`rgba(26,26,26,${0.3+i*0.15})` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
