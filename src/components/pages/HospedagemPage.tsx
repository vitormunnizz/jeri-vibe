import { images } from '@/assets/images';
import { Image } from '@/components/ui/image';
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function HospedagemPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const navItems = [
    { name: "Visão Geral", link: "#geralHospedagem" },
    { name: "Onde se Hospedar", link: "#localizacoes" },
    { name: "Tipos", link: "#tipos" },
    { name: "Dúvidas", link: "#duvidaHospedagem" },
    { name: "Contato", link: "#contato" },
  ];

  const tiposHospedagem = [
    {
      badge: "Pousadas Econômicas",
      titulo: "Conforto & Custo-Benefício",
      descricao: "Opções ideais para quem quer economizar sem abrir mão de uma boa localização e aconchego.",
      texto: [
        "Localizadas estrategicamente próximas ao centro.",
        "Ambientes familiares e atendimento personalizado."
      ],
      itens: ['Café da Manhã', 'Ar Condicionado', 'Wi-Fi Grátis', 'Próximo à Vila'],
    },
    {
      badge: "Casais e familiares",
      titulo: "Romantismo & Exclusividade",
      descricao: "Ambientes pensados para momentos a dois, com privacidade e vistas privilegiadas.",
      texto: [
        "Pousadas boutique com charme único.",
        "Opções pé na areia para um despertar inesquecível."
      ],
      itens: ['Vista Mar', 'Piscina Privativa', 'Decoração Especial', 'Paz & Sossego'],
    },
    {
      badge: "Famílias e Resorts",
      titulo: "Estrutura Completa & Lazer",
      descricao: "Espaços amplos com área de lazer para crianças e serviços de hotelaria premium.",
      texto: [
        "Quartos conjugados e áreas de recreação.",
        "Piscinas grandes e café da manhã farto."
      ],
      itens: ['Área Kids', 'Piscina Adulto/Infantil', 'Restaurante Próprio', 'Suítes Amplas'],
    }
  ];

  const localizacoes = [
    {
      name: "Jericoacoara",
      description: "O coração do agito. Fique perto de tudo: praia, restaurantes, lojas e a famosa vida noturna da vila.",
    },
    {
      name: "Preá",
      description: "O paraíso dos ventos. Localização mais tranquila, perfeita para esportes como Kitesurf e contato com a natureza.",
    },
    {
      name: "Tatajuba",
      description: "Experiência exclusiva. Para quem busca isolamento, dunas intocadas e uma conexão profunda com o rústico.",
    },
    {
      name: "Lagoas",
      description: "Hospedagens próximas às lagoas de águas cristalinas, ideal para relaxar longe do movimento da vila principal.",
    },
  ];

  const faqs = [
    {
      question: "Qual a melhor região para se hospedar em Jericoacoara?",
      answer: "A melhor região é próxima ao centrinho da vila, pois oferece fácil acesso à praia, restaurantes, comércio e aos passeios.",
    },
    {
      question: "É melhor ficar em pousada ou hotel?",
      answer: "Depende do seu perfil. Pousadas são mais aconchegantes, enquanto hotéis oferecem mais estrutura e comodidades.",
    },
    {
      question: "Preciso reservar com antecedência?",
      answer: "Sim, principalmente em alta temporada. Reservar antes garante melhores preços e localização.",
    },
    {
      question: "Existem opções para famílias?",
      answer: "Sim, há hospedagens com quartos amplos e estrutura completa para famílias.",
    },
    {
      question: "Fica perto dos passeios?",
      answer: "Sim, a maioria das hospedagens está próxima aos pontos de saída dos passeios.",
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

        <Image src={images.hero} className="absolute w-full h-full object-cover opacity-80" alt="Hospedagem Jeri" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h1 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-6 text-shadow-md">
            Hospedagem em Jericoacoara para uma experiência inesquecível
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
      <section id="geralHospedagem" className="bg-orange-600 py-20 px-6 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="uppercase tracking-widest text-xs font-bold mb-2"> Descubra a Estadia </span>
            <h2 className="text-3xl md:text-4xl font-black">
              Encontre a Hospedagem Ideal em Jericoacoara
            </h2>
            <div className="h-1 w-20 bg-white mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 leading-relaxed text-base md:text-lg">
            <div className="space-y-5">
              <p>
                Hospedar-se bem faz toda a diferença para aproveitar Jericoacoara com mais conforto, praticidade e tranquilidade. A vila oferece opções para todos os estilos de viagem, desde pousadas aconchegantes até hotéis com estrutura completa.
              </p>
              <p>
                Para quem busca praticidade, ficar próximo ao centrinho é uma ótima escolha. Assim, você terá fácil acesso a restaurantes, lojas, praia, vida noturna e aos principais pontos de saída dos passeios.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                Se a ideia for relaxar e aproveitar momentos especiais, há opções mais reservadas e tranquilas, perfeitas para casais ou famílias que desejam descansar com mais privacidade e serviços exclusivos.
              </p>
              <p>
                Seja para uma viagem romântica, em família ou entre amigos, escolher a hospedagem certa é o primeiro passo para viver Jericoacoara da melhor forma. Confira as opções que selecionamos para você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÕES (USANDO O DESIGN DOS VEÍCULOS) */}
      <section id="localizacoes" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="uppercase tracking-widest text-xs font-bold mb-2 text-accent">
              Onde Ficar
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary">
              Principais Regiões de Hospedagem
            </h2>
            <div className="h-1 w-20 bg-accent mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {localizacoes.map((v) => (
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

      {/* TIPOS - CAROUSEL (USANDO O DESIGN DOS PASSEIOS) */}
      <section id="tipos" className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="uppercase tracking-widest text-xs font-bold mb-2 text-accent">
              Categorias
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary">
              Tipos de Hospedagem
            </h2>
            <div className="h-1 w-20 bg-accent mt-4 rounded-full"></div>
          </div>

          <div className="relative flex items-center gap-4">
            <button
              onClick={() => setCarouselIndex((prev) => (prev - 1 + tiposHospedagem.length) % tiposHospedagem.length)}
              className="hidden md:flex bg-accent hover:bg-accent/90 text-white p-3 rounded-full transition shadow-lg flex-shrink-0"
            >
              <ChevronLeft size={24} />
            </button>

            <motion.div
              className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition relative flex-1 h-96 md:h-[500px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-0 h-full">
                <div className="relative h-full">
                  <Image
                    src={images.carouselHospedagem}
                    alt={tiposHospedagem[carouselIndex].titulo}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 flex flex-col justify-between overflow-y-auto">
                  <div>
                    <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full mb-3 w-fit">
                      {tiposHospedagem[carouselIndex].badge}
                    </span>

                    <h3 className="text-xl md:text-2xl font-black mb-2 text-primary">
                      {tiposHospedagem[carouselIndex].titulo}
                    </h3>

                    <p className="text-foreground mb-3 text-sm">
                      {tiposHospedagem[carouselIndex].descricao}
                    </p>

                    <div className="text-foreground space-y-1 mb-4">
                      {tiposHospedagem[carouselIndex].texto.map((t, i) => (
                        <p key={i} className="text-xs">{t}</p>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {tiposHospedagem[carouselIndex].itens.map(item => (
                        <div key={item} className="flex items-center gap-2">
                          <span className="text-accent font-bold flex-shrink-0">✓</span>
                          <span className="text-xs text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="https://wa.me/5585999001339"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-accent hover:bg-accent/90 text-white font-bold px-6 py-2 rounded-xl transition w-fit text-sm mt-4"
                  >
                    Consultar Disponibilidade
                  </a>
                </div>
              </div>
            </motion.div>

            <button
              onClick={() => setCarouselIndex((prev) => (prev + 1) % tiposHospedagem.length)}
              className="hidden md:flex bg-accent hover:bg-accent/90 text-white p-3 rounded-full transition shadow-lg flex-shrink-0"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidaHospedagem" className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="uppercase tracking-widest text-xs font-bold mb-2 text-accent">
              Dúvidas
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary">
              Informações Importantes
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
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
