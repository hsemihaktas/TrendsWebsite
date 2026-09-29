export default function ChromeLiquidHero({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* Mirror-like metallic surface */}
      <div
        aria-hidden="true"
        className="relative w-full h-full overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #1a1a1a 0%, #ffffff 30%, #888888 50%, #ffffff 70%, #1a1a1a 100%)',
        }}
      >
        {/* Specular highlight — bright white streak */}
        <div
          aria-hidden="true"
          className="absolute motion-reduce:transition-none"
          style={{
            top: '15%',
            left: '-10%',
            width: '120%',
            height: '14%',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.9) 60%, transparent 100%)',
            transform: 'rotate(-3deg)',
            filter: 'blur(3px)',
          }}
        />

        {/* Liquid contour line 1 */}
        <div
          aria-hidden="true"
          className="absolute motion-reduce:transition-none"
          style={{
            top: '30%',
            left: '-5%',
            width: '110%',
            height: '3px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(200,200,200,0.6) 20%, rgba(255,255,255,0.9) 50%, rgba(180,180,180,0.5) 80%, transparent 100%)',
            borderRadius: '50%',
            transform: 'rotate(-1.5deg) scaleY(2)',
          }}
        />

        {/* Liquid contour line 2 */}
        <div
          aria-hidden="true"
          className="absolute motion-reduce:transition-none"
          style={{
            top: '55%',
            left: '-5%',
            width: '110%',
            height: '2px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(160,160,160,0.5) 25%, rgba(255,255,255,0.8) 50%, rgba(150,150,150,0.4) 75%, transparent 100%)',
            borderRadius: '50%',
            transform: 'rotate(2deg) scaleY(2.5)',
          }}
        />

        {/* Liquid contour line 3 */}
        <div
          aria-hidden="true"
          className="absolute motion-reduce:transition-none"
          style={{
            top: '72%',
            left: '-5%',
            width: '110%',
            height: '2px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(120,120,120,0.4) 30%, rgba(220,220,220,0.7) 50%, rgba(100,100,100,0.3) 70%, transparent 100%)',
            borderRadius: '50%',
            transform: 'rotate(-1deg) scaleY(2)',
          }}
        />

        {/* Dark reflective bottom gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, transparent 40%, rgba(20,20,20,0.55) 100%)',
          }}
        />

        {/* SVG flowing curves for liquid metal contours */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C40,40 80,80 120,55 C160,30 180,70 200,50"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M0,80 C50,65 90,95 140,72 C170,58 190,82 200,70"
            stroke="rgba(200,200,200,0.4)"
            strokeWidth="0.8"
            fill="none"
          />
          <path
            d="M0,40 C30,30 70,50 110,35 C150,20 175,45 200,30"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="0.6"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
