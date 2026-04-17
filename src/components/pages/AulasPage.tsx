// WI-HPI
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  ChevronRight,
  ChevronDown,
  Instagram,
  Mail,
  MapPin,
  Wind,
  Waves,
  Navigation
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Variantes de Animação Suavizadas ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function LessonsPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleWhatsAppClick = (modalidade?: string) => {
    const text = modalidade
      ? `Olá! Gostaria de agendar uma aula de ${modalidade}.`
      : "Olá! Gostaria de saber mais sobre as aulas de esportes.";
    window.open(`https://wa.me/5585999001339?text=${encodeURIComponent(text)}`, '_blank');
  };

  const etapas = [
    { titulo: "Escolha da Modalidade", descricao: "Kitesurf, windsurf, surf ou stand up paddle. Nossa equipe ajuda você a definir a melhor opção para seu perfil." },
    { titulo: "Agendamento da Aula", descricao: "Definimos o melhor horário considerando vento, maré e clima para garantir a melhor experiência." },
    { titulo: "Avaliação e Planejamento", descricao: "O instrutor avalia seu nível e adapta a aula para garantir aprendizado seguro e eficiente." },
    { titulo: "Estrutura Completa", descricao: "Equipamentos inclusos e revisados, com orientações completas para sua total segurança." },
    { titulo: "Prática e Evolução", descricao: "Prática com acompanhamento próximo para evolução contínua e ganho de confiança." },
  ];

  const faqs = [
    { question: 'Preciso ter experiência prévia?', answer: 'Não. As aulas são indicadas tanto para iniciantes do zero quanto para quem já pratica e quer evoluir técnicas específicas.' },
    { question: 'Quais esportes posso aprender?', answer: 'As modalidades principais são Kitesurf, Windsurf, Surf e Stand Up Paddle (SUP).' },
    { question: 'Quanto tempo dura uma aula?', answer: 'A duração varia. Aulas avulsas duram de 1 a 3 horas. Cursos completos geralmente levam mais tempo.' },
    { question: 'Os equipamentos estão inclusos?', answer: 'Sim. Todo o material necessário (pranchas, pipas, coletes e acessórios) está incluso no valor da aula.' },
    { question: 'As aulas são seguras?', answer: 'Totalmente. Trabalhamos com instrutores experientes e equipamentos revisados em áreas monitoradas.' }
  ];

  return (
    <div className="min-h-screen bg-white font-paragraph text-foreground overflow-x-hidden">
      <Header />

      {/* HERO SECTION - MESMO PADRÃO DA HOME */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://jeri4xp.vercel.app/img/aula.208d909e.webp)' }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent font-bold tracking-[0.3em] uppercase mb-4 text-xs md:text-sm block"
          >
            Aprenda com especialistas
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black italic tracking-tighter mb-8 leading-tight uppercase"
          >
            AULAS & <br /> ESPORTES NO MAR
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Button
              onClick={() => handleWhatsAppClick()}
              className="bg-accent hover:bg-white hover:text-accent text-white rounded-full px-10 py-7 text-lg font-bold italic uppercase transition-all shadow-lg"
            >
              Agendar Experiência
            </Button>
          </motion.div>
        </div>
      </section>

      {/* VISÃO GERAL (O ESTILO "HISTÓRIA" DA HOME) */}
      <section id="geralAulas" className="py-20 md:py-32 bg-accent text-white relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="text-sm font-bold tracking-widest uppercase mb-2 block opacity-80 uppercase">Experiência na Água</span>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-8 leading-none">VIVA OS ESPORTES <br /> EM JERI</h2>
              <div className="space-y-6 text-lg leading-relaxed opacity-95">
                <p>
                  Jericoacoara é um santuário para os esportes náuticos. Com ventos constantes e mar favorável durante quase todo o ano, a região se torna o cenário perfeito tanto para iniciantes quanto para veteranos.
                </p>
                <p>
                  As aulas são acompanhadas por <strong>instrutores experientes</strong>, que orientam cada etapa do aprendizado com segurança e atenção personalizada. Utilizamos equipamentos de alta qualidade para garantir sua evolução técnica.
                </p>
                <p>
                  Mais do que aprender um esporte, essa experiência proporciona uma conexão profunda com a natureza e a superação de desafios em um dos cenários mais bonitos do mundo.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image src="https://jeri4xp.vercel.app/img/aula.208d909e.webp" className="rounded-3xl shadow-2xl border-4 border-white/10" alt="Esportes em Jeri" />
              <div className="absolute -bottom-6 -right-6 bg-white text-secondary p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="font-black italic text-2xl uppercase leading-none text-accent">Vento Perfeito</p>
                <p className="text-sm font-bold opacity-60 mt-1 uppercase text-secondary">Todos os dias.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODALIDADES (O GRID DE "EXPERIÊNCIAS" DA HOME) */}
      <section id="aulas" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-secondary italic uppercase tracking-tighter mb-4">Escolha seu Esporte</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Kitesurf', emoji: '🪁', img: 'https://jeri4xp.vercel.app/img/aula.208d909e.webp' },
              { title: 'Windsurf', emoji: '🌬️', img: 'https://jeri4xp.vercel.app/img/aula.208d909e.webp' }, // Use imagens específicas se tiver
              { title: 'Surf', emoji: '🏄', img: 'https://jeri4xp.vercel.app/img/aula.208d909e.webp' },
              { title: 'SUP', emoji: '🌊', img: 'https://jeri4xp.vercel.app/img/aula.208d909e.webp' },
            ].map((item, i) => (
              <div
                key={i}
                onClick={() => handleWhatsAppClick(item.title)}
                className="group relative h-96 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer block"
              >
                <Image src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <span className="text-4xl mb-4 block">{item.emoji}</span>
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-2">{item.title}</h3>
                  <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    Agendar Agora <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA (ESTILO CLEAN DOS DEPOIMENTOS) */}
      <section id="funcionamento" className="py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-center italic uppercase tracking-tighter mb-16 leading-tight text-secondary">Como Funcionam <br/> <span className="text-accent">as Nossas Aulas</span></h2>
          <div className="grid gap-4">
            {etapas.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:border-accent/20 transition-all flex items-center gap-6"
              >
                <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center font-black text-xl shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-black italic uppercase text-lg text-secondary">{item.titulo}</h4>
                  <p className="text-slate-500 text-sm italic">{item.descricao}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="duvidaAulas" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black text-center italic uppercase tracking-tighter mb-12 text-secondary">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-3xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-secondary italic uppercase tracking-tight">{faq.question}</span>
                  <ChevronDown className={`text-accent transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-500 italic leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT (MESMO DA HOME) */}
      <section id="contato" className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-12 italic uppercase tracking-tighter">Prepare sua Viagem</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Instagram />, label: "Instagram", val: "@jeri4xp", link: "https://instagram.com/jeri4xp" },
              { icon: <MessageCircle />, label: "WhatsApp", val: "85 9 9900-1339", link: "https://wa.me/5585999001339" },
              { icon: <Mail />, label: "E-mail", val: "jeri4xp@gmail.com", link: "mailto:jeri4xp@gmail.com" }
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="bg-white/5 hover:bg-white hover:text-secondary p-8 rounded-3xl transition-all border border-white/10 flex flex-col items-center"
              >
                <div className="mb-4">{item.icon}</div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">{item.label}</p>
                <p className="font-bold italic">{item.val}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* FLOATING WHATSAPP BUTTON (ESTANDARDIZADO) */}
      <motion.button
        onClick={() => handleWhatsAppClick()}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center group overflow-visible"
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:hidden" />
        <span className="absolute right-full mr-4 bg-white text-secondary px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 pointer-events-none uppercase italic">
          Agendar Aula Agora!
        </span>
        <MessageCircle size={32} strokeWidth={2.5} className="relative z-10" />
      </motion.button>
    </div>
  );
}
