import { useLanguage } from './LanguageContext';
import { Logo } from './Logo';
import { Heart } from 'lucide-react';

export function Footer() {
  const { language } = useLanguage();

  const content = {
    fr: {
      tagline: "La vie, en plus malin.",
      description: "FYNOA révolutionne la finance pour la Génération Z avec l'IA conversationnelle et la biométrie avancée.",
      rights: "Tous droits réservés.",
      made: "Fait avec",
      in: "à Paris"
    },
    en: {
      tagline: "Life, but smarter.",
      description: "FYNOA is revolutionizing finance for Generation Z with conversational AI and advanced biometrics.",
      rights: "All rights reserved.",
      made: "Made with",
      in: "in Paris"
    }
  };

  const t = content[language];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Logo className="w-40 h-10 mb-6" />
            <p className="text-sm text-slate-500 italic mb-4">{t.tagline}</p>
            <p className="text-slate-400 leading-relaxed max-w-md">
              {t.description}
            </p>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-slate-400">
              <p>hello@fynoa.ai</p>
              <p>Paris, France</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 FYNOA. {t.rights}
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-2">
            {t.made} <Heart className="w-4 h-4 text-red-500 fill-red-500" /> {t.in}
          </p>
        </div>
      </div>
    </footer>
  );
}