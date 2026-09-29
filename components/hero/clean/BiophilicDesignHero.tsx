export default function BiophilicDesignHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden" style={{ background:'linear-gradient(135deg,#f0f7ee 0%,#e8f5e9 100%)' }} aria-hidden="true">
        {/* Leaf SVG elements */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice">
          <path d="M15,5 C15,5 50,0 55,30 C60,60 35,75 15,65 C-5,55 0,30 15,5Z" fill="#4a7c59" />
          <path d="M15,5 L40,40" stroke="#2d5a3d" strokeWidth="1" fill="none" />
          <path d="M185,5 C185,5 150,0 145,30 C140,60 165,75 185,65 C205,55 200,30 185,5Z" fill="#4a7c59" />
          <path d="M185,5 L160,40" stroke="#2d5a3d" strokeWidth="1" fill="none" />
          <circle cx="100" cy="120" r="30" fill="#4a7c59" opacity="0.5" />
          <path d="M80,80 C85,60 95,50 100,40 C105,50 115,60 120,80" fill="none" stroke="#2d5a3d" strokeWidth="1.5" />
        </svg>

        {/* Main card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] rounded-2xl p-4 bg-white/80" style={{ backdropFilter:'blur(8px)', border:'1px solid rgba(74,124,89,0.2)', boxShadow:'0 8px 24px rgba(74,124,89,0.1)' }}>
          <div className="flex items-center gap-2 mb-3">
            <div className="text-[18px]">🌿</div>
            <div>
              <div className="h-1.5 w-20 bg-[#4a7c59]/40 rounded mb-1" />
              <div className="h-1 w-14 bg-[#4a7c59]/20 rounded" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {['🌱','🍃','🌺'].map((e,i)=>(
              <div key={i} className="h-10 rounded-xl flex items-center justify-center text-[16px]" style={{ background:'rgba(74,124,89,0.08)' }}>{e}</div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-2 left-0 right-0 text-center text-[9px] text-[#4a7c59] font-medium uppercase tracking-widest">
          Biophilic Design
        </div>
      </div>
    </div>
  );
}
