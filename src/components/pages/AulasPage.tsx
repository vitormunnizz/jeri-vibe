// WI-HPI
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronDown,
  Instagram,
  Mail,
  MessageCircle
} from 'lucide-react';
import { useState } from 'react';
import { Image } from '@/components/ui/image';

// Variantes de animação consistentes com a Home
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function LessonsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const navItems = [
    { name: 'Visão Geral', link: '#geralAulas' },
    { name: 'Aulas', link: '#aulas' },
    { name: 'Funcionamento', link: '#funcionamento' },
    { name: 'Dúvidas', link: '#duvidaAulas' },
    { name: 'Contato', link: '#contato' },
  ];

  const etapas = [
    { titulo: "Escolha da Modalidade", descricao: "Escolha entre kitesurf, windsurf, surf ou stand up paddle. Nossa equipe pode ajudar você a definir a melhor opção." },
    { titulo: "Agendamento da Aula", descricao: "Definimos o melhor horário considerando vento, maré e clima para garantir a melhor experiência." },
    { titulo: "Avaliação e Planejamento", descricao: "O instrutor avalia seu nível e adapta a aula para garantir aprendizado seguro e eficiente." },
    { titulo: "Estrutura Completa", descricao: "Equipamentos inclusos e revisados, com orientações completas para sua segurança." },
    { titulo: "Prática e Evolução", descricao: "Prática com acompanhamento próximo para evolução contínua e mais confiança." },
  ];

  const faqs = [
    { question: 'Preciso ter experiência para fazer aulas?', answer: 'Não. As aulas são indicadas tanto para iniciantes quanto para quem já pratica e quer evoluir. Os instrutores adaptam o ritmo conforme seu nível.' },
    { question: 'Quais esportes posso aprender em Jericoacoara?', answer: 'As modalidades mais procuradas são kitesurf, windsurf, surf e stand up paddle. Jeri tem condições ideais de vento e mar.' },
    { question: 'Quanto tempo dura uma aula?', answer: 'A duração varia conforme a modalidade. Aulas avulsas costumam durar de 1 a 3 horas, enquanto cursos completos de kitesurf levam cerca de 3 dias.' },
    { question: 'Os equipamentos estão inclusos na aula?', answer: 'Sim. Os equipamentos de segurança e prática estão inclusos, garantindo mais conforto para quem está começando.' },
    { question: 'As aulas são seguras?', answer: 'Sim. Acompanhadas por instrutores experientes, com foco em segurança, teoria básica e uso correto dos equipamentos.' }
  ];

  return (
    <div className="min-h-screen bg-white font-paragraph text-foreground overflow-x-hidden">
      <Header />

      {/* 1. HERO SECTION (Exatamente como o seu Main do Vue) */}
      <section className="relative w-full h-[85vh] md:h-screen overflow-hidden text-white uppercase font-bold tracking-widest">
        <div className="absolute inset-0 bg-black">
          <Image src="https://jeri4xp.vercel.app/img/jeri1.e05b0107.webp" className="w-full h-full object-cover opacity-70" alt="Hero" />
        </div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-accent mb-2 text-sm md:text-base tracking-[0.3em]">
            Bem-vindo ao Destino Nº 1
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black italic tracking-tighter mb-8 leading-tight uppercase"
          >
            Jeri4xp: Sua conexão <br /> com o paraíso.
          </motion.h1>
          <Button
            onClick={() => window.open('https://wa.me/5585999001339')}
            className="bg-accent hover:bg-white hover:text-accent text-white px-10 py-7 rounded-full text-xs font-bold uppercase transition-all shadow-lg"
          >
            Reservar Agora
          </Button>
        </div>
      </section>

      {/* 2. INTRO SECTION (Seu Footer do Vue transformado em Intro) */}
      <section className="p-10 md:py-20 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black text-secondary italic uppercase tracking-tighter">
            Descubra os Melhores Passeios em Jericoacoara
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto my-6 rounded-full" />
          <p className="mt-4 text-gray-500 text-lg md:text-xl italic max-w-2xl mx-auto leading-relaxed">
            "Explore lagoas cristalinas, dunas impressionantes e paisagens únicas com total conforto e segurança."
          </p>
        </div>
      </section>

      {/* 3. ESPORTES JERI (Bloco Branco sobre Fundo Laranja) */}
      <section id="geralAulas" className="bg-accent py-20 px-6 flex items-center justify-center">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="w-full max-w-5xl p-8 md:p-16 bg-white rounded-[2.5rem] shadow-2xl text-secondary"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-1.5 bg-accent rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-center mb-10">
            Viva a Experiência dos Esportes em <span className="text-accent">Jericoacoara</span>
          </h2>
          <div className="border-l-4 border-accent pl-6 space-y-6 text-lg md:text-xl leading-relaxed opacity-90 italic">
            <p className="first-letter:text-5xl first-letter:font-black first-letter:text-accent first-letter:mr-2 first-letter:float-left first-letter:leading-none">
              Explorar os esportes em Jericoacoara é uma das formas mais intensas de viver o destino. Com ventos constantes, mar favorável e clima ideal, a região se torna perfeita para todos.
            </p>
            <p>Entre as principais modalidades estão o kitesurf, windsurf, surf e stand up paddle, cada uma oferecendo uma conexão única com o mar.</p>
            <p>As aulas são acompanhadas por instrutores experientes, garantindo segurança e uma evolução rápida durante toda a experiência.</p>
          </div>
        </motion.div>
      </section>

      {/* 4. ESCOLHA SUA EXPERIÊNCIA (Grid de Cards das Aulas) */}
      <section id="aulas" className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black italic text-center text-accent uppercase tracking-tighter mb-4">
            Escolha sua experiência na água
          </h2>
          <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16 text-lg italic">
            Aulas para iniciantes e praticantes com instrutores experientes e total segurança.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: 'Kitesurf', e: '🪁', d: 'Aprenda desde o básico até técnicas avançadas.' },
              { t: 'Windsurf', e: '🌬️', d: 'Viva a emoção de velejar com vento perfeito.' },
              { t: 'Surf', e: '🏄', d: 'Aulas com foco em equilíbrio e técnica.' },
              { t: 'SUP', e: '🌊', d: 'Explore águas calmas e belas paisagens.' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col justify-between bg-accent text-white rounded-[2rem] p-8 shadow-xl hover:-translate-y-2 transition-all">
                <div>
                  <div className="text-5xl mb-6">{item.e}</div>
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4">{item.t}</h3>
                  <p className="text-sm italic opacity-90">{item.d}</p>
                </div>
                <Button
                  onClick={() => window.open(`https://wa.me/5585999001339?text=Olá! Quero agendar aula de ${item.t}`)}
                  className="mt-8 bg-white text-accent hover:bg-secondary hover:text-white rounded-xl font-bold uppercase py-6"
                >
                  Agendar Aula
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FUNCIONAMENTO (Passo a Passo numerado) */}
      <section id="funcionamento" className="bg-accent py-24 px-6 text-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-black italic text-center uppercase tracking-tighter mb-16 leading-none">
            Como Funcionam as Aulas
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {etapas.map((item, i) => (
              <div key={i} className="flex gap-6 bg-white rounded-2xl p-6 shadow-lg items-center group hover:bg-secondary transition-colors">
                <div className="w-12 h-12 flex shrink-0 items-center justify-center rounded-full bg-accent text-white text-xl font-black">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-black italic uppercase text-secondary group-hover:text-white transition-colors tracking-tight">
                    {item.titulo}
                  </h3>
                  <p className="text-gray-500 group-hover:text-white/70 text-sm italic transition-colors">
                    {item.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DÚVIDAS FREQUENTES (FAQ Accordion) */}
      <section id="duvidaAulas" className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-black italic text-center text-accent uppercase tracking-tighter mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-center text-gray-500 mb-12 italic">
            Tire suas principais dúvidas antes de reservar.
          </p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-accent/10 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-secondary italic uppercase tracking-tight">{faq.question}</span>
                  <ChevronDown className={`text-accent transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="p-6 pt-0 text-slate-500 italic leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONTATO (Bloco Final) */}
      <section id="contato" className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-12 italic uppercase tracking-tighter">Prepare sua Viagem</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Instagram />, label: "Instagram", val: "@jeri4xp", link: "https://instagram.com/jeri4xp" },
              { icon: <MessageCircle />, label: "WhatsApp", val: "85 9 9900-1339", link: "https://wa.me/5585999001339" },
              { icon: <Mail />, label: "E-mail", val: "jeri4xp@gmail.com", link: "mailto:jeri4xp@gmail.com" }
            ].map((item, i) => (
              <a key={i} href={item.link} className="bg-white/5 hover:bg-white hover:text-secondary p-8 rounded-3xl transition-all border border-white/10 flex flex-col items-center">
                <div className="mb-4">{item.icon}</div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">{item.label}</p>
                <p className="font-bold italic">{item.val}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* FLOATING WHATSAPP BUTTON */}
      <motion.button
        onClick={() => window.open('https://wa.me/5585999001339')}
        whileHover={{ scale: 1.05 }}
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center group overflow-visible"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
        <span className="absolute right-full mr-4 bg-white text-secondary px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 pointer-events-none uppercase italic">Agendar Aula!</span>
        <MessageCircle size={32} strokeWidth={2.5} className="relative z-10" />
      </motion.button>
    </div>
  );
}
