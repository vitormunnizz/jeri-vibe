import { motion } from 'framer-motion';
import {
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Quote,
  Star
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Componentes da sua biblioteca UI no Wix
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

// Integração de Dados
import { CustomerTestimonials } from '@/entities';
import { BaseCrudService } from '@/integrations';

// Variantes de Animação
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function HomePage() {
  const [testimonials, setTestimonials] = useState<CustomerTestimonials[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      // Busca os depoimentos reais do seu banco de dados Wix
      const result = await BaseCrudService.getAll<CustomerTestimonials>('testimonials', {}, { limit: 6 });
      setTestimonials(result.items);
    } catch (error) {
      console.error('Erro ao carregar depoimentos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5585999001339', '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      <Header />

      {/* --- SEÇÃO HERO --- */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="https://jeri4xp.vercel.app/img/jeri1.e05b0107.webp"
            className="w-full h-full object-cover opacity-70"
            alt="Jericoacoara"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-bold tracking-[0.3em] uppercase mb-4 block text-sm"
          >
            Bem-vindo ao Destino Nº 1
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter mb-8 leading-tight uppercase"
          >
            Jeri4xp: Sua conexão <br /> com o paraíso.
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-orange-600 hover:bg-white hover:text-orange-600 text-white rounded-full px-12 py-8 text-lg font-bold uppercase transition-all shadow-2xl border-none"
            >
              Reservar Agora
            </Button>
          </motion.div>
        </div>
      </section>

      {/* --- SEÇÃO HISTÓRIA --- */}
      <section id="historia" className="py-24 bg-orange-600 text-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <span className="uppercase tracking-[0.2em] text-xs font-bold mb-4 block opacity-80">Descubra a Vila</span>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8 leading-none">
                História de Jericoacoara
              </h2>
              <div className="h-1 w-20 bg-white mb-10 rounded-full" />

              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-xl md:text-2xl font-light leading-snug">
                  <span className="text-7xl font-black float-left mr-3 mt-1 leading-[0.8]">J</span>
                  ericoacoara, carinhosamente apelidada de Jeri, é um destino onde o tempo parece ditar o próprio ritmo através do movimento das marés e dos ventos.
                </p>
                <p className="opacity-90 border-l-2 border-white/20 pl-6 italic">
                  Localizada no Ceará, a cerca de 300 km de Fortaleza, a vila transformou-se de uma isolada aldeia de pescadores em um refúgio de fama internacional.
                </p>
                <p>
                  A essência rústica permanece intacta: as ruas continuam cobertas de areia e a iluminação pública é inexistente para preservar o brilho do céu estrelado.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-white/10 rounded-[3rem] blur-2xl group-hover:bg-white/20 transition-all" />
              <Image
                src="https://jeri4xp.vercel.app/img/jeri1.e05b0107.webp"
                className="relative rounded-[2.5rem] shadow-2xl border-8 border-white/10 object-cover aspect-[4/5]"
                alt="Jeri History"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SEÇÃO EXPERIÊNCIAS --- */}
      <section id="experiencias" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 italic uppercase tracking-tighter mb-4">Nossas Experiências</h2>
            <div className="w-20 h-1.5 bg-orange-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Passeios', path: '/passeios', img: 'https://jeri4xp.vercel.app/img/passeio.4d2eed74.webp' },
              { title: 'Hospedagem', path: '/hospedagem', img: 'https://jeri4xp.vercel.app/img/hotel.a362b7ec.webp' },
              { title: 'Transfer', path: '/transfer', img: 'https://jeri4xp.vercel.app/img/transfer.fb2f24b4.webp' },
              { title: 'Aulas', path: '/aulas', img: 'https://jeri4xp.vercel.app/img/aula.208d909e.webp' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={item.path}
                  className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-orange-200 transition-all block bg-slate-900"
                >
                  <Image
                    src={item.img}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-50 transition-transform duration-700"
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                    <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4">{item.title}</h3>
                    <Button className="bg-orange-600 hover:bg-white hover:text-orange-600 text-white rounded-full text-xs font-bold uppercase tracking-widest px-6 transition-all">
                      Saiba Mais
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEÇÃO DEPOIMENTOS --- */}
      <section id="depoimentos" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 italic uppercase tracking-tighter">O que dizem sobre nós</h2>
          </div>

          {isLoading ? (
            <LoadingSpinner className="mx-auto text-orange-600" />
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col relative"
                >
                  <div className="flex justify-between mb-6">
                    <Quote className="text-orange-600/20 w-10 h-10" />
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-orange-500 text-orange-500" />)}
                    </div>
                  </div>

                  <p className="text-slate-700 italic leading-relaxed mb-8 flex-grow">
                    "{t.reviewText}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                    <Image
                      src={t.customerPhoto || `https://i.pravatar.cc/150?u=${i}`}
                      className="w-14 h-14 rounded-full object-cover border-2 border-orange-100"
                    />
                    <div>
                      <h4 className="font-extrabold text-slate-900 uppercase text-sm">{t.customerName}</h4>
                      <div className="flex items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">
                        <MapPin size={10} className="mr-1 text-orange-600" />
                        {t.customerLocation}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- SEÇÃO CONTATO --- */}
      <section id="contato" className="py-24 bg-orange-600 text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.span
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs uppercase tracking-widest font-bold mb-6"
          >
            Fale com a gente
          </motion.span>

          <h2 className="text-4xl md:text-7xl font-black mb-16 italic uppercase tracking-tighter leading-none">
            Prepare sua próxima <br /> aventura em Jeri
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <MessageCircle size={32} />, label: "WhatsApp", val: "85 9 9900-1339", link: "https://wa.me/5585999001339" },
              { icon: <Instagram size={32} />, label: "Instagram", val: "@jeri4xp", link: "https://instagram.com/jeri4xp" },
              { icon: <Mail size={32} />, label: "E-mail", val: "jeri4xp@gmail.com", link: "mailto:jeri4xp@gmail.com" }
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group bg-white/10 hover:bg-white hover:text-orange-600 p-10 rounded-[2.5rem] transition-all duration-500 border border-white/10 flex flex-col items-center shadow-xl hover:-translate-y-2"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">{item.label}</p>
                <p className="font-black italic text-lg">{item.val}</p>
              </a>
            ))}
          </div>

          <div className="mt-24 pt-10 border-t border-white/10 opacity-60 text-sm font-bold tracking-[0.3em] uppercase">
            Jericoacoara • Ceará • Brasil
          </div>
        </div>
      </section>

      <Footer />

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
        <MessageCircle size={32} strokeWidth={2.5} className="relative z-10" />

        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 pointer-events-none uppercase italic">
          Reservar pelo WhatsApp
        </span>
      </motion.button>
    </div>
  );
}
