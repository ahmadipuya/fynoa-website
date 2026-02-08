import { Mail, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    tagline: "La vie, en plus malin.",
    description: "FYNOA est une plateforme de gestion financière intelligente pour la Gen Z, propulsée par l'IA conversationnelle.",
    contact: "Contact",
    email: "contact@fynoa.ai",
    legal: "© 2026 FYNOA. Tous droits réservés.",
    note: "FYNOA n'est pas une banque et ne nécessite pas de licence bancaire à ce stade. Nous sommes une plateforme de gestion financière conforme aux réglementations européennes."
  },
  en: {
    tagline: "Life, but smarter.",
    description: "FYNOA is a smart financial management platform for Gen Z, powered by conversational AI.",
    contact: "Contact",
    email: "contact@fynoa.ai",
    legal: "© 2026 FYNOA. All rights reserved.",
    note: "FYNOA is not a bank and does not require a banking license at this stage. We are a financial management platform compliant with European regulations."
  }
};

export default function Footer({ language }: FooterProps) {
  const t = content[language];

  return (
    <footer className="bg-[#0a0e27] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00d4aa] to-[#0066ff] rounded-xl flex items-center justify-center text-2xl font-bold">
                F
              </div>
              <span className="text-2xl font-bold">FYNOA</span>
            </div>
            <p className="text-[#00d4aa] mb-4 font-medium">{t.tagline}</p>
            <p className="text-gray-400 mb-6">{t.description}</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@fynoa.ai"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.contact}</h4>
            <a
              href="mailto:contact@fynoa.ai"
              className="text-gray-400 hover:text-[#00d4aa] transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {t.email}
            </a>
          </div>
        </div>

        {/* Legal note */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-gray-500 mb-4">{t.note}</p>
          <p className="text-sm text-gray-500">{t.legal}</p>
        </div>
      </div>
    </footer>
  );
}
