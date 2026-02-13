import { LanguageProvider } from './src/components/LanguageContext';
import { Navigation } from './src/components/Navigation';
import { Hero } from './src/components/Hero';
import { Problem } from './src/components/Problem';
import { Solution } from './src/components/Solution';
import { Market } from './src/components/Market';
import { Strategy } from './src/components/Strategy';
import { Team } from './src/components/Team';
import { Investment } from './src/components/Investment';
import { Contact } from './src/components/Contact';
import { Footer } from './src/components/Footer';

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