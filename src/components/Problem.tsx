import { AlertCircle, CreditCard, TrendingDown, Lock } from 'lucide-react';

interface ProblemProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: "Le Problème",
    subtitle: "La Gen Z fait face à des défis financiers uniques",
    problems: [
      {
        icon: AlertCircle,
        title: "Manque d'éducation financière",
        description: "67% de la Gen Z se sent anxieuse face à l'argent et ne sait pas par où commencer"
      },
      {
        icon: CreditCard,
        title: "Outils inadaptés",
        description: "Les applications bancaires actuelles sont complexes et ne parlent pas le langage de la Gen Z"
      },
      {
        icon: TrendingDown,
        title: "Pas d'accompagnement personnalisé",
        description: "Les solutions existantes offrent des conseils génériques qui ne correspondent pas aux besoins individuels"
      },
      {
        icon: Lock,
        title: "Préoccupations de sécurité",
        description: "La Gen Z veut une sécurité maximale sans sacrifier la simplicité d'utilisation"
      }
    ]
  },
  en: {
    title: "The Problem",
    subtitle: "Gen Z faces unique financial challenges",
    problems: [
      {
        icon: AlertCircle,
        title: "Lack of financial education",
        description: "67% of Gen Z feels anxious about money and doesn't know where to start"
      },
      {
        icon: CreditCard,
        title: "Unsuitable tools",
        description: "Current banking apps are complex and don't speak Gen Z's language"
      },
      {
        icon: TrendingDown,
        title: "No personalized guidance",
        description: "Existing solutions offer generic advice that doesn't match individual needs"
      },
      {
        icon: Lock,
        title: "Security concerns",
        description: "Gen Z wants maximum security without sacrificing ease of use"
      }
    ]
  }
};

export default function Problem({ language }: ProblemProps) {
  const t = content[language];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-xl text-gray-300">{t.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {t.problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#00d4aa] to-[#0066ff] rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{problem.title}</h3>
                <p className="text-gray-300 leading-relaxed">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}