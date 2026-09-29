export default function KawaiiHero({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* Pastel background */}
      <div
        aria-hidden="true"
        className="relative w-full h-full overflow-hidden flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #FFB7C5 0%, #D4B8FF 60%, #FFF3B0 100%)' }}
      >
        {/* Scattered star decorations */}
        <span
          aria-hidden="true"
          className="absolute text-yellow-300 text-sm"
          style={{ top: '8%', left: '8%' }}
        >
          ★
        </span>
        <span
          aria-hidden="true"
          className="absolute text-pink-300 text-xs"
          style={{ top: '12%', right: '12%' }}
        >
          ✿
        </span>
        <span
          aria-hidden="true"
          className="absolute text-purple-300 text-sm"
          style={{ bottom: '10%', left: '10%' }}
        >
          ♥
        </span>
        <span
          aria-hidden="true"
          className="absolute text-yellow-400 text-xs"
          style={{ bottom: '12%', right: '8%' }}
        >
          ★
        </span>
        <span
          aria-hidden="true"
          className="absolute text-pink-200 text-xs"
          style={{ top: '40%', left: '6%' }}
        >
          ✿
        </span>
        <span
          aria-hidden="true"
          className="absolute text-purple-200 text-xs"
          style={{ top: '35%', right: '7%' }}
        >
          ♥
        </span>

        {/* Central cute character */}
        <div
          aria-hidden="true"
          className="relative flex flex-col items-center gap-1 z-10"
        >
          {/* Head */}
          <div
            aria-hidden="true"
            className="relative rounded-full flex items-center justify-center"
            style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, #ffe0ec 0%, #ffd6f5 100%)',
              boxShadow: '0 4px 12px rgba(212,184,255,0.5)',
              borderRadius: '50%',
            }}
          >
            {/* Eyes */}
            <div
              aria-hidden="true"
              className="absolute flex gap-3"
              style={{ top: '35%' }}
            >
              <div
                aria-hidden="true"
                className="rounded-full bg-gray-800"
                style={{ width: '10px', height: '12px', borderRadius: '50%' }}
              />
              <div
                aria-hidden="true"
                className="rounded-full bg-gray-800"
                style={{ width: '10px', height: '12px', borderRadius: '50%' }}
              />
            </div>

            {/* Rosy cheeks */}
            <div
              aria-hidden="true"
              className="absolute rounded-full"
              style={{
                width: '12px',
                height: '7px',
                background: 'rgba(255, 150, 180, 0.5)',
                borderRadius: '50%',
                bottom: '28%',
                left: '12%',
              }}
            />
            <div
              aria-hidden="true"
              className="absolute rounded-full"
              style={{
                width: '12px',
                height: '7px',
                background: 'rgba(255, 150, 180, 0.5)',
                borderRadius: '50%',
                bottom: '28%',
                right: '12%',
              }}
            />

            {/* Smile — arc via SVG */}
            <svg
              aria-hidden="true"
              className="absolute"
              style={{ bottom: '16%' }}
              width="22"
              height="10"
              viewBox="0 0 22 10"
            >
              <path
                d="M2,2 Q11,10 20,2"
                stroke="#555"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Tiny highlight dot on eyes */}
            <div
              aria-hidden="true"
              className="absolute bg-white rounded-full"
              style={{ width: '3px', height: '3px', top: '35%', left: '28%' }}
            />
            <div
              aria-hidden="true"
              className="absolute bg-white rounded-full"
              style={{ width: '3px', height: '3px', top: '35%', right: '26%' }}
            />
          </div>

          {/* Decorative text */}
          <div
            aria-hidden="true"
            className="text-pink-500 text-xs font-bold mt-1"
            style={{ letterSpacing: '0.1em' }}
          >
            ◕‿◕
          </div>
        </div>

        {/* Small flower decorations */}
        <div
          aria-hidden="true"
          className="absolute rounded-full"
          style={{
            width: '18px',
            height: '18px',
            background: '#FFF3B0',
            top: '20%',
            left: '20%',
            boxShadow: '0 0 0 4px rgba(255,183,197,0.5)',
            borderRadius: '50%',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute rounded-full"
          style={{
            width: '14px',
            height: '14px',
            background: '#D4B8FF',
            bottom: '22%',
            right: '20%',
            boxShadow: '0 0 0 3px rgba(255,243,176,0.6)',
            borderRadius: '50%',
          }}
        />
      </div>
    </div>
  );
}
