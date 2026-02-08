import { useState } from 'react';
import Hero from './components/Hero.tsx';
import { Problem } from './components/Problem.tsx';
import { Solution } from './components/Solution.tsx';
import Features from './components/Features.tsx';
import { Market } from './components/Market.tsx';
import { Strategy } from './components/Strategy.tsx';
import Team from './components/Team.tsx';
import Investment from './components/Investment.tsx';
import { Contact } from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

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
