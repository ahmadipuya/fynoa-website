import { useLanguage } from './LanguageContext';
import { Rocket, Users, Globe2, TrendingUp, CheckCircle } from 'lucide-react';

export function Strategy() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Stratégie de Croissance",
      subtitle: "Un plan ambitieux pour conquérir le marché européen",
      phases: [
        {
          phase: "Phase 1",
          title: "Lancement MVP",
          timeline: "Q1 2025",
          icon: Rocket,
          objectives: [
            "Développement de la plateforme core",
            "Intégration de l'IA conversationnelle",
            "Authentification biométrique",
            "Beta test avec 1000 utilisateurs"
          ]
        },
        {
          phase: "Phase 2",
          title: "Expansion France",
          timeline: "Q2-Q4 2025",
          icon: Users,
          objectives: [
            "Lancement public en France",
            "Partenariats avec universités",
            "100K utilisateurs actifs",
            "Monétisation premium"
          ]
        },
        {
          phase: "Phase 3",
          title: "Europe",
          timeline: "2026",
          icon: Globe2,
          objectives: [
            "Expansion Allemagne, Espagne, Italie",
            "Localisation multilingue",
            "1M+ utilisateurs",
            "Série A fundraising"
          ]
        },
        {
          phase: "Phase 4",
          title: "Leadership",
          timeline: "2027+",
          icon: TrendingUp,
          objectives: [
            "Leader européen fintech Gen Z",
            "10M+ utilisateurs",
            "Rentabilité opérationnelle",
            "Innovation continue IA"
          ]
        }
      ],
      businessModel: {
        title: "Modèle de Revenus",
        streams: [
          "Abonnement Premium: €4.99/mois - Fonctionnalités IA avancées",
          "Interchange fees: Commission sur transactions",
          "Partenariats: Offres exclusives brands Gen Z",
          "API Platform: Services B2B pour entreprises"
        ]
      }
    },
    en: {
      title: "Growth Strategy",
      subtitle: "An ambitious plan to conquer the European market",
      phases: [
        {
          phase: "Phase 1",
          title: "MVP Launch",
          timeline: "Q1 2025",
          icon: Rocket,
          objectives: [
            "Core platform development",
            "Conversational AI integration",
            "Biometric authentication",
            "Beta test with 1000 users"
          ]
        },
        {
          phase: "Phase 2",
          title: "France Expansion",
          timeline: "Q2-Q4 2025",
          icon: Users,
          objectives: [
            "Public launch in France",
            "University partnerships",
            "100K active users",
            "Premium monetization"
          ]
        },
        {
          phase: "Phase 3",
          title: "Europe",
          timeline: "2026",
          icon: Globe2,
          objectives: [
            "Expansion Germany, Spain, Italy",
            "Multilingual localization",
            "1M+ users",
            "Series A fundraising"
          ]
        },
        {
          phase: "Phase 4",
          title: "Leadership",
          timeline: "2027+",
          icon: TrendingUp,
          objectives: [
            "European Gen Z fintech leader",
            "10M+ users",
            "Operational profitability",
            "Continuous AI innovation"
          ]
        }
      ],
      businessModel: {
        title: "Revenue Model",
        streams: [
          "Premium Subscription: €4.99/month - Advanced AI features",
          "Interchange fees: Transaction commissions",
          "Partnerships: Exclusive Gen Z brand offers",
          "API Platform: B2B services for companies"
        ]
      }
    }
  };

  const t = content[language];

  return (
    <section id="strategy" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 hidden lg:block"></div>

          <div className="space-y-16">
            {t.phases.map((phase, index) => {
              const Icon = phase.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8`}
                >
                  {/* Content Card */}
                  <div className="lg:w-5/12 w-full">
                    <div className="p-8 bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-3xl backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg shadow-purple-500/50">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-purple-300 font-semibold">{phase.phase}</div>
                          <div className="text-2xl font-bold text-white">{phase.title}</div>
                        </div>
                      </div>
                      
                      <div className="inline-block px-4 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-4">
                        {phase.timeline}
                      </div>

                      <div className="space-y-3">
                        {phase.objectives.map((objective, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-300">{objective}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Circle (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full items-center justify-center shadow-xl shadow-purple-500/50 border-4 border-slate-950">
                    <div className="text-2xl font-black text-white">{index + 1}</div>
                  </div>

                  {/* Spacer */}
                  <div className="lg:w-5/12 hidden lg:block"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Business Model */}
        <div
          className="relative p-12 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-3xl backdrop-blur-sm"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            {t.businessModel.title}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {t.businessModel.streams.map((stream, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-purple-800/30 to-pink-800/30 border border-purple-500/20 rounded-2xl"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                  <p className="text-slate-300 leading-relaxed">{stream}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}