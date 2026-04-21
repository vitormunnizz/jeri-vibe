import { Image } from '@/components/ui/image';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function AulasPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const navItems = [
    { name: 'Visão Geral', link: '#geralAulas' },
    { name: 'Aulas', link: '#aulas' },
    { name: 'Funcionamento', link: '#funcionamento' },
    { name: 'Dúvidas', link: '#duvidaAulas' },
    { name: 'Contato', link: '#contato' },
  ];

  const etapas = [
    {
      titulo: 'Escolha da Modalidade',
      descricao: 'Escolha entre kitesurf, windsurf, surf ou windsurf. Nossa equipe pode ajudar você a definir a melhor opção de acordo com seu perfil e objetivo.',
    },
    {
      titulo: 'Agendamento da Aula',
      descricao: 'Definimos o melhor horário considerando vento, maré e clima para garantir a melhor experiência.',
    },
    {
      titulo: 'Avaliação e Planejamento',
      descricao: 'O instrutor avalia seu nível e adapta a aula para garantir aprendizado seguro e eficiente.',
    },
    {
      titulo: 'Estrutura Completa',
      descricao: 'Equipamentos inclusos e revisados, com orientações completas para sua segurança.',
    },
    {
      titulo: 'Prática e Evolução',
      descricao: 'Prática com acompanhamento próximo para evolução contínua e mais confiança.',
    },
  ];

  const faqs = [
    {
      question: 'Preciso ter experiência para fazer aulas de esportes na praia?',
      answer: 'Não. As aulas são indicadas tanto para iniciantes quanto para quem já pratica e quer evoluir. Os instrutores adaptam o ritmo conforme seu nível.',
    },
    {
      question: 'Quais esportes posso aprender em Jericoacoara?',
      answer: 'As modalidades mais procuradas são kitesurf, windsurf, surf e stand up paddle. Jericoacoara tem condições ideais de vento e mar para aprender com segurança.',
    },
    {
      question: 'Quanto tempo dura uma aula?',
      answer: 'A duração varia conforme a modalidade. Aulas avulsas costumam durar de 1 a 3 horas, enquanto cursos completos de kitesurf geralmente acontecem em 3 dias, com cerca de 3 horas por dia.',
    },
    {
      question: 'Os equipamentos estão inclusos na aula?',
      answer: 'Na maioria das escolas, sim. Os equipamentos de segurança e prática costumam estar inclusos, garantindo mais conforto para quem está começando.',
    },
    {
      question: 'As aulas são seguras?',
      answer: 'Sim. As aulas são acompanhadas por instrutores experientes, com foco em segurança, teoria básica, uso correto dos equipamentos e adaptação às condições do mar e do vento.',
    },
  ];

  return (
    <div className="font-sans">
      {/* HERO */}
      <section className="min-h-screen w-full text-white relative overflow-hidden">
        <header className="absolute w-full flex justify-between px-6 md:px-10 py-4 z-50 items-center">
          <Image src="https://static.wixstatic.com/media/792b6b_db67302a203f42429486f97568002b88~mv2.png?originWidth=1152&originHeight=576" alt="Logo Jeri4xp" className="w-20 md:w-24" />

          <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wider">
            {navItems.map((item) => (
              <a key={item.name} href={item.link} className="hover:text-accent transition">
                {item.name}
              </a>
            ))}
          </nav>

          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-2xl">
            ☰
          </button>
        </header>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 z-50 font-bold">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-10 text-3xl">
              ✕
            </button>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-black hover:text-accent"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}

        <Image src="https://static.wixstatic.com/media/792b6b_f1a29dfb5f294176b121771875f4bafa~mv2.png?originWidth=1152&originHeight=576" className="absolute w-full h-full object-cover opacity-80" alt="Hero background" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="text-accent mb-2 uppercase tracking-widest text-xs md:text-sm">
            Bem-vindo ao Destino Nº 1
          </span>

          <h1 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-6">
            Aulas de Esportes <br /> em Jericoacoara
          </h1>

          <a
            href="https://wa.me/5585999001339"
            target="_blank"
            rel="noreferrer"
            className="bg-accent px-8 py-3 rounded-full text-xs font-bold hover:bg-white hover:text-accent transition-all"
          >
            Reservar Agora
          </a>
        </div>
      </section>

      {/* VISÃO GERAL */}
      <section id="geralAulas" className="bg-accent py-20 px-6 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="uppercase tracking-widest text-xs font-bold mb-2">
              Descubra a Experiência
            </span>
            <h2 className="text-3xl md:text-4xl font-black">
              Aulas de Esportes em Jericoacoara
            </h2>
            <div className="h-1 w-20 bg-white mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 leading-relaxed text-base md:text-lg">
            <div className="space-y-5">
              <p>
                Explorar os esportes em Jericoacoara é uma das formas mais intensas de viver o destino. Com ventos constantes, mar favorável e clima ideal durante quase todo o ano, a região se torna perfeita tanto para iniciantes quanto para quem já tem experiência.
              </p>
              <p>
                Entre as principais modalidades estão o kitesurf, windsurf, surf e stand up paddle, cada uma oferecendo uma conexão única com o mar e a natureza.
              </p>
            </div>

            <div className="space-y-5">
              <p>
                As aulas são acompanhadas por instrutores experientes, que orientam cada etapa do aprendizado com segurança e atenção.
              </p>
              <p>
                Outro diferencial está na estrutura: equipamentos de qualidade, materiais de segurança e suporte completo para que você aproveite cada momento sem preocupação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AULAS */}
      <section id="aulas" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="uppercase tracking-widest text-xs font-bold mb-2 text-accent">
              Escolha sua Experiência
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary">
              Escolha sua Modalidade
            </h2>
            <div className="h-1 w-20 bg-accent mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '🪁', titulo: 'Kitesurf', desc: 'Aprenda desde o básico até técnicas avançadas com aulas práticas e suporte completo.', msg: 'Olá! Quero agendar uma aula de Kitesurf.' },
              { emoji: '🌬️', titulo: 'Windsurf', desc: 'Viva a emoção de velejar com vento perfeito e aulas adaptadas ao seu nível.', msg: 'Olá! Quero agendar uma aula de Windsurf.' },
              { emoji: '🏄', titulo: 'Surf', desc: 'Aulas para iniciantes e intermediários com foco em equilíbrio, técnica e diversão.', msg: 'Olá! Quero agendar uma aula de Surf.' },
              { emoji: '🌊', titulo: 'Stand Up Paddle', desc: 'Explore águas calmas e belas paisagens com aulas leves e perfeitas para relaxar.', msg: 'Olá! Quero agendar uma aula de Stand Up Paddle.' },
            ].map((item) => (
              <motion.div
                key={item.titulo}
                className="flex flex-col justify-between bg-accent text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition hover:border-2 border-accent"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="text-2xl font-black mb-3">{item.titulo}</h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
                <a
                  href={`https://wa.me/5585999001339?text=${item.msg}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 bg-white text-accent py-2 rounded-xl font-bold text-center hover:bg-accent/90 hover:text-white transition text-sm"
                >
                  Agendar Aula
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNCIONAMENTO */}
      <section id="funcionamento" className="py-20 px-6 bg-accent text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="uppercase tracking-widest text-xs font-bold mb-2">
              Processo
            </span>
            <h2 className="text-3xl md:text-4xl font-black">
              Como Funcionam as Aulas
            </h2>
            <div className="h-1 w-20 bg-white mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {etapas.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-4 bg-white rounded-xl p-4 shadow-md items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-accent text-white text-lg font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">{item.titulo}</h3>
                  <p className="text-primary text-sm">{item.descricao}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidaAulas" className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="uppercase tracking-widest text-xs font-bold mb-2 text-accent">
              Informações
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary">
              Dúvidas Frequentes
            </h2>
            <div className="h-1 w-20 bg-accent mt-4 rounded-full"></div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-2 border-border p-6 rounded-xl bg-background hover:border-accent transition"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left font-bold text-primary flex justify-between items-center"
                >
                  <span>{faq.question}</span>
                  <span className="text-accent text-xl">
                    {expandedFaq === index ? '−' : '+'}
                  </span>
                </button>

                {expandedFaq === index && (
                  <p className="mt-4 text-foreground leading-relaxed text-sm">{faq.answer}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 px-6 bg-primary text-white">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-xs uppercase mb-6 font-bold">
            Fale com a gente
          </span>

          <h2 className="text-3xl md:text-4xl font-black mb-12">
            Prepare sua próxima aventura em Jeri
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.a
              href="https://wa.me/5585999001339"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 p-6 rounded-2xl hover:bg-white hover:text-primary transition text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-bold mb-2">WhatsApp</div>
              <div className="font-bold">85 9 9900-1339</div>
            </motion.a>

            <motion.a
              href="https://instagram.com/jeri4xp"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 p-6 rounded-2xl hover:bg-white hover:text-primary transition text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-bold mb-2">Instagram</div>
              <div className="font-bold">@jeri4xp</div>
            </motion.a>

            <motion.a
              href="mailto:jeri4xp@gmail.com"
              className="bg-white/10 p-6 rounded-2xl hover:bg-white hover:text-primary transition text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-bold mb-2">E-mail</div>
              <div className="font-bold">jeri4xp@gmail.com</div>
            </motion.a>
          </div>

          <div className="mt-12">
            <p className="text-xs uppercase tracking-widest">
              Jericoacoara • Ceará • Brasil
            </p>
          </div>
        </div>
      </section>

      {/* BOTÃO WHATSAPP FLUTUANTE */}
      <a
        href="https://wa.me/5585999001339"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full text-white shadow-lg transition z-40"
        title="Enviar mensagem no WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
