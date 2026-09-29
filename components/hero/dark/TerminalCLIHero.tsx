export interface HeroInnerProps {
  className?: string;
}

export default function TerminalCLIHero({ className }: HeroInnerProps) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      {/* Black terminal background */}
      <div
        className="w-full h-full bg-black flex flex-col justify-center px-5 py-4 overflow-hidden"
        aria-hidden="true"
      >
        {/* Terminal window chrome */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          <span className="font-mono text-[10px] text-[#00ff00]/40 ml-2 tracking-wider">
            bash — 80×24
          </span>
        </div>

        {/* Terminal lines */}
        <div className="font-mono text-xs flex flex-col gap-[3px]">
          {/* Line 1 */}
          <div className="flex items-center gap-1">
            <span className="text-[#00ff00] opacity-90">$</span>
            <span className="text-[#00ff00] opacity-90">
              npm install design-trends
            </span>
          </div>

          {/* Line 2 — dimmer output */}
          <div className="text-[#00ff00] opacity-50 pl-2">
            ✓ Resolving packages...
          </div>
          <div className="text-[#00ff00] opacity-50 pl-2">
            ✓ Installing packages...
          </div>
          <div className="text-[#00ff00] opacity-40 pl-2">
            added 42 packages in 1.3s
          </div>

          {/* Spacer line */}
          <div className="h-[2px]" />

          {/* Line 3 */}
          <div className="flex items-center gap-1">
            <span className="text-[#00ff00] opacity-90">$</span>
            <span className="text-[#00ff00] opacity-90">
              git commit -m &quot;feat: add hero&quot;
            </span>
          </div>

          {/* Line 4 — dimmer output */}
          <div className="text-[#00ff00] opacity-50 pl-2">
            [main abc1234] feat: add hero
          </div>
          <div className="text-[#00ff00] opacity-40 pl-2">
            1 file changed, 58 insertions(+)
          </div>

          {/* Spacer line */}
          <div className="h-[2px]" />

          {/* Active prompt with blinking cursor */}
          <div className="flex items-center gap-1">
            <span className="text-[#00ff00] opacity-90">$</span>
            <span
              className="inline-block w-2 h-[14px] bg-[#00ff00] animate-pulse motion-reduce:animate-none"
              style={{ verticalAlign: 'middle' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
