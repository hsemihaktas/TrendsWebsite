export default function SynthwaveHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div
        aria-hidden="true"
        className="w-full h-full relative overflow-hidden bg-[#1a0030]"
      >
        {/* Stars in the sky */}
        {[
          { top: '8%', left: '15%' },
          { top: '12%', left: '40%' },
          { top: '6%', left: '65%' },
          { top: '18%', left: '80%' },
          { top: '22%', left: '25%' },
          { top: '5%', left: '88%' },
          { top: '14%', left: '55%' },
        ].map((s, i) => (
          <div
            key={i}
            aria-hidden="true"
            className="absolute rounded-full"
            style={{
              top: s.top,
              left: s.left,
              width: 2,
              height: 2,
              background: '#ffffff',
              boxShadow: '0 0 2px #ffffff, 0 0 4px rgba(255,255,255,0.5)',
            }}
          />
        ))}

        {/* Retro-futurist sun / glow orb on horizon */}
        <div
          aria-hidden="true"
          className="absolute left-1/2"
          style={{
            top: '38%',
            transform: 'translate(-50%, -50%)',
            width: 56,
            height: 56,
            borderRadius: '50%',
            background:
              'radial-gradient(circle at 50% 40%, #ffdf00 0%, #ff6600 40%, #ff00ff 80%, transparent 100%)',
            boxShadow:
              '0 0 30px #ff00ff, 0 0 60px rgba(255,0,255,0.4)',
          }}
        >
          {/* Horizontal sun stripes */}
          {[14, 22, 30, 38].map((y, i) => (
            <div
              key={i}
              aria-hidden="true"
              className="absolute left-0 right-0"
              style={{ top: y, height: 2, background: 'rgba(100,0,50,0.7)' }}
            />
          ))}
        </div>

        {/* Neon horizon line */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0"
          style={{
            top: '46%',
            height: '2px',
            background:
              'linear-gradient(90deg, transparent 0%, #ff00ff 20%, #00ffff 50%, #ff00ff 80%, transparent 100%)',
            boxShadow: '0 0 8px #ff00ff, 0 0 16px rgba(0,255,255,0.5)',
          }}
        />

        {/* Perspective horizontal grid lines below horizon */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 bottom-0"
          style={{ top: '46%' }}
        >
          {/* Lines spaced getting denser toward horizon (closer together near top) */}
          {[
            { bottom: '80%', opacity: 0.9 },
            { bottom: '65%', opacity: 0.8 },
            { bottom: '50%', opacity: 0.7 },
            { bottom: '36%', opacity: 0.6 },
            { bottom: '24%', opacity: 0.55 },
            { bottom: '14%', opacity: 0.5 },
            { bottom: '6%', opacity: 0.45 },
            { bottom: '1%', opacity: 0.4 },
          ].map((line, i) => (
            <div
              key={i}
              aria-hidden="true"
              className="absolute left-0 right-0"
              style={{
                bottom: line.bottom,
                height: '1px',
                background: `linear-gradient(90deg, transparent 5%, rgba(255,0,255,${line.opacity}) 50%, transparent 95%)`,
              }}
            />
          ))}

          {/* Vertical perspective lines (converging toward center horizon) */}
          {[-40, -25, -12, 0, 12, 25, 40].map((offset, i) => (
            <div
              key={i}
              aria-hidden="true"
              className="absolute bottom-0"
              style={{
                left: `calc(50% + ${offset}%)`,
                width: '1px',
                height: '100%',
                background: `linear-gradient(180deg, rgba(0,255,255,0.6) 0%, rgba(0,255,255,0.1) 100%)`,
                transform: `perspective(200px) rotateX(20deg)`,
                opacity: 0.5,
              }}
            />
          ))}
        </div>

        {/* SYNTHWAVE label */}
        <div
          aria-hidden="true"
          className="absolute top-3 left-0 right-0 text-center"
        >
          <span
            className="text-sm font-black tracking-[0.25em] uppercase"
            style={{
              color: '#ff00ff',
              textShadow:
                '0 0 6px #ff00ff, 0 0 12px #ff00ff, 0 0 24px rgba(255,0,255,0.5)',
              fontFamily: 'monospace',
            }}
          >
            SYNTHWAVE
          </span>
        </div>

        {/* Cyan accent lines left & right */}
        <div
          aria-hidden="true"
          className="absolute top-10 bottom-0 left-2"
          style={{
            width: '1px',
            background:
              'linear-gradient(180deg, rgba(0,255,255,0.8) 0%, rgba(0,255,255,0) 100%)',
            boxShadow: '0 0 4px #00ffff',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-10 bottom-0 right-2"
          style={{
            width: '1px',
            background:
              'linear-gradient(180deg, rgba(0,255,255,0.8) 0%, rgba(0,255,255,0) 100%)',
            boxShadow: '0 0 4px #00ffff',
          }}
        />
      </div>
    </div>
  );
}
