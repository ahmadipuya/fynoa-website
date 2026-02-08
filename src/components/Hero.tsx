import { Globe } from 'lucide-react';

interface HeroProps {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
}

const content = {
  fr: {
    tagline: "La vie, en plus malin.",
    headline: "Gérez votre argent intelligemment avec l'IA",
    subheadline: "FYNOA est une plateforme de gestion financière intelligente conçue pour la Gen Z. Utilisez l'IA conversationnelle et l'authentification biométrique pour prendre le contrôle de vos finances.",
    cta: "Rejoindre la liste d'attente"
  },
  en: {
    tagline: "Life, but smarter.",
    headline: "Manage your money intelligently with AI",
    subheadline: "FYNOA is a smart financial management platform designed for Gen Z. Use conversational AI and biometric authentication to take control of your finances.",
    cta: "Join the Waitlist"
  }
};

export default function Hero({ language, setLanguage }: HeroProps) {
  const t = content[language];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00d4aa] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0066ff] rounded-full blur-[120px]"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          {/* FYNOA Logo */}
          <div className="w-12 h-12 bg-gradient-to-br from-[#00d4aa] to-[#0066ff] rounded-xl flex items-center justify-center text-2xl font-bold">
            F
          </div>
          <span className="text-2xl font-bold">FYNOA</span>
        </div>

        {/* Language Switcher */}
        <button
          onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">{language === 'fr' ? 'EN' : 'FR'}</span>
        </button>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl">
          <p className="text-[#00d4aa] text-lg md:text-xl mb-6 font-medium">{t.tagline}</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            {t.headline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl">
            {t.subheadline}
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#00d4aa] to-[#0066ff] rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-[#00d4aa]/50 transition-all transform hover:scale-105">
            {t.cta}
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8fafc] to-transparent"></div>
    </div>
  );
}
