export default function PopArtHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden" aria-hidden="true">
        {/* Benday dot pattern bg */}
        <div className="absolute inset-0 bg-[#FFEC00]"
          style={{ backgroundImage:'radial-gradient(circle, rgba(255,100,100,0.4) 2px, transparent 2px)', backgroundSize:'12px 12px' }} />

        {/* Speech bubble */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-white border-4 border-black rounded-2xl px-4 py-2 relative">
            <div className="text-[11px] font-black uppercase text-black">WOW!</div>
            <div className="absolute -bottom-3 left-4 w-0 h-0" style={{ borderLeft:'8px solid transparent', borderRight:'0px solid transparent', borderTop:'12px solid black' }} />
            <div className="absolute -bottom-2 left-[17px] w-0 h-0" style={{ borderLeft:'6px solid transparent', borderRight:'0px solid transparent', borderTop:'10px solid white' }} />
          </div>
        </div>

        {/* Large halftone face outline */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-24 h-28 border-4 border-black rounded-full bg-[#FFA3A3] flex items-center justify-center">
          <div className="flex gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-black" />
            <div className="w-3 h-3 rounded-full bg-black" />
          </div>
        </div>

        {/* Bold text panel */}
        <div className="absolute bottom-3 left-0 right-0 bg-black py-2 px-4">
          <div className="text-[16px] font-black text-[#FFEC00] uppercase tracking-widest text-center">POP ART</div>
        </div>

        {/* Action lines */}
        {[0,1,2,3,4].map(i=>(
          <div key={i} className="absolute bg-black" style={{ height:'2px', width:`${20+i*8}px`, top:`${20+i*12}%`, right:'2px', transform:`rotate(${-20+i*5}deg)` }} />
        ))}
      </div>
    </div>
  );
}
