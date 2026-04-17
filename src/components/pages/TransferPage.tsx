import { useState } from "react";

export default function Transfer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const navItems = [
    { name: "Trajetos", link: "#trajetos" },
    { name: "Dúvidas", link: "#duvidaTranfer" },
    { name: "Contato", link: "#contato" },
  ];

  const faqs = [
    {
      question: "Como funciona o transfer até Jericoacoara?",
      answer:
        "O transfer é feito em duas etapas: primeiro por estrada asfaltada até Jijoca, e depois em veículos 4x4 pelas dunas até a vila de Jericoacoara.",
    },
    {
      question: "Quanto tempo dura o transfer até Jericoacoara?",
      answer:
        "O trajeto dura em média de 5 a 6 horas saindo de Fortaleza e cerca de 1 hora saindo do Aeroporto de Cruz.",
    },
    {
      question: "O transfer busca no hotel ou aeroporto?",
      answer:
        "Sim, o serviço geralmente inclui busca no hotel em Fortaleza ou diretamente no aeroporto, oferecendo mais comodidade para o viajante.",
    },
    {
      question: "O transfer é compartilhado ou privativo?",
      answer:
        "Existem as duas opções. O compartilhado é mais econômico, enquanto o privativo oferece mais conforto, flexibilidade de horários e exclusividade.",
    },
    {
      question: "O transfer funciona todos os dias?",
      answer:
        "Sim, os transfers operam diariamente, com horários programados. É importante reservar com antecedência para garantir disponibilidade.",
    },
  ];

  return (
    <div className="font-sans">

      {/* HERO */}
      <section className="min-h-screen w-full text-white relative">
        <header className="absolute w-full flex justify-between px-10 py-4 z-50 items-center">
          <img src="/logo_jeri4xp.png" className="w-24" />

          <nav className="hidden md:flex gap-10 text-lg uppercase font-bold">
            {navItems.map((item) => (
              <a key={item.name} href={item.link} className="hover:text-orange-600">
                {item.name}
              </a>
            ))}
          </nav>

          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-3xl">
            ☰
          </button>
        </header>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 z-50">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-4xl">
              x
            </button>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-bold hover:text-orange-600"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}

        <img src="/jeri1.webp" className="absolute w-full h-full object-cover opacity-85" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-orange-600 mb-2">Bem-vindo ao Destino Nº 1</span>

          <h1 className="text-4xl md:text-6xl font-black italic mb-4">
            Jeri4xp: Sua conexão <br /> com o paraíso.
          </h1>

          <a
            href="https://wa.me/5585999001339"
            target="_blank"
            className="bg-orange-600 px-10 py-4 rounded-full text-xs hover:bg-white hover:text-orange-600"
          >
            Reservar Agora
          </a>
        </div>
      </section>

      {/* FOOTER TEXTO */}
      <footer className="p-10 text-center">
        <h2 className="text-2xl font-bold">
          Transfer seguro e confortável para Jericoacoara
        </h2>

        <p className="mt-4 text-gray-600 italic max-w-2xl mx-auto">
          Viaje com tranquilidade do aeroporto ou hotel até Jeri, com motoristas experientes, veículos preparados e atendimento de confiança.
        </p>
      </footer>

      {/* TRAJETOS */}
      <section id="trajetos" className="bg-orange-600 py-16 min-h-screen px-4 text-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
            Sua chegada em Jeri começa aqui
          </h2>

          <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
            Saídas confortáveis de Fortaleza e do Aeroporto de Cruz para você viajar com tranquilidade do início ao fim.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* FORTALEZA */}
            <div className="bg-white text-gray-800 p-6 rounded-2xl shadow">
              <span className="bg-orange-100 text-orange-600 px-3 py-1 text-xs rounded-full">
                MAIS POPULAR
              </span>

              <h3 className="text-2xl font-bold mt-4">
                Fortaleza → Jericoacoara
              </h3>

              <p className="mt-4">
                Transfer completo saindo de Fortaleza com conforto, segurança e praticidade até a vila.
              </p>

              <ul className="mt-4 space-y-2">
                <li>🚐 Saída do hotel ou aeroporto</li>
                <li>⏱️ Duração média de 5 a 6 horas</li>
                <li>🏜️ Travessia em 4x4 incluída</li>
                <li>👥 Opção compartilhada ou privada</li>
              </ul>

              <a
                href="https://wa.me/5588999999999?text=Olá! Quero reservar o transfer de Fortaleza para Jericoacoara."
                target="_blank"
                className="block mt-6 bg-orange-600 text-white py-3 text-center rounded-xl"
              >
                Reservar via WhatsApp
              </a>
            </div>

            {/* CRUZ */}
            <div className="bg-white text-gray-800 p-6 rounded-2xl shadow">
              <h3 className="text-2xl font-bold">
                Aeroporto de Cruz → Jericoacoara
              </h3>

              <p className="mt-4">
                Chegue em Jeri com rapidez, conforto e total comodidade saindo direto do aeroporto.
              </p>

              <ul className="mt-4 space-y-2">
                <li>✈️ Saída direto do aeroporto</li>
                <li>⏱️ Duração média de 1h a 1h30</li>
                <li>🏜️ Percurso em veículo 4x4</li>
                <li>🚗 Mais rapidez e comodidade</li>
              </ul>

              <a
                href="https://wa.me/5588999999999?text=Olá! Quero reservar o transfer do Aeroporto de Cruz para Jericoacoara."
                target="_blank"
                className="block mt-6 bg-orange-600 text-white py-3 text-center rounded-xl"
              >
                Reservar via WhatsApp
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidaTranfer" className="bg-white min-h-screen p-6 flex items-center justify-center">
        <div className="max-w-4xl w-full">

          <h2 className="text-4xl font-bold text-center text-orange-600 mb-6">
            Dúvidas Frequentes
          </h2>

          <p className="text-center mb-10">
            Tire suas principais dúvidas antes de reservar.
          </p>

          {faqs.map((faq, index) => (
            <div key={index} className="border p-4 mb-3 rounded-xl">
              <button
                onClick={() =>
                  setExpandedFaq(expandedFaq === index ? null : index)
                }
                className="w-full text-left font-semibold"
              >
                {faq.question}
              </button>

              {expandedFaq === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="min-h-screen flex items-center justify-center bg-orange-600 text-white p-10">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-10">
            Prepare sua próxima aventura em Jeri
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            <a href="https://wa.me/5585999001339">WhatsApp</a>
            <a href="https://instagram.com/jeri4xp">Instagram</a>
            <a href="mailto:jeri4xp@gmail.com">E-mail</a>
          </div>
        </div>
      </section>

    </div>
  );
}
