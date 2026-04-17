import { useState } from 'react';
// Se você estiver usando o ambiente completo da Wix (Velo/Wix IDE),
// você pode importar os serviços de banco de dados aqui.
// Caso contrário, mantivemos seus dados originais conforme o primeiro código.

const JeriSite = () => {
  // --- ESTADO PARA O MENU MOBILE (Funcionalidade) ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- DADOS (Exatamente como no seu script setup original) ---
  const navItems = [
    { name: 'História', link: '#historia' },
    { name: 'Experiências', link: '#experiencias' },
    { name: 'Depoimentos', link: '#depoimentos' },
    { name: 'Contato', link: '#contato' }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Axelle Rulfi',
      role: 'Suíça',
      content: "I found out about Jeri 4XP through a friend's recommendation and it was all great. Kitesurfing and sightseeing, it was all perfect!",
      avatar: 'https://i.pravatar.cc/150?u=axelle'
    },
    {
      id: 2,
      name: 'Remy Sanchez',
      role: 'França',
      content: "Service excellent, les prestations ont même dépassé mes attentes. J'ai testé le wingfoil et fait une excursion en quad dans les dunes, inoubliable!",
      avatar: 'https://i.pravatar.cc/150?u=remy'
    },
    {
      id: 3,
      name: 'David Kennedy',
      role: 'Londres, Reino Unido',
      content: "I had the best experiences in Jericoacoara. Booking everything through Jeri 4XP was the best option.",
      avatar: 'https://i.pravatar.cc/150?u=david'
    },
    {
      id: 4,
      name: 'Gabi',
      role: 'Fortaleza, Brasil',
      content: "Minha experiência com a Jeri 4XP foi fantástica! A equipe é super profissional e atenciosa, me dando todo o suporte necessário. Já quero voltar!",
      avatar: 'https://i.pravatar.cc/150?u=gabi'
    },
    {
      id: 5,
      name: 'Lilian Maria',
      role: 'São Paulo, Brasil',
      content: "Maravilhoso atendimento, excelente, adorei o guia Adriano e Vinicius hyper atencioso. Os passeios foram incriveis, quadriciclo, jet ski e otimas lembranças.",
      avatar: 'https://i.pravatar.cc/150?u=lilian'
    },
    {
      id: 6,
      name: 'Vitor Muniz',
      role: 'Sobral, Brasil',
      content: "Todas as vezes que for em jericoacoara, vou novamente com a Jeri4xp! Excelente atendimento por parte da equipe.",
      avatar: 'https://i.pravatar.cc/150?u=vitor'
    }
  ];

  return (
    <div className="w-full">

      {/* --- SEÇÃO HERO / HEADER --- */}
      <section className="min-h-screen w-full font-sans bg-white items-center justify-center text-center">
        <div className="relative w-full h-[560px] md:h-[600px] overflow-hidden text-white uppercase font-bold tracking-widest">

          <header className="absolute w-full flex justify-between z-50 px-10 py-2.5 md:items-center items-start">
            <a href="/">
              <img src="https://static.wixstatic.com/media/your-logo-link.png" alt="Logo Jeri4xp" className="w-25" />
              {/* Nota: Substitua o src acima pelo link da imagem na Wix */}
            </a>

            <nav className="hidden md:block">
              <ul className="flex gap-10 text-lg">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.link} className="hover:text-orange-600 transition-colors">{item.name}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden mt-2.5 text-3xl hover:cursor-pointer">☰</button>
          </header>

          {/* Menu Mobile */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center gap-8 font-bold text-white">
              <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-10 text-4xl hover:cursor-pointer">x</button>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-black tracking-tighter hover:text-orange-600 transition-all hover:cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}

          <main className="flex h-full bg-black">
            <img src="https://jeri4xp.vercel.app/img/jeri1.e05b0107.webp" className="w-full h-full object-cover opacity-85" alt="Hero" />
            <div className="absolute inset-0 z-25 flex flex-col items-center justify-center px-4">
              <span className="text-orange-600 mb-2">Bem-vindo ao Destino Nº 1</span>
              <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4 leading-tight">
                Jeri4xp: Sua conexão <br /> com o paraíso.
              </h1>
              <a href="https://wa.me/5585999001339" target="_blank" rel="noreferrer"
                className="bg-orange-600 px-10 py-4 rounded-full text-xs hover:bg-white hover:text-orange-600 transition-all shadow-lg">
                Reservar Agora
              </a>
            </div>
          </main>
        </div>

        <footer className="p-10 text-gray-800 bg-white">
          <h2 className="text-2xl font-bold">Sua aventura em Jericoacoara começa aqui</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto italic">
            Turismo com qualidade, aventuras personalizadas e memórias inesquecíveis em Jericoacoara.
          </p>
        </footer>
      </section>

      {/* --- SEÇÃO HISTÓRIA --- */}
      <section id="historia" className="bg-orange-600 min-h-screen flex items-center justify-center py-20 px-6 relative font-sans text-white">
        <div className="max-w-5xl w-full">
          <div className="flex flex-col items-center mb-12">
            <span className="uppercase tracking-widest text-xs font-bold mb-2">Descubra a Vila</span>
            <h1 className="text-4xl md:text-6xl font-black text-center">História de Jericoacoara</h1>
            <div className="h-1 w-24 bg-white mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 leading-relaxed">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-light">
                <span className="text-7xl font-black mr-3 float-left leading-[0.8]">J</span>
                ericoacoara, carinhosamente apelidada de Jeri, é um destino onde o tempo parece ditar o próprio ritmo através do movimento das marés e dos ventos.
              </p>
              <p className="text-lg opacity-90 border-l-2 border-white/20 pl-6 italic">
                Localizada no Ceará, a cerca de 300 km de Fortaleza, a vila transformou-se de uma isolada aldeia de pescadores em um refúgio de fama internacional.
              </p>
              <p className="text-lg">
                A essência rústica permanece intacta: as ruas continuam cobertas de areia e a iluminação pública é inexistente para preservar o brilho do céu estrelado.
              </p>
            </div>
            <div className="space-y-6 text-lg">
              <p>A história mudou drasticamente em 1984, quando o The Washington Post a elegeu como uma das dez praias mais bonitas do mundo.</p>
              <p>Hoje, protegida como Parque Nacional, a jornada de contrastes começa pela icônica Pedra Furada e passa pela Duna do Pôr do Sol.</p>
              <p>Para quem busca relaxamento, as famosas redes nas lagoas do Paraíso e Azul são paradas obrigatórias.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO EXPERIÊNCIAS --- */}
      <section id="experiencias" className="min-h-screen w-full flex flex-col items-center justify-center bg-white p-5">
        <h1 className="text-3xl md:text-4xl font-black tracking-tighter mb-12 uppercase text-gray-900 text-center">
          Nossas Experiências
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {[
            { title: 'Passeios', img: 'https://jeri4xp.vercel.app/img/passeio.4d2eed74.webp', link: '/passeios' },
            { title: 'Hospedagem', img: 'https://jeri4xp.vercel.app/img/hotel.a362b7ec.webp', link: '/hospedagem' },
            { title: 'Transfer', img: 'https://jeri4xp.vercel.app/img/transfer.fb2f24b4.webp', link: '/transfer' },
            { title: 'Aulas', img: 'https://jeri4xp.vercel.app/img/aula.208d909e.webp', link: '/aulas' },
          ].map((item) => (
            <div key={item.title} className="group relative h-70 rounded-3xl flex flex-col justify-end items-start p-10 overflow-hidden bg-black shadow-xl">
              <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-50" alt={item.title} />
              <div className="relative z-10">
                <h2 className="text-white text-4xl font-black mb-4 uppercase italic tracking-tighter">{item.title}</h2>
                <a href={item.link}>
                  <button className="bg-orange-600 text-white py-3 px-8 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-orange-600 hover:cursor-pointer transition-all duration-300">
                    Saiba mais
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SEÇÃO DEPOIMENTOS --- */}
      <section className="min-h-screen bg-white p-4 font-sans w-full" id="depoimentos">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-black text-black uppercase italic">O que dizem sobre a Jeri 4XP</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 italic">
            {testimonials.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-orange-600 text-4xl font-serif leading-none">“</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-orange-600 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">{item.content}</p>
                <div className="flex items-center gap-4 pt-6 mt-auto">
                  <img src={item.avatar} alt={item.name} className="w-14 h-14 rounded-full object-cover border-2 border-orange-100" />
                  <div className="not-italic">
                    <h4 className="font-extrabold text-black leading-tight uppercase text-sm">{item.name}</h4>
                    <div className="flex items-center text-slate-700 text-xs mt-1 font-bold">
                      <span className="text-orange-600 mr-1">📍</span> {item.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEÇÃO CONTATO --- */}
      <section id="contato" className="min-h-screen w-full flex items-center justify-center bg-orange-600 py-20 px-4">
        <div className="max-w-4xl z-10 text-center text-white">
          <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs uppercase tracking-widest font-bold mb-6">
            Fale com a gente
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-12 drop-shadow-lg italic uppercase tracking-tighter">
            Prepare sua próxima aventura em Jeri
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="https://wa.me/5585999001339" target="_blank" rel="noreferrer" className="group bg-white/10 backdrop-blur-md p-8 rounded-3xl hover:bg-white hover:text-orange-600 transition-all duration-500 shadow-2xl">
              <h3 className="font-bold text-xl mb-2 italic">WhatsApp</h3>
              <span className="text-lg font-black block">85 9 9900-1339</span>
            </a>
            <a href="https://instagram.com/jeri4xp" target="_blank" rel="noreferrer" className="group bg-white/10 backdrop-blur-md p-8 rounded-3xl hover:bg-white hover:text-orange-600 transition-all duration-500 shadow-2xl">
              <h3 className="font-bold text-xl mb-2 italic">Instagram</h3>
              <span className="text-lg font-black block">@jeri4xp</span>
            </a>
            <a href="mailto:jeri4xp@gmail.com" className="group bg-white/10 backdrop-blur-md p-8 rounded-3xl hover:bg-white hover:text-orange-600 transition-all duration-500 shadow-2xl">
              <h3 className="font-bold text-xl mb-2 italic">E-mail</h3>
              <span className="text-lg font-black block break-all">jeri4xp@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JeriSite;
