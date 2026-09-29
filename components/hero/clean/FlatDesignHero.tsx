export default function FlatDesignHero({ className }: { className?: string }) {
  const colors = ['#2196F3','#4CAF50','#FF5722','#9C27B0','#FF9800'];
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="w-full h-full bg-[#F5F5F5] flex items-center justify-center p-4" aria-hidden="true">
        {/* Simüle mobil ekran */}
        <div className="w-[130px] h-full bg-white rounded-2xl overflow-hidden flex flex-col shadow-sm border border-gray-100">
          {/* Status bar */}
          <div className="bg-[#2196F3] px-3 py-2 flex items-center justify-between">
            <div className="text-[8px] font-bold text-white">App</div>
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-white/80" />
              <div className="w-1 h-1 rounded-full bg-white/80" />
              <div className="w-1 h-1 rounded-full bg-white/80" />
            </div>
          </div>
          {/* Stats row */}
          <div className="flex px-2 py-2 gap-1.5">
            {colors.slice(0,3).map((c,i)=>(
              <div key={i} className="flex-1 rounded py-1.5 flex flex-col items-center" style={{ background:c }}>
                <div className="text-[10px] font-bold text-white">{[12,38,7][i]}</div>
              </div>
            ))}
          </div>
          {/* List items */}
          <div className="px-2 flex-1 space-y-1.5 py-1">
            {[70,55,85,40].map((w,i)=>(
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded flex-shrink-0" style={{ background:colors[i % colors.length] }} />
                <div className="h-1.5 rounded-full flex-1" style={{ width:`${w}%`, background:'#E0E0E0' }} />
              </div>
            ))}
          </div>
          {/* Bottom nav */}
          <div className="flex border-t border-gray-100">
            {['◉','☰','★'].map((icon,i)=>(
              <div key={i} className="flex-1 py-2 flex items-center justify-center text-[12px]" style={{ color: i===0?'#2196F3':'#BDBDBD' }}>
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
