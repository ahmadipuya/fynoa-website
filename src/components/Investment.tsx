import { Target, Users, TrendingUp, Rocket } from 'lucide-react';

interface InvestmentProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: "Investir dans FYNOA",
    subtitle: "Rejoignez-nous dans notre mission de révolutionner la gestion financière pour la Gen Z",
    stats: [
      {
        icon: Target,
        value: "€2M",
        label: "Levée de fonds visée"
      },
      {
        icon: Users,
        value: "100K+",
        label: "Utilisateurs cibles en 2026"
      },
      {
        icon: TrendingUp,
        value: "5x",
        label: "Croissance prévue"
      },
      {
        icon: Rocket,
        value: "2026",
        label: "Lancement prévu"
      }
    ],
    opportunity: {
      title: "Une opportunité unique",
      points: [
        "Marché de la fintech en pleine croissance en Europe",
        "Gen Z : 2 milliards de personnes à travers le monde",
        "IA conversationnelle : technologie de demain",
        "Équipe expérimentée avec une vision claire",
        "Conformité réglementaire européenne (pas de licence bancaire requise au lancement)"
      ]
    },
    cta: "Contactez-nous pour investir"
  },
  en: {
    title: "Invest in FYNOA",
    subtitle: "Join us in our mission to revolutionize financial management for Gen Z",
    stats: [
      {
        icon: Target,
        value: "€2M",
        label: "Target fundraise"
      },
      {
        icon: Users,
        value: "100K+",
        label: "Target users in 2026"
      },
      {
        icon: TrendingUp,
        value: "5x",
        label: "Projected growth"
      },
      {
        icon: Rocket,
        value: "2026",
        label: "Planned launch"
      }
    ],
    opportunity: {
      title: "A unique opportunity",
      points: [
        "Growing fintech market in Europe",
        "Gen Z: 2 billion people worldwide",
        "Conversational AI: tomorrow's technology",
        "Experienced team with a clear vision",
        "European regulatory compliance (no banking license required at launch)"
      ]
    },
    cta: "Contact us to invest"
  }
};

export default function Investment({ language }: InvestmentProps) {
  const t = content[language];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#00d4aa] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0066ff] rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
          <p className="text-xl text-gray-300">{t.subtitle}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {t.stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00d4aa] to-[#0066ff] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Opportunity */}
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-8 text-center">{t.opportunity.title}</h3>
          <ul className="space-y-4 mb-10">
            {t.opportunity.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-[#00d4aa] to-[#0066ff] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-lg text-gray-200">{point}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#00d4aa] to-[#0066ff] rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-[#00d4aa]/50 transition-all transform hover:scale-105">
              {t.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
