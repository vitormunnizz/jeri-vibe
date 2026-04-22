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
      descricao: "Das esculturas naturais da Árvore da Preguiça ao mergulho inesquecível no Buraco Azul.",
      texto: [
        "Nosso roteiro começa com a Árvore da Preguiça e segue até a Praia do Preá.",
        "Depois visitamos o Buraco Azul, Lagoa do Paraíso e Lagoa Azul."
      ],
      itens: ['Árvore da Preguiça', 'Lagoa do Paraíso', 'Buraco Azul', 'Lagoa Azul'],
    },
    {
      badge: "Roteiro Lado Oeste",
      titulo: "Dunas Gigantes & Mangue Selvagem",
      descricao: "Dos cavalos-marinhos no Rio Guriú ao relaxo total nas redes da Lagoa da Torta.",
      texto: [
        "Explore o Rio Guriú e o Mangue Seco.",
        "Finalize nas redes da Lagoa da Torta."
      ],
      itens: ['Mangue Seco', 'Rio Guriú', 'Dunas de Tatajuba', 'Lagoa da Torta'],
    },
    {
      badge: "Roteiro Extremo Leste",
      titulo: "Dunas de Cristal & Vila de Barrinha",
      descricao: "A beleza intocada da vila de pescadores e o pôr do sol mais espetacular da região.",
      texto: [
        "Conheça a vila de Barrinha e suas dunas gigantes.",
        "Explore a Lagoa do Coração e finalize com experiência gastronômica."
      ],
      itens: ['Vila da Barrinha', 'Lagoa do Coração', 'Dunas Vermelhas', 'Coqueirais'],
    }
  ];

  const vehicleTypes = [
    {
      name: "Buggy",
      description: "O clássico de Jericoacoara. Ideal para quem busca conforto, segurança e um passeio completo pelas principais atrações.",
    },
    {
      name: "Quadriciclo",
      description: "Perfeito para quem quer mais liberdade e aventura, pilotando seu próprio veículo pelas dunas e trilhas.",
    },
    {
      name: "UTV",
      description: "Uma experiência moderna e mais robusta, combinando conforto com adrenalina em terrenos variados.",
    },
    {
      name: "4x4",
      description: "Opção ideal para grupos ou famílias, oferecendo espaço, estabilidade e muito conforto durante todo o passeio.",
    },
  ];

  const faqs = [
    {
      question: "Quais são os principais passeios em Jericoacoara?",
      answer: "Os passeios mais procurados em Jericoacoara são o lado leste e lado oeste, que reúnem os principais pontos turísticos da região. No lado leste você visita a famosa Lagoa do Paraíso, Lagoa Azul e alguns Beach Clubes na praia do Preá. Já no lado oeste, o roteiro é de aventura, com cenários de praia e dunas imponentes que garantem a diversão e adrenalina. São experiências imperdíveis para quem busca o que fazer em Jericoacoara.",
    },
    {
      question: "Qual é melhor: lado leste ou oeste em Jericoacoara?",
      answer: "O lado leste é o mais famoso, ideal para quem quer lagoas cristalinas e relaxar em redes dentro d’água.",
    },
    {
      question: "Preciso reservar com antecedência?",
      answer: "Sim, principalmente em alta temporada. Reservar antes garante sua vaga e melhores horários.",
    },
    {
      question: "Quanto custa um passeio de buggy em Jericoacoara?",
      answer: "O passeio de buggy em Jericoacoara tem um excelente custo-benefício, pois o valor pode ser dividido por até 4 pessoas. Os preços variam conforme o roteiro e duração, mas é uma das opções mais buscadas por oferecer conforto, segurança e motorista experiente. Entre todos, é o passeio mais escolhido por quem visita Jeri.",
    },
    {
      question: "O que levar?",
      answer: "Protetor solar, roupa leve, óculos, água e celular carregado para fotos.",
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

        <Image src={images.heroPasseios} className="absolute w-full h-full object-cover opacity-80" alt="Hero background" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="text-accent mb-2 uppercase tracking-widest text-xs md:text-sm">
            Bem-vindo ao Destino Nº 1
          </span>

          <h1 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-6">
            Passeios Incríveis <br /> em Jericoacoara
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
            <span className="uppercase tracking-widest text-xs font-bold mb-2">		Descubra a Vila
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
          <div className="relative flex items-center gap-4">
            {/* LEFT BUTTON - OUTSIDE CARD */}
            <button
              onClick={() => setCarouselIndex((prev) => (prev - 1 + passeios.length) % passeios.length)}
              className="hidden md:flex bg-accent hover:bg-accent/90 text-white p-3 rounded-full transition shadow-lg flex-shrink-0"
              aria-label="Passeio anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* CAROUSEL ITEM */}
            <motion.div
              className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition relative flex-1 h-96 md:h-[500px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-0 h-full">
                {/* IMAGEM */}
                <div className="relative h-full">
                  <Image
                    src={images.carouselPasseios}
                    alt={passeios[carouselIndex].titulo}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTEÚDO */}
                <div className="p-8 flex flex-col justify-between overflow-y-auto">
                  <div>
                    <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full mb-3 w-fit">
                      {passeios[carouselIndex].badge}
                    </span>

                    <h3 className="text-xl md:text-2xl font-black mb-2 text-primary line-clamp-2">
                      {passeios[carouselIndex].titulo}
                    </h3>

                    <p className="text-foreground mb-3 text-sm line-clamp-2">
                      {passeios[carouselIndex].descricao}
                    </p>

                    <div className="text-foreground space-y-1 mb-4">
                      {passeios[carouselIndex].texto.map((t, i) => (
                        <p key={i} className="text-xs line-clamp-1">{t}</p>
                      ))}
                    </div>

                    {/* LISTA DE ATRAÇÕES */}
                    <div className="grid grid-cols-2 gap-2">
                      {passeios[carouselIndex].itens.map(item => (
                        <div key={item} className="flex items-center gap-2">
                          <span className="text-accent font-bold flex-shrink-0">✓</span>
                          <span className="text-xs text-foreground line-clamp-1">{item}</span>
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

              {/* MOBILE CAROUSEL CONTROLS - BOTTOM CENTER */}
              <div className="md:hidden flex items-center justify-center gap-4 px-4 py-4 bg-muted">
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

              {/* DESKTOP INDICATORS - BOTTOM CENTER */}
              <div className="hidden md:flex items-center justify-center gap-2 py-4 bg-muted">
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
            </motion.div>

            {/* RIGHT BUTTON - OUTSIDE CARD */}
            <button
              onClick={() => setCarouselIndex((prev) => (prev + 1) % passeios.length)}
              className="hidden md:flex bg-accent hover:bg-accent/90 text-white p-3 rounded-full transition shadow-lg flex-shrink-0"
              aria-label="Próximo passeio"
            >
              <ChevronRight size={24} />
            </button>
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
