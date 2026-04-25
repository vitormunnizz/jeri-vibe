import { images } from '@/assets/images';
import { Image } from '@/components/ui/image';
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function PasseiosPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const navItems = [
    { name: "Visão Geral", link: "#geralPasseios" },
    { name: "Veículos", link: "#veiculos" },
    { name: "Passeios", link: "#passeios" },
    { name: "Dúvidas", link: "#duvidaPasseio" },
    { name: "Contato", link: "#contato" },
  ];

const passeios = [
  {
    badge: "Roteiro Lado Leste",
    titulo: "Águas Cristalinas & Redes no Paraíso",
    descricao: "Ideal para quem busca o que fazer em Jericoacoara com conforto e paisagens incríveis.",
    image: images.PasseiosLeste,
    texto: [
      "Nosso roteiro começa com a Árvore da Preguiça e segue até a Praia",
      "do Preá. Depois visitamos o Buraco Azul, Lagun Beach, Lagoa do Paraíso,",
      "Lagoa Azul e Lagoa do Amâncio."
    ],
    itens: ['Árvore da Preguiça', 'Praia do Preá', 'Buraco Azul', 'Lagun Beach', 'Lagoa do Paraíso', 'Lagoa Azul', 'Lagoa do Amâncio'],
  },
  {
    badge: "Roteiro Lado Oeste",
    titulo: "Dunas Gigantes & Mangue Selvagem",
    descricao: "Dos cavalos-marinhos no Rio Guriú ao relaxo total nas redes do Lago Grande.",
    image: images.PasseiosOeste,
    texto: [
      "Explore o Rio Guriú e aventurisse com off-road nas Dunas de Tatajuba.",
      "Finalize nas redes do Lago Grande. Ideal para explorar um lado diferente",
      "dos passeios em Jericoacoara."
    ],
    itens: ['Passeio Ecológico', 'Trilha do Mangue Seco', 'Dunas de Tatajuba', 'Toboágua', 'Tiroleza', 'Lago Grande'],
  },
  {
    badge: "Roteiro Extremo Leste",
    titulo: "Praia de Barrinha & Dunas de Cristal",
    descricao: "A beleza intocada da vila de pescadores e o pôr do sol mais espetacular da região.",
    image: images.PasseiosExtremo,
    texto: [
      "Conheça a vila de Barrinha e suas dunas paradisíacas.",
      "Explore a Praia da Barrinha e finalize com experiência gastronômica."
    ],
    itens: ['Beira dágua Beach Clube', 'Praia de Barrinha', 'Dunas da Barrinha'],
  }
];

  const vehicleTypes = [
    {
      name: "Buggy",
      description: "O buggy é a opção mais procurada em Jericoacoara, ideal para quem busca conforto, segurança e praticidade. O passeio é feito com motorista experiente, permitindo que você aproveite o visual sem se preocupar em dirigir.",
    },
    {
      name: "Quadriciclo",
      description: "O quadriciclo é perfeito para quem quer uma experiência mais aventureira, pois você mesmo pilota o veículo, seguindo um guia durante todo o trajeto. É uma forma divertida e dinâmica de explorar os cenários de Jeri.",
    },
    {
      name: "UTV",
      description: "O UTV combina aventura com conforto. Você também pilota, mas com mais controle e comodidade, ideal para quem quer emoção sem abrir mão de segurança.",
    },
    {
      name: "Jardineira 4x4",
      description: "A jardineira é um veículo maior, usado para grupos, oferecendo uma experiência mais econômica e compartilhada. É uma ótima opção para quem quer conhecer os pontos turísticos gastando menos.",
    },
  ];

  const faqs = [
    {
      question: "Quais são os principais passeios em Jericoacoara?",
      answer: "Os passeios mais procurados em Jericoacoara são o lado leste e lado oeste, que reúnem os principais pontos turísticos da região. No lado leste você visita a famosa Lagoa do Paraíso, Lagoa Azul e alguns Beach Clubes na praia do Preá. Já no lado oeste, o roteiro é de aventura, com cenários de praia e dunas imponentes que garantem a diversão e adrenalina. São experiências imperdíveis para quem busca o que fazer em Jericoacoara.",
    },
    {
      question: "Qual é melhor: lado leste ou oeste em Jericoacoara?",
      answer: "O lado leste é o mais famoso, ideal para quem quer lagoas cristalinas e relaxar em redes dentro d'água. Já o lado oeste é mais rústico e exclusivo, tendo como principal atração as dunas e experiências diferentes do tradicional, ideal para quem gosta de aventura. Se quiser viver o melhor dos passeios em Jericoacoara, o ideal é fazer os dois roteiros.",
    },
    {
      question: "Vale mais a pena buggy ou quadriciclo em Jericoacoara?",
      answer: "Se você quer conforto e tranquilidade, o buggy com motorista é a melhor escolha. Agora, se prefere aventura, o quadriciclo é pilotado por você, seguindo um guia. Ambos são muito procurados, e a decisão depende do tipo de experiência que você quer viver em Jericoacoara.",
    },
    {
      question: "Quanto custa um passeio de buggy em Jericoacoara?",
      answer: "O passeio de buggy em Jericoacoara tem um excelente custo-benefício, pois o valor pode ser dividido por até 4 pessoas. Os preços variam conforme o roteiro e duração, mas é uma das opções mais buscadas por oferecer conforto, segurança e motorista experiente. Entre todos, é o passeio mais escolhido por quem visita Jeri.",
    },
    {
      question: "O que está incluso nos passeios em Jericoacoara?",
      answer: "Os passeios incluem transporte, guia experiente e paradas nos principais pontos turísticos. Durante o trajeto, você terá tempo para fotos, banho nas lagoas e parada para almoço (não incluso). É a forma mais prática e segura de aproveitar ao máximo os passeios em Jericoacoara.",
    },
  ];

  return (
    <div className="font-sans">
      {/* HERO */}
      <section className="min-h-screen w-full text-white relative overflow-hidden">
        <header className="absolute w-full flex justify-between px-6 md:px-10 py-4 z-50 items-center">
          <a href="/"><Image src={images.logo} alt="Logo Jeri4xp" className="w-20 md:w-24" /></a>

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

        <Image src={images.hero} className="absolute w-full h-full object-cover opacity-80" alt="Hero background" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h1 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-6 text-shadow-md">
            Os melhores passeios em Jericoacoara com conforto e segurança
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
      <section id="geralPasseios" className="bg-orange-600 py-20 px-6 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="uppercase tracking-widest text-xs font-bold mb-2">			Descubra a Vila
            </span>
            <h2 className="text-3xl md:text-4xl font-black">
              Os Passeios Mais Incríveis de Jericoacoara Começam Aqui                                                                                                  	</h2>
            <div className="h-1 w-20 bg-white mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 leading-relaxed text-base md:text-lg">
            <div className="space-y-5">
              <p>
                Jericoacoara é muito mais do que um destino turístico é onde cada paisagem surpreende e cada dia reserva uma nova experiência. Para realmente viver tudo o que Jeri tem a oferecer, os passeios são parte essencial da viagem, permitindo explorar desde os cenários mais famosos até cantos que só quem conhece a região sabe chegar.
              </p>
              <p>
                Ao longo desses roteiros, você vai se deparar com lagoas de águas cristalinas, dunas imponentes, travessias entre mangues e vistas que transformam qualquer momento em algo memorável. Tudo isso com o suporte de quem entende da região, garantindo mais segurança, conforto e uma experiência muito mais completa.
              </p>

            </div>
            <div className="space-y-5">
              <p>
                Cada passeio oferece uma proposta diferente: alguns são perfeitos para relaxar e aproveitar a tranquilidade das lagoas, enquanto outros são ideais para quem busca emoção e aventura nas dunas. Essa variedade faz com que cada escolha traga uma nova forma de conhecer Jericoacoara.
              </p>
              <p>
                A seguir, você vai encontrar os principais passeios disponíveis, com todos os detalhes necessários para escolher a experiência ideal para o seu perfil e transformar sua viagem em algo verdadeiramente inesquecível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VEÍCULOS */}
      <section id="veiculos" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="uppercase tracking-widest text-xs font-bold mb-2 text-accent">
              Escolha seu Veículo
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary">
              Escolha Como Você Quer Explorar Jeri
            </h2>
            <div className="h-1 w-20 bg-accent mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {vehicleTypes.map((v) => (
              <motion.div
                key={v.name}
                className="p-6 border-2 border-border rounded-xl hover:border-accent transition hover:shadow-lg bg-background"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-accent text-lg mb-2">{v.name}</h3>
                <p className="text-foreground text-sm">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PASSEIOS - CAROUSEL */}
      <section id="passeios" className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="uppercase tracking-widest text-xs font-bold mb-2 text-accent">
              Nossos Roteiros
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary">
              Conheça Nossos Passeios
            </h2>
            <div className="h-1 w-20 bg-accent mt-4 rounded-full"></div>
          </div>

          {/* CAROUSEL CONTAINER */}
          <div className="flex flex-col gap-4">
            {/* DESKTOP CONTROLS - TOP */}
            <div className="hidden md:flex items-center justify-center gap-4">
              {/* LEFT BUTTON */}
              <button
                onClick={() => setCarouselIndex((prev) => (prev - 1 + passeios.length) % passeios.length)}
                className="bg-accent hover:bg-accent/90 text-white p-3 rounded-full transition shadow-lg flex-shrink-0"
                aria-label="Passeio anterior"
              >
                <ChevronLeft size={24} />
              </button>

              {/* INDICATORS */}
              <div className="flex gap-2">
                {passeios.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCarouselIndex(index)}
                    className={`w-2 h-2 rounded-full transition ${index === carouselIndex ? 'bg-accent' : 'bg-border'
                      }`}
                    aria-label={`Ir para passeio ${index + 1}`}
                  />
                ))}
              </div>

              {/* RIGHT BUTTON */}
              <button
                onClick={() => setCarouselIndex((prev) => (prev + 1) % passeios.length)}
                className="bg-accent hover:bg-accent/90 text-white p-3 rounded-full transition shadow-lg flex-shrink-0"
                aria-label="Próximo passeio"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* CAROUSEL ITEM */}
            <motion.div
              className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition relative w-full h-auto md:h-[500px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-0 h-full">
                {/* IMAGEM */}
                <div className="relative h-full">
                  <Image
                    src={passeios[carouselIndex].image}
                    alt={passeios[carouselIndex].titulo}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTEÚDO */}
                <div className="p-6 md:p-8 flex flex-col justify-between overflow-y-auto md:overflow-y-auto overflow-x-hidden scrollbar-hide">
                  <div>
                    <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full mb-3 w-fit">
                      {passeios[carouselIndex].badge}
                    </span>

                    <h3 className="text-lg md:text-2xl font-black mb-2 text-primary">
                      {passeios[carouselIndex].titulo}
                    </h3>

                    <p className="text-foreground mb-3 text-sm md:text-base">
                      {passeios[carouselIndex].descricao}
                    </p>

                    <div className="text-foreground space-y-1 mb-4">
                      {passeios[carouselIndex].texto.map((t, i) => (
                        <p key={i} className="text-xs md:text-sm">{t}</p>
                      ))}
                    </div>

                    {/* LISTA DE ATRAÇÕES */}
                    <div className="grid grid-cols-2 gap-2">
                      {passeios[carouselIndex].itens.map(item => (
                        <div key={item} className="flex items-center gap-2">
                          <span className="text-accent font-bold flex-shrink-0">✓</span>
                          <span className="text-xs md:text-sm text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="https://wa.me/5585999001339"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-accent hover:bg-accent/90 text-white font-bold px-6 py-2 rounded-xl transition w-fit text-sm mt-4"
                  >
                    Reservar Agora
                  </a>
                </div>
              </div>
            </motion.div>

            {/* MOBILE CAROUSEL CONTROLS - BOTTOM */}
            <div className="md:hidden flex items-center justify-center gap-4 px-4 py-4">
              {/* LEFT BUTTON */}
              <button
                onClick={() => setCarouselIndex((prev) => (prev - 1 + passeios.length) % passeios.length)}
                className="bg-accent hover:bg-accent/90 text-white p-2 rounded-full transition shadow-lg"
                aria-label="Passeio anterior"
              >
                <ChevronLeft size={20} />
              </button>

              {/* INDICATORS */}
              <div className="flex gap-2">
                {passeios.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCarouselIndex(index)}
                    className={`w-2 h-2 rounded-full transition ${index === carouselIndex ? 'bg-accent' : 'bg-border'
                      }`}
                    aria-label={`Ir para passeio ${index + 1}`}
                  />
                ))}
              </div>

              {/* RIGHT BUTTON */}
              <button
                onClick={() => setCarouselIndex((prev) => (prev + 1) % passeios.length)}
                className="bg-accent hover:bg-accent/90 text-white p-2 rounded-full transition shadow-lg"
                aria-label="Próximo passeio"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidaPasseio" className="py-20 px-6 bg-background">
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
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full text-left font-bold text-primary flex justify-between items-center"
                >
                  <span>{faq.question}</span>
                  <span className="text-accent text-xl">
                    {expandedFaq === index ? '−' : '+'}
                  </span>
                </button>

                {expandedFaq === index && (
                  <p className="mt-4 text-foreground leading-relaxed">{faq.answer}</p>
                )}
              </motion.div>
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
