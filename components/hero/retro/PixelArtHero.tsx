// Pixel art rendered entirely via CSS box-shadows (no images).
// Each "pixel" is an 8×8 unit created by a box-shadow on a tiny reference div.

const PIXEL = 8; // 8 px per logical pixel

type PixelDef = [number, number, string]; // [col, row, color]

// ── Palette (max 8 colors) ─────────────────────────────────────────────────
const C = {
  RED: '#e63946',
  WHT: '#f8f9fa',
  YEL: '#ffd700',
  GRN: '#2dc653',
  BLU: '#4361ee',
  CYN: '#4cc9f0',
  PNK: '#f72585',
  GRY: '#6c757d',
} as const;

// ── Pixel Heart (8 cols × 6 rows, top-left at reference) ──────────────────
const HEART: PixelDef[] = [
  // row 0
  [1, 0, C.RED], [2, 0, C.RED],                   [5, 0, C.RED], [6, 0, C.RED],
  // row 1
  [0, 1, C.RED], [1, 1, C.RED], [2, 1, C.RED], [3, 1, C.RED],
  [4, 1, C.RED], [5, 1, C.RED], [6, 1, C.RED], [7, 1, C.RED],
  // row 2
  [0, 2, C.RED], [1, 2, C.WHT], [2, 2, C.RED], [3, 2, C.RED],
  [4, 2, C.RED], [5, 2, C.RED], [6, 2, C.RED], [7, 2, C.RED],
  // row 3
  [1, 3, C.RED], [2, 3, C.RED], [3, 3, C.RED],
  [4, 3, C.RED], [5, 3, C.RED], [6, 3, C.RED],
  // row 4
  [2, 4, C.RED], [3, 4, C.RED], [4, 4, C.RED], [5, 4, C.RED],
  // row 5
  [3, 5, C.RED], [4, 5, C.RED],
];

// ── Pixel Star (5×5) ──────────────────────────────────────────────────────
const STAR: PixelDef[] = [
  [2, 0, C.YEL],
  [1, 1, C.YEL], [2, 1, C.YEL], [3, 1, C.YEL],
  [0, 2, C.YEL], [1, 2, C.YEL], [2, 2, C.YEL], [3, 2, C.YEL], [4, 2, C.YEL],
  [1, 3, C.YEL], [2, 3, C.YEL], [3, 3, C.YEL],
  [0, 4, C.YEL], [2, 4, C.YEL], [4, 4, C.YEL],
];

// ── Pixel Coin (6×6) ──────────────────────────────────────────────────────
const COIN: PixelDef[] = [
  [1, 0, C.YEL], [2, 0, C.YEL], [3, 0, C.YEL], [4, 0, C.YEL],
  [0, 1, C.YEL], [1, 1, C.WHT], [2, 1, C.YEL], [3, 1, C.YEL], [4, 1, C.YEL], [5, 1, C.YEL],
  [0, 2, C.YEL], [1, 2, C.YEL], [2, 2, C.GRY], [3, 2, C.YEL], [4, 2, C.YEL], [5, 2, C.YEL],
  [0, 3, C.YEL], [1, 3, C.YEL], [2, 3, C.YEL], [3, 3, C.YEL], [4, 3, C.YEL], [5, 3, C.YEL],
  [1, 4, C.YEL], [2, 4, C.YEL], [3, 4, C.YEL], [4, 4, C.YEL],
];

function makeBoxShadow(pixels: PixelDef[]): string {
  return pixels
    .map(([col, row, color]) => `${col * PIXEL}px ${row * PIXEL}px 0 0 ${color}`)
    .join(', ');
}

// ── Ground platform strip ──────────────────────────────────────────────────
const PLATFORM: PixelDef[] = Array.from({ length: 14 }, (_, i) => [
  i,
  0,
  i % 2 === 0 ? C.GRN : C.BLU,
] as PixelDef);

// ── Simple hero character (5 cols × 7 rows) ────────────────────────────────
const HERO_CHAR: PixelDef[] = [
  // head
  [1, 0, C.YEL], [2, 0, C.YEL], [3, 0, C.YEL],
  [0, 1, C.YEL], [1, 1, C.WHT], [2, 1, C.YEL], [3, 1, C.BLU], [4, 1, C.YEL],
  [0, 2, C.YEL], [1, 2, C.YEL], [2, 2, C.YEL], [3, 2, C.YEL], [4, 2, C.YEL],
  // body
  [1, 3, C.BLU], [2, 3, C.RED], [3, 3, C.BLU],
  [0, 4, C.BLU], [1, 4, C.BLU], [2, 4, C.RED], [3, 4, C.BLU], [4, 4, C.BLU],
  // legs
  [1, 5, C.BLU], [3, 5, C.BLU],
  [1, 6, C.GRY], [3, 6, C.GRY],
];

export default function PixelArtHero({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className ?? ''}`}>
      <div
        aria-hidden="true"
        className="w-full h-full relative overflow-hidden bg-[#1a1a2e]"
        style={{ imageRendering: 'pixelated' }}
      >
        {/* Background dots / stars */}
        {[
          [12, 15], [35, 8], [65, 20], [82, 12],
          [20, 35], [55, 30], [88, 40], [10, 55],
        ].map(([left, top], i) => (
          <div
            key={i}
            aria-hidden="true"
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: PIXEL,
              height: PIXEL,
              background: i % 2 === 0 ? C.WHT : C.CYN,
              opacity: 0.5,
            }}
          />
        ))}

        {/* ── Hero character ────────────────────────────────────── */}
        <div
          aria-hidden="true"
          className="absolute"
          style={{
            left: 24,
            top: 30,
            width: PIXEL,
            height: PIXEL,
            background: 'transparent',
            boxShadow: makeBoxShadow(HERO_CHAR),
          }}
        />

        {/* ── Pixel coin ────────────────────────────────────────── */}
        <div
          aria-hidden="true"
          className="absolute"
          style={{
            left: 90,
            top: 30,
            width: PIXEL,
            height: PIXEL,
            background: 'transparent',
            boxShadow: makeBoxShadow(COIN),
          }}
        />

        {/* ── Pixel star ────────────────────────────────────────── */}
        <div
          aria-hidden="true"
          className="absolute"
          style={{
            right: 24,
            top: 28,
            width: PIXEL,
            height: PIXEL,
            background: 'transparent',
            boxShadow: makeBoxShadow(STAR),
          }}
        />

        {/* ── Pixel heart ───────────────────────────────────────── */}
        <div
          aria-hidden="true"
          className="absolute left-1/2"
          style={{
            top: 24,
            marginLeft: -32, // center the 8-col heart (8×8 = 64px wide → -32)
            width: PIXEL,
            height: PIXEL,
            background: 'transparent',
            boxShadow: makeBoxShadow(HEART),
          }}
        />

        {/* ── Ground platform ───────────────────────────────────── */}
        <div
          aria-hidden="true"
          className="absolute"
          style={{
            bottom: 28,
            left: 16,
            width: PIXEL,
            height: PIXEL,
            background: 'transparent',
            boxShadow: makeBoxShadow(PLATFORM),
          }}
        />

        {/* "PRESS START" text row */}
        <div
          aria-hidden="true"
          className="absolute bottom-2 left-0 right-0 flex justify-center"
        >
          <span
            className="text-[9px] font-mono tracking-widest motion-reduce:animate-none animate-pulse"
            style={{ color: C.WHT, textShadow: `0 0 6px ${C.CYN}` }}
          >
            PRESS START
          </span>
        </div>
      </div>
    </div>
  );
}
