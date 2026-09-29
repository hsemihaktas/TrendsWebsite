export default function ScrapbookUIHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full bg-[#f5f0e4] overflow-hidden" aria-hidden="true">
        {/* Tape strips */}
        <div className="absolute w-12 h-5 bg-[#fde68a]/60 top-2 left-8 rotate-[-15deg] border border-[#fcd34d]/30" />
        <div className="absolute w-10 h-4 bg-[#a7f3d0]/60 top-3 right-6 rotate-[20deg] border border-[#6ee7b7]/30" />
        <div className="absolute w-8 h-4 bg-[#c4b5fd]/60 bottom-8 left-12 rotate-[-8deg] border border-[#a78bfa]/30" />

        {/* Main polaroid-style card */}
        <div className="absolute top-8 left-5 w-32 bg-white p-2 rotate-[-3deg]" style={{ boxShadow:'2px 3px 8px rgba(0,0,0,0.15)' }}>
          <div className="w-full h-20 bg-[#ddd] mb-2 flex items-center justify-center text-[20px]">📸</div>
          <div className="text-[8px] text-center font-mono text-gray-500">Summer 2024</div>
        </div>

        {/* Sticky note */}
        <div className="absolute top-4 right-4 w-24 h-20 bg-[#fef08a] rotate-[5deg] p-2" style={{ boxShadow:'2px 2px 4px rgba(0,0,0,0.1)' }}>
          <div className="text-[8px] font-mono text-gray-700 leading-relaxed">
            Don&apos;t forget:<br/>• add stars<br/>• stamp it<br/>• glitter ✨
          </div>
        </div>

        {/* Star sticker */}
        <div className="absolute text-[24px]" style={{ bottom:'30%', right:'12%', transform:'rotate(15deg)' }}>⭐</div>
        <div className="absolute text-[16px]" style={{ top:'40%', left:'10%', transform:'rotate(-10deg)' }}>🌸</div>

        {/* Stamp */}
        <div className="absolute bottom-5 left-4 border-2 border-red-400 rounded px-2 py-0.5 rotate-[-8deg]">
          <div className="text-[8px] uppercase tracking-wider text-red-400 font-bold">Approved</div>
        </div>

        {/* Washi tape bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-3 opacity-40" style={{ background:'repeating-linear-gradient(90deg,#f9a8d4 0px,#f9a8d4 8px,#fbcfe8 8px,#fbcfe8 16px)' }} />
      </div>
    </div>
  );
}
