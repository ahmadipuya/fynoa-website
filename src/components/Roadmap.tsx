import React from 'react';
import { useLanguage } from './LanguageContext';
import { MapPin, Map, Globe2 } from 'lucide-react';

export function Roadmap() {
  const { t } = useLanguage();

  const phases = [
    {
      icon: MapPin,
      title: t('roadmap.phase1'),
      description: t('roadmap.phase1.desc'),
      color: 'from-[#00d4aa] to-[#0066ff]',
      date: 'Q1 2025'
    },
    {
      icon: Map,
      title: t('roadmap.phase2'),
      description: t('roadmap.phase2.desc'),
      color: 'from-[#0066ff] to-[#7c3aed]',
      date: 'Q3 2025'
    },
    {
      icon: Globe2,
      title: t('roadmap.phase3'),
      description: t('roadmap.phase3.desc'),
      color: 'from-[#7c3aed] to-[#00d4aa]',
      date: 'Q1 2026'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('roadmap.title')}</h2>
          <p className="text-xl text-gray-600">{t('roadmap.subtitle')}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {phases.map((phase, index) => (
            <div key={index} className="flex gap-8 mb-12 last:mb-0">
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <phase.icon className="w-8 h-8 text-white" />
                </div>
                {index < phases.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-gray-300 to-transparent mt-4"></div>
                )}
              </div>
              <div className="flex-1 pb-12">
                <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{phase.title}</h3>
                    <span className="px-3 py-1 bg-[#0066ff] text-white rounded-full text-sm font-semibold">
                      {phase.date}
                    </span>
                  </div>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
