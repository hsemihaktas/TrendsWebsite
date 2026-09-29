export default function WebcoreHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="relative w-full h-full overflow-hidden" style={{ background:'#000080', fontFamily:'Arial, sans-serif' }} aria-hidden="true">
        {/* Title bar */}
        <div className="flex items-center gap-1 px-2 py-1 text-white text-[9px]" style={{ background:'linear-gradient(90deg,#000080,#1084d0)' }}>
          <span className="text-[11px]">🌐</span>
          <span>My Homepage — Netscape Navigator</span>
          <div className="ml-auto flex gap-1">
            {['_','□','×'].map(b=>(<div key={b} className="w-4 h-3 bg-[#c0c0c0] border border-gray-400 text-[7px] flex items-center justify-center text-black font-bold">{b}</div>))}
          </div>
        </div>

        {/* Browser chrome */}
        <div className="px-2 py-1 flex items-center gap-1" style={{ background:'#c0c0c0', borderBottom:'2px solid #808080' }}>
          <div className="text-[7px]">📁</div>
          <div className="flex-1 h-4 bg-white border border-gray-400 text-[7px] px-1 flex items-center text-blue-700 underline">
            http://www.mysite.geocities.com/
          </div>
          <div className="text-[7px] bg-[#c0c0c0] border border-gray-400 px-1 h-4 flex items-center">Go!</div>
        </div>

        {/* Page content */}
        <div className="p-2" style={{ background:'#ffffff' }}>
          <div className="text-center mb-1">
            <div className="text-[12px] font-bold text-blue-700 underline">✨ WELCOME TO MY AWESOME PAGE ✨</div>
          </div>
          <div className="text-[7px] text-black">
            <span className="text-red-600">NEW!</span> This page is under construction 🚧<br/>
            <span className="text-blue-700 underline">Click here</span> · <span className="text-blue-700 underline">My Guestbook</span> · <span className="text-blue-700 underline">Links</span>
          </div>
          <div className="text-center mt-1">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 text-[7px]" style={{ background:'#c0c0c0', border:'2px solid', borderColor:'white #808080 #808080 white' }}>
              <span>💾</span> Save this page!
            </div>
          </div>
          <div className="text-[7px] text-gray-400 mt-1">Best viewed in 800×600 with Internet Explorer 4.0</div>
        </div>
      </div>
    </div>
  );
}
