import React from 'react';
import { useLanguage } from './LanguageContext';
import { CreditCard, Repeat, Handshake } from 'lucide-react';

export function Business() {
  const { t } = useLanguage();

  const revenues = [
    {
      icon: CreditCard,
      title: t('business.freemium'),
      description: t('business.freemium.desc'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Repeat,
      title: t('business.interchange'),
      description: t('business.interchange.desc'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Handshake,
      title: t('business.partnerships'),
      description: t('business.partnerships.desc'),
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('business.title')}</h2>
          <p className="text-xl text-gray-600">{t('business.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {revenues.map((revenue, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className={`w-16 h-16 bg-gradient-to-br ${revenue.color} rounded-xl flex items-center justify-center mb-6`}>
                <revenue.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{revenue.title}</h3>
              <p className="text-gray-600">{revenue.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
