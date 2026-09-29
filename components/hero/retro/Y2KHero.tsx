export default function Y2KHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* Bright metallic gradient background */}
      <div
        aria-hidden="true"
        className="w-full h-full flex flex-col items-center justify-center gap-3 p-4 bg-gradient-to-br from-[#c0e0ff] via-[#e0c0ff] to-[#c0ffc0] relative overflow-hidden"
      >
        {/* CD/hologram shimmer overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            background:
              'conic-gradient(from 0deg at 50% 50%, #ff0080, #ff8c00, #ffff00, #00ff00, #00e5ff, #8000ff, #ff0080)',
            mixBlendMode: 'screen',
          }}
        />

        {/* Chrome metallic text */}
        <div
          aria-hidden="true"
          className="text-2xl font-black tracking-wider relative z-10"
          style={{
            background:
              'linear-gradient(180deg, #ffffff 0%, #a8d8ff 30%, #6060c0 55%, #c0e8ff 75%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 4px rgba(120,180,255,0.7))',
          }}
        >
          Y2K
        </div>

        {/* Transparent plastic pill/bubble elements */}
        <div
          aria-hidden="true"
          className="flex gap-2 relative z-10"
        >
          {['#00d4ff', '#ff69b4', '#00ff88'].map((color, i) => (
            <div
              key={i}
              aria-hidden="true"
              className="px-3 py-1.5 rounded-full text-[9px] font-bold backdrop-blur-sm"
              style={{
                background: 'rgba(255,255,255,0.30)',
                border: '1px solid rgba(255,255,255,0.60)',
                color: color,
                textShadow: `0 0 6px ${color}`,
                boxShadow:
                  '0 2px 8px rgba(255,255,255,0.4), inset 0 1px 0 rgba(255,255,255,0.8)',
              }}
            >
              {['© 2000', 'CLICK', 'NEW!'][i]}
            </div>
          ))}
        </div>

        {/* Plastic/glass card panel */}
        <div
          aria-hidden="true"
          className="w-40 rounded-xl p-3 relative z-10 backdrop-blur-sm"
          style={{
            background: 'rgba(255,255,255,0.30)',
            border: '1px solid rgba(255,255,255,0.60)',
            boxShadow:
              '0 4px 16px rgba(100,160,255,0.3), inset 0 1px 0 rgba(255,255,255,0.9)',
          }}
        >
          {/* Hologram-like gradient shimmer on card */}
          <div
            aria-hidden="true"
            className="w-full h-1 rounded-full mb-2"
            style={{
              background:
                'linear-gradient(90deg, #ff69b4, #00d4ff, #00ff88, #ff69b4)',
            }}
          />
          <div
            className="text-[9px] font-bold text-center"
            style={{
              background:
                'linear-gradient(90deg, #0066cc, #cc00cc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ENTER SITE ▶
          </div>
          <div className="text-[8px] text-center mt-1" style={{ color: '#6666cc' }}>
            Best viewed in IE 6.0
          </div>
        </div>

        {/* Bubble decorations */}
        {[
          { size: 20, top: '10%', left: '8%', color: 'rgba(0,212,255,0.4)' },
          { size: 14, top: '70%', left: '12%', color: 'rgba(255,105,180,0.4)' },
          { size: 18, top: '15%', right: '10%', color: 'rgba(0,255,136,0.4)' },
          { size: 12, top: '65%', right: '8%', color: 'rgba(180,100,255,0.4)' },
        ].map((b, i) => (
          <div
            key={i}
            aria-hidden="true"
            className="absolute rounded-full"
            style={{
              width: b.size,
              height: b.size,
              top: b.top,
              left: 'left' in b ? b.left : undefined,
              right: 'right' in b ? (b as { right: string }).right : undefined,
              background: b.color,
              border: '1px solid rgba(255,255,255,0.7)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
