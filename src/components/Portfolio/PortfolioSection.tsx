import { portfolioItems } from './portfolioData';
import PortfolioCard from './PortfolioCard';
import InfiniteCarousel from './InfiniteCarousel';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-black via-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nosso Portfólio
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conheça os principais setores de atuação que atendemos em nossa empresa.
          </p>
        </div>
        
        <InfiniteCarousel>
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </InfiniteCarousel>
      </div>
    </section>
  );
}