import { Image } from '@/components/ui/image';
import { AnimatePresence, motion } from "framer-motion";
import { Camera, ChevronDown, Home, MapPin, MessageCircle, Star } from "lucide-react";
import { useState } from "react";

export default function HospedagemPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const navItems = [
    { name: "Visão Geral", link: "#geralHospedagem" },
    { name: "Onde se Hospedar", link: "#localizacoes" },
    { name: "Tipos", link: "#tipos" },
    { name: "Galeria", link: "#galeria" },
    { name: "Dúvidas", link: "#duvidaHospedagem" },
    { name: "Contato", link: "#contato" },
  ];

  const faqs = [
    {
      question: "Qual a melhor região para se hospedar em Jericoacoara?",
      answer: "A melhor região é próxima ao centrinho da vila, pois oferece fácil acesso à praia, restaurantes, comércio e aos pontos de saída dos passeios.",
    },
    {
      question: "É melhor ficar em pousada ou hotel?",
      answer: "Depende do seu perfil. Pousadas costumam ser mais aconchegantes e integradas à vila, enquanto hotéis e resorts oferecem infraestrutura de lazer mais robusta.",
    },
    {
      question: "Preciso reservar com antecedência?",
      answer: "Sim, Jeri é um destino muito procurado o ano todo. Reservar com antecedência garante melhores tarifas e disponibilidade nas hospedagens mais bem localizadas.",
    },
    {
      question: "Existem opções para famílias?",
      answer: "Com certeza! Há hotéis com áreas kids e pousadas com quartos conjugados que acomodam confortavelmente grupos e famílias.",
    },
  ];

  const accommodationTypes = [
    { title: "Pousadas Econômicas", desc: "Conforto e ótimo custo-benefício perto do centro.", icon: <Home className="text-orange-600" /> },
    { title: "Casais & Românticas", desc: "Ambientes exclusivos e pé na areia para momentos especiais.", icon: <Star className="text-orange-600" /> },
    { title: "Famílias & Grupos", desc: "Estrutura completa com lazer e quartos espaçosos.", icon: <MapPin className="text-orange-600" /> },
    { title: "Resorts & Luxo", desc: "Experiência premium com serviços exclusivos e sofisticação.", icon: <Camera className="text-orange-600" /> },
  ];

  return (
    <div className="font-sans bg-slate-50 selection:bg-orange-100 selection:text-orange-600">

      {/* HERO SECTION */}
      <section className="relative h-screen w-full text-white overflow-hidden">
        <header className="absolute w-full flex justify-between px-6 md:px-10 py-6 z-50 items-center">
          <Image src="https://static.wixstatic.com/media/792b6b_db67302a203f42429486f97568002b88~mv2.png?originWidth=1152&originHeight=576" alt="Logo Jeri4xp" className="w-20 md:w-28" />

          <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
            {navItems.map((item) => (
              <a key={item.name} href={item.link} className="hover:text-orange-500 transition-colors drop-shadow-md">
                {item.name}
              </a>
            ))}
          </nav>

          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-3xl p-2">☰</button>
        </header>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center gap-8 font-bold"
            >
              <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-10 text-4xl">✕</button>
              {navItems.map((item) => (
                <a key={item.name} href={item.link} onClick={() => setIsMenuOpen(false)} className="text-2xl hover:text-orange-600 transition">
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image src="/jeri1.webp" className="absolute w-full h-full object-cover" alt="Hospedagem em Jeri" />

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4"
          >
            Sua Estadia dos Sonhos
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-black italic tracking-tighter mb-6 leading-tight"
          >
            Jeri4xp: Sua conexão <br /> com o paraíso
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl text-lg md:text-xl text-slate-100 mb-10 font-light"
          >
            Descubra as melhores opções de hospedagem para aproveitar Jericoacoara com conforto, praticidade e curadoria exclusiva.
          </motion.p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5585999001339"
            className="bg-orange-600 px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-orange-600 transition-all shadow-xl"
          >
            Falar com Especialista
          </motion.a>
        </div>
      </section>

      {/* VISÃO GERAL - INTRO */}
      <section id="geralHospedagem" className="py-24 px-6 bg-orange-600 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 text-slate-800 relative">
          <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-1.5 bg-orange-600 rounded-full mb-6" />
            <h2 className="text-3xl md:text-5xl font-black text-center leading-tight">
              A Hospedagem Ideal para <br /> viver <span className="text-orange-600 font-serif italic">Jericoacoara</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 text-slate-600 leading-relaxed text-lg">
            <div className="space-y-6">
              <p className="first-letter:text-5xl first-letter:font-black first-letter:text-orange-600 first-letter:mr-3 first-letter:float-left">
                Hospedar-se bem faz toda a diferença para aproveitar Jericoacoara com mais conforto, praticidade e tranquilidade. A vila oferece opções para todos os estilos de viagem.
              </p>
              <p>
                Para quem busca praticidade, ficar próximo ao centrinho é uma ótima escolha. Assim, você terá fácil acesso a restaurantes, lojas e aos principais pontos de saída dos passeios.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                Se a ideia for relaxar, há opções mais reservadas, perfeitas para casais ou quem deseja privacidade. Oferecemos curadoria de hospedagens com serviços pensados para sua melhor experiência.
              </p>
              <p className="font-semibold text-orange-600 italic">
                Seja para uma viagem romântica ou em família, escolher o lugar certo é o primeiro passo para uma viagem inesquecível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIPOS DE HOSPEDAGEM */}
      <section id="tipos" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Categorias</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">Tipos de Hospedagem</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {accommodationTypes.map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center group"
            >
              <div className="p-4 bg-orange-50 rounded-2xl mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-800">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ONDE SE HOSPEDAR - LOCALIZAÇÕES */}
      <section id="localizacoes" className="py-24 px-6 bg-slate-900 text-white rounded-[4rem] mx-4 md:mx-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Localizações</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 mb-8">Onde seu coração <br /> quer ficar?</h2>
            <div className="space-y-6">
              {[
                { place: "Vila de Jericoacoara", desc: "O coração de tudo. Ideal para quem quer estar a passos de restaurantes e do agito." },
                { place: "Praia do Preá", desc: "Paraíso do Kitesurf. Mais tranquilo, rústico e com hotéis de charme incríveis." },
                { place: "Tatajuba", desc: "Isolamento luxuoso. Perfeito para quem busca conexão total com a natureza virgem." }
              ].map((loc) => (
                <div key={loc.place} className="flex gap-4 border-l-2 border-orange-600 pl-6 py-2">
                  <div>
                    <h4 className="font-bold text-xl text-orange-500">{loc.place}</h4>
                    <p className="text-slate-400">{loc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Image src="/jeri2.webp" className="rounded-3xl h-64 w-full object-cover" />
              <Image src="/jeri3.webp" className="rounded-3xl h-48 w-full object-cover" />
            </div>
            <div className="pt-12 space-y-4">
              <Image src="/jeri4.webp" className="rounded-3xl h-48 w-full object-cover" />
              <Image src="/jeri5.webp" className="rounded-3xl h-64 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Galeria de Inspirações</h2>
        <p className="text-slate-500 mb-12 max-w-2xl mx-auto">Confira ambientes reais e escolha o cenário perfeito para suas próximas fotos em Jeri.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {Array(8).fill(0).map((_, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-2xl h-64 bg-slate-200">
               <Image src={`/galeria-${i+1}.webp`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidaHospedagem" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900">Dúvidas Frequentes</h2>
            <div className="w-16 h-1 bg-orange-600 mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-2 border-slate-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full p-6 text-left font-bold flex justify-between items-center text-slate-800 hover:bg-slate-50 transition"
                >
                  {faq.question}
                  <ChevronDown className={`text-orange-600 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedFaq === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RODAPÉ / CONTATO */}
      <footer id="contato" className="bg-orange-600 text-white py-20 px-6 rounded-t-[4rem]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 italic">Vamos planejar sua <br /> estadia em Jeri?</h2>
            <p className="text-orange-100 text-lg mb-8">Nossa equipe está pronta para encontrar a melhor tarifa e a hospedagem ideal para você.</p>
          </div>

          <div className="space-y-6">
             <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-md">
                <p className="text-xs uppercase tracking-widest opacity-70 mb-2">WhatsApp Oficial</p>
                <p className="text-2xl font-bold">85 9 9900-1339</p>
             </div>
             <div className="flex gap-4">
                <a href="https://instagram.com/jeri4xp" className="flex-1 bg-white/10 p-4 rounded-2xl hover:bg-white hover:text-orange-600 transition font-bold">Instagram</a>
                <a href="mailto:jeri4xp@gmail.com" className="flex-1 bg-white/10 p-4 rounded-2xl hover:bg-white hover:text-orange-600 transition font-bold">E-mail</a>
             </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-sm opacity-60">
          <p>© 2026 Jeri4xp • Jericoacoara, Ceará, Brasil</p>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/5585999001339"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 p-4 rounded-full text-white shadow-2xl transition-all z-[60] scale-110"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
