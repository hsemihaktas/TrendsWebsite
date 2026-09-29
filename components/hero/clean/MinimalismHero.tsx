export default function MinimalismHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="w-full h-full bg-white flex flex-col justify-center px-10 py-8" aria-hidden="true">
        {/* Eyebrow */}
        <div className="text-[9px] uppercase tracking-[0.25em] text-gray-400 mb-5">Design Studio / 2024</div>

        {/* Headline */}
        <div className="text-[28px] font-light text-gray-900 leading-tight tracking-tight mb-2">
          Less is<br /><em className="not-italic font-semibold">Everything</em>
        </div>

        {/* Rule */}
        <div className="w-12 h-px bg-gray-900 my-5" />

        {/* Body */}
        <div className="space-y-1.5 mb-6">
          <div className="h-1.5 w-4/5 bg-gray-100 rounded-full" />
          <div className="h-1.5 w-3/5 bg-gray-100 rounded-full" />
          <div className="h-1.5 w-2/3 bg-gray-100 rounded-full" />
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-24 bg-gray-900 rounded flex items-center justify-center">
            <div className="h-1 w-12 bg-white rounded-full" />
          </div>
          <div className="text-[10px] text-gray-400">Explore →</div>
        </div>
      </div>
    </div>
  );
}
