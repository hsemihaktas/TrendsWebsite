export default function QuietLuxuryHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div
        className="w-full h-full bg-[#F5F0E8] flex flex-col items-center justify-center px-8 py-10 gap-5"
        aria-hidden="true"
      >
        {/* Thin horizontal rule — top decoration */}
        <hr className="w-16 border-t border-[#C4B89A]" />

        {/* Centered serif-style large text — generous whitespace via py */}
        <div className="text-center space-y-1">
          <p
            className="text-[11px] uppercase tracking-[0.3em] text-[#8A7E6A] font-light"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Quiet Luxury
          </p>
          <p
            className="text-xl text-[#3D3530] font-light leading-snug"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Understated
          </p>
          <p
            className="text-xl text-[#3D3530] font-light leading-snug"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Elegance
          </p>
        </div>

        {/* Thin horizontal rule — bottom decoration */}
        <hr className="w-16 border-t border-[#C4B89A]" />

        {/* Muted sand/khaki subtitle dots */}
        <div className="flex gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C4B89A]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#A89880]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C4B89A]" />
        </div>
      </div>
    </div>
  );
}
