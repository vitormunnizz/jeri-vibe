import { images } from '@/assets/images';
import { Image } from '@/components/ui/image';
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function TransferPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const navItems = [
    { name: "Trajetos", link: "#trajetos" },
    { name: "Dúvidas", link: "#duvidas" },
    { name: "Contato", link: "#contato" },
  ];

  const faqs = [
    {
      question: "Como funciona o transfer de Fortaleza para Jericoacoara?",
      answer:
        "O transfer de Fortaleza para Jericoacoara busca o passageiro no aeroporto, hotel ou endereço combinado e segue até Jeri com conforto e segurança. O trajeto inclui veículos 4x4 apropriados para a região e é uma das formas mais práticas para quem busca como chegar em Jericoacoara saindo de Fortaleza.",
    },
    {
      question: "Quanto tempo dura o transfer de Fortaleza para Jericoacoara?",
      answer:
        "O transfer entre Fortaleza e Jericoacoara dura, em média, entre 5h e 6h, dependendo do trânsito e horário. Esse é um dos trajetos mais procurados por turistas que desejam chegar a Jericoacoara com comodidade e sem preocupação.",
    },
    {
      question: "Existe transfer do aeroporto de Jericoacoara para o centro de Jeri?",
      answer:
        "Sim. O transfer do aeroporto de Jericoacoara até a vila é uma opção rápida e segura para quem chega de avião. O serviço leva o passageiro diretamente até a hospedagem, evitando filas e facilitando a chegada ao destino.",
    },
    {
      question: "Como ir de Jericoacoara para Barreirinhas?",
      answer:
        "O transfer entre Jericoacoara e Barreirinhas é muito procurado por quem faz a rota turística entre o Ceará e os Lençóis Maranhenses. O percurso é realizado por veículos preparados para viagens longas, garantindo conforto durante todo o trajeto.",
    },
    {
      question: "O transfer é compartilhado ou privativo? Tem transfer todo dia?",
      answer:
        "Existem as duas opções. O compartilhado é mais econômico, enquanto o privativo oferece mais conforto, flexibilidade de horários e exclusividade. Sim, os transfers operam diariamente, com horários programados. É importante reservar com antecedência para garantir disponibilidade.",
    },
  ];

  return (
    <div className="font-sans">

      {/* HERO */}
      <section className="min-h-screen w-full text-white relative overflow-hidden">
        <header className="absolute w-full flex justify-between px-6 md:px-10 py-4 z-50 items-center">
          <Image src={images.logo} alt="Logo Jeri4xp" className="w-20 md:w-24" />

          <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wider">
            {navItems.map((item) => (
              <a key={item.name} href={item.link} className="hover:text-orange-600 transition">
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
                className="text-xl font-black hover:text-orange-600"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}

        <Image src={images.hero} className="absolute w-full h-full object-cover opacity-80" alt="Hero background" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="text-orange-600 mb-2 uppercase tracking-widest text-xs md:text-sm">
            Transfers privativos e compartilhados entre Fortaleza, Aeroporto, Jericoacoara e Barreirinhas com atendimento rápido e reserva antecipada.
          </span>

          <h1 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-6">
            Como Chegar em Jericoacoara com <br /> Transfer Seguro e Confortável
          </h1>

          <a
            href="https://wa.me/5585999001339"
            target="_blank"
            rel="noreferrer"
            className="bg-orange-600 px-8 py-3 rounded-full text-xs font-bold hover:bg-white hover:text-orange-600 transition-all"
          >
            Reservar Agora
          </a>
        </div>
      </section>

      {/* TRAJETOS */}
      <section id="trajetos" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col items-center mb-12 text-center">
            <span className="uppercase tracking-widest text-xs font-bold mb-2 text-orange-600">
              Nossas Rotas
            </span>
            <h2 className="text-3xl md:text-4xl font-black">
              Sua chegada em Jeri começa aqui
            </h2>
            <div className="h-1 w-20 bg-orange-600 mt-4 rounded-full"></div>
          </div>

          <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">
            Saídas confortáveis de Fortaleza e do Aeroporto de Cruz para você viajar com tranquilidade do início ao fim.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* FORTALEZA */}
            <div className="bg-white border-2 border-orange-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <span className="bg-orange-100 text-orange-600 px-4 py-2 text-xs font-bold rounded-full inline-block mb-4">
                MAIS POPULAR
              </span>

              <Image src={images.transferFortaleza} alt="Fortaleza Transfer" className="w-full h-48 object-cover rounded-xl mb-6" />

              <h3 className="text-2xl font-black text-gray-900 mb-3">
                Fortaleza → Jericoacoara
              </h3>

              <p className="text-gray-600 mb-6">
                Transfer completo saindo de Fortaleza com conforto, segurança e praticidade até a vila.
              </p>

              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-orange-600 font-bold">✓</span> Saída do hotel ou aeroporto
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600 font-bold">✓</span> Duração média de 5 a 6 horas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600 font-bold">✓</span> Travessia em 4x4 incluída
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600 font-bold">✓</span> Opção compartilhada ou privada
                </li>
              </ul>

              <a
                href="https://wa.me/5585999001339?text=Olá! Quero reservar o transfer de Fortaleza para Jericoacoara."
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-orange-600 text-white py-3 text-center rounded-xl font-bold hover:bg-orange-700 transition"
              >
                Reservar via WhatsApp
              </a>
            </div>

            {/* CRUZ */}
            <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <span className="text-gray-400 text-xs font-bold uppercase mb-4 inline-block">
                MAIS RÁPIDO
              </span>

              <Image src={images.transferCruz} alt="Aeroporto Cruz Transfer" className="w-full h-48 object-cover rounded-xl mb-6" />

              <h3 className="text-2xl font-black text-gray-900 mb-3">
                Aeroporto de Cruz → Jericoacoara
              </h3>

              <p className="text-gray-600 mb-6">
                Chegue em Jeri com rapidez, conforto e total comodidade saindo direto do aeroporto.
              </p>

              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-orange-600 font-bold">✓</span> Saída direto do aeroporto
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600 font-bold">✓</span> Duração média de 1h a 1h30
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600 font-bold">✓</span> Percurso em veículo 4x4
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600 font-bold">✓</span> Mais rapidez e comodidade
                </li>
              </ul>

              <a
                href="https://wa.me/5585999001339?text=Olá! Quero reservar o transfer do Aeroporto de Cruz para Jericoacoara."
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-gray-900 text-white py-3 text-center rounded-xl font-bold hover:bg-gray-800 transition"
              >
                Reservar via WhatsApp
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidas" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">

          <div className="flex flex-col items-center mb-12 text-center">
            <span className="uppercase tracking-widest text-xs font-bold mb-2 text-orange-600">
              Informações
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Dúvidas Frequentes
            </h2>
            <div className="h-1 w-20 bg-orange-600 mt-4 rounded-full"></div>
          </div>

          <p className="text-center text-gray-600 mb-10">
            Tire suas principais dúvidas antes de reservar.
          </p>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border-2 border-gray-200 p-6 rounded-xl bg-white hover:border-orange-600 transition">
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full text-left font-bold text-gray-900 flex justify-between items-center"
                >
                  <span>{faq.question}</span>
                  <span className="text-orange-600 text-xl">
                    {expandedFaq === index ? '−' : '+'}
                  </span>
                </button>

                {expandedFaq === index && (
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 px-6 bg-orange-600">
        <div className="max-w-5xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-white font-bold mb-3">
              Fale com a gente
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Prepare sua próxima aventura em Jeri
            </h2>
          </div>

          {/* CONTACT CARDS */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/5585999001339"
              target="_blank"
              rel="noreferrer"
              className="bg-orange-600 hover:bg-white border border-white p-8 rounded-3xl transition flex flex-col items-center justify-center text-center text-white hover:text-orange-600"
            >
              <h3 className="text-lg font-black mb-2">WhatsApp</h3>
              <p className="font-bold text-base mb-1">(85) 9 9900-1339</p>
              <p className="text-xs uppercase tracking-widest">Clique para conversar</p>
            </a>

            {/* Instagram Card */}
            <a
              href="https://instagram.com/jeri4xp"
              target="_blank"
              rel="noreferrer"
              className="bg-orange-600 hover:bg-white border border-white p-8 rounded-3xl transition flex flex-col items-center justify-center text-center text-white hover:text-orange-600"
            >
              <h3 className="text-lg font-black mb-2">Instagram</h3>
              <p className="font-bold text-base mb-1">@jeri4xp</p>
              <p className="text-xs uppercase tracking-widest">Acompanhe as aventuras</p>
            </a>

            {/* E-mail Card */}
            <a
              href="mailto:jeri4xp@gmail.com"
              className="bg-orange-600 hover:bg-white border border-white p-8 rounded-3xl transition flex flex-col items-center justify-center text-center text-white hover:text-orange-600"
            >
              <h3 className="text-lg font-black mb-2">E-mail</h3>
              <p className="font-bold text-base mb-1">jeri4xp@gmail.com</p>
              <p className="text-xs uppercase tracking-widest">Envie sua mensagem</p>
            </a>
          </div>

          {/* LOCATION */}
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-white font-bold">
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
