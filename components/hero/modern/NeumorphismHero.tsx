export default function NeumorphismHero({ className }: { className?: string }) {
  const S = { background:'#e0e5ec', boxShadow:'6px 6px 12px #b8bec7,-6px -6px 12px #ffffff' };
  const I = { background:'#e0e5ec', boxShadow:'inset 4px 4px 8px #b8bec7,inset -4px -4px 8px #ffffff' };
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="w-full h-full flex flex-col items-center justify-center gap-5 p-6" style={{ background:'#e0e5ec' }} aria-hidden="true">

        {/* Music player card */}
        <div className="w-full max-w-[200px] rounded-2xl p-4" style={S}>
          <div className="text-[9px] font-medium text-center mb-3" style={{ color:'#8a9bb0' }}>Now Playing</div>

          {/* Album art */}
          <div className="w-16 h-16 rounded-2xl mx-auto mb-4" style={{ ...S, background:'linear-gradient(135deg,#a0b4cc,#c8d4e0)' }}>
            <div className="w-full h-full rounded-2xl flex items-center justify-center">
              <div className="w-6 h-6 rounded-full" style={{ background:'#e0e5ec', boxShadow:'inset 2px 2px 4px #b8bec7,inset -2px -2px 4px #ffffff' }} />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-3">
            <div className="text-[11px] font-semibold mb-0.5" style={{ color:'#4a5568' }}>Soft UI Design</div>
            <div className="text-[9px]" style={{ color:'#8a9bb0' }}>The Future</div>
          </div>

          {/* Progress */}
          <div className="h-1.5 w-full rounded-full mb-3" style={I}>
            <div className="h-full w-2/5 rounded-full" style={{ background:'linear-gradient(90deg,#74b9ff,#a29bfe)' }} />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            {['⏮','▶','⏭'].map((icon, i) => (
              <div key={i}
                className="flex items-center justify-center rounded-full text-[10px]"
                style={{
                  width:i===1?36:26, height:i===1?36:26,
                  color:'#4a5568',
                  ...(i===1
                    ? { background:'linear-gradient(145deg,#e9eef5,#d1d9e0)', boxShadow:'4px 4px 8px #b8bec7,-4px -4px 8px #ffffff' }
                    : S
                  )
                }}
              >{icon}</div>
            ))}
          </div>
        </div>

        {/* Toggle row */}
        <div className="flex gap-3 w-full max-w-[200px]">
          {['WiFi','BT','DND'].map((label, i) => (
            <div key={label} className="flex-1 rounded-xl p-2 flex flex-col items-center gap-1" style={i===0?{...S,background:'linear-gradient(145deg,#6c5ce7,#a29bfe)',boxShadow:S.boxShadow}:S}>
              <div className="text-[11px]" style={{ color: i===0?'white':'#8a9bb0' }}>
                {label==='WiFi'?'📶':label==='BT'?'🔵':'🔕'}
              </div>
              <div className="text-[8px] font-medium" style={{ color: i===0?'rgba(255,255,255,0.8)':'#8a9bb0' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
