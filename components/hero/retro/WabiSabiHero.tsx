export default function WabiSabiHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden" style={{ background:'#f2ede6' }} aria-hidden="true">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage:'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.4\'/%3E%3C/svg%3E")', backgroundSize:'150px' }} />

        {/* Asymmetric composition */}
        <div className="absolute" style={{ width:'55%', height:'60%', top:'10%', left:'5%', borderRadius:'2px 20px 4px 15px', background:'linear-gradient(145deg,#c8b89a,#b0977c)', opacity:0.7 }} />

        {/* Crack / imperfection line */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice">
          <path d="M65,15 C68,30 62,45 67,55 C72,65 68,75 70,85" stroke="rgba(139,105,74,0.4)" strokeWidth="0.8" fill="none" strokeDasharray="3 2" />
        </svg>

        {/* Text */}
        <div className="absolute" style={{ top:'15%', right:'6%', width:'38%' }}>
          <div className="text-[9px] uppercase tracking-[0.3em] mb-2" style={{ color:'#7a6050', fontFamily:'Georgia, serif' }}>侘寂</div>
          <div className="text-[18px] font-light" style={{ color:'#4a3728', fontFamily:'Georgia, serif', lineHeight:1.3 }}>Wabi-<br/>Sabi</div>
          <div className="mt-2 h-px" style={{ background:'rgba(122,96,80,0.3)' }} />
          <div className="mt-1 text-[8px] italic" style={{ color:'#8b7060', fontFamily:'Georgia, serif' }}>beauty in<br/>imperfection</div>
        </div>

        {/* Ceramic bowl shape */}
        <div className="absolute" style={{ bottom:'12%', right:'8%', width:40, height:28, borderRadius:'0 0 50% 50% / 0 0 100% 100%', background:'linear-gradient(180deg,#c8b89a,#a08060)', boxShadow:'2px 4px 8px rgba(0,0,0,0.15)' }} />

        <div className="absolute bottom-2 left-0 right-0 text-center text-[7px] uppercase tracking-[0.4em]" style={{ color:'rgba(122,96,80,0.5)', fontFamily:'Georgia, serif' }}>
          Imperfection · Transience · Simplicity
        </div>
      </div>
    </div>
  );
}
