export default function SpatialUIHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full bg-[#0a0a14] overflow-hidden flex items-center justify-center" aria-hidden="true">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage:'linear-gradient(rgba(99,102,241,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.3) 1px,transparent 1px)', backgroundSize:'30px 30px' }} />

        {/* Back layer — lowest elevation */}
        <div className="absolute rounded-2xl" style={{ width:'65%', height:'55%', top:'22%', left:'5%', background:'rgba(99,102,241,0.08)', border:'1px solid rgba(99,102,241,0.2)', boxShadow:'0 0 0 1px rgba(99,102,241,0.1)', transform:'perspective(600px) rotateY(8deg) rotateX(3deg)', backdropFilter:'blur(4px)' }}>
          <div className="p-4">
            <div className="h-1.5 w-24 rounded-full mb-2" style={{ background:'rgba(255,255,255,0.2)' }} />
            <div className="h-1 w-16 rounded-full" style={{ background:'rgba(255,255,255,0.1)' }} />
          </div>
        </div>

        {/* Middle layer */}
        <div className="absolute rounded-2xl" style={{ width:'60%', height:'50%', top:'18%', left:'22%', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.15)', boxShadow:'0 20px 40px rgba(0,0,0,0.5)', transform:'perspective(600px) rotateY(-4deg) rotateX(2deg)', backdropFilter:'blur(12px)' }}>
          <div className="p-4">
            <div className="text-[10px] text-white/40 font-mono mb-2">Panel</div>
            <div className="h-8 rounded-xl mb-2" style={{ background:'rgba(255,255,255,0.08)' }} />
            <div className="flex gap-2">
              {[60,40].map((w,i)=>(<div key={i} className="h-6 rounded-lg" style={{ width:`${w}%`, background:'rgba(255,255,255,0.06)' }} />))}
            </div>
          </div>
        </div>

        {/* Front layer — highest elevation */}
        <div className="absolute rounded-2xl" style={{ width:'45%', height:'38%', top:'15%', right:'5%', background:'rgba(255,255,255,0.09)', border:'1px solid rgba(255,255,255,0.2)', boxShadow:'0 40px 80px rgba(0,0,0,0.7)', transform:'perspective(600px) rotateY(-10deg) rotateX(5deg)', backdropFilter:'blur(20px)' }}>
          <div className="p-3 flex items-center gap-2">
            <div className="w-5 h-5 rounded-full" style={{ background:'rgba(99,102,241,0.5)' }} />
            <div className="h-1.5 w-14 rounded-full" style={{ background:'rgba(255,255,255,0.25)' }} />
          </div>
        </div>

        <div className="absolute bottom-3 left-0 right-0 text-center font-mono text-[9px] text-white/30 tracking-widest uppercase">
          Spatial UI — Depth 3D
        </div>
      </div>
    </div>
  );
}
