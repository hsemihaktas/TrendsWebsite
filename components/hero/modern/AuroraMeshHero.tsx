export interface HeroInnerProps {
  className?: string;
}

export default function AuroraMeshHero({ className }: HeroInnerProps) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* Aurora / mesh gradient via multiple radial-gradient layers */}
      <div
        className="w-full h-full motion-reduce:transition-none"
        style={{
          background: [
            'radial-gradient(ellipse at 20% 50%, rgba(120, 0, 255, 0.45) 0%, transparent 60%)',
            'radial-gradient(ellipse at 80% 20%, rgba(255, 0, 200, 0.45) 0%, transparent 60%)',
            'radial-gradient(ellipse at 50% 80%, rgba(0, 200, 255, 0.45) 0%, transparent 60%)',
            'radial-gradient(ellipse at 70% 70%, rgba(0, 230, 120, 0.35) 0%, transparent 55%)',
            '#0d0d1a',
          ].join(', '),
        }}
        aria-hidden="true"
      />
    </div>
  );
}
