export default function DopamineDesignHero({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div
        className="relative w-full h-full overflow-hidden bg-[#FF3D8B]"
        aria-hidden="true"
      >
        {/* Lime green large organic blob — top left */}
        <div
          className="absolute -top-6 -left-6 w-32 h-32 bg-[#39FF14] rounded-full z-10 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* Vivid yellow blob — bottom right */}
        <div
          className="absolute -bottom-8 -right-8 w-36 h-36 bg-[#FFD700] rounded-full z-10 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* Orange irregular blob — top right */}
        <div
          className="absolute -top-4 right-4 w-20 h-20 bg-[#FF6B35] z-20 motion-reduce:transition-none"
          style={{ borderRadius: '60% 40% 70% 30% / 40% 60% 40% 60%' }}
          aria-hidden="true"
        />

        {/* Hot pink pill — center left */}
        <div
          className="absolute top-1/3 -left-4 w-16 h-8 bg-[#FF3D8B] rounded-full border-4 border-white z-20 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* Lime green small dot */}
        <div
          className="absolute bottom-6 left-6 w-8 h-8 bg-[#39FF14] rounded-full z-30 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* Yellow small dot */}
        <div
          className="absolute top-6 left-1/3 w-6 h-6 bg-[#FFD700] rounded-full z-30 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* Central joyful UI card — organic rounded */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-white px-4 py-3 shadow-lg motion-reduce:transition-none"
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
          aria-hidden="true"
        >
          <p className="text-[#FF3D8B] font-black text-base leading-none text-center">
            ✦ JOY ✦
          </p>
          <p className="text-[#FF6B35] font-bold text-xs text-center mt-1">
            ENERGY
          </p>
        </div>

        {/* Orange ring accent */}
        <div
          className="absolute bottom-4 right-6 w-12 h-12 rounded-full border-4 border-[#FF6B35] z-30 motion-reduce:transition-none"
          aria-hidden="true"
        />

        {/* Small decorative dots scattered */}
        <div
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-white rounded-full opacity-80 z-40 motion-reduce:transition-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-[#FFD700] rounded-full z-40 motion-reduce:transition-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
