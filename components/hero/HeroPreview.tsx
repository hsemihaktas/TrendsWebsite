import type { ComponentType } from 'react';

export interface HeroInnerProps {
  className?: string;
}

// Will be populated in task 11.7
const HERO_MAP: Record<string, ComponentType<HeroInnerProps>> = {};

interface HeroPreviewProps {
  slug: string;
  label: string;
  minHeight?: string;
}

export default function HeroPreview({
  slug,
  label,
  minHeight = 'min-h-[180px]',
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
        // Fallback: styled placeholder until real hero components exist
        <div
          className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 motion-reduce:transition-none"
          aria-hidden="true"
        >
          <span className="text-gray-400 text-sm font-medium">
            {slug}
          </span>
        </div>
      )}
    </div>
  );
}
