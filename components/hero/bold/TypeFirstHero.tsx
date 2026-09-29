export default function TypeFirstHero({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div
        className="relative w-full h-full overflow-hidden bg-white flex flex-col items-center justify-center px-4"
        aria-hidden="true"
      >
        {/* Primary visual: large bold type — the design IS the type */}
        <div
          className="text-center z-10 motion-reduce:transition-none"
          aria-hidden="true"
        >
          <span className="block text-7xl font-black leading-none tracking-tighter text-black select-none">
            TYPE
          </span>
          <span className="block text-7xl font-black leading-none tracking-tighter text-black select-none">
            FIRST
          </span>
        </div>

        {/* Minimal horizontal rule — the only decoration allowed */}
        <div
          className="mt-3 w-16 h-[2px] bg-black z-10 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* Minimal label — very small, subordinate */}
        <p
          className="mt-2 text-[10px] font-medium tracking-[0.3em] uppercase text-gray-500 z-10 motion-reduce:transition-none select-none"
          aria-hidden="true"
        >
          Design
        </p>
      </div>
    </div>
  );
}
