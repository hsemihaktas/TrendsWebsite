export default function MemphisDesignHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full bg-[#FFF9E6] overflow-hidden" aria-hidden="true">
        {/* Pattern: zigzag lines */}
        <div className="absolute top-12 left-0 right-0 h-0 border-t-2 border-dashed border-[#FF6B9D]" />
        <div className="absolute bottom-14 left-0 right-0 h-0 border-t-2 border-dashed border-[#00B4D8]" />
        <div className="absolute left-1/3 top-0 bottom-0 w-0 border-l-2 border-dashed border-[#FFD700]" />
        <div className="absolute right-1/3 top-0 bottom-0 w-0 border-l-2 border-dashed border-[#FF9F1C]" />

        {/* Geometric shapes */}
        <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-[#FF6B9D]" />
        <div className="absolute top-4 left-14 w-4 h-4 rounded-full bg-[#00B4D8]" />
        <div className="absolute top-4 left-24 w-5 h-5 rounded-full bg-[#FFD700]" />
        <div className="absolute top-4 right-8 w-5 h-5 rounded-full bg-[#FF9F1C]" />
        <div className="absolute bottom-3 left-5 w-4 h-4 rounded-full bg-[#00B4D8]" />
        <div className="absolute bottom-3 right-5 w-6 h-6 rounded-full bg-[#FF6B9D]" />

        <div className="absolute top-14 left-5 w-10 h-10 bg-[#FFD700]" />
        <div className="absolute bottom-16 right-5 w-10 h-10 bg-[#00B4D8]" />
        <div className="absolute top-14 right-12 w-0 h-0" style={{ borderLeft:'14px solid transparent',borderRight:'14px solid transparent',borderBottom:'24px solid #00B4D8' }} />
        <div className="absolute bottom-16 left-14 w-0 h-0" style={{ borderLeft:'12px solid transparent',borderRight:'12px solid transparent',borderTop:'20px solid #FF6B9D' }} />
        <div className="absolute top-1/3 left-8 w-10 h-10 bg-[#FF6B9D] opacity-60 -rotate-6" />
        <div className="absolute top-1/3 right-8 w-8 h-8 bg-[#00B4D8] opacity-70 rotate-6" />

        {/* Central badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF9F1C] px-5 py-2 border-2 border-[#FF6B9D]" style={{ boxShadow:'3px 3px 0 #FF6B9D' }}>
          <div className="text-[13px] font-black text-white uppercase text-center tracking-widest">MEMPHIS</div>
          <div className="text-[8px] font-bold text-white/80 uppercase text-center tracking-wider">Design Group</div>
        </div>
      </div>
    </div>
  );
}
