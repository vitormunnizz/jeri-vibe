import { Image } from '@/components/ui/image';
import { useState } from "react";

export default function HospedagemPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const navItems = [
    { name: "Visão Geral", link: "#geralHospedagem" },
    { name: "Onde se Hospedar", link: "#localizacoes" },
    { name: "Tipos de Hospedagem", link: "#tipos" },
    { name: "Galeria", link: "#galeria" },
    { name: "Dúvidas", link: "#duvidaHospedagem" },
    { name: "Contato", link: "#contato" },
  ];

  const faqs = [
    {
      question: "Qual a melhor região para se hospedar em Jericoacoara?",
      answer:
        "O ideal é ficar próximo ao centrinho da vila para ter fácil acesso a restaurantes, lojas, praia e vida noturna.",
    },
    {
      question: "É melhor ficar em pousada ou hotel?",
      answer:
        "Pousadas são mais aconchegantes, enquanto hotéis oferecem mais estrutura.",
    },
    {
      question: "Preciso reservar com antecedência?",
      answer:
        "Sim, principalmente em alta temporada para garantir melhores opções.",
    },
    {
      question: "Tem hospedagem para famílias?",
      answer:
        "Sim, existem diversas opções com quartos amplos e estrutura completa.",
    },
    {
      question: "Fica perto dos passeios?",
      answer:
        "Sim, a maioria das hospedagens tem fácil acesso aos passeios.",
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

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <span className="text-orange-600">Bem-vindo ao Destino Nº 1</span>

          <h1 className="text-5xl font-black italic my-4">
            Jeri4xp: Sua conexão <br /> com o paraíso.
          </h1>

          <a href="https://wa.me/5585999001339"
            className="bg-orange-600 px-8 py-4 rounded-full">
            Reservar Agora
          </a>
        </div>
      </section>

      {/* VISÃO GERAL */}
      <section id="geralHospedagem" className="bg-orange-600 min-h-screen p-8 flex items-center justify-center">
        <div className="max-w-5xl bg-white p-8 rounded-3xl text-slate-800">

          <h1 className="text-4xl font-bold text-center mb-6">
            Encontre a Hospedagem Ideal para Aproveitar{" "}
            <span className="text-orange-600">Jericoacoara</span>
          </h1>

          <p className="mb-4">
            Hospedar-se bem faz toda a diferença para aproveitar Jericoacoara com conforto e tranquilidade.
          </p>

          <p>
            Seja para viagem romântica, em família ou amigos, escolha a melhor opção para sua experiência.
          </p>
        </div>
      </section>

      {/* TIPOS */}
      <section id="tipos" className="p-10 text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-6">
          Tipos de hospedagem
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {["🏡 Pousadas", "💑 Casais", "👨‍👩‍👧‍👦 Famílias", "✨ Resorts"].map((item) => (
            <div key={item} className="bg-orange-600 text-white p-6 rounded-xl">
              {item}
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
            Jericoacoara
          </div>
          <div className="bg-orange-600 text-white p-6 rounded-xl">
            Preá
          </div>
          <div className="bg-orange-600 text-white p-6 rounded-xl">
            Tatajuba
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="bg-orange-600 p-10 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Galeria</h2>

        <div className="grid md:grid-cols-4 gap-4">
          {Array(6).fill(0).map((_, i) => (
            <Image key={i} src="/logo_jeri4xp.png" className="rounded-xl" />
          ))}
        </div>
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
          Prepare sua próxima aventura em Jeri
        </h2>

        <p>WhatsApp: 85 9 9900-1339</p>
        <p>Instagram: @jeri4xp</p>
        <p>Email: jeri4xp@gmail.com</p>

        <p className="mt-10">Jericoacoara • Ceará • Brasil</p>
      </section>

    </div>
  );
}
