export default function LiquidGlassHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div
        className="relative w-full h-full overflow-hidden"
        aria-hidden="true"
        style={{
          background: [
            'radial-gradient(ellipse 80% 80% at 20% 20%, rgba(99,102,241,0.9) 0%, transparent 55%)',
            'radial-gradient(ellipse 70% 70% at 80% 15%, rgba(236,72,153,0.85) 0%, transparent 55%)',
            'radial-gradient(ellipse 60% 60% at 50% 90%, rgba(14,165,233,0.85) 0%, transparent 55%)',
            'radial-gradient(ellipse 50% 50% at 85% 75%, rgba(34,197,94,0.7) 0%, transparent 55%)',
            '#0d0d1a',
          ].join(','),
        }}
      >
        {/* iOS-style status bar */}
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full px-5 py-1.5 flex items-center gap-3 w-[82%]"
          style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(255,255,255,0.22)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
          }}
        >
          <div className="w-4 h-4 rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
          <div className="flex-1 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
          <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
          <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
        </div>

        {/* Main content card */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl p-4 w-[72%]"
          style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(32px) saturate(200%) brightness(1.08)',
            WebkitBackdropFilter: 'blur(32px) saturate(200%) brightness(1.08)',
            border: '1px solid rgba(255,255,255,0.25)',
            boxShadow: '0 16px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1)',
          }}
        >
          {/* Top highlight — simulates light hitting glass edge */}
          <div
            className="absolute top-0 left-4 right-4 h-px rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)' }}
          />
          <div className="h-2.5 w-3/4 rounded-full mb-2.5" style={{ background: 'rgba(255,255,255,0.4)' }} />
          <div className="h-2 w-1/2 rounded-full mb-4" style={{ background: 'rgba(255,255,255,0.22)' }} />
          <div className="flex gap-2">
            <div className="flex-1 h-7 rounded-2xl" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)' }} />
            <div className="w-7 h-7 rounded-2xl" style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.25)' }} />
          </div>
        </div>

        {/* Floating bottom pill — tab bar style */}
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-2xl px-6 py-2 flex gap-5 w-[78%] justify-center"
          style={{
            background: 'rgba(255,255,255,0.09)',
            backdropFilter: 'blur(24px) saturate(200%)',
            WebkitBackdropFilter: 'blur(24px) saturate(200%)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.18)',
          }}
        >
          {[
            { active: true,  size: 8 },
            { active: false, size: 5 },
            { active: false, size: 5 },
            { active: false, size: 5 },
          ].map((d, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: d.size * 2,
                height: d.size * 2,
                background: d.active ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.3)',
              }}
            />
          ))}
        </div>

        {/* Label */}
        <div
          className="absolute top-3 right-3 text-[8px] font-semibold uppercase tracking-widest"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          iOS 26
        </div>
      </div>
    </div>
  );
}
