import { motion } from 'framer-motion';
import {
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Quote,
  X
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

// Variantes de Animação
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Controle de scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'História', link: '#historia' },
    { name: 'Experiências', link: '#experiencias' },
    { name: 'Depoimentos', link: '#depoimentos' },
    { name: 'Contato', link: '#contato' }
  ];

  const testimonials = [
    { id: 1, name: 'Axelle Rulfi', role: 'Suíça', content: "I found out about Jeri 4XP through a friend's recommendation and it was all great. Kitesurfing and sightseeing, it was all perfect!", avatar: 'https://i.pravatar.cc/150?u=axelle' },
    { id: 2, name: 'Remy Sanchez', role: 'França', content: "Service excellent, les prestations ont même dépassé mes attentes. J'ai testé le wingfoil et fait une excursion en quad.", avatar: 'https://i.pravatar.cc/150?u=remy' },
    { id: 3, name: 'David Kennedy', role: 'Londres, Reino Unido', content: "I had the best experiences in Jericoacoara. Booking everything through Jeri 4XP was the best option.", avatar: 'https://i.pravatar.cc/150?u=david' },
    { id: 4, name: 'Gabi', role: 'Fortaleza, Brasil', content: "Minha experiência com a Jeri 4XP foi fantástica! A equipe é super profissional e atenciosa.", avatar: 'https://i.pravatar.cc/150?u=gabi' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">

      {/* --- HEADER --- */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md text-gray-900' : 'bg-transparent text-white'
        }`}
      >
        <img src="/logo_jeri4xp.png" alt="Logo" className="h-10 w-auto" />

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.link} className="font-bold uppercase tracking-widest text-sm hover:text-orange-600 transition-colors">
              {item.name}
            </a>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black text-white flex flex-col items-center justify-center gap-8 font-bold uppercase italic text-2xl">
          <button className="absolute top-6 right-6" onClick={() => setIsMenuOpen(false)}><X size={40} /></button>
          {navItems.map((item) => (
            <a key={item.name} href={item.link} onClick={() => setIsMenuOpen(false)}>{item.name}</a>
          ))}
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <img src="/jeri1.webp" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.span initial="hidden" animate="visible" variants={fadeInUp} className="text-orange-500 font-bold tracking-[0.3em] uppercase block mb-4">
            Bem-vindo ao Destino Nº 1
          </motion.span>
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} className="text-5xl md:text-7xl font-black italic tracking-tighter mb-8 leading-tight">
            Jeri4xp: Sua conexão <br /> com o paraíso.
          </motion.h1>
          <a href="https://wa.me/5585999001339" className="bg-orange-600 hover:bg-white hover:text-orange-600 text-white px-10 py-4 rounded-full font-bold transition-all inline-block shadow-lg">
            RESERVAR AGORA
          </a>
        </div>
      </section>

      {/* --- HISTÓRIA (Conversão do HistoriaJeri.vue) --- */}
      <section id="historia" className="bg-orange-600 py-24 px-6 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <span className="uppercase tracking-widest text-xs font-bold mb-2 block opacity-80">Descubra a Vila</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic">História de Jericoacoara</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              <span className="text-7xl font-black mr-3 float-left">J</span>
              ericoacoara é um destino onde o tempo parece ditar o próprio ritmo através do movimento das marés e dos ventos.
            </p>
          </motion.div>
          <div className="space-y-6 text-lg border-l-2 border-white/20 pl-8 italic">
            <p>Em 1984, o Washington Post a elegeu como uma das dez praias mais bonitas do mundo.</p>
            <p>Hoje, protegida como Parque Nacional, a essência rústica permanece intacta, com ruas de areia e céu estrelado.</p>
          </div>
        </div>
      </section>

      {/* --- EXPERIÊNCIAS (Conversão do PaginasExperiencias.vue) --- */}
      <section id="experiencias" className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 italic">Nossas Experiências</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Passeios', 'Hospedagem', 'Transfer', 'Aulas'].map((exp) => (
            <div key={exp} className="group relative h-80 rounded-[2.5rem] overflow-hidden bg-black shadow-xl">
              <img src={`/${exp.toLowerCase()}.webp`} alt={exp} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-left">
                <h3 className="text-white text-3xl font-black uppercase italic mb-4">{exp}</h3>
                {/* Substituído router-link por botão com link direto para WhatsApp ou id */}
                <a href="#contato" className="bg-orange-600 text-white w-fit px-6 py-2 rounded-full text-xs font-bold hover:bg-white hover:text-orange-600 transition-all uppercase tracking-widest">
                  Reservar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- DEPOIMENTOS (Conversão do DepoimentosCards.vue) --- */}
      <section id="depoimentos" className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-16 italic">O que dizem sobre a Jeri 4XP</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map(item => (
              <div key={item.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-start text-left hover:shadow-lg transition-all">
                <Quote className="text-orange-600 mb-4" size={32} />
                <p className="text-gray-700 italic mb-8 flex-grow leading-relaxed">"{item.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border-2 border-orange-600" />
                  <div>
                    <h4 className="font-black text-sm uppercase">{item.name}</h4>
                    <p className="text-gray-500 text-xs flex items-center gap-1"><MapPin size={10}/> {item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTATO (Conversão do ContatoApp.vue) --- */}
      <section id="contato" className="bg-orange-600 py-24 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-xs font-bold mb-8 uppercase tracking-widest">Contato</span>
          <h2 className="text-4xl md:text-6xl font-black mb-16 italic leading-tight">Prepare sua próxima aventura</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ContactCard icon={<MessageCircle />} title="WhatsApp" value="85 9 9900-1339" link="https://wa.me/5585999001339" />
            <ContactCard icon={<Instagram />} title="Instagram" value="@jeri4xp" link="https://instagram.com/jeri4xp" />
            <ContactCard icon={<Mail />} title="E-mail" value="jeri4xp@gmail.com" link="mailto:jeri4xp@gmail.com" />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center bg-white border-t border-gray-100 text-gray-400 text-sm italic">
        <p className="font-bold text-gray-900 not-italic mb-2">Sua aventura em Jericoacoara começa aqui</p>
        <p>Turismo com qualidade e aventuras personalizadas.</p>
        <p className="mt-8">© 2024 Jeri4XP - Todos os direitos reservados.</p>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <a href="https://wa.me/5585999001339" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
        <MessageCircle size={30} fill="currentColor" />
      </a>

    </div>
  );
}

// Componente Auxiliar para Contatos
function ContactCard({ icon, title, value, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="group bg-white/10 backdrop-blur-md p-8 rounded-3xl hover:bg-white hover:text-orange-600 transition-all flex flex-col items-center">
      <div className="mb-4 bg-white/20 group-hover:bg-orange-600 group-hover:text-white p-4 rounded-2xl transition-colors">
        {React.cloneElement(icon as React.ReactElement, { size: 30 })}
      </div>
      <h3 className="font-bold text-lg italic mb-2">{title}</h3>
      <span className="font-black text-sm uppercase">{value}</span>
    </a>
  );
}
