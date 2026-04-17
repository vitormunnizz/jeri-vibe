import { useState } from "react";

export default function JeriPasseios() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const navItems = [
    { name: "Visão Geral", link: "#geralPasseios" },
    { name: "Veículos", link: "#veiculos" },
    { name: "Passeios", link: "#passeios" },
    { name: "Dúvidas", link: "#duvidaPasseio" },
    { name: "Contato", link: "#contato" },
  ];

  const vehicleTypes = [
    {
      name: "Buggy",
      description:
        "O clássico de Jericoacoara. Ideal para quem busca conforto, segurança e um passeio completo pelas principais atrações.",
      icon: "🚙",
    },
    {
      name: "Quadriciclo",
      description:
        "Perfeito para quem quer mais liberdade e aventura, pilotando seu próprio veículo pelas dunas e trilhas.",
      icon: "🏍️",
    },
    {
      name: "UTV",
      description:
        "Uma experiência moderna e mais robusta, combinando conforto com adrenalina em terrenos variados.",
      icon: "🚗",
    },
    {
      name: "4x4",
      description:
        "Opção ideal para grupos ou famílias, oferecendo espaço, estabilidade e muito conforto durante todo o passeio.",
      icon: "🛻",
    },
  ];

  const faqs = [
    {
      question: "Qual o passeio mais procurado em Jericoacoara?",
      answer:
        "Os passeios mais procurados são o Lado Leste, com paradas na Lagoa do Paraíso e Árvore da Preguiça, e o Lado Oeste, com Tatajuba e travessia de balsa. Ambos oferecem paisagens incríveis e experiências únicas.",
    },
    {
      question: "Quanto tempo dura o passeio?",
      answer:
        "A maioria dos passeios dura entre 6 e 8 horas, dependendo do roteiro escolhido, do tempo de parada em cada atração e das condições do trajeto.",
    },
    {
      question: "Preciso reservar com antecedência?",
      answer:
        "Sim, especialmente em finais de semana, feriados e alta temporada. Reservar antes garante sua vaga e melhores horários.",
    },
    {
      question: "Passeios para família?",
      answer:
        "Buggy ou 4x4 privativo são os mais indicados para famílias, pois oferecem mais conforto e segurança.",
    },
  ];

  return (
    <div className="font-sans">

      {/* HERO */}
      <section className="relative w-full h-screen text-white">
        <header className="absolute w-full flex justify-between z-50 px-10 py-4">
          <img src="/logo_jeri4xp.png" className="w-24" />

          <nav className="hidden md:block">
            <ul className="flex gap-10">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <button onClick={() => setIsMenuOpen(true)}>☰</button>
        </header>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-6">
            <button onClick={() => setIsMenuOpen(false)}>X</button>
            {navItems.map((item) => (
              <a key={item.name} href={item.link}>
                {item.name}
              </a>
            ))}
          </div>
        )}

        <img src="/jeri1.webp" className="w-full h-full object-cover" />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black">
            Jeri4xp: Sua conexão com o paraíso
          </h1>

          <a
            href="https://wa.me/5585999001339"
            className="bg-orange-600 px-8 py-4 mt-6 rounded-full"
          >
            Reservar Agora
          </a>
        </div>
      </section>

      {/* VISÃO GERAL */}
      <section id="geralPasseios" className="bg-orange-600 p-10 text-white">
        <h2 className="text-4xl font-bold text-center mb-6">
          Os Passeios Mais Incríveis de Jericoacoara Começam Aqui
        </h2>

        <p className="max-w-3xl mx-auto text-center">
          Jericoacoara é muito mais do que um destino turístico. Cada paisagem
          surpreende e cada dia reserva uma nova experiência. Aqui você encontra
          lagoas cristalinas, dunas e cenários únicos.
        </p>
      </section>

      {/* VEÍCULOS */}
      <section id="veiculos" className="p-10">
        <h2 className="text-4xl text-center mb-10">
          Escolha Como Explorar Jeri
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {vehicleTypes.map((v) => (
            <div key={v.name} className="border p-6 text-center rounded-xl">
              <div className="text-4xl">{v.icon}</div>
              <h3 className="font-bold mt-4">{v.name}</h3>
              <p>{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PASSEIOS */}
      <section id="passeios" className="bg-orange-600 text-white p-10">
        <h2 className="text-4xl mb-6 text-center">
          Passeios Incríveis em Jeri
        </h2>

        <p className="text-center max-w-2xl mx-auto">
          Explore lagoas, dunas e paisagens únicas com roteiros completos e
          experiências inesquecíveis.
        </p>
      </section>

      {/* FAQ */}
      <section id="duvidaPasseio" className="p-10">
        <h2 className="text-4xl text-center mb-8">
          Dúvidas Frequentes
        </h2>

        {faqs.map((faq, i) => (
          <div key={i} className="border p-4 mb-4">
            <button
              onClick={() =>
                setExpandedFaq(expandedFaq === i ? null : i)
              }
            >
              {faq.question}
            </button>

            {expandedFaq === i && <p>{faq.answer}</p>}
          </div>
        ))}
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-orange-600 text-white p-10 text-center">
        <h2 className="text-4xl mb-6">
          Prepare sua próxima aventura em Jeri
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <a href="https://wa.me/5585999001339">WhatsApp</a>
          <a href="https://instagram.com/jeri4xp">Instagram</a>
          <a href="mailto:jeri4xp@gmail.com">Email</a>
        </div>
      </section>

      {/* BOTÃO WHATSAPP FIXO */}
      <a
        href="https://wa.me/5585999001339"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full"
      >
        Whats
      </a>
    </div>
  );
}
