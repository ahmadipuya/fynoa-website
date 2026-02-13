import { useLanguage } from './LanguageContext';
import { TrendingUp, DollarSign, Target, Download, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

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

  const handleDownload = () => {
    window.open('https://github.com/ahmadipuya/fynoa-website/raw/main/FYNOA%20-%20Pitch%20Deck.pdf', '_blank');
  };

  return (
    <section id="investment" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-950 via-teal-950 to-emerald-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#10b98120,transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Fundraising Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-10 bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border border-emerald-500/30 rounded-3xl backdrop-blur-sm overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                {t.fundraising.title}
              </h3>
              
              <div className="mb-6">
                <div className="text-6xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  {t.fundraising.amount}
                </div>
                <p className="text-slate-300">
                  {t.fundraising.description}
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-lg font-semibold text-emerald-300 mb-3">
                  {language === 'fr' ? 'Utilisation des fonds:' : 'Use of funds:'}
                </div>
                {t.fundraising.use.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {t.metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border border-emerald-500/30 rounded-2xl backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl shadow-lg shadow-emerald-500/50">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400 mb-1">{metric.label}</div>
                        <div className="text-3xl font-black text-white">{metric.value}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {t.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-500/20 rounded-2xl backdrop-blur-sm"
              >
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <span className="text-slate-300 leading-relaxed">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <button
            onClick={handleDownload}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-full shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 hover:scale-105 transition-all duration-300"
          >
            <Download className="w-6 h-6 group-hover:animate-bounce" />
            <span>{t.cta}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}