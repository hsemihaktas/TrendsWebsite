export default function BrutalismHero({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div
        className="relative w-full h-full overflow-hidden bg-white"
        aria-hidden="true"
      >
        {/* Raw red accent bar — intentionally misaligned, asymmetric */}
        <div
          className="absolute top-0 left-0 w-full h-2 bg-red-600 z-10 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* Heavy typographic block — off-center, raw */}
        <div
          className="absolute top-6 left-4 z-20 motion-reduce:transition-none"
          aria-hidden="true"
        >
          <p className="text-black font-serif font-black text-4xl leading-none uppercase select-none">
            BRUTAL
          </p>
        </div>

        {/* Raw subtext — misaligned right */}
        <div
          className="absolute top-16 right-4 z-20 text-right motion-reduce:transition-none"
          aria-hidden="true"
        >
          <p className="text-black font-serif font-bold text-xl leading-tight select-none">
            RAW
          </p>
          <p className="text-black font-serif text-base leading-tight select-none">
            HONEST
          </p>
        </div>

        {/* Thick horizontal black rule */}
        <div
          className="absolute top-[52px] left-0 w-3/4 h-[3px] bg-black z-10 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* Red accent block — intentionally oversized, asymmetric */}
        <div
          className="absolute bottom-0 right-0 w-20 h-12 bg-red-600 z-10 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* Black bottom bar */}
        <div
          className="absolute bottom-12 left-0 right-0 h-[2px] bg-black z-10 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* Lower text block — misaligned left, text-heavy */}
        <div
          className="absolute bottom-14 left-3 z-20 motion-reduce:transition-none"
          aria-hidden="true"
        >
          <p className="text-black font-mono text-xs leading-tight select-none">
            NO DECORATION.
          </p>
          <p className="text-black font-mono text-xs leading-tight select-none">
            NO COMPROMISE.
          </p>
        </div>

        {/* Single accent red word */}
        <div
          className="absolute bottom-14 right-24 z-20 motion-reduce:transition-none"
          aria-hidden="true"
        >
          <p className="text-red-600 font-serif font-black text-sm leading-none select-none uppercase">
            NOW
          </p>
        </div>
      </div>
    </div>
  );
}
