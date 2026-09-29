export interface HeroInnerProps {
  className?: string;
}

export default function GlassmorphismHero({ className }: HeroInnerProps) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* Colorful gradient background */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #7b2ff7 0%, #2563eb 50%, #0ea5e9 100%)',
        }}
        aria-hidden="true"
      >
        {/* Background blur orbs */}
        <div
          className="absolute w-24 h-24 rounded-full bg-pink-400 opacity-40 blur-2xl motion-reduce:transition-none"
          style={{ top: '10%', left: '15%' }}
        />
        <div
          className="absolute w-20 h-20 rounded-full bg-teal-300 opacity-40 blur-2xl motion-reduce:transition-none"
          style={{ bottom: '10%', right: '10%' }}
        />

        {/* First glass card — back layer */}
        <div
          className="absolute backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4 w-40 shadow-lg"
          style={{ top: '15%', left: '20%', transform: 'rotate(-5deg)' }}
        >
          <div className="h-2 bg-white/50 rounded mb-2 w-3/4" />
          <div className="h-2 bg-white/30 rounded w-full" />
          <div className="h-2 bg-white/30 rounded w-5/6 mt-1" />
        </div>

        {/* Second glass card — front layer, overlapping */}
        <div
          className="absolute backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4 w-44 shadow-xl"
          style={{ bottom: '15%', right: '15%', transform: 'rotate(4deg)' }}
        >
          <div className="h-3 w-3 rounded-full bg-white/70 mb-2" />
          <div className="h-2 bg-white/50 rounded mb-2 w-full" />
          <div className="h-2 bg-white/30 rounded w-2/3" />
          <div className="mt-3 h-5 rounded-lg bg-white/30 w-full" />
        </div>
      </div>
    </div>
  );
}
