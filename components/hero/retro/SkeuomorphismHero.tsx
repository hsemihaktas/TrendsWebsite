export default function SkeuomorphismHero({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* Leather/wood texture background via linear-gradient */}
      <div
        aria-hidden="true"
        className="w-full h-full flex flex-col items-center justify-center gap-4 p-4"
        style={{
          background:
            'linear-gradient(135deg, #8B6914 0%, #A0783C 25%, #8B6914 50%, #7A5C28 75%, #8B6914 100%)',
        }}
      >
        {/* Simulated physical button with emboss effect */}
        <div
          aria-hidden="true"
          className="flex items-center justify-center gap-4"
        >
          {/* Raised button */}
          <div
            aria-hidden="true"
            className="w-20 h-10 rounded-md flex items-center justify-center cursor-pointer select-none"
            style={{
              background:
                'linear-gradient(145deg, #d4a843 0%, #b8891f 50%, #9a7018 100%)',
              boxShadow:
                '2px 2px 4px rgba(0,0,0,0.5), -1px -1px 2px rgba(255,255,255,0.3), inset 1px 1px 3px rgba(255,255,255,0.2)',
            }}
          >
            {/* Glossy highlight on button */}
            <div
              aria-hidden="true"
              className="absolute w-16 h-3 rounded-full top-1"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 100%)',
              }}
            />
            <span
              className="text-xs font-bold relative z-10"
              style={{
                color: '#5a3e0a',
                textShadow: '0 1px 0 rgba(255,255,255,0.25)',
              }}
            >
              PLAY
            </span>
          </div>

          {/* Toggle switch */}
          <div
            aria-hidden="true"
            className="flex flex-col items-center gap-1"
          >
            <div
              aria-hidden="true"
              className="w-12 h-6 rounded-full relative"
              style={{
                background:
                  'linear-gradient(180deg, #5a3e0a 0%, #3d2808 100%)',
                boxShadow:
                  'inset 2px 2px 5px rgba(0,0,0,0.6), inset -1px -1px 3px rgba(255,255,255,0.1)',
              }}
            >
              {/* Switch knob — toggled on */}
              <div
                aria-hidden="true"
                className="absolute right-1 top-1 w-4 h-4 rounded-full"
                style={{
                  background:
                    'linear-gradient(145deg, #e8c060 0%, #c49820 100%)',
                  boxShadow:
                    '1px 1px 3px rgba(0,0,0,0.4), -1px -1px 2px rgba(255,255,255,0.2)',
                }}
              />
            </div>
            <span
              className="text-[9px] font-semibold"
              style={{ color: '#e8c060', textShadow: '0 1px 2px rgba(0,0,0,0.7)' }}
            >
              ON
            </span>
          </div>
        </div>

        {/* Simulated LCD display panel */}
        <div
          aria-hidden="true"
          className="w-44 rounded-md p-2"
          style={{
            background:
              'linear-gradient(180deg, #1a2a0a 0%, #2a3d10 100%)',
            boxShadow:
              'inset 2px 2px 6px rgba(0,0,0,0.7), inset -1px -1px 2px rgba(255,255,255,0.05), 0 1px 0 rgba(255,255,255,0.1)',
            border: '2px solid #3d2808',
          }}
        >
          {/* Screen glare */}
          <div
            aria-hidden="true"
            className="w-full h-1 rounded-full mb-1"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(180,230,100,0.2) 50%, transparent 100%)',
            }}
          />
          <div
            className="text-center text-xs font-mono"
            style={{ color: '#7cfc00', textShadow: '0 0 6px #7cfc00' }}
          >
            12:34 PM
          </div>
          <div
            className="text-center text-[9px] font-mono mt-0.5"
            style={{ color: '#5ab800', opacity: 0.8 }}
          >
            ▶ Track 03
          </div>
        </div>

        {/* Volume knob row */}
        <div aria-hidden="true" className="flex items-center gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              aria-hidden="true"
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                background:
                  'radial-gradient(circle at 35% 35%, #c49820 0%, #7a5c0a 60%, #4a3808 100%)',
                boxShadow:
                  '2px 2px 4px rgba(0,0,0,0.5), -1px -1px 2px rgba(255,255,255,0.15)',
              }}
            >
              <div
                aria-hidden="true"
                className="w-0.5 h-3 rounded-full"
                style={{
                  background: '#e8c060',
                  transformOrigin: '50% 100%',
                  transform: `rotate(${(i - 1) * 30}deg)`,
                  boxShadow: '0 0 2px rgba(0,0,0,0.8)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
