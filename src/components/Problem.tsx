import { useLanguage } from './LanguageContext';
import { AlertTriangle, TrendingDown, Users, Lock } from 'lucide-react';

export function Problem() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Le Problème",
      subtitle: "La Génération Z face à des défis financiers sans précédent",
      problems: [
        {
          icon: TrendingDown,
          title: "Faible littératie financière",
          description: "76% des jeunes ne comprennent pas les concepts financiers de base",
          stat: "76%"
        },
        {
          icon: Lock,
          title: "Exclusion bancaire",
          description: "Des millions de jeunes sans accès aux services financiers traditionnels",
          stat: "2M+"
        },
        {
          icon: Users,
          title: "Manque d'engagement",
          description: "Les applications bancaires traditionnelles ne parlent pas à la Gen Z",
          stat: "68%"
        },
        {
          icon: AlertTriangle,
          title: "Sécurité compromise",
          description: "Méthodes d'authentification obsolètes et peu pratiques",
          stat: "43%"
        }
      ]
    },
    en: {
      title: "The Problem",
      subtitle: "Generation Z facing unprecedented financial challenges",
      problems: [
        {
          icon: TrendingDown,
          title: "Low financial literacy",
          description: "76% of young people don't understand basic financial concepts",
          stat: "76%"
        },
        {
          icon: Lock,
          title: "Banking exclusion",
          description: "Millions of young people without access to traditional financial services",
          stat: "2M+"
        },
        {
          icon: Users,
          title: "Lack of engagement",
          description: "Traditional banking apps don't speak to Gen Z",
          stat: "68%"
        },
        {
          icon: AlertTriangle,
          title: "Compromised security",
          description: "Outdated and impractical authentication methods",
          stat: "43%"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="problem" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#ef444415,transparent_50%),radial-gradient(circle_at_70%_50%,#f9731615,transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {t.problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="relative p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-red-500/20 rounded-3xl backdrop-blur-sm hover:border-red-500/40 transition-all duration-300 overflow-hidden">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-orange-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-orange-500/5 group-hover:to-red-500/5 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Stat Badge */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl shadow-red-500/50 transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-black text-white">{problem.stat}</span>
                    </div>

                    {/* Icon */}
                    <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl">
                      <Icon className="w-8 h-8 text-red-400" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {problem.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}