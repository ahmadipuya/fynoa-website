import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.problem': 'Problem',
    'nav.solution': 'Solution',
    'nav.market': 'Market',
    'nav.business': 'Business Model',
    'nav.team': 'Team',
    'nav.roadmap': 'Roadmap',
    'hero.title': 'Conversational Banking for Gen Z',
    'hero.subtitle': 'AI-powered neobank with biometric authentication, making banking as easy as chatting with a friend',
    'hero.cta': 'Join the Waitlist',
    'problem.title': 'The Problem',
    'problem.subtitle': 'Traditional banking fails Generation Z',
    'problem.complex': 'Complex Interfaces',
    'problem.complex.desc': 'Traditional banking apps overwhelm with features young users never use',
    'problem.time': 'Time-Consuming',
    'problem.time.desc': 'Simple tasks require multiple steps and verification processes',
    'problem.impersonal': 'Impersonal Service',
    'problem.impersonal.desc': 'Generic customer support that doesn\'t understand individual needs',
    'solution.title': 'Our Solution',
    'solution.subtitle': 'FYNOA: Your AI Banking Companion',
    'solution.ai': 'AI Conversational Assistant',
    'solution.ai.desc': 'Chat naturally to manage your finances - send money, check balance, get insights',
    'solution.biometric': 'Biometric Security',
    'solution.biometric.desc': 'Facial recognition and fingerprint authentication for seamless, secure access',
    'solution.personalized': 'Personalized Insights',
    'solution.personalized.desc': 'AI learns your habits and provides tailored financial recommendations',
    'market.title': 'Market Opportunity',
    'market.subtitle': 'A massive underserved generation',
    'market.genz': 'Gen Z in France',
    'market.genz.stat': '13M users',
    'market.digital': 'Digital Natives',
    'market.digital.stat': '95% smartphone usage',
    'market.spending': 'Spending Power',
    'market.spending.stat': '€143B annually',
    'business.title': 'Business Model',
    'business.subtitle': 'Multiple revenue streams',
    'business.freemium': 'Freemium Model',
    'business.freemium.desc': 'Free basic account, premium features at €4.99/month',
    'business.interchange': 'Interchange Fees',
    'business.interchange.desc': 'Revenue from card transactions',
    'business.partnerships': 'Strategic Partnerships',
    'business.partnerships.desc': 'Collaborations with brands Gen Z loves',
    'team.title': 'Our Team',
    'team.subtitle': 'Experienced founders building the future of banking',
    'team.ceo': 'CEO & Co-founder',
    'team.ceo.bio': '10+ years in fintech, former product lead at major European bank',
    'team.cto': 'CTO & Co-founder',
    'team.cto.bio': 'AI specialist, built conversational systems at tech giants',
    'roadmap.title': 'Deployment Strategy',
    'roadmap.subtitle': 'Phased rollout across France',
    'roadmap.phase1': 'Phase 1: Rueil-Malmaison',
    'roadmap.phase1.desc': 'Launch in our home city, build local community',
    'roadmap.phase2': 'Phase 2: Île-de-France',
    'roadmap.phase2.desc': 'Expand across the Paris region',
    'roadmap.phase3': 'Phase 3: National',
    'roadmap.phase3.desc': 'Roll out to all of France',
    'footer.rights': '© 2024 FYNOA. All rights reserved.',
    'footer.tagline': 'Banking reimagined for Generation Z'
  },
  fr: {
    'nav.problem': 'Problème',
    'nav.solution': 'Solution',
    'nav.market': 'Marché',
    'nav.business': 'Modèle économique',
    'nav.team': 'Équipe',
    'nav.roadmap': 'Feuille de route',
    'hero.title': 'La banque conversationnelle pour la Génération Z',
    'hero.subtitle': 'Néobanque propulsée par l\'IA avec authentification biométrique, rendant la banque aussi simple qu\'une conversation',
    'hero.cta': 'Rejoindre la liste d\'attente',
    'problem.title': 'Le problème',
    'problem.subtitle': 'La banque traditionnelle échoue avec la Génération Z',
    'problem.complex': 'Interfaces complexes',
    'problem.complex.desc': 'Les applications bancaires traditionnelles submergent avec des fonctionnalités inutilisées',
    'problem.time': 'Chronophage',
    'problem.time.desc': 'Les tâches simples nécessitent plusieurs étapes et processus de vérification',
    'problem.impersonal': 'Service impersonnel',
    'problem.impersonal.desc': 'Support client générique qui ne comprend pas les besoins individuels',
    'solution.title': 'Notre solution',
    'solution.subtitle': 'FYNOA : Votre compagnon bancaire IA',
    'solution.ai': 'Assistant conversationnel IA',
    'solution.ai.desc': 'Discutez naturellement pour gérer vos finances - envoyer de l\'argent, vérifier le solde, obtenir des informations',
    'solution.biometric': 'Sécurité biométrique',
    'solution.biometric.desc': 'Reconnaissance faciale et empreinte digitale pour un accès fluide et sécurisé',
    'solution.personalized': 'Informations personnalisées',
    'solution.personalized.desc': 'L\'IA apprend vos habitudes et fournit des recommandations financières sur mesure',
    'market.title': 'Opportunité de marché',
    'market.subtitle': 'Une génération massive mal desservie',
    'market.genz': 'Génération Z en France',
    'market.genz.stat': '13M d\'utilisateurs',
    'market.digital': 'Natifs du numérique',
    'market.digital.stat': '95% d\'utilisation de smartphones',
    'market.spending': 'Pouvoir d\'achat',
    'market.spending.stat': '143 Md€ par an',
    'business.title': 'Modèle économique',
    'business.subtitle': 'Multiples sources de revenus',
    'business.freemium': 'Modèle Freemium',
    'business.freemium.desc': 'Compte de base gratuit, fonctionnalités premium à 4,99€/mois',
    'business.interchange': 'Frais d\'interchange',
    'business.interchange.desc': 'Revenus des transactions par carte',
    'business.partnerships': 'Partenariats stratégiques',
    'business.partnerships.desc': 'Collaborations avec les marques adorées par la Gen Z',
    'team.title': 'Notre équipe',
    'team.subtitle': 'Des fondateurs expérimentés construisant l\'avenir de la banque',
    'team.ceo': 'PDG et cofondateur',
    'team.ceo.bio': '10+ ans dans la fintech, ancien responsable produit dans une grande banque européenne',
    'team.cto': 'Directeur technique et cofondateur',
    'team.cto.bio': 'Spécialiste IA, a développé des systèmes conversationnels chez les géants de la tech',
    'roadmap.title': 'Stratégie de déploiement',
    'roadmap.subtitle': 'Déploiement progressif en France',
    'roadmap.phase1': 'Phase 1 : Rueil-Malmaison',
    'roadmap.phase1.desc': 'Lancement dans notre ville, construction d\'une communauté locale',
    'roadmap.phase2': 'Phase 2 : Île-de-France',
    'roadmap.phase2.desc': 'Extension dans toute la région parisienne',
    'roadmap.phase3': 'Phase 3 : National',
    'roadmap.phase3.desc': 'Déploiement dans toute la France',
    'footer.rights': '© 2024 FYNOA. Tous droits réservés.',
    'footer.tagline': 'La banque réinventée pour la Génération Z'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

