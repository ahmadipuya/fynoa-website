import { ImageWithFallback } from './figma/ImageWithFallback';

interface TeamProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: "Rencontrez les fondateurs",
    subtitle: "Une équipe passionnée par l'innovation financière",
    team: [
      {
        name: "Mohammad Saeed Ahmadi Pouya",
        role: "Co-fondateur & CEO",
        image: "https://images.unsplash.com/photo-1769159523714-0b8d6c11d41e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBlcnNpYW4lMjBtaWRkbGUlMjBlYXN0ZXJufGVufDF8fHx8MTc3MDU4MTUzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
        bio: "Expert en technologie financière et intelligence artificielle"
      },
      {
        name: "Azadeh Khani Soluut",
        role: "Co-fondatrice & COO",
        image: "https://images.unsplash.com/photo-1761510791907-32a54c39731e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwcGVyc2lhbiUyMG1pZGRsZSUyMGVhc3Rlcm58ZW58MXx8fHwxNzcwNTgxNTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        bio: "Spécialiste en expérience utilisateur et stratégie produit"
      }
    ]
  },
  en: {
    title: "Meet the founders",
    subtitle: "A team passionate about financial innovation",
    team: [
      {
        name: "Mohammad Saeed Ahmadi Pouya",
        role: "Co-founder & CEO",
        image: "https://images.unsplash.com/photo-1769159523714-0b8d6c11d41e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBlcnNpYW4lMjBtaWRkbGUlMjBlYXN0ZXJufGVufDF8fHx8MTc3MDU4MTUzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
        bio: "Expert in financial technology and artificial intelligence"
      },
      {
        name: "Azadeh Khani Soluut",
        role: "Co-founder & COO",
        image: "https://images.unsplash.com/photo-1761510791907-32a54c39731e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwcGVyc2lhbiUyMG1pZGRsZSUyMGVhc3Rlcm58ZW58MXx8fHwxNzcwNTgxNTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        bio: "Specialist in user experience and product strategy"
      }
    ]
  }
};

export default function Team({ language }: TeamProps) {
  const t = content[language];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {t.team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#00d4aa]/20 to-[#0066ff]/20">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-[#0066ff] font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
