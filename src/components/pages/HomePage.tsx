// WI-HPI
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { CustomerTestimonials } from '@/entities';
import { BaseCrudService } from '@/integrations';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  MessageCircle,
  Quote
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [testimonials, setTestimonials] = useState<CustomerTestimonials[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await BaseCrudService.getAll<CustomerTestimonials>('testimonials', {}, { limit: 6 });
      setTestimonials(res.items);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5585999001339', '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-paragraph text-foreground overflow-x-hidden">
      <Header />

      {/* HERO SECTION - TIPOGRAFIA GIGANTE */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="https://jeri4xp.vercel.app/img/jeri1.e05b0107.webp"
            className="w-full h-full object-cover opacity-50"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>

        <div className="relative z-10 w-full px-6 flex flex-col items-center">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-[18vw] md:text-[15vw] leading-[0.8] font-black italic uppercase tracking-tighter text-white text-center"
          >
            Jeri<span className="text-accent">4</span>xp
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-col items-center"
          >
            <p className="text-white text-xl md:text-3xl font-light italic mb-10 tracking-widest uppercase">
              O Paraíso é aqui.
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-accent hover:bg-white hover:text-accent text-white px-16 py-10 rounded-none text-2xl font-black italic uppercase transition-all shadow-2xl scale-110 md:scale-125"
            >
              RESERVAR AGORA
            </Button>
          </motion.div>
        </div>
      </section>

      {/* EXPERIÊNCIAS - LINKS GIGANTES EM LISTA */}
      <section id="experiencias" className="py-0 bg-secondary">
        {[
          { title: 'Passeios', img: 'https://jeri4xp.vercel.app/img/passeio.4d2eed74.webp', link: '/passeios' },
          { title: 'Hospedagem', img: 'https://jeri4xp.vercel.app/img/hotel.a362b7ec.webp', link: '/hospedagem' },
          { title: 'Transfer', img: 'https://jeri4xp.vercel.app/img/transfer.fb2f24b4.webp', link: '/transfer' },
          { title: 'Aulas', img: 'https://jeri4xp.vercel.app/img/aula.208d909e.webp', link: '/aulas' },
        ].map((item, i) => (
          <Link
            key={i}
            to={item.link}
            className="group relative w-full h-[25vh] md:h-[30vh] flex items-center justify-between px-6 md:px-20 border-b border-white/10 overflow-hidden hover:bg-accent transition-colors duration-500"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
              <img src={item.img} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" alt={item.title} />
            </div>

            <h2 className="relative z-10 text-6xl md:text-[8vw] font-black italic uppercase tracking-tighter text-white group-hover:translate-x-10 transition-transform duration-500">
              {item.title}
            </h2>

            <ArrowRight className="relative z-10 text-white w-12 h-12 md:w-24 md:h-24 opacity-0 -translate-x-20 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
          </Link>
        ))}
      </section>

      {/* HISTÓRIA - TEXTO IMPACTANTE */}
      <section id="historia" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <h2 className="text-[12vw] leading-none font-black italic uppercase text-accent/10 absolute -top-20 -left-10 select-none">
                HISTORY
              </h2>
              <h3 className="text-6xl md:text-8xl font-black italic text-secondary uppercase tracking-tighter leading-none relative z-10">
                A Vila <br /> <span className="text-accent">Sem Tempo</span>
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xl md:text-3xl font-light italic text-gray-600 leading-tight space-y-8"
            >
              <p>
                Jericoacoara é um refúgio onde o asfalto não chega e as estrelas guiam a noite.
              </p>
              <p className="text-secondary font-black not-italic uppercase text-4xl border-l-8 border-accent pl-6">
                Eleita uma das 10 praias mais bonitas do mundo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - BOLD STYLE */}
      <section id="depoimentos" className="py-32 bg-[#F2F2F2]">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-6xl md:text-[6vw] font-black italic uppercase tracking-tighter text-secondary leading-none">
              Vozes do <span className="text-accent">Paraíso</span>
            </h2>
          </div>

          {isLoading ? (
            <LoadingSpinner className="text-accent mx-auto" />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-12 hover:bg-accent hover:text-white transition-all duration-500 group">
                  <Quote className="text-accent group-hover:text-white mb-6" size={40} />
                  <p className="text-xl italic font-light leading-relaxed mb-10 italic">
                    "{t.reviewText}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img src={t.customerPhoto || `https://i.pravatar.cc/150?u=${i}`} className="w-16 h-16 rounded-none grayscale group-hover:grayscale-0" alt={t.customerName} />
                    <div>
                      <h4 className="font-black uppercase text-lg">{t.customerName}</h4>
                      <p className="text-xs uppercase tracking-widest opacity-60 font-bold">{t.customerLocation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CONTACT - CALL TO ACTION GIGANTE */}
      <section id="contato" className="py-40 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none text-[30vw] font-black italic flex items-center justify-center text-white/10 uppercase">
          JERI
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-6xl md:text-[10vw] font-black italic uppercase tracking-tighter leading-none mb-12">
            Fale <span className="text-accent">Conosco</span>
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 mb-20">
            <a href="https://instagram.com/jeri4xp" className="text-4xl md:text-5xl font-black italic uppercase hover:text-accent transition-colors">Instagram</a>
            <a href="mailto:jeri4xp@gmail.com" className="text-4xl md:text-5xl font-black italic uppercase hover:text-accent transition-colors">E-mail</a>
          </div>

          <Button
            onClick={handleWhatsAppClick}
            className="bg-accent hover:bg-white hover:text-accent text-white px-20 py-12 rounded-none text-4xl font-black italic uppercase transition-all shadow-2xl"
          >
            WHATSAPP
          </Button>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp Simple */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 10 }}
        onClick={handleWhatsAppClick}
        className="fixed bottom-10 right-10 z-[100] bg-[#25D366] text-white p-6 rounded-none shadow-2xl flex items-center justify-center"
      >
        <MessageCircle size={40} fill="white" />
      </motion.button>
    </div>
  );
}
