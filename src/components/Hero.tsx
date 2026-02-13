import { useLanguage } from './LanguageContext';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const { language } = useLanguage();

  const content = {
    fr: {
      tagline: "La vie, en plus malin.",
      name: "FYNOA",
      description: "Plateforme intelligente de gestion financière pour la Génération Z",
      cta: "En savoir plus"
    },
    en: {
      tagline: "Life, but smarter.",
      name: "FYNOA",
      description: "Intelligent financial management platform for Generation Z",
      cta: "Learn more"
    }
  };

  const t = content[language];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0ea5e910,transparent_70%)]"></div>

      <div className="relative z-10 text-center px-4">
        {/* Logo at Top */}
        <div className="mb-20">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-sky-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-sky-500/50">
            <span className="text-5xl font-black text-white">F</span>
          </div>
        </div>

        {/* Company Name - Center */}
        <div className="mb-24">
          <h1 className="text-8xl sm:text-9xl font-black tracking-tight bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent mb-6">
            {t.name}
          </h1>
          <p className="text-2xl text-sky-300 italic tracking-wide">
            {t.tagline}
          </p>
        </div>

        {/* Description - Bottom */}
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-slate-400 mb-10">
            {t.description}
          </p>
          <button
            onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
          >
            {t.cta}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}