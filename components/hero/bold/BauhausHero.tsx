export default function BauhausHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full bg-white overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-0 bottom-0 w-px bg-gray-200" style={{ left:'25%' }} />
        <div className="absolute top-0 left-0 bottom-0 w-px bg-gray-200" style={{ left:'50%' }} />
        <div className="absolute top-0 left-0 bottom-0 w-px bg-gray-200" style={{ left:'75%' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gray-200" style={{ top:'33%' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gray-200" style={{ top:'66%' }} />

        <div className="absolute top-4 left-4 w-24 h-24 bg-[#E8231C] rounded-full" />
        <div className="absolute top-4 right-4 w-20 h-20 bg-[#1C3BE8]" />
        <div className="absolute bottom-4 left-10 w-0 h-0" style={{ borderLeft:'36px solid transparent', borderRight:'36px solid transparent', borderBottom:'62px solid #F7D000' }} />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          <div className="text-[22px] font-black text-black uppercase tracking-widest">BAUHAUS</div>
          <div className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mt-0.5">Form Follows Function</div>
          <div className="w-full h-px bg-black mt-2" />
          <div className="text-[8px] uppercase tracking-[0.25em] text-gray-400 mt-1">1919 · Dessau · Weimar</div>
        </div>
      </div>
    </div>
  );
}
