import React from 'react';
import { useLanguage } from './LanguageContext';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00d4aa] to-[#0066ff] rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">F</span>
            </div>
            <div>
              <span className="text-2xl font-bold">FYNOA</span>
              <p className="text-sm text-gray-400">{t('footer.tagline')}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}
