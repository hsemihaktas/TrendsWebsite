export default function DopamineDesignHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden bg-[#FFF500] flex items-center justify-center" aria-hidden="true">
        {/* Blobs */}
        <div className="absolute w-32 h-32 rounded-full -top-8 -left-8 bg-[#FF3D8B] opacity-90" />
        <div className="absolute w-28 h-28 rounded-full -bottom-6 -right-6 bg-[#39FF14] opacity-80" />
        <div className="absolute w-20 h-20 rounded-full top-4 right-4 bg-[#FF6B35] opacity-80" />
        <div className="absolute w-14 h-14 rounded-full bottom-6 left-8 bg-[#00D9FF] opacity-80" />

        {/* Central card */}
        <div className="relative z-10 bg-white rounded-[28px] p-5 w-36 text-center" style={{ boxShadow:'0 8px 32px rgba(255,61,139,0.3)' }}>
          <div className="text-3xl mb-2">🎉</div>
          <div className="text-[13px] font-black text-gray-900 leading-tight">Feel the<br/>Joy</div>
          <div className="mt-3 h-7 rounded-full flex items-center justify-center text-[10px] font-black text-white" style={{ background:'linear-gradient(135deg,#FF3D8B,#FF6B35)' }}>
            Explore ✦
          </div>
        </div>
      </div>
    </div>
  );
}
