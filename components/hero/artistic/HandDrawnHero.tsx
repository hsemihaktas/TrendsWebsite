export default function HandDrawnHero({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* Paper texture background */}
      <div
        aria-hidden="true"
        className="relative w-full h-full bg-[#faf8f4] overflow-hidden flex items-center justify-center"
      >
        {/* Outer sketchy frame — dashed, slightly rotated for hand-drawn feel */}
        <div
          aria-hidden="true"
          className="absolute border-2 border-dashed border-gray-700 rotate-1"
          style={{ inset: '12px', borderRadius: '2px' }}
        />

        {/* Inner frame — opposite rotation */}
        <div
          aria-hidden="true"
          className="absolute border border-dashed border-gray-400 -rotate-1"
          style={{ inset: '20px', borderRadius: '1px' }}
        />

        {/* Central composition */}
        <div
          aria-hidden="true"
          className="relative flex flex-col items-center gap-2 z-10"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {/* Handwriting-style heading */}
          <p
            aria-hidden="true"
            className="text-gray-800 italic text-lg font-semibold"
            style={{
              fontFamily: "'Georgia', serif",
              transform: 'rotate(-1.5deg)',
              letterSpacing: '0.03em',
            }}
          >
            hand-drawn
          </p>

          {/* Wavy underline SVG */}
          <svg
            aria-hidden="true"
            viewBox="0 0 80 8"
            width="80"
            height="8"
            style={{ transform: 'rotate(-0.5deg)' }}
          >
            <path
              d="M0,4 C10,0 20,8 30,4 C40,0 50,8 60,4 C70,0 80,4 80,4"
              stroke="#374151"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Subtext */}
          <p
            aria-hidden="true"
            className="text-gray-500 italic text-xs"
            style={{ fontFamily: "'Georgia', serif", transform: 'rotate(0.8deg)' }}
          >
            a warm, human feel
          </p>
        </div>

        {/* Doodle: top-left circle sketch */}
        <div
          aria-hidden="true"
          className="absolute border-2 border-gray-600 rounded-full"
          style={{
            width: '28px',
            height: '28px',
            top: '18%',
            left: '12%',
            transform: 'rotate(10deg)',
            borderStyle: 'dashed',
          }}
        />

        {/* Doodle: bottom-right circle */}
        <div
          aria-hidden="true"
          className="absolute border-2 border-gray-500 rounded-full"
          style={{
            width: '20px',
            height: '20px',
            bottom: '20%',
            right: '14%',
            transform: 'rotate(-8deg)',
            borderStyle: 'dashed',
          }}
        />

        {/* Doodle: SVG arrow top-right */}
        <svg
          aria-hidden="true"
          className="absolute"
          style={{ top: '15%', right: '12%' }}
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <path
            d="M5,25 C10,10 20,8 25,5"
            stroke="#374151"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M20,2 L25,5 L22,10"
            stroke="#374151"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Doodle: small star bottom-left */}
        <svg
          aria-hidden="true"
          className="absolute"
          style={{ bottom: '18%', left: '12%' }}
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            d="M11,2 L13,8 L19,8 L14,12 L16,18 L11,14 L6,18 L8,12 L3,8 L9,8 Z"
            stroke="#4b5563"
            strokeWidth="1"
            fill="none"
            strokeLinejoin="round"
          />
        </svg>

        {/* Paper texture noise overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(0,0,0,0.04) 18px, rgba(0,0,0,0.04) 19px)',
          }}
        />
      </div>
    </div>
  );
}
