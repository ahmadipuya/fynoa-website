import { MessageSquare, Shield, Sparkles, Zap } from 'lucide-react';

interface SolutionProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: "Notre Solution",
    subtitle: "FYNOA : Votre assistant financier personnel alimenté par l'IA",
    description: "Une plateforme de gestion financière intelligente qui parle votre langage et s'adapte à vos besoins",
    solutions: [
      {
        icon: MessageSquare,
        title: "IA Conversationnelle",
        description: "Discutez avec votre argent comme vous le feriez avec un ami. Posez des questions, obtenez des réponses instantanées et des conseils personnalisés."
      },
      {
        icon: Shield,
        title: "Authentification Biométrique",
        description: "Sécurité maximale avec reconnaissance faciale et empreinte digitale. Vos données sont protégées par les dernières technologies."
      },
      {
        icon: Sparkles,
        title: "Insights Intelligents",
        description: "L'IA analyse vos habitudes de dépenses et vous propose des recommandations sur mesure pour optimiser votre budget."
      },
      {
        icon: Zap,
        title: "Actions Rapides",
        description: "Transférez de l'argent, payez des factures et gérez vos finances en quelques secondes grâce à une interface intuitive."
      }
    ]
  },
  en: {
    title: "Our Solution",
    subtitle: "FYNOA: Your AI-powered personal financial assistant",
    description: "A smart financial management platform that speaks your language and adapts to your needs",
    solutions: [
      {
        icon: MessageSquare,
        title: "Conversational AI",
        description: "Chat with your money like you would with a friend. Ask questions, get instant answers and personalized advice."
      },
      {
        icon: Shield,
        title: "Biometric Authentication",
        description: "Maximum security with facial recognition and fingerprint. Your data is protected by the latest technologies."
      },
      {
        icon: Sparkles,
        title: "Smart Insights",
        description: "AI analyzes your spending habits and offers tailored recommendations to optimize your budget."
      },
      {
        icon: Zap,
        title: "Quick Actions",
        description: "Transfer money, pay bills and manage your finances in seconds with an intuitive interface."
      }
    ]
  }
};

export default function Solution({ language }: SolutionProps) {
  const t = content[language];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-xl text-gray-300 mb-4">{t.subtitle}</p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">{t.description}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {t.solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#00d4aa] to-[#0066ff] rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 leading-relaxed">{solution.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}