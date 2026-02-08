import { MessageSquare, Fingerprint, Smartphone, Shield, TrendingUp, Zap } from 'lucide-react';

interface FeaturesProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: "Pourquoi choisir FYNOA ?",
    subtitle: "Une plateforme financière conçue pour la Gen Z",
    features: [
      {
        icon: MessageSquare,
        title: "IA Conversationnelle",
        description: "Posez des questions en langage naturel et obtenez des conseils financiers instantanés"
      },
      {
        icon: Fingerprint,
        title: "Authentification Biométrique",
        description: "Sécurisez vos données avec la reconnaissance faciale et d'empreintes digitales"
      },
      {
        icon: Smartphone,
        title: "Mobile-First",
        description: "Une expérience optimisée pour votre smartphone, disponible 24/7"
      },
      {
        icon: Shield,
        title: "Sécurité Maximale",
        description: "Vos données sont cryptées et protégées selon les normes européennes"
      },
      {
        icon: TrendingUp,
        title: "Suivi en Temps Réel",
        description: "Visualisez vos dépenses et économies en temps réel avec des graphiques intelligents"
      },
      {
        icon: Zap,
        title: "Rapide & Intuitif",
        description: "Une interface conçue pour être simple, rapide et agréable à utiliser"
      }
    ]
  },
  en: {
    title: "Why choose FYNOA?",
    subtitle: "A financial platform designed for Gen Z",
    features: [
      {
        icon: MessageSquare,
        title: "Conversational AI",
        description: "Ask questions in natural language and get instant financial advice"
      },
      {
        icon: Fingerprint,
        title: "Biometric Authentication",
        description: "Secure your data with facial and fingerprint recognition"
      },
      {
        icon: Smartphone,
        title: "Mobile-First",
        description: "An optimized experience for your smartphone, available 24/7"
      },
      {
        icon: Shield,
        title: "Maximum Security",
        description: "Your data is encrypted and protected according to European standards"
      },
      {
        icon: TrendingUp,
        title: "Real-Time Tracking",
        description: "Visualize your spending and savings in real-time with smart graphs"
      },
      {
        icon: Zap,
        title: "Fast & Intuitive",
        description: "An interface designed to be simple, fast, and enjoyable to use"
      }
    ]
  }
};

export default function Features({ language }: FeaturesProps) {
  const t = content[language];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#00d4aa] to-[#0066ff] rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
