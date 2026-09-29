export default function CorporateMemphisHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full bg-[#F5F5FF] overflow-hidden flex items-center justify-center" aria-hidden="true">
        {/* Background blobs */}
        <div className="absolute w-24 h-24 rounded-full bg-[#FFD166] opacity-40" style={{ top:'-5%', right:'10%' }} />
        <div className="absolute w-20 h-20 rounded-full bg-[#06D6A0] opacity-30" style={{ bottom:'-3%', left:'5%' }} />

        <div className="flex items-end gap-4 relative z-10">
          {/* Figure 1 — presenting */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[#FF6B6B] mb-1" />
            <div className="w-4 h-12 bg-[#4ECDC4] rounded-t-full relative">
              <div className="absolute -right-5 -top-2 w-3 h-8 bg-[#4ECDC4] rounded-full origin-bottom" style={{ transform:'rotate(40deg)' }} />
              <div className="absolute -left-3 top-2 w-2 h-6 bg-[#4ECDC4] rounded-full origin-top" style={{ transform:'rotate(-20deg)' }} />
            </div>
            <div className="flex gap-1 mt-1">
              <div className="w-2 h-6 bg-[#FFD166] rounded-full" style={{ transform:'rotate(-10deg)' }} />
              <div className="w-2 h-6 bg-[#FFD166] rounded-full" style={{ transform:'rotate(10deg)' }} />
            </div>
          </div>

          {/* Laptop */}
          <div className="w-20 h-14 bg-white border-2 border-gray-200 rounded mb-5">
            <div className="w-full h-full p-2 flex flex-col gap-1">
              <div className="h-1.5 w-full bg-[#4ECDC4] rounded" />
              <div className="h-1 w-3/4 bg-gray-200 rounded" />
              <div className="h-1 w-1/2 bg-gray-200 rounded" />
            </div>
          </div>

          {/* Figure 2 */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[#FFD166] mb-1" />
            <div className="w-4 h-12 bg-[#FF6B6B] rounded-t-full relative">
              <div className="absolute -left-5 -top-1 w-3 h-7 bg-[#FF6B6B] rounded-full origin-bottom" style={{ transform:'rotate(-35deg)' }} />
              <div className="absolute -right-3 top-3 w-2 h-5 bg-[#FF6B6B] rounded-full origin-top" style={{ transform:'rotate(15deg)' }} />
            </div>
            <div className="flex gap-1 mt-1">
              <div className="w-2 h-6 bg-[#4ECDC4] rounded-full" style={{ transform:'rotate(8deg)' }} />
              <div className="w-2 h-6 bg-[#4ECDC4] rounded-full" style={{ transform:'rotate(-8deg)' }} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 left-0 right-0 text-center text-[9px] text-gray-400 font-medium uppercase tracking-wide">
          Corporate Memphis / Alegria
        </div>
      </div>
    </div>
  );
}
