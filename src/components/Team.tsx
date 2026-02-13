import { useLanguage } from './LanguageContext';
import { Linkedin, Mail } from 'lucide-react';

export function Team() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "L'Équipe",
      subtitle: "Des experts passionnés par la fintech et l'IA",
      founders: [
        {
          name: "Mohammad Saeed Ahmadi Pouya",
          role: "Co-fondateur & CEO",
          bio: "Expert en IA et fintech avec 8+ ans d'expérience. Ancien data scientist chez grandes entreprises tech.",
          linkedin: "#",
          email: "mohammad@fynoa.com",
          expertise: ["Intelligence Artificielle", "Fintech", "Product Strategy"]
        },
        {
          name: "Azadeh Khani Soluut",
          role: "Co-fondatrice & CTO",
          bio: "Ingénieure logiciel spécialisée en sécurité biométrique et architecture cloud.",
          linkedin: "#",
          email: "azadeh@fynoa.com",
          expertise: ["Biometric Security", "Cloud Architecture", "Full-Stack Development"]
        }
      ],
      team: {
        title: "Notre Vision",
        description: "Nous croyons que la technologie financière doit être accessible, intuitive et sécurisée pour tous. Notre équipe combine expertise technique, vision stratégique et passion pour créer la meilleure expérience financière pour la Génération Z."
      }
    },
    en: {
      title: "The Team",
      subtitle: "Experts passionate about fintech and AI",
      founders: [
        {
          name: "Mohammad Saeed Ahmadi Pouya",
          role: "Co-founder & CEO",
          bio: "AI and fintech expert with 8+ years of experience. Former data scientist at major tech companies.",
          linkedin: "#",
          email: "mohammad@fynoa.com",
          expertise: ["Artificial Intelligence", "Fintech", "Product Strategy"]
        },
        {
          name: "Azadeh Khani Soluut",
          role: "Co-founder & CTO",
          bio: "Software engineer specialized in biometric security and cloud architecture.",
          linkedin: "#",
          email: "azadeh@fynoa.com",
          expertise: ["Biometric Security", "Cloud Architecture", "Full-Stack Development"]
        }
      ],
      team: {
        title: "Our Vision",
        description: "We believe that financial technology must be accessible, intuitive, and secure for everyone. Our team combines technical expertise, strategic vision, and passion to create the best financial experience for Generation Z."
      }
    }
  };

  const t = content[language];

  return (
    <section id="team" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#6366f120,transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {t.founders.map((founder, index) => (
            <div key={index} className="group">
              <div className="relative p-10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-indigo-500/30 rounded-3xl backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-300 overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  {/* Avatar Placeholder */}
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl shadow-indigo-500/50">
                    <span className="text-5xl font-black text-white">
                      {founder.name.charAt(0)}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-2xl font-bold text-white text-center mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-indigo-300 text-center font-semibold mb-6">
                    {founder.role}
                  </p>

                  {/* Bio */}
                  <p className="text-slate-400 leading-relaxed mb-6 text-center">
                    {founder.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {founder.expertise.map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-semibold border border-indigo-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Contact */}
                  <div className="flex justify-center gap-4">
                    <a 
                      href={founder.linkedin}
                      className="p-3 bg-indigo-500/20 hover:bg-indigo-500/30 rounded-xl transition-colors duration-300 border border-indigo-500/30"
                    >
                      <Linkedin className="w-5 h-5 text-indigo-300" />
                    </a>
                    <a 
                      href={`mailto:${founder.email}`}
                      className="p-3 bg-indigo-500/20 hover:bg-indigo-500/30 rounded-xl transition-colors duration-300 border border-indigo-500/30"
                    >
                      <Mail className="w-5 h-5 text-indigo-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Vision */}
        <div className="relative p-12 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-3xl backdrop-blur-sm text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            {t.team.title}
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mx-auto">
            {t.team.description}
          </p>
        </div>
      </div>
    </section>
  );
}
