import { LanguageProvider } from './components/LanguageContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Market } from './components/Market';
import { Strategy } from './components/Strategy';
import { Team } from './components/Team';
import { Investment } from './components/Investment';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <Problem />
        <Solution />
        <Market />
        <Strategy />
        <Team />
        <Investment />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}