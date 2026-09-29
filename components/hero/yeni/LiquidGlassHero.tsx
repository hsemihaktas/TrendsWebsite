export default function LiquidGlassHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" aria-hidden="true">
        <div className="absolute w-40 h-40 rounded-full opacity-60 blur-3xl" style={{ background:'#7c3aed', top:'-10%', left:'20%' }} />
        <div className="absolute w-32 h-32 rounded-full opacity-50 blur-3xl" style={{ background:'#0ea5e9', bottom:'-5%', right:'15%' }} />
        <div className="absolute w-28 h-28 rounded-full opacity-40 blur-2xl" style={{ background:'#ec4899', top:'30%', right:'-5%' }} />

        <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded-2xl px-6 py-2 w-[85%]"
          style={{ background:'rgba(255,255,255,0.08)', backdropFilter:'blur(30px) saturate(200%)', border:'1px solid rgba(255,255,255,0.2)', boxShadow:'0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)' }}>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full" style={{ background:'rgba(255,255,255,0.2)' }} />
            <div className="h-1.5 flex-1 rounded-full" style={{ background:'rgba(255,255,255,0.2)' }} />
            <div className="w-4 h-4 rounded-full" style={{ background:'rgba(255,255,255,0.15)' }} />
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl p-5 w-[75%]"
          style={{ background:'rgba(255,255,255,0.07)', backdropFilter:'blur(40px) saturate(180%) brightness(1.1)', border:'1px solid rgba(255,255,255,0.18)', boxShadow:'0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)' }}>
          <div className="h-2 w-3/4 rounded-full mb-2" style={{ background:'rgba(255,255,255,0.35)' }} />
          <div className="h-1.5 w-1/2 rounded-full mb-4" style={{ background:'rgba(255,255,255,0.2)' }} />
          <div className="flex gap-2">
            <div className="h-7 flex-1 rounded-xl" style={{ background:'rgba(255,255,255,0.12)', backdropFilter:'blur(20px)' }} />
            <div className="h-7 w-7 rounded-xl" style={{ background:'rgba(255,255,255,0.12)', backdropFilter:'blur(20px)' }} />
          </div>
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-2xl px-6 py-2 flex gap-6 w-[85%] justify-center"
          style={{ background:'rgba(255,255,255,0.07)', backdropFilter:'blur(40px) saturate(200%)', border:'1px solid rgba(255,255,255,0.15)' }}>
          {['◉','○','○','○'].map((s,i)=>(
            <div key={i} className="text-[12px]" style={{ color: i===0?'rgba(255,255,255,0.9)':'rgba(255,255,255,0.35)' }}>{s}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
