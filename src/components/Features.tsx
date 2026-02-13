import { FileCheck, CreditCard, Coins, Shield, Layers, Lock } from 'lucide-react';

interface FeaturesProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    businessTitle: "Modèle économique",
    businessSubtitle: "France-first & Conforme",
    models: [
      {
        icon: FileCheck,
        title: "Licensing (B2B / B2B2C)",
        description: "Modules d'IA & banking conversationnel pour partenaires réglementés"
      },
      {
        icon: CreditCard,
        title: "Subscription (B2C)",
        description: "Freemium → Plans mensuels Premium"
      },
      {
        icon: Coins,
        title: "Revenue Share (Sélectif)",
        description: "Revenus basés sur transactions via institutions agréées"
      }
    ],
    businessFooter: "Exécution alignée avec les exigences ACPR / AMF",
    archTitle: "Architecture",
    archSubtitle: "Compliance-first AI Banking Architecture",
    architecture: [
      {
        icon: Shield,
        title: "Moteur bancaire conversationnel",
        description: "Flux vocaux & chat conçus autour des contraintes ACPR/AMF"
      },
      {
        icon: Layers,
        title: "Stack IA modulaire",
        description: "Modules KYC, transaction, limites & alertes pour banques & PSPs"
      },
      {
        icon: Lock,
        title: "Confidentialité & auditabilité",
        description: "Minimisation données, logs audit, traçabilité décisions"
      }
    ],
    archFooter: "Conçu pour s'intégrer avec les institutions agréées"
  },
  en: {
    businessTitle: "Business Model",
    businessSubtitle: "France-first & Compliant",
    models: [
      {
        icon: FileCheck,
        title: "Licensing (B2B / B2B2C)",
        description: "AI & conversational banking modules for regulated partners"
      },
      {
        icon: CreditCard,
        title: "Subscription (B2C)",
        description: "Freemium → Premium monthly plans"
      },
      {
        icon: Coins,
        title: "Revenue Share (Selective)",
        description: "Transaction-based revenue via licensed institutions"
      }
    ],
    businessFooter: "Execution aligned with ACPR / AMF requirements",
    archTitle: "Architecture",
    archSubtitle: "Compliance-first AI Banking Architecture",
    architecture: [
      {
        icon: Shield,
        title: "Conversational banking engine",
        description: "Voice & chat flows designed around ACPR/AMF constraints"
      },
      {
        icon: Layers,
        title: "Modular AI stack",
        description: "KYC, transaction, limits & alerts modules for banks & PSPs"
      },
      {
        icon: Lock,
        title: "Privacy & auditability",
        description: "Data minimization, audit logs, decision traceability"
      }
    ],
    archFooter: "Designed to integrate with licensed institutions"
  }
};

export default function Features({ language }: FeaturesProps) {
  const t = content[language];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Business Model */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="w-2 h-20 bg-gradient-to-b from-[#ff8c00] to-[#ff6b00] rounded-full mx-auto mb-6"></div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#0a0e27] mb-4">{t.businessTitle}</h2>
            <p className="text-xl text-[#4a5568]">{t.businessSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {t.models.map((model, index) => {
              const Icon = model.icon;
              const colors = [
                'from-[#ff8c00] to-[#ff6b00]',
                'from-[#1b9bd8] to-[#0066cc]',
                'from-[#7dc242] to-[#6bbd45]'
              ];
              return (
                <div 
                  key={index}
                  className="bg-[#f8fafc] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${colors[index]} flex items-center justify-center mb-6`}>
                    <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0e27] mb-4">{model.title}</h3>
                  <p className="text-[#4a5568] leading-relaxed">{model.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-[#1b9bd8]/10 to-[#7dc242]/10 rounded-full border border-[#1b9bd8]/20">
              <p className="text-lg text-[#0a0e27] font-medium">{t.businessFooter}</p>
            </div>
          </div>
        </div>

        {/* Architecture */}
        <div>
          <div className="text-center mb-16">
            <div className="w-2 h-20 bg-gradient-to-b from-[#1b9bd8] to-[#7dc242] rounded-full mx-auto mb-6"></div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#0a0e27] mb-4">{t.archTitle}</h2>
            <p className="text-xl text-[#4a5568]">{t.archSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {t.architecture.map((arch, index) => {
              const Icon = arch.icon;
              return (
                <div 
                  key={index}
                  className="bg-[#f8fafc] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-[#1b9bd8] hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1b9bd8] to-[#7dc242] flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0e27] mb-4">{arch.title}</h3>
                  <p className="text-[#4a5568] leading-relaxed">{arch.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-lg text-[#4a5568] italic">{t.archFooter}</p>
          </div>
        </div>
      </div>
    </section>
  );
}