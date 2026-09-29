import type { ComponentType } from "react";

// Modern & Popüler
import NeubrutalisimHero from "./modern/NeubrutalisimHero";
import GlassmorphismHero from "./modern/GlassmorphismHero";
import NeumorphismHero from "./modern/NeumorphismHero";
import ClaymorphismHero from "./modern/ClaymorphismHero";
import AuroraMeshHero from "./modern/AuroraMeshHero";
import BentoGridHero from "./modern/BentoGridHero";

// Clean & Professional
import MinimalismHero from "./clean/MinimalismHero";
import FlatDesignHero from "./clean/FlatDesignHero";
import MaterialDesignHero from "./clean/MaterialDesignHero";
import SwissStyleHero from "./clean/SwissStyleHero";
import QuietLuxuryHero from "./clean/QuietLuxuryHero";
import CleanUIHero from "./clean/CleanUIHero";

// Bold & Expressive
import MaximalismHero from "./bold/MaximalismHero";
import DopamineDesignHero from "./bold/DopamineDesignHero";
import TypeFirstHero from "./bold/TypeFirstHero";
import MemphisDesignHero from "./bold/MemphisDesignHero";
import BrutalismHero from "./bold/BrutalismHero";

// Dark & Atmospheric
import CyberpunkHero from "./dark/CyberpunkHero";
import FUIHUDHero from "./dark/FUIHUDHero";
import TerminalCLIHero from "./dark/TerminalCLIHero";
import DarkModeHero from "./dark/DarkModeHero";

// Retro & Nostalgic
import SkeuomorphismHero from "./retro/SkeuomorphismHero";
import Y2KHero from "./retro/Y2KHero";
import VaporwaveHero from "./retro/VaporwaveHero";
import SynthwaveHero from "./retro/SynthwaveHero";
import PixelArtHero from "./retro/PixelArtHero";
import FrutigerAeroHero from "./retro/FrutigerAeroHero";

// Artistic & Creative
import HolographicHero from "./artistic/HolographicHero";
import ChromeLiquidHero from "./artistic/ChromeLiquidHero";
import OrganicBlobHero from "./artistic/OrganicBlobHero";
import HandDrawnHero from "./artistic/HandDrawnHero";
import KawaiiHero from "./artistic/KawaiiHero";
import CollageDesignHero from "./artistic/CollageDesignHero";

export interface HeroInnerProps {
  className?: string;
}

const HERO_MAP: Record<string, ComponentType<HeroInnerProps>> = {
  // Modern & Popüler
  neubrutalism: NeubrutalisimHero,
  glassmorphism: GlassmorphismHero,
  neumorphism: NeumorphismHero,
  claymorphism: ClaymorphismHero,
  "aurora-mesh-gradient": AuroraMeshHero,
  "bento-grid": BentoGridHero,

  // Clean & Professional
  minimalism: MinimalismHero,
  "flat-design": FlatDesignHero,
  "material-design": MaterialDesignHero,
  "swiss-international-style": SwissStyleHero,
  "quiet-luxury": QuietLuxuryHero,
  "clean-ui": CleanUIHero,

  // Bold & Expressive
  maximalism: MaximalismHero,
  "dopamine-design": DopamineDesignHero,
  "type-first-design": TypeFirstHero,
  "memphis-design": MemphisDesignHero,
  brutalism: BrutalismHero,

  // Dark & Atmospheric
  cyberpunk: CyberpunkHero,
  "fui-hud": FUIHUDHero,
  "terminal-cli-ui": TerminalCLIHero,
  "dark-mode-ui": DarkModeHero,

  // Retro & Nostalgic
  skeuomorphism: SkeuomorphismHero,
  y2k: Y2KHero,
  vaporwave: VaporwaveHero,
  "synthwave-outrun": SynthwaveHero,
  "pixel-art": PixelArtHero,
  "frutiger-aero": FrutigerAeroHero,

  // Artistic & Creative
  "holographic-iridescent": HolographicHero,
  "chrome-liquid-metal": ChromeLiquidHero,
  "organic-blob-design": OrganicBlobHero,
  "hand-drawn-ui": HandDrawnHero,
  "kawaii-ui": KawaiiHero,
  "collage-design": CollageDesignHero,
};

interface HeroPreviewProps {
  slug: string;
  label: string;
  minHeight?: string;
}

export default function HeroPreview({
  slug,
  label,
  minHeight = "min-h-[180px]",
}: HeroPreviewProps) {
  const HeroComponent = HERO_MAP[slug];

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden rounded-t-lg ${minHeight} w-full`}
    >
      {HeroComponent ? (
        <HeroComponent className="w-full h-full" />
      ) : (
        // Fallback: styled placeholder for unknown slugs
        <div
          className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 motion-reduce:transition-none"
          aria-hidden="true"
        >
          <span className="text-gray-400 text-sm font-medium">{slug}</span>
        </div>
      )}
    </div>
  );
}
