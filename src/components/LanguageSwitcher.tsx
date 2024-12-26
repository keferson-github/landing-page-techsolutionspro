import { Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/translations';

const languages: Record<Language, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español'
};

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1.5">
      <Globe size={16} className="text-gray-300" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="bg-black/50 text-sm text-gray-300 border border-gray-700 rounded-lg px-2 py-1 appearance-none cursor-pointer hover:border-purple-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-colors backdrop-blur-sm"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundPosition: 'right 0.25rem center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1.25em 1.25em',
          paddingRight: '1.75rem'
        }}
      >
        {Object.entries(languages).map(([code, name]) => (
          <option key={code} value={code} className="bg-black text-gray-300">
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}