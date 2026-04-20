import { MessageCircle } from "lucide-react"; // Import opcional para o ícone do zap
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
      titulo: "Escolha da Modalidade",
      descricao: "Escolha entre kitesurf, windsurf, surf ou stand up paddle. Nossa equipe pode ajudar você a definir a melhor opção de acordo com seu perfil e objetivo.",
    },
    {
      titulo: "Agendamento da Aula",
      descricao: "Definimos o melhor horário considerando vento, maré e clima para garantir a melhor experiência.",
    },
    {
      titulo: "Avaliação e Planejamento",
      descricao: "O instrutor avalia seu nível e adapta a aula para garantir aprendizado seguro e eficiente.",
    },
    {
      titulo: "Estrutura Completa",
      descricao: "Equipamentos inclusos e revisados, com orientações completas para sua segurança.",
    },
    {
      titulo: "Prática e Evolução",
      descricao: "Prática com acompanhamento próximo para evolução contínua e mais confiança.",
    },
  ];

  const faqs = [
    {
      question: 'Preciso ter experiência para fazer aulas de esportes na praia?',
      answer: 'Não. As aulas são indicadas tanto para iniciantes quanto para quem já pratica e quer evoluir. Os instrutores adaptam o ritmo conforme seu nível.'
    },
    {
      question: 'Quais esportes posso aprender em Jericoacoara?',
      answer: 'As modalidades mais procuradas são kitesurf, windsurf, surf e stand up paddle. Jericoacoara tem condições ideais de vento e mar para aprender com segurança.'
    },
    {
      question: 'Quanto tempo dura uma aula?',
      answer: 'A duração varia conforme a modalidade. Aulas avulsas costumam durar de 1 a 3 horas, enquanto cursos completos de kitesurf geralmente acontecem em 3 dias, com cerca de 3 horas por dia.'
    },
    {
      question: 'Os equipamentos estão inclusos na aula?',
      answer: 'Na maioria das escolas, sim. Os equipamentos de segurança e prática costumam estar inclusos, garantindo mais conforto para quem está começando.'
    },
    {
      question: 'As aulas são seguras?',
      answer: 'Sim. As aulas são acompanhadas por instrutores experientes, com foco em segurança, teoria básica, uso correto dos equipamentos e adaptação às condições do mar e do vento.'
    }
  ];

  return (
    <div className="font-sans">
      {/* SEÇÃO HERO */}
      <section className="min-h-screen w-full bg-white items-center justify-center text-center">
        <div className="relative w-full h-140 overflow-hidden text-white uppercase font-bold tracking-widest text-shadow-md">
          <header className="absolute w-full flex justify-between z-50 px-10 py-2.5 md:items-center items-start">
            <a href="/">
              <img src="/logo_jeri4xp.png" alt="Logo Jeri4xp" className="w-25" />
            </a>

            <nav className="hidden md:block">
              <ul className="flex gap-10 text-lg">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.link} className="hover:text-orange-600 transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden mt-2.5 text-3xl hover:cursor-pointer"
            >
              ☰
            </button>
          </header>

          {/* MENU MOBILE */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-8 font-bold">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-8 right-10 text-4xl hover:cursor-pointer"
              >
                x
              </button>

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-black tracking-tighter hover:text-orange-600 transition-all"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}

          <main className="flex h-full bg-black">
            <img src="/jeri1.webp" className="w-full h-full object-cover opacity-85" alt="Background" />

            <div className="absolute inset-0 z-25 flex flex-col items-center justify-center">
              <span className="text-orange-600 mb-2">
                Bem-vindo ao Destino Nº 1
              </span>

              <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4">
                Jeri4xp: Sua conexão <br /> com o paraíso.
              </h1>

              <a
                href="https://wa.me/5585999001339"
                target="_blank"
                rel="noreferrer"
                className="bg-orange-600 px-10 py-4 rounded-full text-xs hover:bg-white hover:text-orange-600 transition-all shadow-lg"
              >
                Reservar Agora
              </a>
            </div>
          </main>
        </div>

        <footer className="p-10 text-gray-800">
          <h2 className="text-2xl font-bold">Descubra os Melhores Passeios em Jericoacoara</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto italic">
            Explore lagoas cristalinas, dunas impressionantes e paisagens únicas com total conforto e segurança.
          </p>
        </footer>
      </section>

      {/* SEÇÃO ESPORTES (O TEXTO LONGO) */}
      <section id="esportesJeri" className="bg-orange-600 min-h-screen p-8 flex items-center justify-center">
        <div className="w-full max-w-5xl p-8 bg-white rounded-4xl shadow-2xl mx-auto text-slate-800">
          <div className="flex justify-center mb-4">
            <div className="w-18 h-1 bg-orange-600 rounded-full"></div>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-8">
            Viva a Experiência dos Esportes em <span className="text-orange-600">Jericoacoara</span>
          </h1>

          <div className="border-l-4 border-orange-600 pl-6">
            <div className="space-y-4 text-md md:text-lg">
              <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-orange-600 first-letter:mr-1 first-letter:float-left">
                Explorar os esportes em Jericoacoara é uma das formas mais intensas de viver o destino.
                Com ventos constantes, mar favorável e clima ideal durante quase todo o ano, a região
                se torna perfeita tanto para iniciantes quanto para quem já tem experiência.
              </p>
              <p>
                Entre as principais modalidades estão o kitesurf, windsurf, surf e stand up paddle,
                cada uma oferecendo uma conexão única com o mar e a natureza.
              </p>
              <p>
                As aulas são acompanhadas por instrutores experientes, que orientam cada etapa do
                aprendizado com segurança e atenção.
              </p>
              <p>
                Outro diferencial está na estrutura: equipamentos de qualidade, materiais de segurança
                e suporte completo para que você aproveite cada momento sem preocupação.
              </p>
              <p>
                Mais do que aprender um novo esporte, essa experiência proporciona conexão com a
                natureza, superação de desafios e a criação de memórias únicas.
              </p>
              <p>
                Seja para sua primeira aula ou para evoluir no esporte, Jericoacoara oferece o cenário
                perfeito para transformar sua viagem em algo ainda mais intenso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO AULAS (OS CARDS) */}
      <section id="aulas" className="bg-white min-h-screen p-8 flex items-center justify-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-4 text-orange-600">
            Escolha sua experiência na água
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
            Aulas para iniciantes e praticantes com instrutores experientes, equipamentos inclusos e total segurança.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { emoji: "🪁", titulo: "Kitesurf", desc: "Aprenda desde o básico até técnicas avançadas com aulas práticas e suporte completo.", msg: "Olá! Quero agendar uma aula de Kitesurf." },
              { emoji: "🌬️", titulo: "Windsurf", desc: "Viva a emoção de velejar com vento perfeito e aulas adaptadas ao seu nível.", msg: "Olá! Quero agendar uma aula de Windsurf." },
              { emoji: "🏄", titulo: "Surf", desc: "Aulas para iniciantes e intermediários com foco em equilíbrio, técnica e diversão.", msg: "Olá! Quero agendar uma aula de Surf." },
              { emoji: "🌊", titulo: "Stand Up Paddle", desc: "Explore águas calmas e belas paisagens com aulas leves e perfeitas para relaxar.", msg: "Olá! Quero agendar uma aula de Stand Up Paddle." }
            ].map((item) => (
              <div key={item.titulo} className="flex flex-col justify-between bg-orange-600 text-white rounded-4xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div>
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h2 className="text-3xl font-bold mb-4">{item.titulo}</h2>
                  <p className="text-md">{item.desc}</p>
                </div>
                <a
                  href={`https://wa.me/5585999001339?text=${item.msg}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 bg-white text-orange-600 py-3 rounded-xl font-semibold text-center hover:bg-slate-800 hover:text-white transition-all duration-300"
                >
                  Agendar Aula
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO FUNCIONAMENTO (ETAPAS) */}
      <section id="funcionamento" className="bg-orange-600 min-h-screen p-8 flex items-center justify-center text-white">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-12 text-center">
            Como Funcionam as Aulas
          </h1>
          <div className="grid grid-cols-1 gap-5">
            {etapas.map((item, index) => (
              <div key={index} className="flex gap-5 bg-white rounded-2xl p-4 shadow-md items-center hover:shadow-xl transition">
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-orange-600 text-white text-xl font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1.5">{item.titulo}</h3>
                  <p className="text-gray-800 text-sm">{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DÚVIDAS (FAQ) */}
      <section id="duvidaAulas" className="bg-white min-h-screen p-4 flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 text-orange-600">
            Dúvidas Frequentes
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
            Tire suas principais dúvidas antes de reservar e aproveite sua experiência em Jericoacoara com total tranquilidade.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden transition-all duration-300 hover:shadow-md">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-gray-800 group-hover:text-orange-600 transition">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-orange-600 transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO CONTATO */}
      <section id="contato" className="min-h-screen w-full flex items-center justify-center bg-orange-600 py-20 px-4">
        <div className="max-w-4xl z-10 text-center text-white">
          <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs uppercase tracking-widest font-bold mb-6">
            Fale com a gente
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-12 drop-shadow-lg">
            Prepare sua próxima aventura em Jeri
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="https://wa.me/5585999001339" target="_blank" rel="noreferrer"
               className="group bg-white/10 backdrop-blur-md p-8 rounded-3xl hover:bg-white hover:text-orange-600 transition-all duration-500 shadow-2xl hover:-translate-y-2">
              <h3 className="font-bold text-xl mb-2 italic">WhatsApp</h3>
              <span className="text-lg font-black block">85 9 9900-1339</span>
            </a>

            <a href="https://instagram.com/jeri4xp" target="_blank" rel="noreferrer"
               className="group bg-white/10 backdrop-blur-md p-8 rounded-3xl hover:bg-white hover:text-orange-600 transition-all duration-500 shadow-2xl hover:-translate-y-2">
              <h3 className="font-bold text-xl mb-2 italic">Instagram</h3>
              <span className="text-lg font-black block">@jeri4xp</span>
            </a>

            <a href="mailto:jeri4xp@gmail.com"
               className="group bg-white/10 backdrop-blur-md p-8 rounded-3xl hover:bg-white hover:text-orange-600 transition-all duration-500 shadow-2xl hover:-translate-y-2">
              <h3 className="font-bold text-xl mb-2 italic">E-mail</h3>
              <span className="text-lg font-black block break-all leading-tight">jeri4xp@gmail.com</span>
            </a>
          </div>

          <div className="mt-20">
            <p className="text-sm font-medium tracking-widest uppercase">
              Jericoacoara • Ceará • Brasil
            </p>
          </div>
        </div>
      </section>

      {/* BOTÃO FLUTUANTE */}
      <a
        href="https://wa.me/5585999001339"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full text-white shadow-lg transition z-40"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
