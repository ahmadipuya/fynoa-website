import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Team from './components/Team';
import Investment from './components/Investment';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  return (
    <div className="min-h-screen">
      <Hero language={language} setLanguage={setLanguage} />
      <Features language={language} />
      <Team language={language} />
      <Investment language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
