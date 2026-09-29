import type { CategoryId } from '@/types/trend';

export interface CategoryConfig {
  id: CategoryId;
  name: string;
  badgeClass: string;
}

export const CATEGORIES: Record<CategoryId, CategoryConfig> = {
  'modern-populer':    { id: 'modern-populer',    name: 'Modern & Popüler',     badgeClass: 'bg-indigo-100 text-indigo-800' },
  'clean-professional':{ id: 'clean-professional', name: 'Clean & Professional',  badgeClass: 'bg-sky-100 text-sky-800' },
  'bold-expressive':   { id: 'bold-expressive',    name: 'Bold & Expressive',     badgeClass: 'bg-orange-100 text-orange-800' },
  'dark-atmospheric':  { id: 'dark-atmospheric',   name: 'Dark & Atmospheric',    badgeClass: 'bg-violet-100 text-violet-800' },
  'retro-nostalgic':   { id: 'retro-nostalgic',    name: 'Retro & Nostalgic',     badgeClass: 'bg-pink-100 text-pink-800' },
  'artistic-creative': { id: 'artistic-creative',  name: 'Artistic & Creative',   badgeClass: 'bg-emerald-100 text-emerald-800' },
  'yeni-guncel':       { id: 'yeni-guncel',        name: 'Yeni & Güncel',         badgeClass: 'bg-cyan-100 text-cyan-800' },
  'kulturel-estetik':  { id: 'kulturel-estetik',   name: 'Kültürel Estetik',      badgeClass: 'bg-rose-100 text-rose-800' },
};

export const CATEGORY_ORDER: CategoryId[] = [
  'modern-populer',
  'clean-professional',
  'bold-expressive',
  'dark-atmospheric',
  'retro-nostalgic',
  'artistic-creative',
  'yeni-guncel',
  'kulturel-estetik',
];
