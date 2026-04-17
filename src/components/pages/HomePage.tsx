// WI-HPI
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { Tours, Accommodations, CustomerTestimonials } from '@/entities';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import {
  Star,
  MessageCircle,
  Instagram,
  Mail,
  MapPin,
  Quote,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  const navigate = useNavigate();
  const [tours, setTours] = useState<Tours[]>([]);
  const [accommodations, setAccommodations] = useState<Accommodations[]>([]);
  const [testimonials, setTestimonials] = useState<CustomerTestimonials[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [toursResult, accommodationsResult, testimonialsResult] = await Promise.all([
        BaseCrudService.getAll<Tours>('tours', {}, { limit: 4 }),
        BaseCrudService.getAll<Accommodations>('accommodations', {}, { limit: 4 }),
        BaseCrudService.getAll<CustomerTestimonials>('testimonials', {}, { limit: 6 })
      ]);
      setTours(toursResult.items);
      setAccommodations(accommodationsResult.items);
      setTestimonials(testimonialsResult.items);
    } catch (error) {
      console.error('Error loading data:', error);
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

      {/* HERO SECTION - DESIGN VIBRANTE */}
      <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Background com Zoom Lento */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://jeri4xp.vercel.app/img/jeri1.e05b0107.webp)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

        <div className="relative z-20 container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
              O Destino Nº 1 do Brasil
            </span>
            <h1 className="text-5xl md:text-8xl font-black italic text-white leading-[0.9] uppercase tracking-tighter mb-8">
              Jeri4xp: <br />
              <span className="text-accent">Conexão</span> <br />
              Paraíso.
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-md mb-10 font-light italic">
              Viva a essência rústica de Jericoacoara com experiências personalizadas e exclusivas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={handleWhatsAppClick}
                className="bg-accent hover:bg-white hover:text-accent text-white px-10 py-7 rounded-none text-lg font-black italic uppercase transition-all shadow-xl border-b-4 border-black/20"
              >
                Reservar Agora
              </Button>
              <a href="#experiencias" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 flex items-center gap-2 hover:bg-white hover:text-black transition-all font-bold uppercase text-sm">
                Ver Experiências <ChevronRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Badge Flutuante Decoração */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-64 h-64 border-[40px] border-accent/10 rounded-full z-0 hidden md:block"
        />
      </section>

      {/* HISTÓRIA SECTION - DESIGN LAYERED */}
      <section id="historia" className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative z-10 border-8 border-accent p-2"
              >
                <img src="https://jeri4xp.vercel.app/img/jeri1.e05b0107.webp" alt="Jeri" className="w-full grayscale hover:grayscale-0 transition-all duration-700" />
              </motion.div>
              <div className="absolute -top-10 -left-10 w-full h-full bg-accent/20 -z-0" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-1 w-12 bg-accent" />
                <span className="uppercase tracking-[0.3em] text-accent font-bold text-xs">Descubra a Vila</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
                História de <br /> <span className="text-accent">Jericoacoara</span>
              </h2>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p className="text-white text-xl font-medium italic">
                  "Onde o tempo parece ditar o próprio ritmo através do movimento das marés e dos ventos."
                </p>
                <p>
                  Localizada no Ceará, a vila transformou-se de uma isolada aldeia de pescadores em um refúgio de fama internacional, mantendo as ruas de areia e o brilho do céu estrelado intactos.
                </p>
                <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-black rounded-none px-8 py-6 font-bold uppercase tracking-widest transition-all">
                  Ler história completa
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIAS SECTION - DESIGN CARDS MODERNOS */}
      <section id="experiencias" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-8xl font-black italic text-secondary uppercase tracking-tighter leading-none mb-4">
              Nossas <span className="text-accent">Experiências</span>
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-sm">O melhor de Jericoacoara em um só lugar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: 'passeios', title: 'Passeios', img: 'https://jeri4xp.vercel.app/img/passeio.4d2eed74.webp', link: '/passeios' },
              { id: 'hospedagem', title: 'Hospedagem', img: 'https://jeri4xp.vercel.app/img/hotel.a362b7ec.webp', link: '/hospedagem' },
              { id: 'transfer', title: 'Transfer', img: 'https://jeri4xp.vercel.app/img/transfer.fb2f24b4.webp', link: '/transfer' },
              { id: 'aulas', title: 'Aulas', img: 'https://jeri4xp.vercel.app/img/aula.208d909e.webp', link: '/aulas' },
            ].map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={item.link} className="group relative block h-[500px] overflow-hidden bg-black">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-accent font-bold text-xs uppercase tracking-widest mb-2 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      Ver detalhes
                    </span>
                    <h3 className="text-white text-4xl font-black italic uppercase tracking-tighter mb-4">{item.title}</h3>
                    <div className="h-1 w-0 group-hover:w-full bg-accent transition-all duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - DESIGN CLEAN E ELEGANTE */}
      <section id="depoimentos" className="py-24 bg-[#F8F8F8]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-5xl font-black italic text-secondary uppercase tracking-tighter leading-none">
              O que dizem <br /> <span className="text-accent">Sobre nós</span>
            </h2>
            <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-widest">
              A nota mais alta no Tripadvisor <Star size={20} className="fill-accent" />
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20"><LoadingSpinner className="text-accent" /></div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 shadow-xl border-t-4 border-accent relative"
                >
                  <Quote className="absolute top-10 right-10 text-gray-100" size={60} />
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, starI) => (
                      <Star key={starI} size={14} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic text-lg leading-relaxed relative z-10 mb-8">
                    "{t.reviewText}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img src={t.customerPhoto || `https://i.pravatar.cc/150?u=${i}`} className="w-12 h-12 rounded-full grayscale" alt={t.customerName}/>
                    <div>
                      <h4 className="font-black text-secondary uppercase text-sm">{t.customerName}</h4>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1">
                        <MapPin size={10} /> {t.customerLocation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CONTACT SECTION - DESIGN IMPACTANTE */}
      <section id="contato" className="py-24 bg-accent text-white relative overflow-hidden">
        {/* Elemento de Fundo Texto Gigante */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black italic text-white/5 whitespace-nowrap pointer-events-none uppercase">
          CONTATO JERI4XP
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-16">
              Prepare sua <br /> próxima aventura
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <MessageCircle size={32} />, label: "WhatsApp", val: "85 9 9900.1339", link: "https://wa.me/5585999001339" },
                { icon: <Instagram size={32} />, label: "Instagram", val: "@jeri4xp", link: "https://instagram.com/jeri4xp" },
                { icon: <Mail size={32} />, label: "E-mail", val: "jeri4xp@gmail.com", link: "mailto:jeri4xp@gmail.com" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black/20 backdrop-blur-md p-10 border border-white/10 hover:bg-white hover:text-black transition-all duration-500 group"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 mb-2">{item.label}</p>
                  <p className="text-xl font-black italic tracking-tighter">{item.val}</p>
                </a>
              ))}
            </div>

            <div className="mt-20 flex flex-col items-center">
              <Button
                onClick={handleWhatsAppClick}
                className="bg-white text-accent hover:bg-black hover:text-white px-12 py-8 rounded-none text-xl font-black italic uppercase transition-all shadow-2xl"
              >
                Falar com consultor agora
              </Button>
              <p className="mt-8 text-white/60 text-xs font-bold uppercase tracking-[0.5em]">Jericoacoara • Ceará • Brasil</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* WHATSAPP FLUTUANTE - DESIGN LIMPO */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-5 rounded-none shadow-2xl flex items-center justify-center group"
      >
        <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 font-black italic uppercase text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-lg">
          Olá! Como podemos ajudar?
        </div>
        <MessageCircle size={30} fill="white" />
      </motion.button>
    </div>
  );
}
