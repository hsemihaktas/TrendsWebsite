export default function FrutigerAeroHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* Bright aqua-to-teal gradient background */}
      <div
        aria-hidden="true"
        className="w-full h-full relative overflow-hidden bg-gradient-to-b from-[#00bfff] to-[#006080]"
      >
        {/* Soft lens flare / light glow top-right */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-30"
          style={{
            background:
              'radial-gradient(circle at 70% 30%, #ffffff 0%, #80dfff 40%, transparent 70%)',
            transform: 'translate(20%, -20%)',
          }}
        />

        {/* Inline leaf SVG decorations */}
        <svg
          aria-hidden="true"
          className="absolute top-3 left-4 opacity-70"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 35 C5 35 8 10 25 8 C25 8 30 20 20 28 C15 32 5 35 5 35Z"
            fill="#00e87a"
            opacity="0.85"
          />
          <path
            d="M5 35 L20 15"
            stroke="#00c060"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <svg
          aria-hidden="true"
          className="absolute bottom-6 right-6 opacity-60"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 28 C8 28 10 8 26 6 C26 6 30 18 20 24 C15 28 8 28 8 28Z"
            fill="#00e87a"
            opacity="0.8"
          />
          <path
            d="M8 28 L20 12"
            stroke="#00c060"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Water-drop SVG */}
        <svg
          aria-hidden="true"
          className="absolute top-4 right-8 opacity-60"
          width="20"
          height="26"
          viewBox="0 0 20 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2 C10 2 2 12 2 17 C2 22 6 25 10 25 C14 25 18 22 18 17 C18 12 10 2 10 2Z"
            fill="url(#dropGrad)"
            opacity="0.85"
          />
          <defs>
            <linearGradient id="dropGrad" x1="4" y1="4" x2="16" y2="24" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#80efff" />
              <stop offset="100%" stopColor="#0099cc" />
            </linearGradient>
          </defs>
          {/* Highlight on drop */}
          <ellipse cx="7" cy="14" rx="2" ry="3" fill="rgba(255,255,255,0.5)" />
        </svg>

        {/* Glassy buttons row */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 flex justify-center gap-3"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          {['Start', 'Learn', 'Go!'].map((label, i) => (
            <div
              key={i}
              aria-hidden="true"
              className="rounded-full px-4 py-2 text-[10px] font-bold backdrop-blur-sm relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.40)',
                border: '1px solid rgba(255,255,255,0.60)',
                boxShadow:
                  '0 4px 12px rgba(0,100,150,0.25), inset 0 1px 0 rgba(255,255,255,0.85)',
                color: '#004466',
              }}
            >
              {/* Top gloss highlight */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 rounded-full"
                style={{
                  height: '45%',
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.05) 100%)',
                }}
              />
              <span className="relative z-10">{label}</span>
            </div>
          ))}
        </div>

        {/* Vista-era notification bubble */}
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-2xl px-4 py-2 backdrop-blur-sm flex items-center gap-2"
          style={{
            background: 'rgba(255,255,255,0.35)',
            border: '1px solid rgba(255,255,255,0.55)',
            boxShadow:
              '0 4px 16px rgba(0,120,180,0.2), inset 0 1px 0 rgba(255,255,255,0.8)',
          }}
        >
          {/* Green orb icon */}
          <div
            aria-hidden="true"
            className="w-4 h-4 rounded-full flex-shrink-0"
            style={{
              background:
                'radial-gradient(circle at 35% 30%, #80ffb0 0%, #00b840 60%, #006630 100%)',
              boxShadow: '0 0 4px #00e860',
            }}
          />
          <span
            className="text-[9px] font-semibold"
            style={{ color: '#004466' }}
          >
            Windows Vista — Welcome
          </span>
        </div>

        {/* Subtle cloud-like blobs */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-16 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 30% 100%, #ffffff 0%, transparent 70%), ' +
              'radial-gradient(ellipse 50% 40% at 70% 100%, #ffffff 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  );
}
