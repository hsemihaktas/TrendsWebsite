export default function GlassmorphismHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div
        className="relative w-full h-full overflow-hidden"
        aria-hidden="true"
        style={{ background: 'linear-gradient(135deg,#5b21b6 0%,#2563eb 40%,#0ea5e9 70%,#06b6d4 100%)' }}
      >
        {/* Background blobs */}
        <div className="absolute w-48 h-48 rounded-full opacity-50 blur-3xl" style={{ background:'#c084fc', top:'-30%', left:'10%' }} />
        <div className="absolute w-40 h-40 rounded-full opacity-40 blur-3xl" style={{ background:'#34d399', bottom:'-20%', right:'5%' }} />
        <div className="absolute w-32 h-32 rounded-full opacity-30 blur-2xl" style={{ background:'#f472b6', top:'40%', left:'60%' }} />

        {/* Back card */}
        <div
          className="absolute rounded-2xl p-4 w-44"
          style={{
            top:'10%', left:'15%', transform:'rotate(-8deg)',
            background:'rgba(255,255,255,0.12)',
            backdropFilter:'blur(12px)',
            border:'1px solid rgba(255,255,255,0.25)',
            boxShadow:'0 8px 32px rgba(0,0,0,0.2)',
          }}
        >
          <div className="w-8 h-8 rounded-full mb-2" style={{ background:'rgba(255,255,255,0.3)' }} />
          <div className="h-1.5 w-full rounded-full mb-1.5" style={{ background:'rgba(255,255,255,0.4)' }} />
          <div className="h-1.5 w-3/4 rounded-full mb-3" style={{ background:'rgba(255,255,255,0.25)' }} />
          <div className="h-6 w-full rounded-lg" style={{ background:'rgba(255,255,255,0.2)' }} />
        </div>

        {/* Middle card */}
        <div
          className="absolute rounded-2xl p-4 w-48"
          style={{
            top:'20%', left:'35%', transform:'rotate(3deg)',
            background:'rgba(255,255,255,0.15)',
            backdropFilter:'blur(16px)',
            border:'1px solid rgba(255,255,255,0.3)',
            boxShadow:'0 12px 40px rgba(0,0,0,0.25)',
          }}
        >
          <div className="flex gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-white/50" />
            <div className="w-3 h-3 rounded-full bg-white/30" />
          </div>
          <div className="h-2 w-full rounded-full mb-1" style={{ background:'rgba(255,255,255,0.5)' }} />
          <div className="h-1.5 w-4/5 rounded-full mb-1" style={{ background:'rgba(255,255,255,0.3)' }} />
          <div className="h-1.5 w-2/3 rounded-full mb-3" style={{ background:'rgba(255,255,255,0.2)' }} />
          <div className="flex gap-1">
            <div className="flex-1 h-5 rounded-lg" style={{ background:'rgba(255,255,255,0.25)' }} />
            <div className="flex-1 h-5 rounded-lg" style={{ background:'rgba(255,255,255,0.15)' }} />
          </div>
        </div>

        {/* Front card */}
        <div
          className="absolute rounded-2xl p-5 w-52"
          style={{
            bottom:'8%', right:'8%', transform:'rotate(-4deg)',
            background:'rgba(255,255,255,0.18)',
            backdropFilter:'blur(20px)',
            border:'1px solid rgba(255,255,255,0.35)',
            boxShadow:'0 16px 48px rgba(0,0,0,0.3)',
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full" style={{ background:'rgba(255,255,255,0.4)' }} />
            <div>
              <div className="h-1.5 w-16 rounded-full mb-1" style={{ background:'rgba(255,255,255,0.6)' }} />
              <div className="h-1 w-10 rounded-full" style={{ background:'rgba(255,255,255,0.3)' }} />
            </div>
          </div>
          <div className="h-8 w-full rounded-xl mb-2" style={{ background:'rgba(255,255,255,0.15)' }} />
          <div className="h-6 w-3/4 rounded-full" style={{ background:'rgba(255,255,255,0.25)' }} />
        </div>
      </div>
    </div>
  );
}
