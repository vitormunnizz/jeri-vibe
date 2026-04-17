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
        "I found out about Jeri 4XP through a friend's recommendation and it was all great. Kitesurfing and sightseeing, it was all perfect!",
      avatar: "https://i.pravatar.cc/150?u=axelle",
    },
    {
      id: 2,
      name: "Remy Sanchez",
      role: "França",
      content:
        "Service excellent, les prestations ont même dépassé mes attentes. J'ai testé le wingfoil et fait une excursion en quad dans les dunes, inoubliable!",
      avatar: "https://i.pravatar.cc/150?u=remy",
    },
    {
      id: 3,
      name: "David Kennedy",
      role: "Londres, Reino Unido",
      content:
        "I had the best experiences in Jericoacoara. Booking everything through Jeri 4XP was the best option.",
      avatar: "https://i.pravatar.cc/150?u=david",
    },
    {
      id: 4,
      name: "Gabi",
      role: "Fortaleza, Brasil",
      content:
        "Minha experiência com a Jeri 4XP foi fantástica! A equipe é super profissional e atenciosa.",
      avatar: "https://i.pravatar.cc/150?u=gabi",
    },
    {
      id: 5,
      name: "Lilian Maria",
      role: "São Paulo, Brasil",
      content:
        "Maravilhoso atendimento, adorei o guia Adriano e Vinicius. Passeios incríveis!",
      avatar: "https://i.pravatar.cc/150?u=lilian",
    },
    {
      id: 6,
      name: "Vitor Muniz",
      role: "Sobral, Brasil",
      content:
        "Todas as vezes que for em Jeri, vou novamente com a Jeri4xp!",
      avatar: "https://i.pravatar.cc/150?u=vitor",
    },
  ];

  return (
    <div className="font-sans">

      {/* HERO */}
      <section className="min-h-screen w-full text-white relative">
        <header className="absolute w-full flex justify-between px-10 py-4 z-50 items-center">
          <img src="/logo_jeri4xp.png" className="w-24" />

          <nav className="hidden md:flex gap-10 text-lg font-bold uppercase">
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

        <img src="/jeri1.webp" className="absolute w-full h-full object-cover opacity-80" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-orange-600 mb-2 uppercase">
            Bem-vindo ao Destino Nº 1
          </span>

          <h1 className="text-4xl md:text-6xl font-black italic mb-4">
            Jeri4xp: Sua conexão <br /> com o paraíso.
          </h1>

          <a
            href="https://wa.me/5585999001339"
            target="_blank"
            rel="noreferrer"
            className="bg-orange-600 px-10 py-4 rounded-full hover:bg-white hover:text-orange-600"
          >
            Reservar Agora
          </a>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section id="historia" className="bg-orange-600 min-h-screen flex items-center justify-center p-10 text-white">
        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-black text-center mb-10">
            História de Jericoacoara
          </h1>

          <div className="grid md:grid-cols-2 gap-10 text-lg">
            <div>
              <p>
                Jericoacoara, carinhosamente apelidada de Jeri, é um destino onde o tempo parece ditar o próprio ritmo através do movimento das marés e dos ventos.
              </p>
              <p className="mt-4 italic">
                Localizada no Ceará, a cerca de 300 km de Fortaleza.
              </p>
            </div>

            <div>
              <p>
                Em 1984, foi eleita uma das praias mais bonitas do mundo.
              </p>
              <p className="mt-4">
                Hoje, protegida como Parque Nacional, é um dos destinos mais desejados do Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIAS */}
      <section id="experiencias" className="min-h-screen flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-black mb-10">Nossas Experiências</h1>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
          {["Passeios", "Hospedagem", "Transfer", "Aulas"].map((item) => (
            <div key={item} className="bg-black h-60 rounded-2xl flex items-end p-6 text-white text-2xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="p-10 bg-white">
        <h2 className="text-3xl font-black text-center mb-10">
          O que dizem sobre a Jeri 4XP
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((item) => (
            <div key={item.id} className="p-6 shadow rounded-2xl">
              <p className="mb-4 italic">{item.content}</p>

              <div className="flex items-center gap-4">
                <img src={item.avatar} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <span className="text-sm text-gray-500">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="min-h-screen flex items-center justify-center bg-orange-600 p-10 text-white">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl font-black mb-10">
            Prepare sua próxima aventura em Jeri
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            <a href="https://wa.me/5585999001339" target="_blank" className="bg-white/10 p-6 rounded-2xl hover:bg-white hover:text-orange-600">
              WhatsApp
            </a>

            <a href="https://instagram.com/jeri4xp" target="_blank" className="bg-white/10 p-6 rounded-2xl hover:bg-white hover:text-orange-600">
              Instagram
            </a>

            <a href="mailto:jeri4xp@gmail.com" className="bg-white/10 p-6 rounded-2xl hover:bg-white hover:text-orange-600">
              E-mail
            </a>
          </div>
        </div>
      </section>

      {/* BOTÃO WHATSAPP */}
      <a
        href="https://wa.me/5585999001339"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 p-4 rounded-full text-white text-xl"
      >
        💬
      </a>

    </div>
  );
}
