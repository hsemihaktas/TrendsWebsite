export default function CollageDesignHero({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* Off-white collage background */}
      <div
        aria-hidden="true"
        className="relative w-full h-full overflow-hidden bg-[#f8f8f8]"
      >
        {/* Fragment 1 — large teal block, rotated */}
        <div
          aria-hidden="true"
          className="absolute"
          style={{
            width: '55%',
            height: '55%',
            top: '-8%',
            left: '-6%',
            background: '#2dd4bf',
            transform: 'rotate(3deg)',
            opacity: 0.9,
            zIndex: 1,
          }}
        />

        {/* Fragment 2 — coral/red block, skewed */}
        <div
          aria-hidden="true"
          className="absolute"
          style={{
            width: '45%',
            height: '50%',
            top: '10%',
            right: '-4%',
            background: '#ef4444',
            transform: 'rotate(-5deg) skewX(2deg)',
            opacity: 0.85,
            zIndex: 2,
          }}
        />

        {/* Fragment 3 — yellow block, overlapping */}
        <div
          aria-hidden="true"
          className="absolute"
          style={{
            width: '40%',
            height: '42%',
            bottom: '-5%',
            left: '5%',
            background: '#fbbf24',
            transform: 'rotate(-3deg) skewY(1deg)',
            opacity: 0.88,
            zIndex: 3,
          }}
        />

        {/* Fragment 4 — dark navy block */}
        <div
          aria-hidden="true"
          className="absolute"
          style={{
            width: '35%',
            height: '38%',
            bottom: '5%',
            right: '5%',
            background: '#1e293b',
            transform: 'rotate(4deg)',
            opacity: 0.92,
            zIndex: 2,
          }}
        />

        {/* Fragment 5 — semi-transparent white overlay for torn-paper effect */}
        <div
          aria-hidden="true"
          className="absolute"
          style={{
            width: '30%',
            height: '35%',
            top: '30%',
            left: '35%',
            background: 'rgba(255,255,255,0.75)',
            transform: 'rotate(-2deg) skewX(-1deg)',
            zIndex: 4,
            borderLeft: '3px solid rgba(0,0,0,0.15)',
            borderTop: '2px solid rgba(0,0,0,0.1)',
          }}
        />

        {/* Fragment 6 — violet accent, high z-index for visual tension */}
        <div
          aria-hidden="true"
          className="absolute"
          style={{
            width: '22%',
            height: '28%',
            top: '18%',
            left: '28%',
            background: '#7c3aed',
            transform: 'rotate(6deg)',
            opacity: 0.8,
            zIndex: 5,
          }}
        />

        {/* Fragment 7 — thin pink strip */}
        <div
          aria-hidden="true"
          className="absolute"
          style={{
            width: '60%',
            height: '8px',
            top: '48%',
            left: '10%',
            background: '#f472b6',
            transform: 'rotate(-1.5deg)',
            zIndex: 6,
            opacity: 0.9,
          }}
        />
      </div>
    </div>
  );
}
