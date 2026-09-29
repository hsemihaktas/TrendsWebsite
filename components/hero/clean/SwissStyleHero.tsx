export default function SwissStyleHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div
        className="w-full h-full bg-white relative overflow-hidden"
        aria-hidden="true"
      >
        {/* Mathematical grid lines */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border-l border-t border-gray-200" />
          ))}
        </div>

        {/* Asymmetric layout: text left, red accent right */}
        <div className="relative z-10 flex h-full">
          {/* Left: large uppercase sans-serif text */}
          <div className="flex-1 flex flex-col justify-center px-5 py-4">
            <p className="text-[10px] uppercase tracking-widest text-black font-black leading-tight">
              INTER
            </p>
            <p className="text-2xl uppercase font-black text-black leading-none tracking-tight">
              SWISS
            </p>
            <p className="text-2xl uppercase font-black text-black leading-none tracking-tight">
              STYLE
            </p>
            <div className="mt-2 h-px bg-black w-full" />
            <p className="mt-1 text-[9px] uppercase tracking-widest text-gray-600 font-bold">
              International Typographic Style
            </p>
          </div>

          {/* Right: red geometric accent */}
          <div className="w-16 flex flex-col">
            <div className="flex-1 bg-red-600" />
            <div className="h-8 bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
