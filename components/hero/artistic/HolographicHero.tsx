export default function HolographicHero({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* Full-spectrum holographic / iridescent background */}
      <div
        aria-hidden="true"
        className="relative w-full h-full overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #ff0000, #ff7700, #ffff00, #00ff00, #0000ff, #8b00ff, #ff0000)',
        }}
      >
        {/* Pearlescent shimmer overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-white/20 motion-reduce:transition-none"
          style={{
            background:
              'linear-gradient(45deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.25) 60%, rgba(255,255,255,0) 100%)',
          }}
        />

        {/* Second gradient layer — conic for jewel-like depth */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60 motion-reduce:transition-none"
          style={{
            background:
              'conic-gradient(from 180deg at 50% 50%, #ff71ce, #01cdfe, #05ffa1, #b967ff, #fffb96, #ff71ce)',
            mixBlendMode: 'overlay',
          }}
        />

        {/* Third layer: radial highlight for iridescent glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 motion-reduce:transition-none"
          style={{
            background:
              'radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.45) 0%, transparent 60%), radial-gradient(ellipse at 70% 65%, rgba(180,0,255,0.3) 0%, transparent 55%)',
          }}
        />

        {/* Floating iridescent cards / shards */}
        <div
          aria-hidden="true"
          className="absolute rounded-xl"
          style={{
            top: '12%',
            left: '10%',
            width: '38%',
            height: '45%',
            background:
              'linear-gradient(120deg, rgba(255,255,255,0.5) 0%, rgba(255,100,200,0.3) 50%, rgba(0,200,255,0.4) 100%)',
            border: '1px solid rgba(255,255,255,0.6)',
            transform: 'rotate(-6deg)',
            boxShadow: '0 8px 32px rgba(139,0,255,0.3)',
          }}
        />

        <div
          aria-hidden="true"
          className="absolute rounded-xl"
          style={{
            bottom: '10%',
            right: '8%',
            width: '42%',
            height: '40%',
            background:
              'linear-gradient(220deg, rgba(255,255,255,0.45) 0%, rgba(0,255,200,0.3) 50%, rgba(255,50,150,0.35) 100%)',
            border: '1px solid rgba(255,255,255,0.5)',
            transform: 'rotate(5deg)',
            boxShadow: '0 8px 32px rgba(0,255,150,0.25)',
          }}
        />

        {/* Central pearl orb */}
        <div
          aria-hidden="true"
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle at 35% 35%, #ffffff 0%, #e0b0ff 40%, #00d4ff 80%, #ff69b4 100%)',
            boxShadow:
              '0 0 24px rgba(255,255,255,0.7), 0 0 48px rgba(180,0,255,0.4)',
          }}
        />
      </div>
    </div>
  );
}
