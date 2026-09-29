export default function OrganicBlobHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden" aria-hidden="true"
           style={{ background:'linear-gradient(135deg,#fde8f0 0%,#e8f0fd 100%)' }}>
        {/* Blob 1 coral */}
        <div className="absolute motion-reduce:transition-none" style={{ width:'58%',height:'65%',top:'-12%',left:'-6%',borderRadius:'30% 70% 70% 30% / 30% 30% 70% 70%',background:'linear-gradient(135deg,#ff9a9e,#fecfef)',opacity:0.85,filter:'blur(0px)' }} />
        {/* Blob 2 lavender */}
        <div className="absolute motion-reduce:transition-none" style={{ width:'52%',height:'58%',bottom:'-10%',right:'-6%',borderRadius:'70% 30% 30% 70% / 70% 70% 30% 30%',background:'linear-gradient(135deg,#a18cd1,#fbc2eb)',opacity:0.8 }} />
        {/* Blob 3 mint */}
        <div className="absolute motion-reduce:transition-none" style={{ width:'44%',height:'48%',top:'28%',left:'28%',borderRadius:'60% 40% 30% 70% / 50% 60% 40% 50%',background:'linear-gradient(135deg,#84fab0,#8fd3f4)',opacity:0.75 }} />
        {/* Blob 4 peach */}
        <div className="absolute motion-reduce:transition-none" style={{ width:'30%',height:'34%',top:'4%',right:'14%',borderRadius:'40% 60% 60% 40% / 60% 30% 70% 40%',background:'linear-gradient(135deg,#ffecd2,#fcb69f)',opacity:0.7 }} />

        {/* Inner glow */}
        <div className="absolute inset-0" style={{ background:'radial-gradient(ellipse at 50% 50%,rgba(255,255,255,0.35) 0%,transparent 70%)' }} />

        {/* Floating label */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full" style={{ background:'rgba(255,255,255,0.5)', backdropFilter:'blur(8px)', color:'#5b3e6e', border:'1px solid rgba(255,255,255,0.6)' }}>
            Organic Forms
          </div>
        </div>
      </div>
    </div>
  );
}
