export default function CottagecoreHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center" style={{ background:'linear-gradient(160deg,#f9f3e8 0%,#f0e8d5 100%)' }} aria-hidden="true">
        {/* Floral SVG bg */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 130">
          {[[20,20],[170,15],[10,100],[185,110],[100,5],[100,120]].map(([x,y],i)=>(
            <g key={i} transform={`translate(${x},${y})`}>
              <circle r="6" fill="#c9855a" opacity="0.7"/>
              {[0,60,120,180,240,300].map(a=>(
                <ellipse key={a} cx={Math.cos(a*Math.PI/180)*9} cy={Math.sin(a*Math.PI/180)*9} rx="4" ry="2.5" fill="#d4967a" opacity="0.6" transform={`rotate(${a})`}/>
              ))}
            </g>
          ))}
        </svg>

        {/* Window frame */}
        <div className="relative w-36 h-32 rounded-t-full border-4 border-[#8b6914]/40 bg-[#e8f4f0]/60 flex flex-col items-center justify-center p-3">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-full bg-[#8b6914]/20" />
          <div className="absolute top-1/2 left-3 right-3 h-px bg-[#8b6914]/20" />

          {/* Content */}
          <div className="relative z-10 text-center">
            <div className="text-[20px] mb-1">🌸</div>
            <div className="text-[12px] font-medium" style={{ color:'#5a3e28', fontFamily:'Georgia,serif' }}>Cottagecore</div>
            <div className="text-[8px] italic" style={{ color:'#8b6040', fontFamily:'Georgia,serif' }}>slow living · nature</div>
          </div>
        </div>

        {/* Grass bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#7ab648]/40 rounded-t-[50%]" />
        <div className="absolute bottom-0 left-10 text-[16px]">🌷</div>
        <div className="absolute bottom-0 right-10 text-[16px]">🌿</div>
      </div>
    </div>
  );
}
