import { useLanguage } from './LanguageContext';
import { TrendingUp, Users, Globe, Target } from 'lucide-react';
import { motion } from 'motion/react';

export function Market() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Le Marché",
      subtitle: "Un potentiel de croissance massif dans la fintech Gen Z",
      stats: [
        {
          icon: Users,
          value: "2.5Md",
          label: "Génération Z dans le monde",
          description: "Le segment démographique le plus important"
        },
        {
          icon: TrendingUp,
          value: "$360Md",
          label: "Marché de la fintech en 2024",
          description: "Croissance annuelle de 25%"
        },
        {
          icon: Globe,
          value: "15M+",
          label: "Gen Z en France",
          description: "Notre marché cible initial"
        },
        {
          icon: Target,
          value: "€150/mois",
          label: "Revenu mensuel moyen",
          description: "Potentiel ARPU important"
        }
      ],
      opportunity: {
        title: "L'Opportunité",
        points: [
          "La Gen Z représente 32% de la population mondiale",
          "98% possèdent un smartphone",
          "70% préfèrent les applications mobiles aux banques traditionnelles",
          "Marché français de la fintech en croissance de 40% par an"
        ]
      }
    },
    en: {
      title: "The Market",
      subtitle: "Massive growth potential in Gen Z fintech",
      stats: [
        {
          icon: Users,
          value: "2.5B",
          label: "Generation Z worldwide",
          description: "The largest demographic segment"
        },
        {
          icon: TrendingUp,
          value: "$360B",
          label: "Fintech market in 2024",
          description: "25% annual growth"
        },
        {
          icon: Globe,
          value: "15M+",
          label: "Gen Z in France",
          description: "Our initial target market"
        },
        {
          icon: Target,
          value: "€150/mo",
          label: "Average monthly revenue",
          description: "Significant ARPU potential"
        }
      ],
      opportunity: {
        title: "The Opportunity",
        points: [
          "Gen Z represents 32% of the global population",
          "98% own a smartphone",
          "70% prefer mobile apps over traditional banks",
          "French fintech market growing 40% annually"
        ]
      }
    }
  };

  const t = content[language];

  return (
    <section id="market" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-950 via-teal-950 to-emerald-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

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

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {t.stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-8 bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border border-emerald-500/30 rounded-3xl backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300 overflow-hidden">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-500"></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg shadow-emerald-500/50 transform group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Value */}
                    <div className="text-4xl font-black text-white mb-2">
                      {stat.value}
                    </div>

                    {/* Label */}
                    <div className="text-emerald-300 font-semibold mb-2">
                      {stat.label}
                    </div>

                    {/* Description */}
                    <div className="text-sm text-slate-400">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Opportunity Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-12 bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 rounded-3xl backdrop-blur-sm"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            {t.opportunity.title}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {t.opportunity.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full"></div>
                <p className="text-slate-300 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}