import type { ComponentType } from 'react';

// Modern & Popüler
import NeubrutalisimHero from './modern/NeubrutalisimHero';
import GlassmorphismHero from './modern/GlassmorphismHero';
import NeumorphismHero from './modern/NeumorphismHero';
import ClaymorphismHero from './modern/ClaymorphismHero';
import AuroraMeshHero from './modern/AuroraMeshHero';
import BentoGridHero from './modern/BentoGridHero';
// Clean & Professional
import MinimalismHero from './clean/MinimalismHero';
import FlatDesignHero from './clean/FlatDesignHero';
import MaterialDesignHero from './clean/MaterialDesignHero';
import SwissStyleHero from './clean/SwissStyleHero';
import QuietLuxuryHero from './clean/QuietLuxuryHero';
import CleanUIHero from './clean/CleanUIHero';
import BiophilicDesignHero from './clean/BiophilicDesignHero';
import MonochromeUIHero from './clean/MonochromeUIHero';
// Bold & Expressive
import MaximalismHero from './bold/MaximalismHero';
import DopamineDesignHero from './bold/DopamineDesignHero';
import TypeFirstHero from './bold/TypeFirstHero';
import MemphisDesignHero from './bold/MemphisDesignHero';
import BrutalismHero from './bold/BrutalismHero';
import BauhausHero from './bold/BauhausHero';
import ArtDecoHero from './bold/ArtDecoHero';
import ConstructivismHero from './bold/ConstructivismHero';
import PopArtHero from './bold/PopArtHero';
// Dark & Atmospheric
import CyberpunkHero from './dark/CyberpunkHero';
import FUIHUDHero from './dark/FUIHUDHero';
import TerminalCLIHero from './dark/TerminalCLIHero';
import DarkModeHero from './dark/DarkModeHero';
// Retro & Nostalgic
import SkeuomorphismHero from './retro/SkeuomorphismHero';
import Y2KHero from './retro/Y2KHero';
import VaporwaveHero from './retro/VaporwaveHero';
import SynthwaveHero from './retro/SynthwaveHero';
import PixelArtHero from './retro/PixelArtHero';
import FrutigerAeroHero from './retro/FrutigerAeroHero';
import WebcoreHero from './retro/WebcoreHero';
import WabiSabiHero from './retro/WabiSabiHero';
// Artistic & Creative
import HolographicHero from './artistic/HolographicHero';
import ChromeLiquidHero from './artistic/ChromeLiquidHero';
import OrganicBlobHero from './artistic/OrganicBlobHero';
import HandDrawnHero from './artistic/HandDrawnHero';
import KawaiiHero from './artistic/KawaiiHero';
import CollageDesignHero from './artistic/CollageDesignHero';
import ArtNouveauHero from './artistic/ArtNouveauHero';
import EditorialDesignHero from './artistic/EditorialDesignHero';
import ScrapbookUIHero from './artistic/ScrapbookUIHero';
import SolarpunkHero from './artistic/SolarpunkHero';
import IllustrationUIHero from './artistic/IllustrationUIHero';
// Yeni & Güncel
import LiquidGlassHero from './yeni/LiquidGlassHero';
import KineticTypographyHero from './yeni/KineticTypographyHero';
import SpatialUIHero from './yeni/SpatialUIHero';
import AntiDesignHero from './yeni/AntiDesignHero';
import CorporateMemphisHero from './yeni/CorporateMemphisHero';
// Kültürel Estetik
import DarkAcademiaHero from './kulturel/DarkAcademiaHero';
import CottagecoreHero from './kulturel/CottagecoreHero';
import LoFiAestheticHero from './kulturel/LoFiAestheticHero';

export interface HeroInnerProps { className?: string; }

const HERO_MAP: Record<string, ComponentType<HeroInnerProps>> = {
  // Modern & Popüler
  'neubrutalism': NeubrutalisimHero,
  'glassmorphism': GlassmorphismHero,
  'neumorphism': NeumorphismHero,
  'claymorphism': ClaymorphismHero,
  'aurora-mesh-gradient': AuroraMeshHero,
  'bento-grid': BentoGridHero,
  // Clean & Professional
  'minimalism': MinimalismHero,
  'flat-design': FlatDesignHero,
  'material-design': MaterialDesignHero,
  'swiss-international-style': SwissStyleHero,
  'quiet-luxury': QuietLuxuryHero,
  'clean-ui': CleanUIHero,
  'biophilic-design': BiophilicDesignHero,
  'monochrome-ui': MonochromeUIHero,
  // Bold & Expressive
  'maximalism': MaximalismHero,
  'dopamine-design': DopamineDesignHero,
  'type-first-design': TypeFirstHero,
  'memphis-design': MemphisDesignHero,
  'brutalism': BrutalismHero,
  'bauhaus': BauhausHero,
  'art-deco': ArtDecoHero,
  'constructivism': ConstructivismHero,
  'pop-art': PopArtHero,
  // Dark & Atmospheric
  'cyberpunk': CyberpunkHero,
  'fui-hud': FUIHUDHero,
  'terminal-cli-ui': TerminalCLIHero,
  'dark-mode-ui': DarkModeHero,
  // Retro & Nostalgic
  'skeuomorphism': SkeuomorphismHero,
  'y2k': Y2KHero,
  'vaporwave': VaporwaveHero,
  'synthwave-outrun': SynthwaveHero,
  'pixel-art': PixelArtHero,
  'frutiger-aero': FrutigerAeroHero,
  'web-1-0': WebcoreHero,
  'wabi-sabi': WabiSabiHero,
  // Artistic & Creative
  'holographic-iridescent': HolographicHero,
  'chrome-liquid-metal': ChromeLiquidHero,
  'organic-blob-design': OrganicBlobHero,
  'hand-drawn-ui': HandDrawnHero,
  'kawaii-ui': KawaiiHero,
  'collage-design': CollageDesignHero,
  'art-nouveau': ArtNouveauHero,
  'editorial-design': EditorialDesignHero,
  'scrapbook-ui': ScrapbookUIHero,
  'solarpunk': SolarpunkHero,
  '3d-illustration': IllustrationUIHero,
  // Yeni & Güncel
  'liquid-glass': LiquidGlassHero,
  'kinetic-typography': KineticTypographyHero,
  'spatial-ui': SpatialUIHero,
  'anti-design': AntiDesignHero,
  'corporate-memphis': CorporateMemphisHero,
  // Kültürel Estetik
  'dark-academia': DarkAcademiaHero,
  'cottagecore': CottagecoreHero,
  'lo-fi-aesthetic': LoFiAestheticHero,
};

interface HeroPreviewProps {
  slug: string;
  label: string;
  height?: string;
}

export default function HeroPreview({ slug, label, height = 'h-[200px]' }: HeroPreviewProps) {
  const HeroComponent = HERO_MAP[slug];
  return (
    <div role="img" aria-label={label} className={`relative w-full overflow-hidden ${height}`}>
      {HeroComponent ? (
        <div className="absolute inset-0">
          <HeroComponent className="w-full h-full" />
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[#F0EDE6] dark:bg-[#1C1B19]" aria-hidden="true">
          <span className="text-[#A8A49C] text-[12px] font-medium">{slug}</span>
        </div>
      )}
    </div>
  );
}
