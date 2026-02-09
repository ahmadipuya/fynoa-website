import { Mail, Linkedin, Globe } from 'lucide-react';

interface ContactProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: "Contactez-Nous",
    subtitle: "Intéressé par FYNOA ? Parlons-en !",
    description: "Que vous soyez investisseur, partenaire potentiel ou simplement curieux, nous serions ravis d'échanger avec vous.",
    email: "contact@fynoa.ai",
    waitlist: {
      title: "Rejoindre la Liste d'Attente",
      description: "Soyez parmi les premiers à découvrir FYNOA lors de notre lancement",
      cta: "S'inscrire"
    },
    connect: {
      title: "Suivez-Nous",
      description: "Restez informé de nos dernières actualités"
    }
  },
  en: {
    title: "Contact Us",
    subtitle: "Interested in FYNOA? Let's talk!",
    description: "Whether you're an investor, potential partner, or just curious, we'd love to hear from you.",
    email: "contact@fynoa.ai",
    waitlist: {
      title: "Join the Waitlist",
      description: "Be among the first to discover FYNOA at launch",
      cta: "Sign Up"
    },
    connect: {
      title: "Follow Us",
      description: "Stay updated with our latest news"
    }
  }
};

export default function Contact({ language }: ContactProps) {
  const t = content[language];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-xl text-gray-300 mb-4">{t.subtitle}</p>
          <p className="text-lg text-gray-400">{t.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-[#00d4aa] to-[#0066ff] rounded-xl flex items-center justify-center mb-6">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.waitlist.title}</h3>
            <p className="text-gray-300 mb-6">{t.waitlist.description}</p>
            <a
              href={`mailto:${t.email}?subject=Waitlist Registration`}
              className="inline-block bg-gradient-to-r from-[#00d4aa] to-[#0066ff] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
            >
              {t.waitlist.cta}
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-[#00d4aa] to-[#0066ff] rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.connect.title}</h3>
            <p className="text-gray-300 mb-6">{t.connect.description}</p>
            <div className="flex gap-4">
              <a
                href="mailto:contact@fynoa.ai"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/fynoa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href={`mailto:${t.email}`}
            className="text-[#00d4aa] hover:text-[#00ffcc] text-lg font-semibold transition-colors duration-300"
          >
            {t.email}
          </a>
        </div>
      </div>
    </section>
  );
}