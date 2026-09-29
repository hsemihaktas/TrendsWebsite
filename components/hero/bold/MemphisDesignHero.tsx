export default function MemphisDesignHero({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div
        className="relative w-full h-full overflow-hidden bg-[#FFF9E6]"
        aria-hidden="true"
      >
        {/* Polka dots — scattered */}
        <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-[#FF6B9D] z-10 motion-reduce:transition-none" aria-hidden="true" />
        <div className="absolute top-3 left-12 w-3 h-3 rounded-full bg-[#00B4D8] z-10 motion-reduce:transition-none" aria-hidden="true" />
        <div className="absolute top-3 left-20 w-4 h-4 rounded-full bg-[#FFD700] z-10 motion-reduce:transition-none" aria-hidden="true" />
        <div className="absolute top-3 right-6 w-3 h-3 rounded-full bg-[#FF9F1C] z-10 motion-reduce:transition-none" aria-hidden="true" />
        <div className="absolute top-3 right-16 w-4 h-4 rounded-full bg-[#FF6B9D] z-10 motion-reduce:transition-none" aria-hidden="true" />
        <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-[#00B4D8] z-10 motion-reduce:transition-none" aria-hidden="true" />
        <div className="absolute bottom-4 left-14 w-4 h-4 rounded-full bg-[#FFD700] z-10 motion-reduce:transition-none" aria-hidden="true" />
        <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-[#FF9F1C] z-10 motion-reduce:transition-none" aria-hidden="true" />
        <div className="absolute bottom-4 right-14 w-3 h-3 rounded-full bg-[#FF6B9D] z-10 motion-reduce:transition-none" aria-hidden="true" />
        <div className="absolute top-1/2 left-2 w-3 h-3 rounded-full bg-[#FF9F1C] z-10 motion-reduce:transition-none" aria-hidden="true" />
        <div className="absolute top-1/2 right-2 w-4 h-4 rounded-full bg-[#00B4D8] z-10 motion-reduce:transition-none" aria-hidden="true" />

        {/* Zigzag line — top area (border-dashed horizontal stripe) */}
        <div
          className="absolute top-10 left-0 right-0 h-0 border-t-2 border-dashed border-[#FF6B9D] z-10 motion-reduce:transition-none"
          aria-hidden="true"
        />
        {/* Zigzag line — bottom area */}
        <div
          className="absolute bottom-12 left-0 right-0 h-0 border-t-2 border-dashed border-[#00B4D8] z-10 motion-reduce:transition-none"
          aria-hidden="true"
        />
        {/* Vertical dashed line */}
        <div
          className="absolute top-0 bottom-0 left-1/4 w-0 border-l-2 border-dashed border-[#FFD700] z-10 motion-reduce:transition-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-0 bottom-0 right-1/4 w-0 border-l-2 border-dashed border-[#FF9F1C] z-10 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* Geometric squares */}
        <div
          className="absolute top-14 left-6 w-8 h-8 bg-[#FFD700] z-20 motion-reduce:transition-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-14 right-6 w-8 h-8 bg-[#00B4D8] z-20 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* CSS triangle: skewed div to simulate a triangle — teal */}
        <div
          className="absolute top-16 right-10 w-0 h-0 z-20 motion-reduce:transition-none"
          style={{
            borderLeft: '12px solid transparent',
            borderRight: '12px solid transparent',
            borderBottom: '22px solid #00B4D8',
          }}
          aria-hidden="true"
        />

        {/* CSS triangle: pink */}
        <div
          className="absolute bottom-16 left-10 w-0 h-0 z-20 motion-reduce:transition-none"
          style={{
            borderLeft: '12px solid transparent',
            borderRight: '12px solid transparent',
            borderTop: '22px solid #FF6B9D',
          }}
          aria-hidden="true"
        />

        {/* Central Memphis label block */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-[#FF9F1C] px-4 py-2 border-2 border-[#FF6B9D] motion-reduce:transition-none"
          aria-hidden="true"
        >
          <p className="text-white font-black text-sm tracking-widest uppercase text-center select-none">
            MEMPHIS
          </p>
        </div>

        {/* Extra overlapping square — pink, skewed */}
        <div
          className="absolute top-1/3 left-8 w-10 h-10 bg-[#FF6B9D] opacity-70 z-20 -rotate-6 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* Teal filled square, overlapping */}
        <div
          className="absolute top-1/3 right-8 w-10 h-10 bg-[#00B4D8] opacity-70 z-20 rotate-6 motion-reduce:transition-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
