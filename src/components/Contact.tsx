import { useLanguage } from "./LanguageContext";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const content = {
    fr: {
      title: "Contactez-nous",
      subtitle: "Envie d'en savoir plus sur FYNOA? Parlons-en!",
      form: {
        name: "Nom complet",
        email: "Email",
        subject: "Sujet",
        message: "Message",
        send: "Envoyer le message",
      },
      info: [
        {
          icon: Mail,
          label: "Email",
          value: "fynoa.ai@gmail.com",
          link: "mailto:fynoa.ai@gmail.com",
        },
        {
          icon: Phone,
          label: "Téléphone",
          value: "+33 7 66141208",
          link: "tel:+33766141208",
        },
        {
          icon: MapPin,
          label: "Adresse",
          value: "Paris, France",
          link: null,
        },
      ],
    },
    en: {
      title: "Contact Us",
      subtitle: "Want to know more about FYNOA? Let's talk!",
      form: {
        name: "Full name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send message",
      },
      info: [
        {
          icon: Mail,
          label: "Email",
          value: "fynoa.ai@gmail.com",
          link: "mailto:fynoa.ai@gmail.com",
        },
        {
          icon: Phone,
          label: "Phone",
          value: "+33 7 66 14 12 08",
          link: "tel:+33766141208",
        },
        {
          icon: MapPin,
          label: "Address",
          value: "Paris, France",
          link: null,
        },
      ],
    },
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (Demo only)");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#3b82f620,transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative p-10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-blue-500/20 rounded-3xl backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  {t.form.subject}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  placeholder="Investment opportunity"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  {t.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-xl shadow-xl shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                {t.form.send}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {t.info.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="relative p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-blue-500/20 rounded-3xl backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg shadow-blue-500/50">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-300 font-semibold mb-1">
                        {item.label}
                      </div>
                      <div className="text-xl text-white font-bold">
                        {item.value}
                      </div>
                    </div>
                  </div>
                </div>
              );

              return item.link ? (
                <a
                  key={index}
                  href={item.link}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}