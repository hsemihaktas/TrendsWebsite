export type CategoryId =
  | 'modern-populer'
  | 'clean-professional'
  | 'bold-expressive'
  | 'dark-atmospheric'
  | 'retro-nostalgic'
  | 'artistic-creative'
  | 'yeni-guncel'
  | 'kulturel-estetik';

export interface TrendFrontmatter {
  title: string;
  slug: string;
  category: CategoryId;
  tags: string[];
  description: string;
  publishedAt: string;
}

export type Trend = TrendFrontmatter;

export interface TrendWithContent extends TrendFrontmatter {
  rawContent: string;
}

export interface TrendNavItem {
  slug: string;
  title: string;
}

export interface TrendNavigationResult {
  prev: TrendNavItem | null;
  next: TrendNavItem | null;
}
