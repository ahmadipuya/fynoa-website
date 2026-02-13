import { useLanguage } from './LanguageContext';
import { Rocket, Users, Globe, TrendingUp } from 'lucide-react';

export function Strategy() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Stratégie Go-to-Market",
      subtitle: "Un plan en trois phases pour conquérir le marché",
      phases: [
        {
          phase: "Phase 1",
          timeline: "Mois 1-6",
          title: "Lancement France",
          icon: Rocket,
          color: "from-blue-500 to-cyan-500",
          goals: [
            "Lancement beta avec 1000 early adopters",
            "Partenariats avec influenceurs Gen Z",
            "Campagne marketing sur TikTok et Instagram",
            "Obtention des premières licences"
          ]
        },
        {
          phase: "Phase 2",
          timeline: "Mois 7-12",
          title: "Croissance Nationale",
          icon: Users,
          color: "from-purple-500 to-pink-500",
          goals: [
            "50 000 utilisateurs actifs",
            "Partenariats avec universités",
            "Programme de parrainage viral",
            "Levée de fonds Series A"
          ]
        },
        {
          phase: "Phase 3",
          timeline: "Année 2+",
          title: "Expansion Européenne",
          icon: Globe,
          color: "from-emerald-500 to-teal-500",
          goals: [
            "Expansion en Allemagne et Espagne",
            "500 000+ utilisateurs",
            "Nouvelles fonctionnalités (crypto, investissement)",
            "Rentabilité opérationnelle"
          ]
        }
      ],
      metrics: {
        title: "Métriques Clés",
        items: [
          { label: "CAC Target", value: "€15" },
          { label: "LTV Target", value: "€450" },
          { label: "Ratio LTV/CAC", value: "30x" },
          { label: "Taux de rétention M6", value: "75%" }
        ]
      }
    },
    en: {
      title: "Go-to-Market Strategy",
      subtitle: "A three-phase plan to conquer the market",
      phases: [
        {
          phase: "Phase 1",
          timeline: "Months 1-6",
          title: "France Launch",
          icon: Rocket,
          color: "from-blue-500 to-cyan-500",
          goals: [
            "Beta launch with 1000 early adopters",
            "Partnerships with Gen Z influencers",
            "Marketing campaign on TikTok and Instagram",
            "First licenses obtained"
          ]
        },
        {
          phase: "Phase 2",
          timeline: "Months 7-12",
          title: "National Growth",
          icon: Users,
          color: "from-purple-500 to-pink-500",
          goals: [
            "50,000 active users",
            "University partnerships",
            "Viral referral program",
            "Series A fundraising"
          ]
        },
        {
          phase: "Phase 3",
          timeline: "Year 2+",
          title: "European Expansion",
          icon: Globe,
          color: "from-emerald-500 to-teal-500",
          goals: [
            "Expansion to Germany and Spain",
            "500,000+ users",
            "New features (crypto, investing)",
            "Operational profitability"
          ]
        }
      ],
      metrics: {
        title: "Key Metrics",
        items: [
          { label: "CAC Target", value: "€15" },
          { label: "LTV Target", value: "€450" },
          { label: "LTV/CAC Ratio", value: "30x" },
          { label: "M6 Retention Rate", value: "75%" }
        ]
      }
    }
  };

  const t = content[language];

  return (
    <section id="strategy" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 via-indigo-950 to-purple-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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

        {/* Phases */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {t.phases.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group">
                <div className="relative h-full p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-purple-500/20 rounded-3xl backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
                  {/* Phase Number Badge */}
                  <div className={`absolute -top-4 -right-4 px-6 py-3 bg-gradient-to-r ${item.color} rounded-2xl shadow-xl transform group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-sm font-black text-white">{item.phase}</span>
                  </div>

                  {/* Icon */}
                  <div className={`mb-6 inline-flex p-4 bg-gradient-to-br ${item.color} rounded-2xl shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Timeline */}
                  <div className="text-sm text-purple-300 font-semibold mb-2">
                    {item.timeline}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {item.title}
                  </h3>

                  {/* Goals */}
                  <ul className="space-y-3">
                    {item.goals.map((goal, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <TrendingUp className="w-4 h-4 text-purple-400 flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-sm leading-relaxed">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Metrics */}
        <div className="relative p-10 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-3xl backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            {t.metrics.title}
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.metrics.items.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-slate-400 text-sm">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
