export default function FlatDesignHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div
        className="w-full h-full bg-[#2196F3] flex items-center justify-center p-6"
        style={{ boxShadow: 'none' }}
        aria-hidden="true"
      >
        {/* Zero shadows, zero gradients — solid color 2D shapes only */}
        <div className="flex items-center gap-5">
          {/* Simulated icon: circle */}
          <div
            className="w-14 h-14 rounded-full bg-white flex items-center justify-center"
            style={{ boxShadow: 'none' }}
          >
            <div className="w-6 h-6 bg-[#2196F3] rounded-full" style={{ boxShadow: 'none' }} />
          </div>

          {/* Simulated icon: rectangle */}
          <div
            className="w-14 h-14 bg-[#FFC107] rounded"
            style={{ boxShadow: 'none' }}
          />

          {/* Simulated icon: triangle via borders */}
          <div
            className="w-0 h-0"
            style={{
              borderLeft: '28px solid transparent',
              borderRight: '28px solid transparent',
              borderBottom: '48px solid #4CAF50',
              boxShadow: 'none',
            }}
          />
        </div>

        {/* White label text */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-8">
          <div className="h-2 w-10 bg-white rounded-full opacity-80" style={{ boxShadow: 'none' }} />
          <div className="h-2 w-10 bg-white rounded-full opacity-80" style={{ boxShadow: 'none' }} />
          <div className="h-2 w-10 bg-white rounded-full opacity-80" style={{ boxShadow: 'none' }} />
        </div>
      </div>
    </div>
  );
}
