export default function SwissStyleHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="w-full h-full bg-white relative overflow-hidden" aria-hidden="true">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage:'linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)',
          backgroundSize:'24px 24px',
        }} />

        {/* Red vertical bar */}
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-red-600" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between px-5 py-5">
          {/* Number */}
          <div className="text-[60px] font-black text-gray-100 leading-none select-none">
            01
          </div>

          {/* Main type block */}
          <div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-2">International Style</div>
            <div className="text-[26px] font-black text-gray-900 leading-none uppercase tracking-tight">
              SWISS<br/>DESIGN
            </div>
            <div className="mt-3 h-px bg-gray-900 w-3/4" />
            <div className="mt-2 text-[8px] uppercase tracking-[0.2em] text-gray-500">
              Grid · Typography · Function
            </div>
          </div>

          {/* Bottom meta row */}
          <div className="flex items-end gap-4">
            <div className="space-y-1">
              <div className="h-1.5 w-16 bg-gray-200 rounded" />
              <div className="h-1.5 w-10 bg-gray-100 rounded" />
            </div>
            <div className="ml-auto text-[8px] uppercase tracking-widest text-gray-400">Zürich 1950</div>
          </div>
        </div>
      </div>
    </div>
  );
}
