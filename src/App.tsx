import { Hero } from './components/Hero.tsx';
import { Problem } from './components/Problem.tsx';
import { Solution } from './components/Solution.tsx';
import { Market } from './components/Market.tsx';
import { Strategy } from './components/Strategy.tsx';
import { Team } from './components/Team.tsx';
import { Contact } from './components/Contact.tsx';
import { LanguageToggle } from './components/LanguageToggle.tsx';

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
