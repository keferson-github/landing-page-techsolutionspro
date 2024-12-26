export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  type: 'website' | 'landing-page' | 'app' | 'saas';
}