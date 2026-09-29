export default function AuroraMeshHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div
        className="relative w-full h-full overflow-hidden"
        aria-hidden="true"
        style={{
          background: [
            'radial-gradient(ellipse 70% 60% at 15% 25%, rgba(167,139,250,0.7) 0%, transparent 65%)',
            'radial-gradient(ellipse 60% 50% at 85% 15%, rgba(236,72,153,0.6) 0%, transparent 60%)',
            'radial-gradient(ellipse 65% 55% at 50% 85%, rgba(34,211,238,0.55) 0%, transparent 60%)',
            'radial-gradient(ellipse 50% 45% at 75% 65%, rgba(52,211,153,0.45) 0%, transparent 55%)',
            'radial-gradient(ellipse 40% 40% at 25% 75%, rgba(251,191,36,0.4) 0%, transparent 55%)',
            '#0f0520',
          ].join(','),
        }}
      >
        {/* Floating UI card */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-5 w-[180px]"
          style={{
            background:'rgba(255,255,255,0.08)',
            backdropFilter:'blur(16px)',
            border:'1px solid rgba(255,255,255,0.15)',
            boxShadow:'0 20px 60px rgba(0,0,0,0.4)',
          }}
        >
          <div className="text-[9px] uppercase tracking-widest text-white/50 mb-3">Aurora UI</div>
          <div className="space-y-1.5 mb-3">
            {[80,55,70].map((w,i)=>(
              <div key={i} className="h-1.5 rounded-full" style={{ width:`${w}%`, background:'rgba(255,255,255,0.25)' }} />
            ))}
          </div>
          <div className="flex gap-2">
            <div className="flex-1 h-6 rounded-lg" style={{ background:'rgba(167,139,250,0.4)', border:'1px solid rgba(167,139,250,0.3)' }} />
            <div className="flex-1 h-6 rounded-lg" style={{ background:'rgba(236,72,153,0.3)', border:'1px solid rgba(236,72,153,0.3)' }} />
          </div>
        </div>

        {/* Small accent dots */}
        {[
          { top:'12%', left:'20%', color:'rgba(167,139,250,0.6)', size:4 },
          { top:'20%', right:'25%', color:'rgba(236,72,153,0.6)', size:3 },
          { bottom:'15%', left:'15%', color:'rgba(34,211,238,0.6)', size:5 },
          { bottom:'25%', right:'15%', color:'rgba(52,211,153,0.5)', size:3 },
        ].map((dot, i) => (
          <div key={i} className="absolute rounded-full" style={{ ...dot, width:dot.size*4, height:dot.size*4, background:dot.color, filter:'blur(2px)' }} />
        ))}
      </div>
    </div>
  );
}
