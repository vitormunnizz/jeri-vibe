import { Image } from '@/components/ui/image';
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "História", link: "#historia" },
    { name: "Experiências", link: "#experiencias" },
    { name: "Depoimentos", link: "#depoimentos" },
    { name: "Contato", link: "#contato" },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Axelle Rulfi",
      role: "Suíça",
      content:
        "I found out about Jeri 4XP through a friend's recommendation and it was all great.",
      avatar: "https://i.pravatar.cc/150?u=axelle",
    },
    {
      id: 2,
      name: "Remy Sanchez",
      role: "França",
      content:
        "Service excellent, les prestations ont même dépassé mes attentes.",
      avatar: "https://i.pravatar.cc/150?u=remy",
    },
  ];

  return (
    <div className="font-sans">
      {/* HERO */}
      <section className="min-h-screen w-full text-white">
        <header className="absolute w-full flex justify-between px-10 py-4 z-50">
          <Image src="/logo_jeri4xp.png" className="w-24" />

          <nav className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <a key={item.name} href={item.link}>
                {item.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </header>

        {/* MENU MOBILE */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 z-50">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-4xl"
            >
              x
            </button>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}

        <div className="relative h-screen">
          <Image src="/jeri1.webp" className="absolute w-full h-full object-cover opacity-80" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-orange-600 mb-2">
              Bem-vindo ao Destino Nº 1
            </span>

            <h1 className="text-4xl md:text-6xl font-black">
              Jeri4xp: Sua conexão com o paraíso.
            </h1>

            <a
              href="https://wa.me/5585999001339"
              target="_blank"
              className="mt-6 bg-orange-600 px-8 py-3 rounded-full"
            >
              Reservar Agora
            </a>
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section
        id="historia"
        className="bg-orange-600 text-white min-h-screen flex items-center justify-center p-10"
      >
        <div className="max-w-5xl text-center">
          <h1 className="text-4xl font-black mb-6">
            História de Jericoacoara
          </h1>
          <p className="text-lg">
            Jericoacoara é um destino onde o tempo parece desacelerar...
          </p>
        </div>
      </section>

      {/* EXPERIÊNCIAS */}
      <section
        id="experiencias"
        className="min-h-screen flex flex-col items-center justify-center p-10"
      >
        <h1 className="text-3xl font-black mb-10">
          Nossas Experiências
        </h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
          <div className="bg-black h-60 rounded-2xl flex items-end p-6 text-white">
            Passeios
          </div>
          <div className="bg-black h-60 rounded-2xl flex items-end p-6 text-white">
            Hospedagem
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="p-10 bg-white">
        <h2 className="text-3xl font-black text-center mb-10">
          O que dizem sobre a Jeri 4XP
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 border rounded-2xl shadow"
            >
              <p className="mb-4">{item.content}</p>

              <div className="flex items-center gap-4">
                <Image src={item.avatar} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <span className="text-sm text-gray-500">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
