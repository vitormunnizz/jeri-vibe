import { images } from '@/assets/images';
import { Image } from '@/components/ui/image';
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function HomePage() {
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
      avatar: images.avatarPlaceholder("axelle"),
    },
    {
      id: 2,
      name: "Remy Sanchez",
      role: "França",
      content:
        "Service excellent, les prestations ont même dépassé mes attentes. J'ai testé le wingfoil et fait une excursion en quad dans les dunes, inoubliable!",
      avatar: images.avatarPlaceholder("remy"),
    },
    {
      id: 3,
      name: "David Kennedy",
      role: "Londres, Reino Unido",
      content:
        "I had the best experiences in Jericoacoara. Booking everything through Jeri 4XP was the best option.",
      avatar: images.avatarPlaceholder("david"),
    },
    {
      id: 4,
      name: "Gabi",
      role: "Fortaleza, Brasil",
      content:
        "Minha experiência com a Jeri 4XP foi fantástica! A equipe é super profissional e atenciosa, me dando todo o suporte necessário. Já quero voltar!",
      avatar: images.avatarPlaceholder("gabi"),
    },
    {
      id: 5,
      name: "Lilian Maria",
      role: "São Paulo, Brasil",
      content:
        "Maravilhoso atendimento, excelente, adorei o guia Adriano e Vinicius hyper atencioso. Os passeios foram incriveis, quadriciclo, jet ski e otimas lembranças.",
      avatar: images.avatarPlaceholder("lilian"),
    },
    {
      id: 6,
      name: "Vitor Muniz",
      role: "Sobral, Brasil",
      content:
        "Todas as vezes que eu for a Jericoacoara, com certeza escolherei a Jeri4xp novamente! O atendimento da equipe é simplesmente excelente.",
      avatar: images.avatarPlaceholder("vitor"),
    },
  ];

  const experiences = [
    { name: "Passeios", link: "/passeios" },
    { name: "Hospedagem", link: "/hospedagem" },
    { name: "Transfer", link: "/transfer" },
    { name: "Aulas", link: "/aulas" },
  ];

  return (
    <div className="font-sans">
      {/* HERO */}
      <section className="min-h-screen w-full text-white relative overflow-hidden">
        <header className="absolute w-full flex justify-between px-6 md:px-10 py-4 z-50 items-center">
          <Image src={images.logo} alt="Logo Jeri4xp" className="w-20 md:w-24" />

          <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wider">
            {navItems.map((item) => (
              <a key={item.name} href={item.link} className="hover:text-orange-600 transition">
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
                className="text-xl font-black hover:text-orange-600"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}

        <Image src={images.hero} className="absolute w-full h-full object-cover opacity-80" alt="Hero background" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h1 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-6 text-shadow">
            Jeri4xp: Sua conexão <br /> com o paraíso.
          </h1>

          <a
            href="https://wa.me/5585999001339"
            target="_blank"
            rel="noreferrer"
            className="bg-orange-600 px-6 py-3 rounded-full text-xs font-bold hover:bg-white hover:text-orange-600 transition-all"
          >
            Reservar Agora
          </a>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section id="historia" className="bg-orange-600 py-20 px-6 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="uppercase tracking-widest text-xs font-bold mb-2">
              Descubra a Vila
            </span>
            <h2 className="text-3xl md:text-4xl font-black">
              História de Jericoacoara
            </h2>
            <div className="h-1 w-20 bg-white mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 leading-relaxed text-base md:text-lg">
            <div className="space-y-5">
              <p>
                Jericoacoara, carinhosamente apelidada de Jeri, é um destino onde o tempo parece ditar o próprio ritmo através do movimento das marés e dos ventos. Localizada no Ceará, a cerca de 300 km de Fortaleza, a vila transformou-se de uma isolada aldeia de pescadores em um refúgio de fama internacional.
              </p>

              <p className="italic border-l-2 border-white/30 pl-5">
                A essência rústica permanece intacta: as ruas continuam cobertas de areia e a iluminação pública é inexistente para preservar o brilho do céu estrelado, criando uma conexão única com o cosmos.
              </p>

              <p>
                Desde tempos imemoriais, Jeri tem sido um ponto de encontro entre o mar e a terra, onde a natureza bruta se encontra com a hospitalidade calorosa de seu povo. Os pescadores locais ainda mantêm suas tradições ancestrais, enquanto a vila evolui para receber visitantes de todo o mundo.
              </p>
            </div>

            <div className="space-y-5">
              <p>
                A história mudou drasticamente em 1984, quando o The Washington Post a elegeu como uma das dez praias mais bonitas do mundo. Este reconhecimento internacional transformou Jeri em um destino procurado por aventureiros, artistas e buscadores de paz.
              </p>

              <p>
                Hoje, protegida como Parque Nacional, a jornada de contrastes começa pela icônica Pedra Furada e passa pela Duna do Pôr do Sol, oferecendo vistas que parecem saídas de um sonho. Para quem busca relaxamento, as famosas redes nas lagoas do Paraíso e Azul são paradas obrigatórias.
              </p>

              <p>
                Já o lado oeste revela a beleza crua do Mangue Seco e a travessia do Rio Guriú, onde a natureza se manifesta em raízes expostas e águas calmas. Cada canto de Jeri conta uma história, cada praia oferece uma experiência única, e cada pôr do sol é uma promessa de que voltaremos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIAS */}
      <section id="experiencias" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="uppercase tracking-widest text-xs font-bold mb-2 text-orange-600">
              Explore Jericoacoara
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Nossas Experiências
            </h2>
            <div className="h-1 w-20 bg-orange-600 mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="group relative h-80 rounded-2xl flex flex-col justify-end items-start p-8 overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={
                    item.name === "Passeios"
                      ? images.experiencePasseios
                      : item.name === "Hospedagem"
                        ? images.experienceHospedagem
                        : item.name === "Transfer"
                          ? images.experienceTransfer
                          : images.experienceAulas
                  }
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-40"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-60 transition-all duration-300"></div>
                <div className="relative z-10 w-full">
                  <h2 className="text-white text-3xl font-black mb-4 uppercase italic tracking-tighter">
                    {item.name}
                  </h2>
                  <button className="bg-orange-600 text-white py-3 px-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-orange-600 hover:cursor-pointer transition-all duration-300">
                    Saiba mais
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gray-900">
            O que dizem sobre a Jeri 4XP
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div key={item.id} className="p-6 rounded-2xl bg-white shadow hover:shadow-md transition flex flex-col">
                <p className="italic text-gray-700 mb-4 text-sm leading-relaxed">{item.content}</p>

                <div className="flex items-center gap-3 mt-auto">
                  <Image src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{item.name}</h4>
                    <span className="text-xs text-gray-500">{item.role}</span>
                  </div>
                </div>
              </div>
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
