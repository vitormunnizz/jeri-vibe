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
        "Árvore da Preguiça e Praia do Preá.",
        "Buraco Azul e Lagun Beach.",
        "Lagoa do Paraíso, Azul e Amâncio."
      ],
      itens: ['Árvore da Preguiça', 'Praia do Preá', 'Buraco Azul', 'Lagun Beach', 'Lagoa do Paraíso', 'Lagoa Azul', 'Lagoa do Amâncio'],
    },
    {
      badge: "Roteiro Lado Oeste",
      titulo: "Dunas Gigantes & Mangue Selvagem",
      descricao: "Aventura nas dunas e experiência única no mangue.",
      image: images.PasseiosOeste,
      texto: [
        "Passeio pelo Rio Guriú.",
        "Trilha no Mangue Seco.",
        "Dunas de Tatajuba e Lago Grande."
      ],
      itens: ['Rio Guriú', 'Mangue Seco', 'Dunas de Tatajuba', 'Lago Grande'],
    },
    {
      badge: "Roteiro Extremo Leste",
      titulo: "Barrinha & Dunas Intocadas",
      descricao: "Experiência exclusiva e menos explorada.",
      image: images.PasseiosExtremo,
      texto: [
        "Visita à vila de Barrinha.",
        "Praia paradisíaca.",
        "Dunas e pôr do sol incrível."
      ],
      itens: ['Barrinha', 'Praia da Barrinha', 'Dunas'],
    }
  ];

  return (
    <div className="font-sans">

      {/* HERO */}
      <section className="min-h-screen w-full text-white relative overflow-hidden">

        <Image src={images.hero} className="absolute w-full h-full object-cover opacity-80" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-black italic mb-6">
            Os melhores passeios em Jericoacoara
          </h1>

          <a
            href="https://wa.me/5585999001339"
            target="_blank"
            rel="noreferrer"
            className="bg-accent px-8 py-3 rounded-full text-xs font-bold"
          >
            Reservar Agora
          </a>
        </div>
      </section>

      {/* PASSEIOS */}
      <section id="passeios" className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-black">Nossos Passeios</h2>
          </div>

          <div className="relative flex items-center gap-4">

            {/* LEFT */}
            <button
              onClick={() => setCarouselIndex((prev) => (prev - 1 + passeios.length) % passeios.length)}
              className="bg-accent text-white p-3 rounded-full"
            >
              <ChevronLeft />
            </button>

            {/* CARD */}
            <motion.div className="bg-white rounded-2xl shadow-lg overflow-hidden flex-1 h-[450px]">

              <div className="grid md:grid-cols-2 h-full">

                {/* IMAGE */}
                <Image
                  src={passeios[carouselIndex].image}
                  alt={passeios[carouselIndex].titulo}
                  className="w-full h-full object-cover"
                />

                {/* CONTENT */}
                <div className="p-8 flex flex-col justify-between">

                  <div>
                    <span className="text-accent text-xs font-bold">
                      {passeios[carouselIndex].badge}
                    </span>

                    <h3 className="text-2xl font-black mb-2">
                      {passeios[carouselIndex].titulo}
                    </h3>

                    <p className="mb-4">
                      {passeios[carouselIndex].descricao}
                    </p>

                    <ul className="text-sm space-y-1">
                      {passeios[carouselIndex].itens.map(item => (
                        <li key={item}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://wa.me/5585999001339"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-accent text-white px-6 py-2 rounded-xl font-bold mt-4 w-fit"
                  >
                    Reservar Agora
                  </a>
                </div>

              </div>
            </motion.div>

            {/* RIGHT */}
            <button
              onClick={() => setCarouselIndex((prev) => (prev + 1) % passeios.length)}
              className="bg-accent text-white p-3 rounded-full"
            >
              <ChevronRight />
            </button>

          </div>
        </div>
      </section>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/5585999001339"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white shadow-lg"
      >
        <MessageCircle />
      </a>

    </div>
  );
}
