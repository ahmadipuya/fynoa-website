import { useState } from 'react';
import Hero from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import Features from './components/Features';
import { Market } from './components/Market';
import { Strategy } from './components/Strategy';
import Team from './components/Team';
import Investment from './components/Investment';
import { Contact } from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  return (
    <div className="min-h-screen">
      <Hero language={language} setLanguage={setLanguage} />
      <Problem language={language} />
      <Solution language={language} />
      <Features language={language} />
      <Market language={language} />
      <Strategy language={language} />
      <Team language={language} />
      <Investment language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
