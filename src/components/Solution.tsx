import React from 'react';
import { useLanguage } from './LanguageContext';
import { MessageCircle, Fingerprint, Sparkles } from 'lucide-react';

export function Solution() {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: MessageCircle,
      title: t('solution.ai'),
      description: t('solution.ai.desc'),
      color: 'from-[#00d4aa] to-[#0066ff]'
    },
    {
      icon: Fingerprint,
      title: t('solution.biometric'),
      description: t('solution.biometric.desc'),
      color: 'from-[#0066ff] to-[#7c3aed]'
    },
    {
      icon: Sparkles,
      title: t('solution.personalized'),
      description: t('solution.personalized.desc'),
      color: 'from-[#7c3aed] to-[#00d4aa]'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('solution.title')}</h2>
          <p className="text-xl text-gray-600">{t('solution.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
              <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
                <solution.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
