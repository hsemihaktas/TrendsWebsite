export interface HeroInnerProps {
  className?: string;
}

export default function ClaymorphismHero({ className }: HeroInnerProps) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* Soft pastel background */}
      <div
        className="w-full h-full bg-[#f0e6ff] flex items-center justify-center"
        aria-hidden="true"
      >
        {/* Inflated clay blob 1 — pink, larger, behind */}
        <div
          className="absolute w-28 h-28 rounded-[30px] motion-reduce:transition-none"
          style={{
            background: 'hsl(330, 80%, 78%)',
            boxShadow:
              'inset -4px -4px 8px rgba(0,0,0,0.15), inset 4px 4px 8px rgba(255,255,255,0.6)',
            transform: 'translate(-20px, -10px)',
            zIndex: 1,
          }}
        />

        {/* Inflated clay blob 2 — lavender, overlapping */}
        <div
          className="absolute w-24 h-24 rounded-[30px] motion-reduce:transition-none"
          style={{
            background: 'hsl(270, 75%, 75%)',
            boxShadow:
              'inset -4px -4px 8px rgba(0,0,0,0.15), inset 4px 4px 8px rgba(255,255,255,0.6)',
            transform: 'translate(18px, 8px)',
            zIndex: 2,
          }}
        />

        {/* Inflated clay blob 3 — mint, front */}
        <div
          className="absolute w-20 h-20 rounded-[30px] motion-reduce:transition-none"
          style={{
            background: 'hsl(150, 70%, 72%)',
            boxShadow:
              'inset -4px -4px 8px rgba(0,0,0,0.15), inset 4px 4px 8px rgba(255,255,255,0.6)',
            transform: 'translate(-5px, 30px)',
            zIndex: 3,
          }}
        />
      </div>
    </div>
  );
}
