import { useLanguage } from './LanguageContext';
import { TrendingUp, Target, Users, DollarSign, Zap, Crown } from 'lucide-react';

export function Investment() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Opportunité d'Investissement",
      subtitle: "Rejoignez-nous dans la révolution de la fintech Gen Z",
      raise: {
        title: "Levée de fonds",
        amount: "€2M",
        label: "Seed Round",
        use: "Utilisation des fonds",
        breakdown: [
          { category: "Développement produit", percentage: 40, color: "from-blue-500 to-cyan-500" },
          { category: "Marketing & Acquisition", percentage: 30, color: "from-purple-500 to-pink-500" },
          { category: "Équipe & Talents", percentage: 20, color: "from-emerald-500 to-teal-500" },
          { category: "Opérations & Licences", percentage: 10, color: "from-orange-500 to-red-500" }
        ]
      },
      projections: {
        title: "Projections Financières (5 ans)",
        metrics: [
          {
            icon: Users,
            label: "Utilisateurs",
            year1: "10K",
            year3: "250K",
            year5: "1M+"
          },
          {
            icon: DollarSign,
            label: "Revenus annuels",
            year1: "€150K",
            year3: "€5M",
            year5: "€25M"
          },
          {
            icon: TrendingUp,
            label: "EBITDA",
            year1: "-€500K",
            year3: "€500K",
            year5: "€8M"
          },
          {
            icon: Target,
            label: "Valorisation",
            year1: "€10M",
            year3: "€50M",
            year5: "€200M+"
          }
        ]
      },
      advantages: {
        title: "Pourquoi investir dans FYNOA?",
        points: [
          {
            icon: Zap,
            title: "Marché en forte croissance",
            description: "La fintech Gen Z connaît une croissance explosive de 40% par an"
          },
          {
            icon: Crown,
            title: "Équipe d'excellence",
            description: "Fondateurs experts en IA, fintech et développement produit"
          },
          {
            icon: Target,
            title: "Technologie unique",
            description: "IA conversationnelle et biométrie avancée = avantage concurrentiel fort"
          }
        ]
      }
    },
    en: {
      title: "Investment Opportunity",
      subtitle: "Join us in the Gen Z fintech revolution",
      raise: {
        title: "Fundraising",
        amount: "€2M",
        label: "Seed Round",
        use: "Use of funds",
        breakdown: [
          { category: "Product development", percentage: 40, color: "from-blue-500 to-cyan-500" },
          { category: "Marketing & Acquisition", percentage: 30, color: "from-purple-500 to-pink-500" },
          { category: "Team & Talent", percentage: 20, color: "from-emerald-500 to-teal-500" },
          { category: "Operations & Licenses", percentage: 10, color: "from-orange-500 to-red-500" }
        ]
      },
      projections: {
        title: "Financial Projections (5 years)",
        metrics: [
          {
            icon: Users,
            label: "Users",
            year1: "10K",
            year3: "250K",
            year5: "1M+"
          },
          {
            icon: DollarSign,
            label: "Annual revenue",
            year1: "€150K",
            year3: "€5M",
            year5: "€25M"
          },
          {
            icon: TrendingUp,
            label: "EBITDA",
            year1: "-€500K",
            year3: "€500K",
            year5: "€8M"
          },
          {
            icon: Target,
            label: "Valuation",
            year1: "€10M",
            year3: "€50M",
            year5: "€200M+"
          }
        ]
      },
      advantages: {
        title: "Why invest in FYNOA?",
        points: [
          {
            icon: Zap,
            title: "High-growth market",
            description: "Gen Z fintech experiencing explosive 40% annual growth"
          },
          {
            icon: Crown,
            title: "Exceptional team",
            description: "Founders expert in AI, fintech, and product development"
          },
          {
            icon: Target,
            title: "Unique technology",
            description: "Conversational AI and advanced biometrics = strong competitive advantage"
          }
        ]
      }
    }
  };

  const t = content[language];

  return (
    <section id="investment" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-950 via-orange-950 to-amber-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Fundraising */}
        <div className="mb-20 text-center">
          <div className="relative inline-block p-12 bg-gradient-to-br from-amber-900/50 to-orange-900/50 border border-amber-500/30 rounded-3xl backdrop-blur-sm">
            <div className="text-sm text-amber-300 font-semibold mb-2">{t.raise.label}</div>
            <div className="text-7xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
              {t.raise.amount}
            </div>
            <div className="text-xl text-slate-300">{t.raise.title}</div>
          </div>
        </div>

        {/* Use of Funds */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">{t.raise.use}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {t.raise.breakdown.map((item, index) => (
              <div key={index} className="relative p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-amber-500/20 rounded-3xl backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg text-white font-semibold">{item.category}</span>
                  <span className="text-2xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    {item.percentage}%
                  </span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Projections */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">{t.projections.title}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.projections.metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="relative p-8 bg-gradient-to-br from-amber-900/50 to-orange-900/50 border border-amber-500/30 rounded-3xl backdrop-blur-sm">
                  <div className="mb-6 inline-flex p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl shadow-lg shadow-amber-500/50">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="text-amber-300 font-semibold mb-4">{metric.label}</div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-sm">Year 1</span>
                      <span className="text-white font-bold">{metric.year1}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-sm">Year 3</span>
                      <span className="text-white font-bold">{metric.year3}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-sm">Year 5</span>
                      <span className="text-amber-300 font-bold">{metric.year5}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Invest */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">{t.advantages.title}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {t.advantages.points.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="relative p-8 bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-500/30 rounded-3xl backdrop-blur-sm text-center">
                  <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl shadow-lg shadow-amber-500/50">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{point.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
