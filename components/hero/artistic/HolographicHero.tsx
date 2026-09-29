export default function HolographicHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden" aria-hidden="true"
           style={{ background:'linear-gradient(135deg,#ff0000,#ff7700,#ffff00,#00ff00,#0000ff,#8b00ff,#ff0000)' }}>
        {/* Pearlescent shimmer */}
        <div className="absolute inset-0" style={{ background:'linear-gradient(45deg,rgba(255,255,255,0.35),rgba(255,255,255,0),rgba(255,255,255,0.25),rgba(255,255,255,0))' }} />
        {/* Conic overlay */}
        <div className="absolute inset-0 opacity-60" style={{ background:'conic-gradient(from 180deg at 50% 50%,#ff71ce,#01cdfe,#05ffa1,#b967ff,#fffb96,#ff71ce)', mixBlendMode:'overlay' }} />
        {/* Radial highlight */}
        <div className="absolute inset-0" style={{ background:'radial-gradient(ellipse at 30% 40%,rgba(255,255,255,0.45),transparent 60%),radial-gradient(ellipse at 70% 65%,rgba(180,0,255,0.3),transparent 55%)' }} />

        {/* Glass shard 1 */}
        <div className="absolute rounded-xl" style={{ top:'8%',left:'6%',width:'42%',height:'48%',background:'linear-gradient(120deg,rgba(255,255,255,0.5),rgba(255,100,200,0.3),rgba(0,200,255,0.4))',border:'1px solid rgba(255,255,255,0.6)',transform:'rotate(-6deg)',boxShadow:'0 8px 32px rgba(139,0,255,0.3)' }} />
        {/* Glass shard 2 */}
        <div className="absolute rounded-xl" style={{ bottom:'8%',right:'5%',width:'44%',height:'42%',background:'linear-gradient(220deg,rgba(255,255,255,0.45),rgba(0,255,200,0.3),rgba(255,50,150,0.35))',border:'1px solid rgba(255,255,255,0.5)',transform:'rotate(5deg)',boxShadow:'0 8px 32px rgba(0,255,150,0.25)' }} />

        {/* Pearl orb */}
        <div className="absolute" style={{ top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:56,height:56,borderRadius:'50%',background:'radial-gradient(circle at 35% 35%,#ffffff 0%,#e0b0ff 40%,#00d4ff 80%,#ff69b4)',boxShadow:'0 0 24px rgba(255,255,255,0.7),0 0 48px rgba(180,0,255,0.4)' }} />

        {/* Title */}
        <div className="absolute top-3 left-0 right-0 text-center">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/90" style={{ textShadow:'0 0 10px rgba(255,255,255,0.8)' }}>
            HOLOGRAPHIC
          </div>
        </div>
      </div>
    </div>
  );
}
