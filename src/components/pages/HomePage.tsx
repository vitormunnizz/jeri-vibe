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
        "Minha experiência com a Jeri 4XP foi fantástica! A equipe é super profissional e atenciosa, me dando todo o suporte necessário. Já quero voltar!",
      avatar: "https://i.pravatar.cc/150?u=gabi",
    },
    {
      id: 5,
      name: "Lilian Maria",
      role: "São Paulo, Brasil",
      content:
        "Maravilhoso atendimento, excelente, adorei o guia Adriano e Vinicius hyper atencioso. Os passeios foram incriveis, quadriciclo, jet ski e otimas lembranças.",
      avatar: "https://i.pravatar.cc/150?u=lilian",
    },
    {
      id: 6,
      name: "Vitor Muniz",
      role: "Sobral, Brasil",
      content:
        "Todas as vezes que for em jericoacoara, vou novamente com a Jeri4xp! Excelente atendimento por parte da equipe.",
      avatar: "https://i.pravatar.cc/150?u=vitor",
    },
  ];

  return (
    <div className="font-sans">

      {/* HERO */}
      <section className="min-h-screen w-full text-white relative">
        <header className="absolute w-full flex justify-between px-10 py-4 z-50 items-center">
          <Image src="/logo_jeri4xp.png" alt="Logo" className="w-24" />

          <nav className="hidden md:flex gap-10 text-lg font-bold uppercase tracking-wider">
            {navItems.map((item) => (
              <a key={item.name} href={item.link} className="hover:text-orange-600">
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
                {/* FOOTER */}
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">
          Sua aventura em Jericoacoara começa aqui
        </h2>

        <p className="mt-4 text-gray-600 italic max-w-xl mx-auto">
          Turismo com qualidade, aventuras personalizadas e memórias inesquecíveis em Jericoacoara.
        </p>
      </div>
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
                className="text-2xl font-bold hover:text-orange-600"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}

        <Image src="/jeri1.webp" className="absolute w-full h-full object-cover opacity-80" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-orange-600 mb-2 uppercase tracking-widest">
            Bem-vindo ao Destino Nº 1
          </span>

          <h1 className="text-4xl md:text-6xl font-black italic mb-4">
            Jeri4xp: Sua conexão <br /> com o paraíso.
          </h1>

          <a
            href="https://wa.me/5585999001339"
            target="_blank"
            rel="noreferrer"
            className="bg-orange-600 px-10 py-4 rounded-full text-sm hover:bg-white hover:text-orange-600 transition"
          >
            Reservar Agora
          </a>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section
        id="historia"
        className="bg-orange-600 min-h-screen flex items-center justify-center py-20 px-6 text-white"
      >
        <div className="max-w-5xl">

          <div className="text-center mb-12">
            <span className="uppercase text-xs font-bold">
              Descubra a Vila
            </span>
            <h1 className="text-4xl md:text-6xl font-black">
              História de Jericoacoara
            </h1>
            <div className="h-1 w-24 bg-white mt-6 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed">

            <div className="space-y-6">
              <p className="text-xl">
                Jericoacoara, carinhosamente apelidada de Jeri, é um destino onde o tempo parece ditar o próprio ritmo através do movimento das marés e dos ventos.
              </p>

              <p className="italic border-l-2 pl-4">
                Localizada no Ceará, a cerca de 300 km de Fortaleza, a vila transformou-se de uma isolada aldeia de pescadores em um refúgio de fama internacional.
              </p>

              <p>
                A essência rústica permanece intacta: as ruas continuam cobertas de areia e a iluminação pública é inexistente para preservar o brilho do céu estrelado.
              </p>
            </div>

            <div className="space-y-6">
              <p>
                A história mudou drasticamente em 1984, quando o The Washington Post a elegeu como uma das dez praias mais bonitas do mundo.
              </p>

              <p>
                Hoje, protegida como Parque Nacional, a jornada passa pela icônica Pedra Furada e a Duna do Pôr do Sol.
              </p>

              <p>
                Para quem busca relaxamento, as redes nas lagoas do Paraíso e Azul são paradas obrigatórias, enquanto o Mangue Seco revela a beleza natural da região.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIÊNCIAS */}
      <section
        id="experiencias"
        className="min-h-screen flex flex-col items-center justify-center p-10"
      >
        <h1 className="text-4xl font-black mb-12">
          Nossas Experiências
        </h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">

          {["Passeios", "Hospedagem", "Transfer", "Aulas"].map((item) => (
            <div
              key={item}
              className="h-72 bg-black rounded-3xl flex items-end p-8 text-white text-3xl font-bold"
            >
              {item}
            </div>
          ))}

        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="p-10 bg-white">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-10">
          O que dizem sobre a Jeri 4XP
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl shadow hover:shadow-xl transition"
            >
              <p className="mb-4 italic">{item.content}</p>

              <div className="flex items-center gap-4">
                <Image src={item.avatar} className="w-14 h-14 rounded-full" />
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
