export interface HeroInnerProps {
  className?: string;
}

export default function NeumorphismHero({ className }: HeroInnerProps) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* Uniform neumorphic surface */}
      <div
        className="w-full h-full bg-[#e0e0e0] flex flex-col items-center justify-center gap-8 p-6"
        aria-hidden="true"
      >
        {/* Raised element — positive shadow (yüzeyden yükselen) */}
        <div
          className="rounded-2xl bg-[#e0e0e0] px-8 py-5 flex flex-col items-center gap-2 motion-reduce:transition-none"
          style={{
            boxShadow: '5px 5px 10px #bebebe, -5px -5px 10px #ffffff',
          }}
        >
          <div
            className="w-10 h-10 rounded-full bg-[#e0e0e0]"
            style={{
              boxShadow: '3px 3px 6px #bebebe, -3px -3px 6px #ffffff',
            }}
          />
          <div className="h-2 w-20 rounded-full bg-[#c8c8c8]" />
          <div className="h-2 w-14 rounded-full bg-[#d0d0d0]" />
        </div>

        {/* Pressed / inset element — simulated toggle switch */}
        <div
          className="rounded-2xl bg-[#e0e0e0] px-6 py-4 flex items-center gap-4 motion-reduce:transition-none"
          style={{
            boxShadow:
              'inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff',
          }}
        >
          {/* Toggle track (inset) */}
          <div
            className="relative w-14 h-7 rounded-full bg-[#e0e0e0] flex items-center px-1"
            style={{
              boxShadow:
                'inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff',
            }}
          >
            {/* Toggle thumb (raised) */}
            <div
              className="w-5 h-5 rounded-full bg-[#e0e0e0] ml-auto motion-reduce:transition-none"
              style={{
                boxShadow: '2px 2px 4px #bebebe, -2px -2px 4px #ffffff',
              }}
            />
          </div>
          <div className="h-2 w-16 rounded-full bg-[#c8c8c8]" />
        </div>
      </div>
    </div>
  );
}
