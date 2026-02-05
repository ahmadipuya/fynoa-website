import React from 'react';
import { useLanguage } from './LanguageContext';
import { AlertCircle, Clock, Users } from 'lucide-react';

export function Problem() {
  const { t } = useLanguage();

  const problems = [
    {
      icon: AlertCircle,
      title: t('problem.complex'),
      description: t('problem.complex.desc'),
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Clock,
      title: t('problem.time'),
      description: t('problem.time.desc'),
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Users,
      title: t('problem.impersonal'),
      description: t('problem.impersonal.desc'),
      color: 'from-yellow-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('problem.title')}</h2>
          <p className="text-xl text-gray-600">{t('problem.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className={`w-16 h-16 bg-gradient-to-br ${problem.color} rounded-xl flex items-center justify-center mb-6`}>
                <problem.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
