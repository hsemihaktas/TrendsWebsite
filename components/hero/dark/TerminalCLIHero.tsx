export default function TerminalCLIHero({ className }: { className?: string }) {
  const lines = [
    { prompt: true,  text: 'npm install design-trends@latest', color: '#fff' },
    { prompt: false, text: '✓  Resolved 42 packages', color: '#00ff00' },
    { prompt: false, text: '✓  Installing packages…', color: '#00ff00' },
    { prompt: false, text: '', color: '' },
    { prompt: true,  text: 'git commit -m "feat: neubrutalism"', color: '#fff' },
    { prompt: false, text: '[main a1b2c3d] feat: neubrutalism', color: '#00ff00' },
    { prompt: false, text: ' 2 files changed, 48 insertions(+)', color: '#00ff00' },
    { prompt: false, text: '', color: '' },
  ];
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div className="w-full h-full bg-[#0d0d0d] flex flex-col overflow-hidden" aria-hidden="true">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border-b border-[#00ff00]/10 flex-shrink-0">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex-1 text-center text-[9px] text-[#00ff00]/30 font-mono">bash — 80×24</div>
        </div>

        {/* Terminal lines */}
        <div className="flex-1 px-4 pt-3 pb-2 font-mono text-[10px] space-y-0.5 overflow-hidden">
          {lines.map((l, i) => (
            <div key={i} className="flex gap-1.5 leading-[1.7]">
              {l.prompt && <span className="text-[#00ff00] flex-shrink-0">$</span>}
              {l.text && (
                <span style={{ color: l.prompt ? '#ffffff' : l.color }}>
                  {l.text}
                </span>
              )}
            </div>
          ))}

          {/* Active prompt */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#00ff00]">$</span>
            <span className="inline-block w-[7px] h-[14px] bg-[#00ff00] animate-pulse motion-reduce:animate-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
