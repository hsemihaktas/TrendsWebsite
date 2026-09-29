export default function IllustrationUIHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center" style={{ background:'linear-gradient(135deg,#f0f4ff 0%,#e8f0fe 100%)' }} aria-hidden="true">
        {/* 3D card with CSS perspective */}
        <div className="relative" style={{ transform:'perspective(300px) rotateX(20deg) rotateY(-25deg)' }}>
          <div className="w-32 h-24 rounded-2xl flex flex-col p-3 relative" style={{ background:'linear-gradient(135deg,#667eea,#764ba2)', boxShadow:'0 20px 40px rgba(102,126,234,0.4)' }}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-white/30" />
              <div className="h-1.5 flex-1 rounded bg-white/25" />
            </div>
            <div className="h-8 rounded-xl bg-white/15 mb-2" />
            <div className="flex gap-1">
              <div className="flex-1 h-4 rounded-lg bg-white/20" />
              <div className="flex-1 h-4 rounded-lg bg-white/10" />
            </div>
            {/* Side face */}
            <div className="absolute top-2 w-4 h-24 rounded-r-2xl" style={{ right:'-14px', background:'linear-gradient(180deg,#4a3580,#2d1f5e)' }} />
            {/* Bottom face */}
            <div className="absolute left-2 w-32 h-4 rounded-b-2xl" style={{ bottom:'-12px', background:'linear-gradient(90deg,#3a2560,#1e1040)' }} />
          </div>
        </div>

        <div className="absolute w-8 h-8 rounded-full" style={{ background:'linear-gradient(135deg,#f093fb,#f5576c)', top:'10%', right:'15%', boxShadow:'0 8px 16px rgba(240,147,251,0.4)' }} />
        <div className="absolute w-5 h-5 rounded-lg" style={{ background:'linear-gradient(135deg,#4facfe,#00f2fe)', bottom:'15%', left:'12%', transform:'rotate(20deg)', boxShadow:'0 4px 12px rgba(79,172,254,0.4)' }} />
        <div className="absolute w-4 h-4 rounded-full" style={{ background:'linear-gradient(135deg,#43e97b,#38f9d7)', top:'20%', left:'10%', boxShadow:'0 4px 8px rgba(67,233,123,0.3)' }} />

        <div className="absolute bottom-3 left-0 right-0 text-center text-[9px] text-[#667eea] font-semibold uppercase tracking-widest">
          3D Illustration UI
        </div>
      </div>
    </div>
  );
}
