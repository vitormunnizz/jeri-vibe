// WI-HPI
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { Tours, Accommodations, CustomerTestimonials } from '@/entities';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Star, MessageCircle, Instagram, Mail, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
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
    <div className="min-h-screen bg-background font-paragraph text-foreground overflow-x-hidden">
      <Header />

      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col items-center justify-start pt-24 md:pt-32 overflow-hidden bg-[#F4EBE1]">
        {/* Background Illustration */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-bottom md:bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://jeri4xp.vercel.app/img/jeri1.e05b0107.webp)' }}
        />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-8 md:mt-16">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base font-bold tracking-widest uppercase text-primary mb-4"
          >
            Bem-vindo ao Destino Nº 1
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white drop-shadow-md mb-8 leading-tight"
          >
            JERI4XP: SUA CONEXÃO<br />COM O PARAÍSO.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              RESERVAR AGORA
            </Button>
          </motion.div>
        </div>

        {/* Bottom White Wave/Transition (Simulated with a div if needed, but the image handles it mostly) */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* HISTÓRIA SECTION */}
      <section id="historia" className="h-screen py-20 md:py-32 bg-accent text-white relative z-20 flex items-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-sm font-bold tracking-widest uppercase mb-2 opacity-80 font-paragraph">Descubra a Vila</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">História de Jericoacoara</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 md:gap-16 text-lg leading-relaxed"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="first-letter:text-7xl first-letter:font-heading first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:leading-none">
                Jericoacoara, carinhosamente apelidada de Jeri, é um destino onde o tempo parece ditar o próprio ritmo através do movimento das marés e dos ventos.
              </p>
              <p>
                Localizada no Ceará, a cerca de 300 km de Fortaleza, a vila transformou-se de uma isolada aldeia de pescadores em um refúgio de fama internacional.
              </p>
              <p>
                A essência rústica permanece intacta: as ruas continuam cobertas de areia e a iluminação pública é inexistente para preservar o brilho do céu estrelado, criando uma conexão única com o cosmos.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="space-y-6">
              <p>
                A história mudou drasticamente em 1984, quando o The Washington Post a elegeu como uma das dez praias mais bonitas do mundo.
              </p>
              <p>
                Hoje, protegida como Parque Nacional, a jornada de contrastes começa pela icônica Pedra Furada e passa pela Duna do Pôr do Sol.
              </p>
              <p>
                Para quem busca relaxamento, as famosas redes nas lagoas do Paraíso e Azul são paradas obrigatórias. Já o lado oeste revela a beleza crua do Mangue Seco e a travessia do Rio Guriú, onde a natureza se manifesta em raízes expostas e águas calmas.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIÊNCIAS SECTION */}
      <section className="h-screen py-24 bg-background flex items-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wide text-secondary">
              Nossas Experiências
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Passeios */}
            <motion.div variants={fadeInUp}>
              <Link to="/tours" className="block group">
                <Card className="relative h-[280px] md:h-[320px] overflow-hidden rounded-3xl border-0 shadow-md hover:shadow-2xl transition-all duration-500">
                  <Image 
                    src="https://jeri4xp.vercel.app/img/passeio.4d2eed74.webp"
                    alt="Passeios"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col items-start">
                    <h3 className="text-3xl font-heading font-bold text-white mb-4 uppercase tracking-wider">Passeios</h3>
                    <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 py-2 h-auto font-bold text-sm transition-transform group-hover:translate-x-2">
                      SAIBA MAIS
                    </Button>
                  </div>
                </Card>
              </Link>
            </motion.div>

            {/* Hospedagem */}
            <motion.div variants={fadeInUp}>
              <Link to="/accommodations" className="block group">
                <Card className="relative h-[280px] md:h-[320px] overflow-hidden rounded-3xl border-0 shadow-md hover:shadow-2xl transition-all duration-500">
                  <Image 
                    src="https://jeri4xp.vercel.app/img/hotel.a362b7ec.webp"
                    alt="Hospedagem"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col items-start">
                    <h3 className="text-3xl font-heading font-bold text-white mb-4 uppercase tracking-wider">Hospedagem</h3>
                    <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 py-2 h-auto font-bold text-sm transition-transform group-hover:translate-x-2">
                      SAIBA MAIS
                    </Button>
                  </div>
                </Card>
              </Link>
            </motion.div>

            {/* Transfer */}
            <motion.div variants={fadeInUp}>
              <Link to="/contact" className="block group">
                <Card className="relative h-[280px] md:h-[320px] overflow-hidden rounded-3xl border-0 shadow-md hover:shadow-2xl transition-all duration-500">
                  <Image 
                    src="https://jeri4xp.vercel.app/img/transfer.fb2f24b4.webp"
                    alt="Transfer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col items-start">
                    <h3 className="text-3xl font-heading font-bold text-white mb-4 uppercase tracking-wider">Transfer</h3>
                    <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 py-2 h-auto font-bold text-sm transition-transform group-hover:translate-x-2">
                      SAIBA MAIS
                    </Button>
                  </div>
                </Card>
              </Link>
            </motion.div>

            {/* Aulas */}
            <motion.div variants={fadeInUp}>
              <Link to="/contact" className="block group">
                <Card className="relative h-[280px] md:h-[320px] overflow-hidden rounded-3xl border-0 shadow-md hover:shadow-2xl transition-all duration-500">
                  <Image 
                    src="https://jeri4xp.vercel.app/img/aula.208d909e.webp"
                    alt="Aulas"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col items-start">
                    <h3 className="text-3xl font-heading font-bold text-white mb-4 uppercase tracking-wider">Aulas</h3>
                    <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 py-2 h-auto font-bold text-sm transition-transform group-hover:translate-x-2">
                      SAIBA MAIS
                    </Button>
                  </div>
                </Card>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="h-screen py-24 bg-[#FAFAFA] flex items-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary">
              O que dizem sobre a Jeri 4XP
            </h2>
          </motion.div>

          <div className="relative min-h-[300px]">
            {/* Always render the container to prevent ref crashes, control visibility with CSS */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isLoading ? 'opacity-100 z-10' : 'opacity-0 -z-10'}`}>
              <LoadingSpinner className="w-10 h-10 text-accent" />
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            >
              {testimonials.map((testimonial) => (
                <motion.div key={testimonial._id} variants={fadeInUp}>
                  <Card className="p-8 h-full flex flex-col bg-white border-0 shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-6xl text-accent/20 font-serif leading-none h-8">"</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < (testimonial.rating || 5) ? 'fill-accent text-accent' : 'text-muted'}`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-foreground/80 italic mb-8 flex-grow text-sm leading-relaxed">
                      {testimonial.reviewText}
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
                      {testimonial.customerPhoto ? (
                        <Image 
                          src={testimonial.customerPhoto}
                          alt={testimonial.customerName || 'Customer'}
                          className="w-12 h-12 rounded-full object-cover border-2 border-accent/20"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                          {testimonial.customerName?.charAt(0) || 'C'}
                        </div>
                      )}
                      <div>
                        <p className="font-bold text-secondary text-sm">{testimonial.customerName}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.customerLocation}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT SECTION */}
      <section className="h-screen bg-accent text-white relative overflow-hidden flex items-center">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-sm font-bold tracking-widest uppercase mb-2 opacity-80 font-paragraph">Fale com a gente</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Prepare sua próxima<br />aventura em Jeri
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {/* WhatsApp Card */}
            <motion.a 
              variants={fadeInUp}
              href="https://wa.me/5585999001339"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">WhatsApp</h3>
              <p className="text-white/80 mb-4">85 9 9900-1339</p>
              <span className="text-sm font-semibold flex items-center gap-2 opacity-80 group-hover:opacity-100">
                Clique para conversar <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>

            {/* Instagram Card */}
            <motion.a 
              variants={fadeInUp}
              href="https://instagram.com/jeri4xp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Instagram</h3>
              <p className="text-white/80 mb-4">@jeri4xp</p>
              <span className="text-sm font-semibold flex items-center gap-2 opacity-80 group-hover:opacity-100">
                Acompanhe as aventuras <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>

            {/* Email Card */}
            <motion.a 
              variants={fadeInUp}
              href="mailto:jeri4xp@gmail.com"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">E-mail</h3>
              <p className="text-white/80 mb-4">jeri4xp@gmail.com</p>
              <span className="text-sm font-semibold flex items-center gap-2 opacity-80 group-hover:opacity-100">
                Envie sua mensagem <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <p className="mb-8 text-white/80 tracking-widest uppercase text-sm">Jericoacoara • Ceará • Brasil</p>
            <Button 
              onClick={handleWhatsAppClick}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-accent rounded-full px-10 py-6 text-lg font-bold transition-all duration-300 bg-transparent"
            >
              Falar no WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp Button */}
      <button 
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        {/* Optional tooltip */}
        <span className="absolute right-full mr-4 bg-white text-secondary px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
          Fale conosco!
        </span>
      </button>
    </div>
  );
}