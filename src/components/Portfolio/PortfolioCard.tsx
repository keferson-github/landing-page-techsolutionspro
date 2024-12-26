import { PortfolioItem } from './types';

interface Props {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: Props) {
  return (
    <div className="flex-none w-[300px] group">
      <div className="bg-purple-900/20 backdrop-blur-lg rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300">
        <div className="relative h-[200px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
          <p className="text-sm text-purple-300 mb-2">{item.subtitle}</p>
          <p className="text-sm text-gray-400 mb-2">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-purple-600/30 text-purple-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}