import { useLanguage } from './LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
      className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl transition-all border border-slate-700/50 hover:border-sky-500/50"
    >
      <Globe className="w-4 h-4 text-sky-400" />
      <span className="text-sm font-semibold text-slate-300">
        {language === 'fr' ? 'EN' : 'FR'}
      </span>
    </button>
  );
}