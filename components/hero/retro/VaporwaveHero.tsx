export default function VaporwaveHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div
        aria-hidden="true"
        className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#ff71ce] to-[#b967ff]"
      >
        {/* Perspective grid overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Sky gradient upper half */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-1/2"
          style={{
            background:
              'linear-gradient(180deg, #1a0030 0%, #ff71ce 100%)',
            opacity: 0.7,
          }}
        />

        {/* Horizon line */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0"
          style={{
            top: '50%',
            height: '2px',
            background:
              'linear-gradient(90deg, transparent, #ff71ce, #b967ff, #ff71ce, transparent)',
            boxShadow: '0 0 8px #ff71ce, 0 0 20px #b967ff',
          }}
        />

        {/* Sun semi-circle rising from horizon */}
        <div
          aria-hidden="true"
          className="absolute left-1/2"
          style={{
            bottom: '50%',
            transform: 'translateX(-50%)',
            width: 72,
            height: 36,
            borderRadius: '72px 72px 0 0',
            background:
              'linear-gradient(180deg, #ffdf00 0%, #ff6600 40%, #ff0080 100%)',
            boxShadow: '0 0 20px #ff6600, 0 0 40px #ff0080',
          }}
        >
          {/* Sun stripes */}
          {[10, 20, 28].map((y, i) => (
            <div
              key={i}
              aria-hidden="true"
              className="absolute left-0 right-0"
              style={{
                top: y,
                height: 2,
                background: 'rgba(180,0,80,0.5)',
              }}
            />
          ))}
        </div>

        {/* Vaporwave title with glitch effect */}
        <div
          aria-hidden="true"
          className="absolute top-4 left-0 right-0 flex flex-col items-center z-10"
        >
          {/* Main text */}
          <div
            aria-hidden="true"
            className="text-lg font-black tracking-[0.2em] relative"
            style={{
              color: '#ff71ce',
              textShadow: '0 0 10px #ff71ce, 0 0 20px #b967ff',
              fontFamily: 'monospace',
            }}
          >
            ＶＡＰＯＲ
          </div>
          {/* Glitch offset layer */}
          <div
            aria-hidden="true"
            className="text-lg font-black tracking-[0.2em] absolute top-4"
            style={{
              color: '#01cdfe',
              opacity: 0.6,
              transform: 'translateX(2px)',
              fontFamily: 'monospace',
              textShadow: '0 0 8px #01cdfe',
            }}
          >
            ＷＡＶＥ
          </div>
          <div
            aria-hidden="true"
            className="text-lg font-black tracking-[0.2em] mt-5"
            style={{
              color: '#05ffa1',
              textShadow: '0 0 8px #05ffa1',
              fontFamily: 'monospace',
            }}
          >
            ＷＡＶＥ
          </div>
        </div>

        {/* Bottom perspective grid stripes */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden"
        >
          {[0, 6, 12, 18, 24, 30].map((offset, i) => (
            <div
              key={i}
              aria-hidden="true"
              className="absolute left-0 right-0"
              style={{
                bottom: `${offset}%`,
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent 5%, rgba(255,113,206,0.6) 30%, rgba(185,103,255,0.6) 70%, transparent 95%)',
                opacity: 1 - i * 0.1,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
