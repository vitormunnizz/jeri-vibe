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
          <img src="/logo_jeri4xp.png" alt="Logo Jeri4xp" className="w-24" />

          <nav className="hidden md:flex gap-10 text-lg font-bold uppercase tracking-wider">
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
          <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 z-50 font-bold">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-10 text-4xl">
              x
            </button>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-black hover:text-orange-600"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}

        <img src="/jeri1.webp" className="absolute w-full h-full object-cover opacity-85" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-orange-600 mb-2 uppercase tracking-widest">
            Bem-vindo ao Destino Nº 1
          </span>

          <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4">
            Jeri4xp: Sua conexão <br /> com o paraíso.
          </h1>

          <a
            href="https://wa.me/5585999001339"
            target="_blank"
            rel="noreferrer"
            className="bg-orange-600 px-10 py-4 rounded-full text-xs hover:bg-white hover:text-orange-600 transition-all shadow-lg"
          >
            Reservar Agora
          </a>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section id="historia" className="bg-orange-600 min-h-screen flex items-center justify-center py-20 px-6 text-white">
        <div className="max-w-5xl w-full">

          <div className="flex flex-col items-center mb-12 text-center">
            <span className="uppercase tracking-widest text-xs font-bold mb-2">
              Descubra a Vila
            </span>
            <h1 className="text-4xl md:text-6xl font-black">
              História de Jericoacoara
            </h1>
            <div className="h-1 w-24 bg-white mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 leading-relaxed text-lg">

            <div className="space-y-6">
              <p className="text-xl">
                Jericoacoara, carinhosamente apelidada de Jeri, é um destino onde o tempo parece ditar o próprio ritmo através do movimento das marés e dos ventos.
              </p>

              <p className="italic border-l-2 border-white/20 pl-6">
                Localizada no Ceará, a cerca de 300 km de Fortaleza, a vila transformou-se de uma isolada aldeia de pescadores em um refúgio de fama internacional.
              </p>

              <p>
                A essência rústica permanece intacta: as ruas continuam cobertas de areia e a iluminação pública é inexistente para preservar o brilho do céu estrelado, criando uma conexão única com o cosmos.
              </p>
            </div>

            <div className="space-y-6">
              <p>
                A história mudou drasticamente em 1984, quando o The Washington Post a elegeu como uma das dez praias mais bonitas do mundo.
              </p>

              <p>
                Hoje, protegida como Parque Nacional, a jornada de contrastes começa pela icônica Pedra Furada e passa pela Duna do Pôr do Sol.
              </p>

              <p>
                Para quem busca relaxamento, as famosas redes nas lagoas do Paraíso e Azul são paradas obrigatórias. Já o lado oeste revela a beleza crua do Mangue Seco e a travessia do Rio Guriú, onde a natureza se manifesta em raízes expostas e águas calmas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIÊNCIAS */}
      <section id="experiencias" className="min-h-screen w-full flex flex-col items-center justify-center bg-white p-5">
        <h1 className="text-3xl md:text-4xl font-black tracking-tighter mb-12 uppercase text-gray-900 text-center">
          Nossas Experiências
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">

          {["Passeios", "Hospedagem", "Transfer", "Aulas"].map((item) => (
            <div key={item} className="relative h-72 rounded-3xl flex items-end p-10 bg-black text-white text-3xl font-black italic">
              {item}
            </div>
          ))}

        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="min-h-screen bg-white p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-10">
            O que dizem sobre a Jeri 4XP
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div key={item.id} className="p-6 rounded-3xl shadow hover:shadow-xl transition flex flex-col">
                <p className="italic mb-4">{item.content}</p>

                <div className="flex items-center gap-4 mt-auto">
                  <img src={item.avatar} className="w-14 h-14 rounded-full" />
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <span className="text-sm text-gray-500">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="min-h-screen flex items-center justify-center bg-orange-600 p-10 text-white">
        <div className="text-center max-w-4xl">

          <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-xs uppercase mb-6">
            Fale com a gente
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-12">
            Prepare sua próxima aventura em Jeri
          </h1>

          <div className="grid md:grid-cols-3 gap-8">

            <a href="https://wa.me/5585999001339" target="_blank" className="bg-white/10 p-8 rounded-3xl hover:bg-white hover:text-orange-600">
              WhatsApp<br />
              <strong>85 9 9900-1339</strong>
            </a>

            <a href="https://instagram.com/jeri4xp" target="_blank" className="bg-white/10 p-8 rounded-3xl hover:bg-white hover:text-orange-600">
              Instagram<br />
              <strong>@jeri4xp</strong>
            </a>

            <a href="mailto:jeri4xp@gmail.com" className="bg-white/10 p-8 rounded-3xl hover:bg-white hover:text-orange-600">
              E-mail<br />
              <strong>jeri4xp@gmail.com</strong>
            </a>

          </div>

          <div className="mt-20">
            <p className="text-sm uppercase">
              Jericoacoara • Ceará • Brasil
            </p>
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
