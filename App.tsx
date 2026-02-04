import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Market } from './components/Market';
import { Business } from './components/Business';
import { Team } from './components/Team';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';
import { LanguageProvider } from './components/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Hero />
        <Problem />
        <Solution />
        <Market />
        <Business />
        <Team />
        <Roadmap />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
