import { Image } from '@/components/ui/image';
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Passeios() {

  const passeios = [
    {
      badge: "Roteiro Lado Leste",
      titulo: <>Águas <span className="text-slate-800">Cristalinas</span> & Redes no <span className="text-slate-800">Paraíso</span></>,
      descricao: "Das esculturas naturais da Árvore da Preguiça ao mergulho inesquecível no Buraco Azul.",
      texto: [
        "Nosso roteiro começa com a Árvore da Preguiça e segue até a Praia do Preá.",
        "Depois visitamos o Buraco Azul, Lagoa do Paraíso e Lagoa Azul."
      ],
      itens: ['Árvore da Preguiça', 'Lagoa do Paraíso', 'Buraco Azul', 'Lagoa Azul'],
      reverse: false
    },
    {
      badge: "Roteiro Lado Oeste",
      titulo: <>Dunas <span className="text-slate-800">Gigantes</span> & Mangue <span className="text-slate-800">Selvagem</span></>,
      descricao: "Dos cavalos-marinhos no Rio Guriú ao relaxo total nas redes da Lagoa da Torta.",
      texto: [
        "Explore o Rio Guriú e o Mangue Seco.",
        "Finalize nas redes da Lagoa da Torta."
      ],
      itens: ['Mangue Seco', 'Rio Guriú', 'Dunas de Tatajuba', 'Lagoa da Torta'],
      reverse: true
    },
    {
      badge: "Roteiro Extremo Leste",
      titulo: <>Dunas de <span className="text-slate-800">Cristal</span> & Vila de <span className="text-slate-800">Barrinha</span></>,
      descricao: "A beleza intocada da vila de pescadores e o pôr do sol mais espetacular da região.",
      texto: [
        "Conheça a vila de Barrinha e suas dunas gigantes.",
        "Explore a Lagoa do Coração e finalize com experiência gastronômica."
      ],
      itens: ['Vila da Barrinha', 'Lagoa do Coração', 'Dunas Vermelhas', 'Coqueirais'],
      reverse: false
    }
  ];

export default function Jeri4xp() {
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
        "Os passeios mais procurados são o Lado Leste, com paradas na Lagoa do Paraíso e Árvore da Preguiça, e o Lado Oeste, com Tatajuba e travessia de balsa.",
    },
    {
      question: "Quanto tempo dura o passeio?",
      answer:
        "A maioria dos passeios dura entre 6 e 8 horas, dependendo do roteiro escolhido.",
    },
    {
      question: "Preciso reservar com antecedência?",
      answer:
        "Sim, principalmente em alta temporada. Reservar antes garante sua vaga e melhores horários.",
    },
    {
      question: "Passeios para famílias?",
      answer:
        "Buggy ou 4x4 privativo são ideais, pois oferecem mais conforto e segurança.",
    },
    {
      question: "O que levar?",
      answer:
        "Protetor solar, roupa leve, óculos, água e celular carregado para fotos.",
    },
  ];

  return (
    <div className="font-sans">

      {/* HERO */}
      <section className="relative h-screen text-white">
        <Image src="/jeri1.webp" className="absolute w-full h-full object-cover opacity-80" />

        <header className="absolute w-full flex justify-between px-10 py-5 z-50">
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
          <h1 className="text-5xl font-black my-4">
            Jeri4xp: Sua conexão <br /> com o paraíso.
          </h1>
          <a
            href="https://wa.me/5585999001339"
            className="bg-orange-600 px-8 py-4 rounded-full"
          >
            Reservar Agora
          </a>
        </div>
      </section>

      {/* VISÃO GERAL */}
      <section id="geralPasseios" className="bg-orange-600 p-10 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Os Passeios Mais Incríveis de Jericoacoara Começam Aqui
        </h2>

        <div className="border-l-4 border-orange-600 pl-6">
          <div className="space-y-4 text-md md:text-lg">

            <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-orange-600 first-letter:mr-1 first-letter:float-left">
              Jericoacoara é muito mais do que um destino turístico é onde cada paisagem
              surpreende e cada dia reserva uma nova experiência. Para realmente viver tudo o que Jeri
              tem a oferecer, os passeios são parte essencial da viagem, permitindo explorar desde os
              cenários mais famosos até cantos que só quem conhece a região sabe chegar.
            </p>

            <p>
              Ao longo desses roteiros, você vai se deparar com lagoas de águas cristalinas, dunas
              imponentes, travessias entre mangues e vistas que transformam qualquer momento em algo
              memorável. Tudo isso com o suporte de quem entende da região, garantindo mais segurança,
              conforto e uma experiência muito mais completa.
            </p>

            <p>
              Cada passeio oferece uma proposta diferente: alguns são perfeitos para relaxar e aproveitar
              a tranquilidade das lagoas, enquanto outros são ideais para quem busca emoção e aventura
              nas dunas. Essa variedade faz com que cada escolha traga uma nova forma de conhecer
              Jericoacoara.
            </p>

            <p>
              A seguir, você vai encontrar os principais passeios disponíveis, com todos os detalhes
              necessários para escolher a experiência ideal para o seu perfil e transformar sua viagem
              em algo verdadeiramente inesquecível.
            </p>

          </div>
          </div>
      </section>

      {/* VEÍCULOS */}
      <section id="veiculos" className="p-10 text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-6">
          Escolha Como Você Quer Explorar Jeri
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {vehicleTypes.map((v) => (
            <div key={v.name} className="p-6 border rounded-xl">
              <div className="text-4xl">{v.icon}</div>
              <h3 className="font-bold text-orange-600">{v.name}</h3>
              <p>{v.description}</p>
            </div>
          ))}
        </div>
      </section>

 return (
    <Swiper
      modules={[Navigation]}
      navigation
      loop={true}
      className="w-full"
    >
      {passeios.map((passeio, index) => (
        <SwiperSlide key={index}>

          <section className="relative bg-orange-600 min-h-screen w-full p-4 flex flex-col items-center justify-center">

            {/* HEADER */}
            <div className="text-center mb-8 z-10">
              <span className="inline-block px-5 py-1.5 rounded-full bg-white text-orange-600 text-sm font-black uppercase tracking-widest shadow-lg">
                {passeio.badge}
              </span>

              <h2 className="text-white text-4xl md:text-5xl font-black mt-3">
                {passeio.titulo}
              </h2>

              <p className="text-white mt-3 max-w-xl mx-auto">
                {passeio.descricao}
              </p>
            </div>

            {/* CARD */}
            <div className="max-w-5xl w-full">
              <div className={`bg-white rounded-3xl shadow-2xl flex flex-col ${passeio.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                {/* IMAGEM */}
                <div className="md:w-5/12 relative min-h-64">
                  <img
                    src="/assets/jeri1.webp"
                    alt="Passeio"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* TEXTO */}
                <div className="md:w-7/12 p-8 flex flex-col justify-center">

                  <h3 className="text-2xl md:text-3xl font-black mb-4 text-slate-800">
                    O que esperar deste <span className="text-orange-600">Passeio</span>
                  </h3>

                  <div className="text-slate-600 space-y-4 mb-6">
                    {passeio.texto.map((t, i) => (
                      <p key={i}>{t}</p>
                    ))}
                  </div>

                  {/* LISTA */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {passeio.itens.map(item => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="text-orange-600">📍</span>
                        <span className="font-bold text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 border-t">
                    <a
                      href="https://wa.me/5585999001339"
                      target="_blank"
                      className="bg-orange-600 hover:bg-slate-800 text-white font-black px-8 py-4 rounded-xl transition w-full sm:w-auto text-center"
                    >
                      Reservar agora
                    </a>

                    <div className="text-center sm:text-left">
                      <span className="text-xs font-bold text-orange-600 block">
                        Disponibilidade
                      </span>
                      <span className="text-sm font-black text-slate-800">
                        Saídas Diárias
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </section>

        </SwiperSlide>
      ))}
    </Swiper>
  );
      {/* FAQ */}
      <section id="duvidaPasseio" className="p-10 text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">
          Dúvidas Frequentes
        </h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border p-4 mb-3 rounded-lg">
              <button
                onClick={() =>
                  setExpandedFaq(expandedFaq === index ? null : index)
                }
                className="font-bold"
              >
                {faq.question}
              </button>

              {expandedFaq === index && <p className="mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-orange-600 text-white p-10 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Prepare sua próxima aventura em Jeri
        </h2>

        <p className="mb-4">WhatsApp: 85 9 9900-1339</p>
        <p className="mb-4">Instagram: @jeri4xp</p>
        <p className="mb-4">Email: jeri4xp@gmail.com</p>

        <p className="mt-10">Jericoacoara • Ceará • Brasil</p>
      </section>
    </div>
  );
}
