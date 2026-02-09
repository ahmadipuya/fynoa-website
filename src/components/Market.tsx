import { Users, TrendingUp, Target, Award } from 'lucide-react';

interface MarketProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: "Opportunité de Marché",
    subtitle: "Un marché en forte croissance pour la Gen Z",
    stats: [
      {
        icon: Users,
        value: "360M+",
        label: "Gen Z en Europe & Moyen-Orient"
      },
      {
        icon: TrendingUp,
        value: "15%",
        label: "Croissance annuelle du marché fintech"
      },
      {
        icon: Target,
        value: "€450Md",
        label: "Pouvoir d'achat de la Gen Z en Europe"
      },
      {
        icon: Award,
        value: "#1",
        label: "Priorité : Gestion financière intelligente"
      }
    ],
    advantage: {
      title: 'Avantage Concurrentiel',
      description: 'Contrairement aux néobanques existantes, FYNOA se concentre exclusivement sur la Gen Z avec une approche conversationnelle unique et une authentification biométrique avancée.'
    }
  },
  en: {
    title: "Market Opportunity",
    subtitle: "A fast-growing market for Gen Z",
    stats: [
      {
        icon: Users,
        value: "360M+",
        label: "Gen Z in Europe & Middle East"
      },
      {
        icon: TrendingUp,
        value: "15%",
        label: "Annual fintech market growth"
      },
      {
        icon: Target,
        value: "€450B",
        label: "Gen Z purchasing power in Europe"
      },
      {
        icon: Award,
        value: "#1",
        label: "Priority: Smart financial management"
      }
    ],
    advantage: {
      title: 'Competitive Advantage',
      description: 'Unlike existing neobanks, FYNOA focuses exclusively on Gen Z with a unique conversational approach and advanced biometric authentication.'
    }
  }
};

export default function Market({ language }: MarketProps) {
  const t = content[language];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-xl text-gray-300">{t.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {t.stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00d4aa] to-[#0066ff] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-[#00d4aa]/10 to-[#0066ff]/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">{t.advantage.title}</h3>
          <p className="text-gray-300 text-lg leading-relaxed">{t.advantage.description}</p>
        </div>
      </div>
    </section>
  );
}