const P = 7; // px per pixel

type PD = [number, number, string];

const C = { R:'#e63946',W:'#f8f9fa',Y:'#ffd700',G:'#2dc653',B:'#4361ee',C:'#4cc9f0',P:'#f72585',K:'#111' };

const HEART: PD[] = [
  [1,0,C.R],[2,0,C.R],[5,0,C.R],[6,0,C.R],
  [0,1,C.R],[1,1,C.R],[2,1,C.R],[3,1,C.R],[4,1,C.R],[5,1,C.R],[6,1,C.R],[7,1,C.R],
  [0,2,C.R],[1,2,C.W],[2,2,C.R],[3,2,C.R],[4,2,C.R],[5,2,C.R],[6,2,C.R],[7,2,C.R],
  [1,3,C.R],[2,3,C.R],[3,3,C.R],[4,3,C.R],[5,3,C.R],[6,3,C.R],
  [2,4,C.R],[3,4,C.R],[4,4,C.R],[5,4,C.R],
  [3,5,C.R],[4,5,C.R],
];

const STAR: PD[] = [
  [2,0,C.Y],
  [1,1,C.Y],[2,1,C.Y],[3,1,C.Y],
  [0,2,C.Y],[1,2,C.Y],[2,2,C.Y],[3,2,C.Y],[4,2,C.Y],
  [1,3,C.Y],[2,3,C.Y],[3,3,C.Y],
  [0,4,C.Y],[2,4,C.Y],[4,4,C.Y],
];

const CHAR: PD[] = [
  [1,0,C.Y],[2,0,C.Y],[3,0,C.Y],
  [0,1,C.Y],[1,1,C.W],[2,1,C.Y],[3,1,C.B],[4,1,C.Y],
  [0,2,C.Y],[1,2,C.Y],[2,2,C.Y],[3,2,C.Y],[4,2,C.Y],
  [1,3,C.B],[2,3,C.R],[3,3,C.B],
  [0,4,C.B],[1,4,C.B],[2,4,C.R],[3,4,C.B],[4,4,C.B],
  [1,5,C.B],[3,5,C.B],
  [1,6,C.K],[3,6,C.K],
];

const MUSHROOM: PD[] = [
  [2,0,C.R],[3,0,C.R],[4,0,C.R],
  [1,1,C.R],[2,1,C.W],[3,1,C.R],[4,1,C.R],[5,1,C.R],
  [0,2,C.R],[1,2,C.R],[2,2,C.R],[3,2,C.R],[4,2,C.R],[5,2,C.R],[6,2,C.R],
  [0,3,C.R],[1,3,C.R],[2,3,C.R],[3,3,C.R],[4,3,C.R],[5,3,C.R],[6,3,C.R],
  [1,4,C.W],[2,4,C.W],[4,4,C.W],[5,4,C.W],
  [2,5,C.W],[3,5,C.W],[4,5,C.W],
];

function makeShadow(pixels: PD[], offsetX = 0, offsetY = 0): string {
  return pixels.map(([c, r, color]) =>
    `${(c + offsetX) * P}px ${(r + offsetY) * P}px 0 0 ${color}`
  ).join(',');
}

const GROUND: PD[] = Array.from({ length: 20 }, (_, i) => [i, 0, i % 2 === 0 ? C.G : C.B] as PD);

export default function PixelArtHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full bg-[#1a1a2e] overflow-hidden" style={{ imageRendering:'pixelated' }} aria-hidden="true">
        {/* Stars bg */}
        {[[12,15],[35,8],[65,20],[82,12],[20,35],[55,30],[88,40]].map(([l,t],i)=>(
          <div key={i} className="absolute bg-white" style={{ left:`${l}%`,top:`${t}%`,width:P,height:P,opacity:0.4 }} />
        ))}

        {/* Ground */}
        <div className="absolute" style={{ left:8,bottom:16,width:P,height:P,background:'transparent',boxShadow:makeShadow(GROUND) }} />

        {/* Character */}
        <div className="absolute" style={{ left:16,bottom:16+P,width:P,height:P,background:'transparent',boxShadow:makeShadow(CHAR) }} />

        {/* Mushroom */}
        <div className="absolute" style={{ left:80,bottom:16+P,width:P,height:P,background:'transparent',boxShadow:makeShadow(MUSHROOM) }} />

        {/* Heart */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top:12,width:P,height:P,background:'transparent',boxShadow:makeShadow(HEART) }} />

        {/* Star */}
        <div className="absolute" style={{ right:16,top:8,width:P,height:P,background:'transparent',boxShadow:makeShadow(STAR) }} />

        {/* Press start */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center">
          <span className="text-[8px] font-mono tracking-widest text-white animate-pulse motion-reduce:animate-none" style={{ textShadow:`0 0 6px #4cc9f0` }}>
            PRESS START
          </span>
        </div>
      </div>
    </div>
  );
}
