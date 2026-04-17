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
  ChevronRight
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Variantes de Animação ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

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

      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://jeri4xp.vercel.app/img/jeri1.e05b0107.webp)' }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-bold tracking-[0.4em] uppercase mb-4 text-sm md:text-base"
          >
            Bem-vindo ao Destino Nº 1
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter mb-8 leading-[0.9] uppercase drop-shadow-2xl"
          >
            JERI4XP: SUA CONEXÃO<br />COM O PARAÍSO.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              onClick={handleWhatsAppClick}
              className="bg-accent hover:bg-white hover:text-accent text-white rounded-full px-12 py-8 text-xl font-black italic uppercase tracking-widest transition-all duration-300 shadow-2xl"
            >
              RESERVAR AGORA
            </Button>
          </motion.div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-24 bg-white text-center px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-secondary mb-6 italic uppercase tracking-tighter leading-tight">
            Sua aventura em Jericoacoara começa aqui
          </h2>
          <div className="w-20 h-1.5 bg-accent mx-auto mb-8 rounded-full" />
          <p className="text-gray-500 text-xl md:text-2xl max-w-2xl mx-auto italic leading-relaxed">
            "Turismo com qualidade, aventuras personalizadas e memórias inesquecíveis em Jericoacoara."
          </p>
        </motion.div>
      </section>

      {/* HISTÓRIA SECTION */}
      <section id="historia" className="py-24 md:py-32 bg-accent text-white relative z-20 flex items-center overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold tracking-[0.3em] uppercase mb-2 block opacity-80 font-paragraph">Descubra a Vila</span>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">História de Jericoacoara</h2>
            <div className="h-1.5 w-24 bg-white mt-8 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 text-lg leading-relaxed font-paragraph">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6">
              <p className="text-xl md:text-2xl font-light first-letter:text-7xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:mt-2">
                Jericoacoara, carinhosamente apelidada de Jeri, é um destino onde o tempo parece ditar o próprio ritmo através do movimento das marés e dos ventos.
              </p>
              <p className="opacity-90 border-l-4 border-white/20 pl-6 italic">
                Localizada no Ceará, a cerca de 300 km de Fortaleza, a vila transformou-se de uma isolada aldeia de pescadores em um refúgio de fama internacional.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6">
              <p>
                A história mudou drasticamente em 1984, quando o <span className="font-bold underline decoration-white/30">The Washington Post</span> a elegeu como uma das dez praias mais bonitas do mundo.
              </p>
              <div className="p-8 bg-white/10 backdrop-blur-md rounded-[2rem] border border-white/10 shadow-xl">
                <p>
                  Para quem busca relaxamento, as famosas redes nas lagoas do Paraíso e Azul são paradas obrigatórias. Já o lado oeste revela a beleza crua do Mangue Seco e a travessia do Rio Guriú.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIAS SECTION */}
      <section id="experiencias" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-secondary italic text-center mb-16"
          >
            Nossas Experiências
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Passeios */}
            <motion.div variants={fadeInUp}>
              <Link to="/passeios" className="group block relative h-[350px] rounded-[2.5rem] overflow-hidden bg-black shadow-2xl">
                <img
                  src="https://jeri4xp.vercel.app/img/passeio.4d2eed74.webp"
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-50 transition-all duration-700"
                  alt="Passeios"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-end p-10">
                  <h3 className="text-white text-5xl font-black mb-6 uppercase italic tracking-tighter leading-none">Passeios</h3>
                  <Button className="w-fit bg-accent text-white px-8 py-6 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-accent transition-all">
                    Saiba mais <ChevronRight className="ml-2" />
                  </Button>
                </div>
              </Link>
            </motion.div>

            {/* Hospedagem */}
            <motion.div variants={fadeInUp}>
              <Link to="/hospedagem" className="group block relative h-[350px] rounded-[2.5rem] overflow-hidden bg-black shadow-2xl">
                <img
                  src="https://jeri4xp.vercel.app/img/hotel.a362b7ec.webp"
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-50 transition-all duration-700"
                  alt="Hospedagem"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-end p-10">
                  <h3 className="text-white text-5xl font-black mb-6 uppercase italic tracking-tighter leading-none">Hospedagem</h3>
                  <Button className="w-fit bg-accent text-white px-8 py-6 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-accent transition-all">
                    Saiba mais <ChevronRight className="ml-2" />
                  </Button>
                </div>
              </Link>
            </motion.div>

            {/* Transfer */}
            <motion.div variants={fadeInUp}>
              <Link to="/transfer" className="group block relative h-[350px] rounded-[2.5rem] overflow-hidden bg-black shadow-2xl">
                <img
                  src="https://jeri4xp.vercel.app/img/transfer.fb2f24b4.webp"
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-50 transition-all duration-700"
                  alt="Transfer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-end p-10">
                  <h3 className="text-white text-5xl font-black mb-6 uppercase italic tracking-tighter leading-none">Transfer</h3>
                  <Button className="w-fit bg-accent text-white px-8 py-6 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-accent transition-all">
                    Saiba mais <ChevronRight className="ml-2" />
                  </Button>
                </div>
              </Link>
            </motion.div>

            {/* Aulas */}
            <motion.div variants={fadeInUp}>
              <Link to="/aulas" className="group block relative h-[350px] rounded-[2.5rem] overflow-hidden bg-black shadow-2xl">
                <img
                  src="https://jeri4xp.vercel.app/img/aula.208d909e.webp"
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-50 transition-all duration-700"
                  alt="Aulas"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-end p-10">
                  <h3 className="text-white text-5xl font-black mb-6 uppercase italic tracking-tighter leading-none">Aulas</h3>
                  <Button className="w-fit bg-accent text-white px-8 py-6 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-accent transition-all">
                    Saiba mais <ChevronRight className="ml-2" />
                  </Button>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="depoimentos" className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-black text-center italic uppercase tracking-tighter mb-16"
          >
            O que dizem sobre a Jeri 4XP
          </motion.h2>

          <div className="relative min-h-[400px]">
            {isLoading ? (
              <div className="flex items-center justify-center h-[400px]">
                <LoadingSpinner className="w-10 h-10 text-accent" />
              </div>
            ) : (
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {testimonials.map((testimonial, i) => (
                  <motion.div key={testimonial._id || i} variants={fadeInUp}>
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group">
                      <div className="flex justify-between items-start mb-6">
                        <Quote className="w-10 h-10 text-accent opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, starI) => (
                            <Star
                              key={starI}
                              className={`w-4 h-4 ${starI < (testimonial.rating || 5) ? 'fill-accent text-accent' : 'text-slate-200'}`}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-slate-700 text-lg leading-relaxed mb-8 italic flex-grow">
                        "{testimonial.reviewText}"
                      </p>

                      <div className="flex items-center gap-4 pt-6 mt-auto border-t border-slate-50">
                        <img
                          src={testimonial.customerPhoto || `https://i.pravatar.cc/150?u=${i}`}
                          className="w-14 h-14 rounded-full object-cover ring-2 ring-accent/10 group-hover:ring-accent/50 transition-all"
                          alt={testimonial.customerName}
                        />
                        <div>
                          <h4 className="font-black text-secondary leading-tight uppercase tracking-tighter">
                            {testimonial.customerName}
                          </h4>
                          <div className="flex items-center text-slate-500 text-xs mt-1 font-bold">
                            <MapPin className="w-3 h-3 mr-1 text-accent" />
                            {testimonial.customerLocation}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contato" className="min-h-screen bg-accent py-24 px-4 flex items-center justify-center relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl w-full text-center text-white z-10 relative">
          <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs uppercase tracking-widest font-bold mb-8 border border-white/20">
              Fale com a gente
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-16 italic uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
              Prepare sua próxima<br />aventura em Jeri
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {[
              { icon: <MessageCircle size={40} />, title: "WhatsApp", value: "85 9 9900-1339", link: "https://wa.me/5585999001339", note: "Clique para conversar" },
              { icon: <Instagram size={40} />, title: "Instagram", value: "@jeri4xp", link: "https://instagram.com/jeri4xp", note: "Acompanhe as aventuras" },
              { icon: <Mail size={40} />, title: "E-mail", value: "jeri4xp@gmail.com", link: "mailto:jeri4xp@gmail.com", note: "Envie sua mensagem" }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="group bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] hover:bg-white transition-all duration-500 shadow-2xl hover:-translate-y-3 border border-white/10 flex flex-col items-center"
              >
                <div className="bg-white/20 group-hover:bg-accent group-hover:text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:rotate-6 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="font-bold text-2xl mb-2 italic group-hover:text-secondary transition-colors">{item.title}</h3>
                <span className="text-xl font-black block group-hover:text-accent transition-colors break-all leading-tight">{item.value}</span>
                <p className="text-xs mt-6 opacity-60 uppercase tracking-widest font-bold group-hover:text-secondary">{item.note}</p>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-2 text-sm font-bold tracking-[0.4em] uppercase opacity-80 mb-4">
              <MapPin size={16} />
              Jericoacoara • Ceará • Brasil
            </div>
            <div className="w-12 h-0.5 bg-white/30 rounded-full" />
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* FLOATING WHATSAPP BUTTON */}
      <motion.a
        href="https://wa.me/5585999001339"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-[60] group flex items-center justify-center"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute right-full mr-4 bg-white text-secondary px-4 py-2 rounded-xl text-sm font-black shadow-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap border border-slate-100 uppercase italic tracking-tighter">
          Fale conosco agora!
        </span>
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none" />
        <div className="bg-[#25D366] p-5 rounded-full shadow-2xl relative z-10 text-white hover:scale-110 transition-transform">
          <MessageCircle size={32} />
        </div>
      </motion.a>
    </div>
  );
}
