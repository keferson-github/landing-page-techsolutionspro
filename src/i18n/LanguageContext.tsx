import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { translations, Language, TranslationKeys } from './translations';

interface LanguageContextType {
  language: Language;
  t: TranslationKeys;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('pt');

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
  }, []);

  const value = {
    language,
    t: translations[language],
    setLanguage: handleSetLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}