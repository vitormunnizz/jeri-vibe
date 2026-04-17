import { Image } from '@/components/ui/image';
import { useState } from 'react';

const JeriLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dados dos depoimentos (extraídos de DepoimentosCards.vue)
  const testimonials = [
    { id: 1, name: 'Axelle Rulfi', role: 'Suíça', content: "I found out about Jeri 4XP through a friend's recommendation and it was all great. Kitesurfing and sightseeing, it was all perfect!", avatar: 'https://i.pravatar.cc/150?u=axelle' },
    { id: 2, name: 'Remy Sanchez', role: 'França', content: "Service excellent, les prestations ont même dépassé mes attentes. J'ai testé le wingfoil et fait une excursion en quad dans les dunes, inoubliable!", avatar: 'https://i.pravatar.cc/150?u=remy' },
    { id: 3, name: 'David Kennedy', role: 'Londres, Reino Unido', content: "I had the best experiences in Jericoacoara. Booking everything through Jeri 4XP was the best option.", avatar: 'https://i.pravatar.cc/150?u=david' },
    { id: 4, name: 'Gabi', role: 'Fortaleza, Brasil', content: "Minha experiência com a Jeri 4XP foi fantástica! A equipe é super profissional e atenciosa, me dando todo o suporte necessário. Já quero voltar!", avatar: 'https://i.pravatar.cc/150?u=gabi' },
    { id: 5, name: 'Lilian Maria', role: 'São Paulo, Brasil', content: "Maravilhoso atendimento, excelente, adorei o guia Adriano e Vinicius hyper atencioso. Os passeios foram incriveis, quadriciclo, jet ski e otimas lembranças.", avatar: 'https://i.pravatar.cc/150?u=lilian' },
    { id: 6, name: 'Vitor Muniz', role: 'Sobral, Brasil', content: "Todas as vezes que for em jericoacoara, vou novamente com a Jeri4xp! Excelente atendimento por parte da equipe.", avatar: 'https://i.pravatar.cc/150?u=vitor' }
  ];

  const navItems = [
    { name: 'História', link: '#historia' },
    { name: 'Experiências', link: '#experiencias' },
    { name: 'Depoimentos', link: '#depoimentos' },
    { name: 'Contato', link: '#contato' }
  ];

  return (
    <div className="font-sans antialiased text-gray-900">

      {/* --- MENU & HERO (MenuSite.vue) --- */}
      <section className="relative w-full h-screen overflow-hidden text-white uppercase font-bold tracking-widest">
        <header className="absolute w-full flex justify-between z-50 px-10 py-5 items-center">
          <a href="/"><Image src="/logo_jeri4xp.png" alt="Logo Jeri4xp" className="w-24" /></a>

          <nav className="hidden md:block">
            <ul className="flex gap-10 text-lg">
              {navItems.map(item => (
                <li key={item.name}>
                  <a href={item.link} className="hover:text-orange-600 transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-3xl">☰</button>
        </header>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center gap-8 font-bold">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-10 text-4xl">x</button>
            {navItems.map(item => (
              <a key={item.name} href={item.link} onClick={() => setIsMenuOpen(false)} className="text-2xl hover:text-orange-600">
                {item.name}
              </a>
            ))}
          </div>
        )}

        <main className="relative h-full bg-black">
          <Image src="/jeri1.webp" className="w-full h-full object-cover opacity-70" alt="Jeri Background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <span className="text-orange-600 mb-2 tracking-widest">Bem-vindo ao Destino Nº 1</span>
            <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-6 leading-tight">
              Jeri4xp: Sua conexão <br /> com o paraíso.
            </h1>
            <a href="https://wa.me/5585999001339" target="_blank" rel="noreferrer"
               className="bg-orange-600 px-10 py-4 rounded-full text-xs hover:bg-white hover:text-orange-600 transition-all shadow-lg">
              Reservar Agora
            </a>
          </div>
        </main>

      <div className="bg-white p-10 text-center border-t">
        <h2 className="text-xl font-bold">Sua aventura em Jericoacoara começa aqui</h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto italic">
          Turismo com qualidade, aventuras personalizadas e memórias inesquecíveis em Jericoacoara.
        </p>
      </div>
      </section>

      {/* --- HISTÓRIA (HistoriaJeri.vue) --- */}
  <section id="historia" className="bg-orange-600 min-h-screen flex items-center justify-center py-20 px-6 relative font-sans">

    <div className="max-w-5xl w-full text-white">

      <div className="flex flex-col items-center mb-12">
        <span className="uppercase tracking-widest text-xs font-bold mb-2">
          Descubra a Vila
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-center">
          História de Jericoacoara
        </h1>
        <div className="h-1 w-24 bg-white mt-6 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 leading-relaxed">

        <div className="space-y-6">
          <p
            className="text-xl md:text-2xl font-light first-letter:text-7xl first-letter:font-black first-letter:mr-3 first-letter:float-left">
            Jericoacoara, carinhosamente apelidada de Jeri, é um destino onde o tempo parece ditar o próprio ritmo
            através do movimento das marés e dos ventos.
          </p>
          <p className="text-lg opacity-90 border-l-2 border-white/20 pl-6 italic">
            Localizada no Ceará, a cerca de 300 km de Fortaleza, a vila transformou-se de uma isolada aldeia de
            pescadores em um refúgio de fama internacional.
          </p>
          <p className="text-lg">
            A essência rústica permanece intacta: as ruas continuam cobertas de areia e a iluminação pública é
            inexistente para preservar o brilho do céu estrelado, criando uma conexão única com o cosmos.
          </p>
        </div>

        <div className="space-y-6 text-lg">
          <p>
            A história mudou drasticamente em 1984, quando o The Washington Post a elegeu como uma das dez praias mais
            bonitas do mundo.
          </p>

          <p>
            Hoje, protegida como Parque Nacional, a jornada de contrastes começa pela icônica Pedra Furada e passa pela
            Duna do Pôr do Sol.
          </p>

          <p>
            Para quem busca relaxamento, as famosas redes nas lagoas do Paraíso e Azul são paradas obrigatórias. Já o
            lado oeste revela a beleza crua do Mangue Seco e a travessia do Rio Guriú, onde a natureza se manifesta em
            raízes expostas e águas calmas.
          </p>
        </div>

      </div>
    </div>
  </section>

      {/* --- EXPERIÊNCIAS (PaginasExperiencias.vue) --- */}
      <section id="experiencias" className="min-h-screen w-full flex flex-col items-center justify-center bg-white py-20 px-5">
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-12 uppercase text-gray-900">Nossas Experiências</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {['Passeios', 'Hospedagem', 'Transfer', 'Aulas'].map((item) => (
            <div key={item} className="group relative h-72 rounded-3xl flex flex-col justify-end items-start p-10 overflow-hidden bg-black shadow-xl">
              <div className="absolute inset-0 w-full h-full bg-orange-900/20 z-0"></div>
              <h3 className="relative z-10 text-white text-4xl font-black mb-4 uppercase italic tracking-tighter">{item}</h3>
              <button className="relative z-10 bg-orange-600 text-white py-3 px-8 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-orange-600 transition-all">
                Saiba mais
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- DEPOIMENTOS (DepoimentosCards.vue) --- */}
      <section id="depoimentos" className="min-h-screen bg-slate-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl md:text-4xl font-black text-black mb-12">O que dizem sobre a Jeri 4XP</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(item => (
              <div key={item.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all flex flex-col italic">
                <span className="text-orange-600 text-5xl font-serif">“</span>
                <p className="text-slate-700 text-lg mb-6">{item.content}</p>
                <div className="mt-auto flex items-center gap-4 not-italic">
                  <Image src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border-2 border-orange-600" />
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTATO (ContatoApp.vue) --- */}
      <section id="contato" className="bg-orange-600 py-20 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-xs font-bold mb-6">Fale com a gente</span>
          <h2 className="text-4xl md:text-5xl font-black mb-12">Prepare sua próxima aventura em Jeri</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <ContactCard title="WhatsApp" value="85 9 9900-1339" link="https://wa.me/5585999001339" label="Clique para conversar" />
            <ContactCard title="Instagram" value="@jeri4xp" link="https://instagram.com/jeri4xp" label="Acompanhe as aventuras" />
            <ContactCard title="E-mail" value="jeri4xp@gmail.com" link="mailto:jeri4xp@gmail.com" label="Envie sua mensagem" />
          </div>
        </div>
      </section>

      {/* --- WHATSAPP FLOATING BUTTON (WhatsAppButton.vue) --- */}
      <a href="https://wa.me/5585999001339" target="_blank" rel="noreferrer"
         className="fixed bottom-6 right-6 z-50 bg-green-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
        <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.438 5.662 1.439h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

// Componente auxiliar para os cards de contato
const ContactCard = ({ title, value, link, label }) => (
  <a href={link} target="_blank" rel="noreferrer"
     className="group bg-white/10 backdrop-blur-md p-8 rounded-3xl hover:bg-white hover:text-orange-600 transition-all duration-500 shadow-2xl">
    <h3 className="font-bold text-xl mb-2 italic">{title}</h3>
    <span className="text-lg font-black block break-all">{value}</span>
    <p className="text-xs mt-4 opacity-70 uppercase tracking-tighter">{label}</p>
  </a>
);

export default JeriLandingPage;
