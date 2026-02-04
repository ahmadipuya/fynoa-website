import React from 'react';
import { useLanguage } from './LanguageContext';
import { Globe, MessageCircle } from 'lucide-react';

export function Hero() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="relative bg-gradient-to-br from-[#00d4aa] via-[#0066ff] to-[#7c3aed] text-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#00d4aa] to-[#0066ff] bg-clip-text text-transparent">F</span>
          </div>
          <span className="text-2xl font-bold">FYNOA</span>
        </div>
        
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition"
        >
          <Globe className="w-5 h-5" />
          <span>{language === 'en' ? 'FR' : 'EN'}</span>
        </button>
      </nav>

      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">AI-Powered Neobank</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            {t('hero.subtitle')}
          </p>
          
          <button className="px-8 py-4 bg-white text-[#0066ff] rounded-lg font-semibold text-lg hover:bg-white/90 transition transform hover:scale-105">
            {t('hero.cta')}
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
