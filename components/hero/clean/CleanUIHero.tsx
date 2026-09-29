export default function CleanUIHero({ className }: { className?: string }) {
  const rows = [
    { name:'Aurora UI', status:'Active', val:'$12.4k', up:true },
    { name:'Glassmorphism', status:'Draft', val:'$8.1k', up:false },
    { name:'Neubrutalism', status:'Active', val:'$9.7k', up:true },
    { name:'Claymorphism', status:'Review', val:'$6.3k', up:true },
  ];
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="w-full h-full bg-white flex flex-col" aria-hidden="true">
        {/* Header bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
          <div className="w-5 h-5 rounded-md bg-gray-900" />
          <div className="text-[11px] font-semibold text-gray-800">Dashboard</div>
          <div className="ml-auto flex items-center gap-2">
            <div className="w-16 h-5 rounded bg-gray-100" />
            <div className="w-5 h-5 rounded-full bg-gray-200" />
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-0 border-b border-gray-100">
          {[{l:'Revenue',v:'$36.5k'},{l:'Projects',v:'12'},{l:'Users',v:'1.4k'}].map((s,i)=>(
            <div key={i} className={`flex-1 px-4 py-3 ${i<2?'border-r border-gray-100':''}`}>
              <div className="text-[8px] text-gray-400 mb-0.5">{s.l}</div>
              <div className="text-[13px] font-semibold text-gray-900">{s.v}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="flex-1 flex flex-col divide-y divide-gray-50">
          {rows.map(r=>(
            <div key={r.name} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition-colors">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background:r.status==='Active'?'#22c55e':r.status==='Draft'?'#94a3b8':'#f59e0b' }} />
              <div className="flex-1 text-[10px] font-medium text-gray-800 truncate">{r.name}</div>
              <div className="text-[9px]" style={{ color:r.status==='Active'?'#16a34a':r.status==='Draft'?'#64748b':'#d97706' }}>{r.status}</div>
              <div className="text-[10px] font-medium text-gray-700 w-10 text-right">{r.val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
