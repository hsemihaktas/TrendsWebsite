export default function EditorialDesignHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full bg-white overflow-hidden" style={{ fontFamily:'Georgia, serif' }} aria-hidden="true">
        <div className="absolute top-0 bottom-0 w-px bg-gray-200" style={{ left:'40%' }} />
        <div className="absolute top-4 left-0 right-0 flex items-center px-4 gap-3">
          <div className="text-[7px] uppercase tracking-[0.4em] text-gray-400">Vol. 12 · Issue 3</div>
          <div className="flex-1 h-px bg-gray-200" />
          <div className="text-[7px] uppercase tracking-[0.4em] text-gray-400">2024</div>
        </div>
        <div className="absolute left-4" style={{ top:'14%', right:'62%' }}>
          <div className="text-[38px] font-black text-black leading-none" style={{ letterSpacing:'-1px' }}>THE</div>
          <div className="text-[38px] font-black text-black leading-none" style={{ letterSpacing:'-1px' }}>EDIT</div>
          <div className="text-[38px] font-light italic text-black leading-none" style={{ letterSpacing:'-0.5px' }}>orial</div>
        </div>
        <div className="absolute right-4 flex flex-col gap-1.5" style={{ top:'15%', left:'44%' }}>
          {[95,80,95,75,90,70,85].map((w,i)=>(
            <div key={i} className={`h-1.5 rounded-full ${i===0?'bg-gray-700':'bg-gray-200'}`} style={{ width:`${w}%` }} />
          ))}
        </div>
        <div className="absolute left-4 right-4" style={{ top:'55%' }}>
          <div className="h-px bg-black mb-2" />
          <div className="text-[10px] italic text-gray-700">Design is the silent ambassador of your brand.</div>
          <div className="h-px bg-black mt-2" />
        </div>
        <div className="absolute left-4 bottom-4 bg-gray-100" style={{ width:'36%', height:'28%' }}>
          <div className="w-full h-full flex items-center justify-center text-[8px] text-gray-400 uppercase tracking-wide">Photo</div>
        </div>
        <div className="absolute bottom-4 flex flex-col gap-1" style={{ left:'44%', right:'4%' }}>
          {[100,80,90].map((w,i)=>(<div key={i} className="h-1.5 rounded-full bg-gray-200" style={{ width:`${w}%` }} />))}
        </div>
      </div>
    </div>
  );
}
