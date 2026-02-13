import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from './LanguageContext';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const { language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = {
    fr: ['Problème', 'Solution', 'Marché', 'Stratégie', 'Équipe', 'Investissement', 'Contact'],
    en: ['Problem', 'Solution', 'Market', 'Strategy', 'Team', 'Investment', 'Contact']
  };

  const scrollToSection = (index: number) => {
    const sections = ['problem', 'solution', 'market', 'strategy', 'team', 'investment', 'contact'];
    const element = document.getElementById(sections[index]);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-sky-500/10 border-b border-sky-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center gap-8">
            {navItems[language].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index)}
                className="text-slate-300 hover:text-sky-400 font-semibold transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4 ml-auto">
            <LanguageToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl hover:bg-slate-800/50 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-xl border-t border-sky-500/20">
          <div className="px-4 py-6 space-y-2">
            {navItems[language].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index)}
                className="block w-full text-left px-6 py-3 text-slate-300 hover:bg-slate-800/50 hover:text-sky-400 rounded-xl transition-all"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}