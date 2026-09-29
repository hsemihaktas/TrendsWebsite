export default function MinimalismHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div
        className="w-full h-full bg-white flex items-center justify-center p-12"
        aria-hidden="true"
      >
        {/* Single focal geometric circle — max 2 colors: white bg + gray circle */}
        <div className="flex flex-col items-center gap-8">
          <div className="w-20 h-20 rounded-full bg-gray-900 motion-reduce:transition-none" />
          <div className="space-y-2 text-center">
            <div className="h-2 w-32 bg-gray-900 rounded-full" />
            <div className="h-2 w-20 bg-gray-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
