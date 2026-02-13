import { useLanguage } from './LanguageContext';
import { TrendingUp, DollarSign, Target, Download, CheckCircle } from 'lucide-react';

export function Investment() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Opportunité d'Investissement",
      subtitle: "Rejoignez-nous dans notre mission de transformer la finance pour la Gen Z",
      fundraising: {
        title: "Levée de Fonds Seed",
        amount: "€2M",
        description: "Pour accélérer le développement produit et l'expansion en France",
        use: [
          "40% - Développement produit & IA",
          "30% - Marketing & acquisition utilisateurs",
          "20% - Équipe & talents",
          "10% - Juridique & conformité"
        ]
      },
      metrics: [
        {
          icon: TrendingUp,
          label: "Projection utilisateurs Y1",
          value: "100K+"
        },
        {
          icon: DollarSign,
          label: "ARPU cible",
          value: "€8.50"
        },
        {
          icon: Target,
          label: "Break-even",
          value: "M18"
        }
      ],
      highlights: [
        "Marché TAM: €360Md (fintech mondiale)",
        "Concurrence limitée sur le segment Gen Z + IA",
        "Technologie propriétaire (IA conversationnelle + biométrie)",
        "Équipe expérimentée en tech et finance"
      ],
      cta: "Télécharger le Pitch Deck"
    },
    en: {
      title: "Investment Opportunity",
      subtitle: "Join us in our mission to transform finance for Gen Z",
      fundraising: {
        title: "Seed Fundraising",
        amount: "€2M",
        description: "To accelerate product development and expansion in France",
        use: [
          "40% - Product development & AI",
          "30% - Marketing & user acquisition",
          "20% - Team & talent",
          "10% - Legal & compliance"
        ]
      },
      metrics: [
        {
          icon: TrendingUp,
          label: "Y1 user projection",
          value: "100K+"
        },
        {
          icon: DollarSign,
          label: "Target ARPU",
          value: "€8.50"
        },
        {
          icon: Target,
          label: "Break-even",
          value: "M18"
        }
      ],
      highlights: [
        "TAM Market: €360B (global fintech)",
        "Limited competition in Gen Z + AI segment",
        "Proprietary technology (conversational AI + biometrics)",
        "Experienced team in tech and finance"
      ],
      cta: "Download Pitch Deck"
    }
  };

  const t = content[language];

  return (
    <section id="investment" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-amber-950 to-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Fundraising Info */}
          <div className="p-8 bg-gradient-to-br from-amber-900/50 to-yellow-900/50 border border-amber-500/30 rounded-3xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              {t.fundraising.title}
            </h3>
            <div className="text-6xl font-black text-amber-400 mb-4">
              {t.fundraising.amount}
            </div>
            <p className="text-slate-300 mb-8 text-lg">
              {t.fundraising.description}
            </p>

            <div className="space-y-4">
              {t.fundraising.use.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-amber-900/30 border border-amber-500/20 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics & Highlights */}
          <div className="space-y-6">
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4">
              {t.metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={index}
                    className="p-6 bg-gradient-to-br from-amber-900/50 to-yellow-900/50 border border-amber-500/30 rounded-2xl backdrop-blur-sm text-center"
                  >
                    <div className="mb-3 inline-flex p-3 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl shadow-lg shadow-amber-500/50">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-3xl font-black text-white mb-2">
                      {metric.value}
                    </div>
                    <div className="text-xs text-amber-300">
                      {metric.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Highlights */}
            <div className="p-8 bg-gradient-to-br from-amber-900/30 to-yellow-900/30 border border-amber-500/20 rounded-3xl backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-white mb-6">Highlights</h4>
              <div className="space-y-4">
                {t.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full"></div>
                    <p className="text-slate-300 leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xl rounded-2xl shadow-2xl shadow-amber-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-6 h-6" />
            <span>{t.cta}</span>
          </button>
        </div>
      </div>
    </section>
  );
}