import { Image } from '@/components/ui/image';
import { useState } from "react";

export default function HospedagemPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const navItems = [
    { name: "Visão Geral", link: "#geralHospedagem" },
    { name: "Onde se Hospedar", link: "#localizacoes" },
    { name: "Tipos", link: "#tipos" },
    { name: "Galeria", link: "#galeria" },
    { name: "Dúvidas", link: "#duvidaHospedagem" },
    { name: "Contato", link: "#contato" },
  ];

  const faqs = [
    {
      question: "Qual a melhor região para se hospedar em Jericoacoara?",
      answer:
        "A melhor região é próxima ao centrinho da vila, pois oferece fácil acesso à praia, restaurantes, comércio e aos passeios.",
    },
    {
      question: "É melhor ficar em pousada ou hotel?",
      answer:
        "Depende do seu perfil. Pousadas são mais aconchegantes, enquanto hotéis oferecem mais estrutura e comodidades.",
    },
    {
      question: "Preciso reservar com antecedência?",
      answer:
        "Sim, principalmente em alta temporada. Reservar antes garante melhores preços e localização.",
    },
    {
      question: "Existem opções para famílias?",
      answer:
        "Sim, há hospedagens com quartos amplos e estrutura completa para famílias.",
    },
    {
      question: "Fica perto dos passeios?",
      answer:
        "Sim, a maioria das hospedagens está próxima aos pontos de saída dos passeios.",
    },
  ];

  return (
    <div className="font-sans">

      {/* HERO */}
      <section className="relative h-screen text-white">
        <Image src="/jeri1.webp" className="absolute w-full h-full object-cover opacity-80" />

        <header className="absolute w-full flex justify-between px-10 py-4 z-50">
          <Image src="/logo_jeri4xp.png" className="w-24" />

          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="hover:text-orange-600">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-3xl">
            ☰
          </button>
        </header>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-6 z-50">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-10 text-4xl">x</button>
            {navItems.map((item) => (
              <a key={item.name} href={item.link} className="text-2xl">
                {item.name}
              </a>
            ))}
          </div>
        )}

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <span className="text-orange-600 mb-2">
            Bem-vindo ao Destino Nº 1 do Ceará
          </span>

          <h1 className="text-4xl md:text-6xl font-black italic mb-4">
            Jeri4xp: Sua conexão <br /> com o paraíso
          </h1>

          <p className="max-w-xl mb-6">
            Descubra as melhores opções de hospedagem para aproveitar Jericoacoara com conforto, praticidade e experiências inesquecíveis.
          </p>

          <a
            href="https://wa.me/5585999001339"
            className="bg-orange-600 px-8 py-4 rounded-full hover:bg-white hover:text-orange-600 transition"
          >
            Reservar Agora
          </a>
        </div>
      </section>

      {/* INTRO */}
<section id="geralHospedagem" className="bg-orange-600 min-h-screen p-8 flex items-center justify-center font-sans">
    <div className="w-full max-w-5xl p-8 bg-white rounded-4xl shadow-2xl mx-auto text-slate-800">
      <div className="flex justify-center mb-4">
        <div className="w-18 h-1 bg-orange-600 rounded-full"></div>
      </div>

      <h1 className="text-2xl md:text-5xl font-extrabold text-center mb-8">
        Encontre a Hospedagem Ideal para Aproveitar <span className="text-orange-600">Jericoacoara</span>
      </h1>

      <div className="border-l-4 border-orange-600 pl-6">
        <div className="space-y-4 text-md md:text-lg">

          <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-orange-600 first-letter:mr-1 first-letter:float-left">
            Hospedar-se bem faz toda a diferença para aproveitar Jericoacoara com mais conforto,
            praticidade e tranquilidade. A vila oferece opções para todos os estilos de viagem, desde pousadas
            aconchegantes até hotéis com estrutura completa, sempre cercados pela beleza natural da região.
          </p>

          <p>
            Para quem busca praticidade, ficar próximo ao centrinho é uma ótima escolha. Assim, você terá fácil
            acesso a restaurantes, lojas, praia, vida noturna e aos principais pontos de saída dos passeios,
            tornando sua experiência muito mais confortável durante toda a estadia.
          </p>

          <p>
            Se a ideia for relaxar e aproveitar momentos especiais, há opções mais reservadas e tranquilas,
            perfeitas para casais, famílias ou quem deseja descansar com mais privacidade. Também existem
            hospedagens com piscina, café da manhã, espaços amplos e serviços pensados para tornar sua viagem
            ainda melhor.
          </p>

          <p>
            Seja para uma viagem romântica, em família ou entre amigos, escolher a hospedagem certa é o primeiro
            passo para viver Jericoacoara da melhor forma. A seguir, você vai encontrar opções que combinam com
            seu perfil e tornam sua experiência ainda mais inesquecível.
          </p>

        </div>
      </div>

    </div>

  </section>

      {/* TIPOS */}
      <section id="tipos" className="p-10 text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-6">
          Tipos de hospedagem
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Pousadas Econômicas",
              desc: "Conforto e ótimo custo-benefício perto do centro.",
            },
            {
              title: "Casais",
              desc: "Ambientes românticos e aconchegantes.",
            },
            {
              title: "Famílias",
              desc: "Estrutura completa para grupos e crianças.",
            },
            {
              title: "Resorts",
              desc: "Experiência premium com mais conforto.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-orange-600 text-white p-6 rounded-xl">
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOCALIZAÇÕES */}
      <section id="localizacoes" className="p-10 text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-6">
          Onde se hospedar
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-orange-600 text-white p-6 rounded-xl">
            <h3 className="font-bold">Jericoacoara</h3>
            <p>Perto de tudo: praia, restaurantes e vida noturna.</p>
          </div>

          <div className="bg-orange-600 text-white p-6 rounded-xl">
            <h3 className="font-bold">Preá</h3>
            <p>Mais tranquilo, perfeito para natureza e esportes.</p>
          </div>

          <div className="bg-orange-600 text-white p-6 rounded-xl">
            <h3 className="font-bold">Tatajuba</h3>
            <p>Experiência exclusiva com paisagens naturais únicas.</p>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="bg-orange-600 p-10 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Inspire-se para sua estadia
        </h2>

        <p className="mb-8">
          Veja ambientes incríveis e imagine sua experiência em Jericoacoara.
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          {Array(6).fill(0).map((_, i) => (
            <Image key={i} src="/logo_jeri4xp.png" className="rounded-xl" />
          ))}
        </div>

        <a
          href="https://wa.me/5585999001339"
          className="inline-block mt-10 bg-white text-orange-600 px-8 py-4 rounded-full font-bold"
        >
          Falar com especialista
        </a>
      </section>

      {/* FAQ */}
      <section id="duvidaHospedagem" className="p-10 text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-6">
          Dúvidas Frequentes
        </h2>

        {faqs.map((faq, i) => (
          <div key={i} className="border p-4 mb-3 rounded">
            <button
              onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
              className="font-bold"
            >
              {faq.question}
            </button>

            {expandedFaq === i && <p className="mt-2">{faq.answer}</p>}
          </div>
        ))}
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-orange-600 text-white p-10 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Prepare sua próxima experiência em Jericoacoara
        </h2>

        <p className="mb-2">WhatsApp: 85 9 9900-1339</p>
        <p className="mb-2">Instagram: @jeri4xp</p>
        <p className="mb-2">Email: jeri4xp@gmail.com</p>

        <p className="mt-10">Jericoacoara • Ceará • Brasil</p>
      </section>

    </div>
  );
}
