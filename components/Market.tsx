import React from 'react';
import { useLanguage } from './LanguageContext';
import { Users, Smartphone, TrendingUp } from 'lucide-react';

export function Market() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      title: t('market.genz'),
      stat: t('market.genz.stat'),
      color: 'from-[#00d4aa] to-[#0066ff]'
    },
    {
      icon: Smartphone,
      title: t('market.digital'),
      stat: t('market.digital.stat'),
      color: 'from-[#0066ff] to-[#7c3aed]'
    },
    {
      icon: TrendingUp,
      title: t('market.spending'),
      stat: t('market.spending.stat'),
      color: 'from-[#7c3aed] to-[#00d4aa]'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('market.title')}</h2>
          <p className="text-xl text-gray-300">{t('market.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-300">{stat.title}</h3>
              <p className="text-4xl font-bold">{stat.stat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
