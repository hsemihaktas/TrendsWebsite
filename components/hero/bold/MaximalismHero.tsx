export default function MaximalismHero({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* Layered background: hot pink base */}
      <div
        className="relative w-full h-full overflow-hidden bg-[#FF3D8B]"
        aria-hidden="true"
      >
        {/* Background dramatic typography */}
        <span
          className="absolute -left-4 top-0 text-8xl font-black opacity-20 text-yellow-300 select-none leading-none z-0 motion-reduce:transition-none"
          aria-hidden="true"
        >
          MAX
        </span>
        <span
          className="absolute right-0 bottom-0 text-8xl font-black opacity-20 text-purple-900 select-none leading-none z-0 motion-reduce:transition-none"
          aria-hidden="true"
        >
          IMAL
        </span>

        {/* Color patch: yellow */}
        <div
          className="absolute top-2 left-8 w-20 h-20 bg-[#FFD700] rounded-none z-10 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* Color patch: teal */}
        <div
          className="absolute top-6 left-16 w-16 h-16 bg-[#00B4D8] z-20 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* Color patch: purple */}
        <div
          className="absolute bottom-4 left-4 w-24 h-12 bg-[#7B2FBE] z-10 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* Color patch: orange */}
        <div
          className="absolute bottom-0 right-0 w-28 h-20 bg-[#FF6B35] z-10 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* Overlapping layered rectangles */}
        <div
          className="absolute top-12 right-4 w-14 h-14 bg-[#39FF14] z-20 rotate-12 motion-reduce:transition-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-8 right-8 w-10 h-10 bg-[#FF3D8B] border-2 border-yellow-300 z-30 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* Floating text labels */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 text-center motion-reduce:transition-none"
          aria-hidden="true"
        >
          <p className="text-white font-black text-xl leading-none tracking-widest uppercase drop-shadow-[2px_2px_0px_#000]">
            BOLD
          </p>
          <p className="text-yellow-300 font-black text-lg leading-none tracking-widest uppercase drop-shadow-[2px_2px_0px_#000]">
            LOUD
          </p>
          <p className="text-[#00B4D8] font-black text-xl leading-none tracking-widest uppercase drop-shadow-[2px_2px_0px_#000]">
            MORE
          </p>
        </div>

        {/* Additional overlapping shapes */}
        <div
          className="absolute top-2 right-20 w-8 h-8 bg-white opacity-60 z-30 rotate-45 motion-reduce:transition-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-8 left-20 w-12 h-6 bg-[#FF3D8B] border-4 border-[#FFD700] z-40 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* Scattered dots */}
        <div
          className="absolute top-4 left-1/2 w-4 h-4 rounded-full bg-white opacity-80 z-50 motion-reduce:transition-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 right-10 w-6 h-6 rounded-full bg-yellow-300 z-50 motion-reduce:transition-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
