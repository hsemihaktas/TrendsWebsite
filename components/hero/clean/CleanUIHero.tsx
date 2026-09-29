export default function CleanUIHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div
        className="w-full h-full bg-white flex items-center justify-center p-4"
        aria-hidden="true"
      >
        {/* Simulated form / dashboard panel — 8px grid aligned spacing */}
        <div className="w-full max-w-[200px] bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
          {/* Panel header */}
          <div className="px-4 py-2 border-b border-gray-100">
            <div className="h-2 w-20 bg-gray-400 rounded-full" />
          </div>

          {/* Rows with divide-y */}
          <div className="divide-y divide-gray-100">
            {/* Label + input field row */}
            <div className="px-4 py-3 flex flex-col gap-1">
              <div className="h-1.5 w-10 bg-gray-400 rounded-full" />
              <div className="h-5 w-full bg-white border border-gray-200 rounded" />
            </div>

            {/* Second label + input row */}
            <div className="px-4 py-3 flex flex-col gap-1">
              <div className="h-1.5 w-14 bg-gray-400 rounded-full" />
              <div className="h-5 w-full bg-white border border-gray-200 rounded" />
            </div>

            {/* Button row */}
            <div className="px-4 py-3">
              <div className="h-6 w-full bg-gray-800 rounded flex items-center justify-center">
                <div className="h-1.5 w-10 bg-white rounded-full opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
