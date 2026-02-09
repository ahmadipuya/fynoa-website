import { Rocket, Target, Globe2, TrendingUp } from 'lucide-react';

interface StrategyProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: "Stratégie de Croissance",
    subtitle: "Notre plan pour conquérir le marché européen",
    phases: [
      {
        icon: Rocket,
        phase: "Phase 1 : 2025",
        title: "Lancement en France",
        points: [
          "MVP avec IA conversationnelle",
          "Authentification biométrique",
          "10,000 utilisateurs beta",
          "Partenariat avec institutions financières"
        ]
      },
      {
        icon: Target,
        phase: "Phase 2 : 2026",
        title: "Expansion Europe de l'Ouest",
        points: [
          "Lancement Allemagne, UK, Espagne",
          "100,000 utilisateurs actifs",
          "Fonctionnalités d'investissement",
          "Programme de fidélité"
        ]
      },
      {
        icon: Globe2,
        phase: "Phase 3 : 2027",
        title: "Expansion Moyen-Orient",
        points: [
          "Lancement EAU, Arabie Saoudite",
          "500,000+ utilisateurs",
          "Services premium",
          "Conformité Sharia"
        ]
      },
      {
        icon: TrendingUp,
        phase: "Phase 4 : 2028",
        title: "Leadership Régional",
        points: [
          "1M+ utilisateurs actifs",
          "Profitabilité",
          "Écosystème complet",
          "Expansion globale"
        ]
      }
    ]
  },
  en: {
    title: "Growth Strategy",
    subtitle: "Our plan to conquer the European market",
    phases: [
      {
        icon: Rocket,
        phase: "Phase 1: 2025",
        title: "Launch in France",
        points: [
          "MVP with conversational AI",
          "Biometric authentication",
          "10,000 beta users",
          "Partnership with financial institutions"
        ]
      },
      {
        icon: Target,
        phase: "Phase 2: 2026",
        title: "Western Europe Expansion",
        points: [
          "Launch Germany, UK, Spain",
          "100,000 active users",
          "Investment features",
          "Loyalty program"
        ]
      },
      {
        icon: Globe2,
        phase: "Phase 3: 2027",
        title: "Middle East Expansion",
        points: [
          "Launch UAE, Saudi Arabia",
          "500,000+ users",
          "Premium services",
          "Sharia compliance"
        ]
      },
      {
        icon: TrendingUp,
        phase: "Phase 4: 2028",
        title: "Regional Leadership",
        points: [
          "1M+ active users",
          "Profitability",
          "Complete ecosystem",
          "Global expansion"
        ]
      }
    ]
  }
};

export default function Strategy({ language }: StrategyProps) {
  const t = content[language];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-xl text-gray-300">{t.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {t.phases.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00d4aa] to-[#0066ff] rounded-xl flex items-center justify-center mr-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[#00d4aa] font-semibold">{item.phase}</div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="text-[#00d4aa] mr-2">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}