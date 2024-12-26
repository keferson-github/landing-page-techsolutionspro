import { pt } from './pt';
import { en } from './en';
import { es } from './es';

export const translations = {
  pt,
  en,
  es
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.pt;