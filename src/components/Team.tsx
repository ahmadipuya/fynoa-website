import { useLanguage } from './LanguageContext';
import { Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Team() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "L'Équipe",
      subtitle: "Des visionnaires passionnés par l'innovation financière",
      founders: [
        {
          name: "Mohammad Saeed Ahmadi Pouya",
          role: "Co-fondateur & CEO",
          image: "figma:asset/87d78f41856aeb80b988633700350259a10cb87f.png",
          bio: "Expert en IA et fintech avec 10+ ans d'expérience dans le développement de solutions innovantes pour la génération digitale.",
          linkedin: "#",
          email: "mohammad@fynoa.ai"
        },
        {
          name: "Azadeh Khani Soluut",
          role: "Co-fondatrice & CTO",
          image: "figma:asset/adf3c9e31e45bb9fdc51d15d0fd692982b6176a7.png",
          bio: "Pionnière en biométrie et sécurité, spécialisée dans l'architecture de systèmes financiers sécurisés et scalables.",
          linkedin: "#",
          email: "azadeh@fynoa.ai"
        }
      ],
      values: {
        title: "Nos Valeurs",
        items: [
          {
            title: "Innovation",
            description: "Repousser les limites de la technologie financière"
          },
          {
            title: "Inclusion",
            description: "Rendre la finance accessible à tous"
          },
          {
            title: "Sécurité",
            description: "Protection maximale des données utilisateurs"
          },
          {
            title: "Transparence",
            description: "Communication claire et honnête"
          }
        ]
      }
    },
    en: {
      title: "The Team",
      subtitle: "Visionaries passionate about financial innovation",
      founders: [
        {
          name: "Mohammad Saeed Ahmadi Pouya",
          role: "Co-founder & CEO",
          image: "figma:asset/87d78f41856aeb80b988633700350259a10cb87f.png",
          bio: "AI and fintech expert with 10+ years of experience developing innovative solutions for the digital generation.",
          linkedin: "#",
          email: "mohammad@fynoa.ai"
        },
        {
          name: "Azadeh Khani Soluut",
          role: "Co-founder & CTO",
          image: "figma:asset/adf3c9e31e45bb9fdc51d15d0fd692982b6176a7.png",
          bio: "Pioneer in biometrics and security, specialized in secure and scalable financial system architecture.",
          linkedin: "#",
          email: "azadeh@fynoa.ai"
        }
      ],
      values: {
        title: "Our Values",
        items: [
          {
            title: "Innovation",
            description: "Pushing the boundaries of financial technology"
          },
          {
            title: "Inclusion",
            description: "Making finance accessible to everyone"
          },
          {
            title: "Security",
            description: "Maximum protection of user data"
          },
          {
            title: "Transparency",
            description: "Clear and honest communication"
          }
        ]
      }
    }
  };

  const t = content[language];

  return (
    <section id="team" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        {/* Header */}
        <div
         
         
         
         
          className="text-center mb-20"
        >
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
            <div
              key={index}
             
             
             
             
              className="group"
            >
              <div className="relative p-8 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 rounded-3xl backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-300 overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  {/* Image */}
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-3xl overflow-hidden border-4 border-indigo-500 shadow-2xl shadow-indigo-500/50 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name & Role */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {founder.name}
                    </h3>
                    <div className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
                      <span className="text-sm font-semibold text-white">
                        {founder.role}
                      </span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-slate-300 text-center leading-relaxed mb-6">
                    {founder.bio}
                  </p>

                  {/* Contact */}
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 rounded-xl transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5 text-indigo-400" />
                    </a>
                    <a
                      href={`mailto:${founder.email}`}
                      className="p-3 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-xl transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 text-purple-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div
         
         
         
         
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            {t.values.title}
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.items.map((value, index) => (
              <div
                key={index}
               
               
               
               
                className="p-6 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20 rounded-2xl backdrop-blur-sm text-center"
              >
                <h4 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-slate-400 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}