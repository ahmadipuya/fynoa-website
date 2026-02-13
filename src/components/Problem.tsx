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
قدم ۴ - Paste در VS Code
برگشتن به VS Code
فشار دادن Ctrl + V
فشار دادن Ctrl + S (ذخیره)
✅ فایل Problem.tsx تمام شد!

📄 فایل ۲: Solution.tsx
قدم ۱ - باز کردن فایل در VS Code
رفتن به: src/components/Solution.tsx

قدم ۲ - انتخاب همه محتوا
Ctrl + A

قدم ۳ - کپی کد جدید
import { useLanguage } from './LanguageContext';
import { MessageSquare, Fingerprint, Smartphone, Zap, Brain, Shield } from 'lucide-react';

export function Solution() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Notre Solution",
      subtitle: "Une plateforme financière intelligente conçue pour la Génération Z",
      features: [
        {
          icon: MessageSquare,
          title: "IA Conversationnelle",
          description: "Gérez vos finances en parlant naturellement. Notre IA comprend vos besoins et vous guide.",
          gradient: "from-blue-500 to-cyan-500"
        },
        {
          icon: Fingerprint,
          title: "Biométrie Avancée",
          description: "Authentification sécurisée par reconnaissance faciale et empreinte digitale. Finies les mots de passe!",
          gradient: "from-purple-500 to-pink-500"
        },
        {
          icon: Smartphone,
          title: "Mobile-First",
          description: "Une expérience optimisée pour smartphone, là où vit la Gen Z.",
          gradient: "from-emerald-500 to-teal-500"
        },
        {
          icon: Brain,
          title: "Intelligence Prédictive",
          description: "L'IA analyse vos habitudes et vous aide à prendre de meilleures décisions financières.",
          gradient: "from-orange-500 to-red-500"
        },
        {
          icon: Shield,
          title: "Sécurité Maximale",
          description: "Chiffrement de bout en bout et conformité RGPD pour protéger vos données.",
          gradient: "from-indigo-500 to-purple-500"
        },
        {
          icon: Zap,
          title: "Instantané",
          description: "Transactions en temps réel, notifications instantanées, réactivité totale.",
          gradient: "from-yellow-500 to-orange-500"
        }
      ]
    },
    en: {
      title: "Our Solution",
      subtitle: "An intelligent financial platform designed for Generation Z",
      features: [
        {
          icon: MessageSquare,
          title: "Conversational AI",
          description: "Manage your finances by speaking naturally. Our AI understands your needs and guides you.",
          gradient: "from-blue-500 to-cyan-500"
        },
        {
          icon: Fingerprint,
          title: "Advanced Biometrics",
          description: "Secure authentication via facial recognition and fingerprint. No more passwords!",
          gradient: "from-purple-500 to-pink-500"
        },
        {
          icon: Smartphone,
          title: "Mobile-First",
          description: "An optimized smartphone experience, where Gen Z lives.",
          gradient: "from-emerald-500 to-teal-500"
        },
        {
          icon: Brain,
          title: "Predictive Intelligence",
          description: "AI analyzes your habits and helps you make better financial decisions.",
          gradient: "from-orange-500 to-red-500"
        },
        {
          icon: Shield,
          title: "Maximum Security",
          description: "End-to-end encryption and GDPR compliance to protect your data.",
          gradient: "from-indigo-500 to-purple-500"
        },
        {
          icon: Zap,
          title: "Instant",
          description: "Real-time transactions, instant notifications, total responsiveness.",
          gradient: "from-yellow-500 to-orange-500"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="solution" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-sky-400 via-emerald-400 to-sky-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group">
                <div className="relative h-full p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-3xl backdrop-blur-sm hover:border-sky-500/50 transition-all duration-300 overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <div className={`mb-6 inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg self-start transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed flex-grow">
                      {feature.description}
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