export default function OrganicBlobHero({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* Soft pastel background */}
      <div
        aria-hidden="true"
        className="relative w-full h-full overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #fde8f0 0%, #e8f0fd 100%)' }}
      >
        {/* Blob 1 — coral/rose */}
        <div
          aria-hidden="true"
          className="absolute motion-reduce:transition-none"
          style={{
            width: '55%',
            height: '60%',
            top: '-10%',
            left: '-5%',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            background:
              'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
            opacity: 0.85,
          }}
        />

        {/* Blob 2 — lavender/periwinkle */}
        <div
          aria-hidden="true"
          className="absolute motion-reduce:transition-none"
          style={{
            width: '50%',
            height: '55%',
            bottom: '-8%',
            right: '-5%',
            borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%',
            background:
              'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
            opacity: 0.8,
          }}
        />

        {/* Blob 3 — mint/teal */}
        <div
          aria-hidden="true"
          className="absolute motion-reduce:transition-none"
          style={{
            width: '42%',
            height: '45%',
            top: '30%',
            left: '30%',
            borderRadius: '60% 40% 30% 70% / 50% 60% 40% 50%',
            background:
              'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
            opacity: 0.75,
          }}
        />

        {/* Blob 4 — yellow/peach accent */}
        <div
          aria-hidden="true"
          className="absolute motion-reduce:transition-none"
          style={{
            width: '28%',
            height: '32%',
            top: '5%',
            right: '15%',
            borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%',
            background:
              'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            opacity: 0.7,
          }}
        />

        {/* Soft inner glow to merge blobs */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.35) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  );
}
