export interface HeroInnerProps {
  className?: string;
}

export default function BentoGridHero({ className }: HeroInnerProps) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* Bento grid container — fills entire hero area */}
      <div
        className="w-full h-full bg-gray-100 p-3"
        aria-hidden="true"
      >
        <div
          className="w-full h-full grid gap-2"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
          }}
        >
          {/* 2×2 large tile — text block */}
          <div
            className="rounded-xl bg-[#1c1c1e] flex flex-col justify-end p-3"
            style={{ gridColumn: 'span 2', gridRow: 'span 2' }}
          >
            <div className="h-2 bg-white/30 rounded w-3/4 mb-1" />
            <div className="h-2 bg-white/20 rounded w-1/2" />
          </div>

          {/* 1×1 tile — color area */}
          <div className="rounded-xl bg-[#FF6B6B]" />

          {/* 1×1 tile — icon/shape */}
          <div className="rounded-xl bg-[#4ECDC4] flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-white/60" />
          </div>

          {/* 1×2 wide tile — content bar */}
          <div
            className="rounded-xl bg-[#FFE66D] flex items-center px-3 gap-2"
            style={{ gridColumn: 'span 2' }}
          >
            <div className="w-5 h-5 rounded-md bg-yellow-600/30 flex-shrink-0" />
            <div className="h-2 bg-yellow-800/30 rounded flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
