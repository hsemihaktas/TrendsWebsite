export default function SkeuomorphismHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div
        className="w-full h-full flex flex-col items-center justify-center gap-4 p-5"
        aria-hidden="true"
        style={{ background:'linear-gradient(135deg,#8B6914 0%,#A07830 25%,#7A5828 50%,#9B7020 75%,#8B6914 100%)' }}
      >
        {/* Stitching border */}
        <div className="absolute inset-2 rounded pointer-events-none" style={{ border:'1px dashed rgba(255,255,255,0.15)' }} />

        {/* LCD Screen */}
        <div className="w-48 rounded-lg p-3" style={{
          background:'linear-gradient(180deg,#1a2a0a,#2a3d10)',
          boxShadow:'inset 2px 2px 8px rgba(0,0,0,0.8),inset -1px -1px 2px rgba(255,255,255,0.05),0 1px 0 rgba(255,255,255,0.1)',
          border:'3px solid #3d2808',
        }}>
          <div className="h-0.5 w-full mb-2 rounded" style={{ background:'linear-gradient(90deg,transparent,rgba(180,230,100,0.2),transparent)' }} />
          <div className="text-center text-[14px] font-mono font-bold" style={{ color:'#7cfc00', textShadow:'0 0 8px #7cfc00' }}>12:34 PM</div>
          <div className="text-center text-[9px] font-mono mt-0.5" style={{ color:'#5ab800', opacity:0.8 }}>▶ Track 03 / 12</div>
          <div className="mt-2 h-1 rounded-full" style={{ background:'rgba(180,230,100,0.2)' }}>
            <div className="h-full w-2/5 rounded-full" style={{ background:'#7cfc00', boxShadow:'0 0 4px #7cfc00' }} />
          </div>
        </div>

        {/* Control row */}
        <div className="flex items-center gap-3">
          {/* Buttons */}
          {['⏮','▶','⏭'].map((icon,i)=>(
            <div key={i}
              className="flex items-center justify-center text-[12px]"
              style={{
                width:i===1?40:28, height:i===1?40:28,
                borderRadius:i===1?'50%':'8px',
                background:i===1
                  ?'radial-gradient(circle at 35% 35%,#c49820,#7a5c0a 60%,#4a3808)'
                  :'linear-gradient(145deg,#c49820,#8b6914 50%,#5a3e0a)',
                boxShadow:`2px 2px 5px rgba(0,0,0,0.6),-1px -1px 2px rgba(255,255,255,0.15),inset 1px 1px 3px rgba(255,255,255,0.1)`,
                color:'#e8c060',
              }}
            >{icon}</div>
          ))}

          {/* Knob */}
          <div className="flex flex-col items-center gap-0.5">
            <div className="w-9 h-9 rounded-full" style={{
              background:'radial-gradient(circle at 35% 35%,#c49820 0%,#7a5c0a 60%,#4a3808 100%)',
              boxShadow:'2px 2px 5px rgba(0,0,0,0.5),-1px -1px 2px rgba(255,255,255,0.15)',
            }}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-0.5 h-3 rounded-full" style={{ background:'#e8c060', transform:'rotate(20deg)' }} />
              </div>
            </div>
            <div className="text-[7px] font-semibold" style={{ color:'#e8c060', textShadow:'0 1px 2px rgba(0,0,0,0.8)' }}>VOL</div>
          </div>
        </div>
      </div>
    </div>
  );
}
