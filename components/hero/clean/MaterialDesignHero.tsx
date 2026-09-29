export default function MaterialDesignHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div
        className="w-full h-full bg-[#F3F4F6] flex items-end justify-center pb-4 px-4 gap-3"
        aria-hidden="true"
      >
        {/* dp0 — no elevation */}
        <div className="shadow-none bg-white rounded-lg p-3 flex-1 min-w-0">
          <div className="h-2 w-full bg-gray-200 rounded mb-2" />
          <div className="h-2 w-3/4 bg-gray-100 rounded" />
          <div className="mt-3 h-5 w-full rounded" style={{ backgroundColor: '#6750A4' }} />
        </div>

        {/* dp2 — subtle elevation */}
        <div className="shadow-sm bg-white rounded-lg p-3 flex-1 min-w-0 mb-2">
          <div className="h-2 w-full bg-gray-200 rounded mb-2" />
          <div className="h-2 w-3/4 bg-gray-100 rounded" />
          <div className="mt-3 h-5 w-full rounded" style={{ backgroundColor: '#009688' }} />
        </div>

        {/* dp4 — moderate elevation */}
        <div className="shadow-md bg-white rounded-lg p-3 flex-1 min-w-0 mb-4">
          <div className="h-2 w-full bg-gray-200 rounded mb-2" />
          <div className="h-2 w-3/4 bg-gray-100 rounded" />
          <div className="mt-3 h-5 w-full rounded" style={{ backgroundColor: '#6750A4' }} />
        </div>

        {/* dp8 — high elevation */}
        <div className="shadow-lg bg-white rounded-lg p-3 flex-1 min-w-0 mb-6">
          <div className="h-2 w-full bg-gray-200 rounded mb-2" />
          <div className="h-2 w-3/4 bg-gray-100 rounded" />
          <div className="mt-3 h-5 w-full rounded" style={{ backgroundColor: '#009688' }} />
        </div>
      </div>
    </div>
  );
}
