import { Image } from '@/components/ui/image';
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Disc, MessageCircle, Navigation, Waves, Wind } from "lucide-react";
import { useState } from "react";

export default function AulasPage() {
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
    {
      titulo: "Escolha da Modalidade",
      descricao: "Escolha entre kitesurf, windsurf, surf ou stand up paddle. Nossa equipe pode ajudar você a definir a melhor opção de acordo com seu perfil.",
    },
    {
      titulo: "Agendamento da Aula",
      descricao: "Definimos o melhor horário considerando vento, maré e clima para garantir a melhor experiência na água.",
    },
    {
      titulo: "Avaliação e Planejamento",
      descricao: "O instrutor avalia seu nível e adapta a aula para garantir um aprendizado seguro e eficiente.",
    },
    {
      titulo: "Estrutura Completa",
      descricao: "Equipamentos inclusos e revisados, com orientações completas para sua segurança durante toda a prática.",
    },
    {
      titulo: "Prática e Evolução",
      descricao: "Prática com acompanhamento próximo do instrutor para evolução contínua e ganho de confiança.",
    },
  ];

  const aulas = [
    { icon: <Wind size={32} />, title: "Kitesurf", desc: "Aprenda desde o básico até técnicas avançadas com aulas práticas e suporte completo.", zap: "Olá! Quero agendar uma aula de Kitesurf." },
    { icon: <Navigation size={32} />, title: "Windsurf", desc: "Viva a emoção de velejar com vento perfeito e aulas adaptadas ao seu nível.", zap: "Olá! Quero agendar uma aula de Windsurf." },
    { icon: <Waves size={32} />, title: "Surf", desc: "Aulas para iniciantes e intermediários com foco em equilíbrio, técnica e diversão nas ondas.", zap: "Olá! Quero agendar uma aula de Surf." },
    { icon: <Disc size={32} />, title: "Stand Up Paddle", desc: "Explore águas calmas e belas paisagens com aulas leves e perfeitas para relaxar.", zap: "Olá! Quero agendar uma aula de Stand Up Paddle." },
  ];

  const faqs = [
    { question: 'Preciso ter experiência para fazer aulas?', answer: 'Não. As aulas são indicadas tanto para iniciantes quanto para quem já pratica e quer evoluir. Os instrutores adaptam o ritmo conforme seu nível.' },
    { question: 'Quanto tempo dura uma aula?', answer: 'A duração varia. Aulas avulsas duram de 1 a 3 horas, enquanto cursos de kitesurf geralmente levam 3 dias.' },
    { question: 'Os equipamentos estão inclusos?', answer: 'Sim. Todo o equipamento de segurança e prática está incluso nas aulas para seu total conforto.' },
    { question: 'As aulas são seguras?', answer: 'Totalmente. Utilizamos instrutores certificados e equipamentos revisados, sempre respeitando as condições do mar e vento.' }
  ];

  return (
    <div className="font-sans bg-slate-50">

      {/* HERO SECTION */}
      <section className="relative h-screen w-full text-white overflow-hidden">
        <header className="absolute w-full flex justify-between px-6 md:px-10 py-6 z-50 items-center">
          <Image src="https://static.wixstatic.com/media/792b6b_db67302a203f42429486f97568002b88~mv2.png?originWidth=1152&originHeight=576" alt="Logo Jeri4xp" className="w-20 md:w-28" />

          <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
            {navItems.map((item) => (
              <a key={item.name} href={item.link} className="hover:text-orange-500 transition-colors drop-shadow-md">
                {item.name}
              </a>
            ))}
          </nav>

          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-3xl p-2">☰</button>
        </header>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center gap-8 font-bold"
            >
              <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-10 text-4xl">✕</button>
              {navItems.map((item) => (
                <a key={item.name} href={item.link} onClick={() => setIsMenuOpen(false)} className="text-2xl hover:text-orange-600 transition">
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image src="/jeri1.webp" className="absolute w-full h-full object-cover" alt="Esportes em Jeri" />

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4"
          >
            Aventura e Adrenalina
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-black italic tracking-tighter mb-6 leading-tight"
          >
            Jeri4xp: Sua conexão <br /> com o paraíso.
          </motion.h1>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5585999001339"
            className="bg-orange-600 px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-orange-600 transition-all shadow-xl"
          >
            Reservar Agora
          </motion.a>
        </div>
      </section>

      {/* VISÃO GERAL */}
      <section id="geralAulas" className="py-24 px-6 bg-orange-600">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 text-slate-800">
          <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-1.5 bg-orange-600 rounded-full mb-6" />
            <h2 className="text-3xl md:text-5xl font-black text-center leading-tight">
              Viva a Experiência dos Esportes em <span className="text-orange-600 font-serif italic">Jericoacoara</span>
            </h2>
          </div>

          <div className="border-l-4 border-orange-600 pl-6 space-y-6 text-slate-600 text-lg leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-black first-letter:text-orange-600 first-letter:mr-3 first-letter:float-left">
              Explorar os esportes em Jericoacoara é uma das formas mais intensas de viver o destino. Com ventos constantes e mar favorável, a região se torna perfeita tanto para iniciantes quanto para experientes.
            </p>
            <p>
              Nossas aulas são acompanhadas por instrutores experientes, que orientam cada etapa do aprendizado com total segurança e atenção. Garantimos estrutura completa com equipamentos de qualidade para que você foque apenas na diversão.
            </p>
          </div>
        </div>
      </section>

      {/* AS AULAS (CARDS) */}
      <section id="aulas" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Escolha sua experiência na água</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Aulas para todos os níveis com instrutores certificados e total segurança.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aulas.map((aula, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-orange-600 text-white rounded-[2.5rem] p-8 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">{aula.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{aula.title}</h3>
                <p className="text-orange-50 text-sm leading-relaxed">{aula.desc}</p>
              </div>
              <a
                href={`https://wa.me/5585999001339?text=${aula.zap}`}
                className="mt-8 bg-white text-orange-600 py-3 rounded-2xl font-bold text-center hover:bg-slate-900 hover:text-white transition-all"
              >
                Agendar Aula
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FUNCIONAMENTO */}
      <section id="funcionamento" className="py-24 px-6 bg-orange-600 text-white rounded-[4rem] mx-4 md:mx-10">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">Como Funcionam as Aulas</h2>
          <div className="space-y-6">
            {etapas.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }}
                className="flex gap-6 bg-white rounded-[2rem] p-6 items-center shadow-lg group"
              >
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-orange-600 text-white text-xl font-bold group-hover:scale-110 transition">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{item.titulo}</h3>
                  <p className="text-slate-500 text-sm">{item.descricao}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DÚVIDAS FAQ */}
      <section id="duvidaAulas" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900">Dúvidas Frequentes</h2>
            <div className="w-16 h-1 bg-orange-600 mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-2 border-slate-100 rounded-3xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full p-6 text-left font-bold flex justify-between items-center text-slate-800 hover:bg-slate-50 transition"
                >
                  {faq.question}
                  <ChevronDown className={`text-orange-600 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedFaq === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <p className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER / CONTATO */}
      <footer id="contato" className="bg-orange-600 text-white py-24 px-6 rounded-t-[4rem]">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs uppercase tracking-widest font-bold mb-8">
            Fale com a gente
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-12 italic">Prepare sua próxima <br /> aventura em Jeri</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a href="https://wa.me/5585999001339" className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] hover:bg-white hover:text-orange-600 transition-all">
              <h3 className="font-bold text-xl mb-2">WhatsApp</h3>
              <span className="text-lg font-black">85 9 9900-1339</span>
            </a>
            <a href="https://instagram.com/jeri4xp" className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] hover:bg-white hover:text-orange-600 transition-all">
              <h3 className="font-bold text-xl mb-2">Instagram</h3>
              <span className="text-lg font-black">@jeri4xp</span>
            </a>
            <a href="mailto:jeri4xp@gmail.com" className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] hover:bg-white hover:text-orange-600 transition-all">
              <h3 className="font-bold text-xl mb-2">E-mail</h3>
              <span className="text-lg font-black">jeri4xp@gmail.com</span>
            </a>
          </div>
          <p className="text-xs uppercase tracking-widest opacity-60">Jericoacoara • Ceará • Brasil</p>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/5585999001339" className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 p-4 rounded-full text-white shadow-2xl transition-all z-[60] scale-110">
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
