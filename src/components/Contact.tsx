import { useLanguage } from './LanguageContext';
import { Mail, MessageSquare, Send, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const content = {
    fr: {
      title: "Contactez-nous",
      subtitle: "Prêt à investir dans l'avenir de la finance? Parlons-en!",
      form: {
        name: "Nom complet",
        email: "Email",
        message: "Message",
        send: "Envoyer"
      },
      info: [
        {
          icon: Mail,
          title: "Email",
          value: "fynoa.ai@gmail.com"
        },
        {
          icon: MapPin,
          title: "Localisation",
          value: "Paris, France"
        },
        {
          icon: MessageSquare,
          title: "Réseaux sociaux",
          value: "@fynoa"
        }
      ]
    },
    en: {
      title: "Contact Us",
      subtitle: "Ready to invest in the future of finance? Let's talk!",
      form: {
        name: "Full name",
        email: "Email",
        message: "Message",
        send: "Send"
      },
      info: [
        {
          icon: Mail,
          title: "Email",
          value: "fynoa.ai@gmail.com"
        },
        {
          icon: MapPin,
          title: "Location",
          value: "Paris, France"
        },
        {
          icon: MessageSquare,
          title: "Social Media",
          value: "@fynoa"
        }
      ]
    }
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert(language === 'fr' ? 'Message envoyé! Nous vous répondrons bientôt.' : 'Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative">
            <div className="p-8 bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border border-cyan-500/30 rounded-3xl backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-cyan-300 font-semibold mb-2">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
                    placeholder={t.form.name}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-cyan-300 font-semibold mb-2">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
                    placeholder={t.form.email}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-cyan-300 font-semibold mb-2">
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors resize-none"
                    placeholder={t.form.message}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <span>{t.form.send}</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {t.info.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/20 rounded-2xl backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl shadow-lg shadow-cyan-500/50">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-cyan-300 font-semibold mb-1">{item.title}</div>
                      <div className="text-white text-lg">{item.value}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}