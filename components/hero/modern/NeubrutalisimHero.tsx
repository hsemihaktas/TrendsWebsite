export interface HeroInnerProps {
  className?: string;
}

export default function NeubrutalisimHero({ className }: HeroInnerProps) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* Flat yellow background */}
      <div
        className="w-full h-full bg-[#FFED00] flex flex-col items-center justify-center gap-4 p-6"
        aria-hidden="true"
      >
        {/* Simulated card element — rotated slightly */}
        <div
          className="border-2 border-black shadow-[4px_4px_0px_0px_#000] bg-white px-5 py-3 font-black uppercase text-sm tracking-wider motion-reduce:transition-none"
          style={{ transform: 'rotate(-2deg)' }}
        >
          CARD COMPONENT
        </div>

        {/* Simulated button — offset in opposite direction */}
        <div
          className="border-2 border-black shadow-[4px_4px_0px_0px_#000] bg-[#FF3B30] px-6 py-2 font-black uppercase text-white text-sm tracking-widest cursor-default motion-reduce:transition-none"
          style={{ transform: 'rotate(1deg)' }}
        >
          CLICK ME
        </div>

        {/* Simulated text label */}
        <div
          className="border-2 border-black shadow-[4px_4px_0px_0px_#000] bg-[#007AFF] px-4 py-1 font-black uppercase text-white text-xs tracking-widest motion-reduce:transition-none"
          style={{ transform: 'rotate(-1deg)' }}
        >
          NEUBRUTALISM
        </div>
      </div>
    </div>
  );
}
