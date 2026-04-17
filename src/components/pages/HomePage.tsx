import { Image } from '@/components/ui/image';
import { Instagram, Mail, MapPin, Menu, MessageCircle, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Jeri4XP = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Lógica de Scroll para o Header (preservando funcionalidade da sua HomePage)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', link: '#inicio' },
    { name: 'História', link: '#historia' },
    { name: 'Experiências', link: '#experiencias' },
    { name: 'Depoimentos', link: '#depoimentos' },
    { name: 'Contato', link: '#contato' }
  ];

  const testimonials = [
    { id: 1, name: 'Axelle Rulfi', role: 'Suíça', content: "I found out about Jeri 4XP through a friend's recommendation and it was all great. Kitesurfing and sightseeing, it was all perfect!", avatar: 'https://i.pravatar.cc/150?u=axelle' },
    { id: 2, name: 'Remy Sanchez', role: 'França', content: "Service excellent, les prestations ont même dépassé mes attentes. J'ai testé le wingfoil et fait une excursion em quad nas dunas, inoubliável!", avatar: 'https://i.pravatar.cc/150?u=remy' },
    { id: 3, name: 'David Kennedy', role: 'Reino Unido', content: "I had the best experiences in Jericoacoara. Booking everything through Jeri 4XP was the best option.", avatar: 'https://i.pravatar.cc/150?u=david' },
    { id: 4, name: 'Gabi', role: 'Fortaleza, Brasil', content: "Minha experiência com a Jeri 4XP foi fantástica! A equipe é super profissional e atenciosa.", avatar: 'https://i.pravatar.cc/150?u=gabi' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-orange-100 selection:text-orange-600">

      {/* --- HEADER (Baseado no MenuSite.vue e HomePage.tsx) --- */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent text-white'
        }`}
      >
        <div className="flex items-center gap-2">
          <Image src="/logo_jeri4xp.png" alt="Jeri4xp" className="h-10 w-auto" />
        </div>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={`font-bold uppercase tracking-widest text-sm hover:text-orange-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} className={isScrolled ? 'text-black' : 'text-white'} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black text-white flex flex-col items-center justify-center gap-8">
          <button className="absolute top-6 right-6" onClick={() => setIsMenuOpen(false)}><X size={40} /></button>
          {navItems.map((item) => (
            <a key={item.name} href={item.link} onClick={() => setIsMenuOpen(false)} className="text-2xl font-black uppercase italic">
              {item.name}
            </a>
          ))}
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <Image src="/jeri1.webp" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 animate-subtle-zoom" />
        <div className="relative z-10 text-center text-white px-4">
          <span className="text-orange-500 font-bold tracking-[0.3em] uppercase mb-4 block animate-fade-in">Bem-vindo ao Destino Nº 1</span>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-8 leading-[0.9]">
            Jeri4xp: Sua conexão <br /> com o paraíso.
          </h1>
          <a href="https://wa.me/5585999001339" className="bg-orange-600 hover:bg-white hover:text-orange-600 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 inline-block">
            RESERVAR AGORA
          </a>
        </div>
      </section>

      {/* --- HISTÓRIA (HistoriaJeri.vue) --- */}
      <section id="historia" className="bg-orange-600 py-24 px-6 text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="uppercase tracking-widest text-xs font-bold mb-2 block opacity-80">Descubra a Vila</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8">História de Jericoacoara</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              <span className="text-7xl font-black mr-3 float-left">J</span>
              ericoacoara é um destino onde o tempo parece ditar o próprio ritmo através do movimento das marés e dos ventos.
            </p>
          </div>
          <div className="space-y-6 text-lg opacity-90 italic border-l border-white/30 pl-8">
            <p>Em 1984, o Washington Post a elegeu como uma das dez praias mais bonitas do mundo.</p>
            <p>Hoje, protegida como Parque Nacional, a essência rústica permanece intacta, com ruas de areia e céu estrelado.</p>
          </div>
        </div>
      </section>

      {/* --- EXPERIÊNCIAS (PaginasExperiencias.vue) --- */}
      <section id="experiencias" className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-16">Nossas Experiências</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Passeios', 'Hospedagem', 'Transfer', 'Aulas'].map((exp) => (
            <div key={exp} className="group relative h-80 rounded-[2.5rem] overflow-hidden bg-black shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-80" />
              <Image src={`/${exp.toLowerCase()}.webp`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={exp} />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-left">
                <h3 className="text-white text-3xl font-black uppercase italic mb-4">{exp}</h3>
                <button className="bg-orange-600 text-white w-fit px-6 py-2 rounded-full text-xs font-bold hover:bg-white hover:text-orange-600 transition-all">
                  SAIBA MAIS
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- DEPOIMENTOS (DepoimentosCards.vue) --- */}
      <section id="depoimentos" className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-black mb-16">O que dizem sobre a Jeri 4XP</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(item => (
              <div key={item.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col">
                <span className="text-orange-600 text-5xl font-serif leading-none mb-4">“</span>
                <p className="text-gray-700 italic text-lg mb-8 flex-grow">{item.content}</p>
                <div className="flex items-center gap-4">
                  <Image src={item.avatar} alt={item.name} className="w-14 h-14 rounded-full border-2 border-orange-600" />
                  <div>
                    <h4 className="font-extrabold text-sm">{item.name}</h4>
                    <div className="flex items-center text-gray-500 text-xs gap-1">
                      <MapPin size={12} className="text-orange-600" /> {item.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTATO (ContatoApp.vue) --- */}
      <section id="contato" className="bg-orange-600 py-24 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-xs font-bold mb-8 uppercase tracking-widest">Fale com a gente</span>
          <h2 className="text-4xl md:text-6xl font-black mb-16 leading-tight">Prepare sua próxima aventura em Jeri</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ContactLink icon={<MessageCircle />} title="WhatsApp" value="85 9 9900-1339" href="https://wa.me/5585999001339" />
            <ContactLink icon={<Instagram />} title="Instagram" value="@jeri4xp" href="https://instagram.com/jeri4xp" />
            <ContactLink icon={<Mail />} title="E-mail" value="jeri4xp@gmail.com" href="mailto:jeri4xp@gmail.com" />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white py-12 px-6 text-center border-t border-gray-100">
        <h3 className="text-2xl font-bold mb-4">Sua aventura em Jericoacoara começa aqui</h3>
        <p className="text-gray-500 italic max-w-2xl mx-auto">Turismo com qualidade, aventuras personalizadas e memórias inesquecíveis.</p>
        <p className="mt-8 text-xs text-gray-400">© 2024 Jeri4XP - Todos os direitos reservados.</p>
      </footer>

      {/* --- WHATSAPP BUTTON --- */}
      <a
        href="https://wa.me/5585999001339"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform text-white"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </div>
  );
};

// Componente auxiliar para os cards de contato
const ContactLink = ({ icon, title, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group bg-white/10 backdrop-blur-md p-8 rounded-3xl hover:bg-white hover:text-orange-600 transition-all duration-500 shadow-xl flex flex-col items-center"
  >
    <div className="bg-white/20 group-hover:bg-orange-600 group-hover:text-white p-4 rounded-2xl mb-4 transition-colors">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <h3 className="font-bold text-xl italic mb-2">{title}</h3>
    <span className="font-black text-sm break-all">{value}</span>
  </a>
);

export default Jeri4XP;
