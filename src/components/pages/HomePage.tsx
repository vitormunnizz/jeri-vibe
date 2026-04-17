// WI-HPI
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { CustomerTestimonials } from '@/entities';
import { BaseCrudService } from '@/integrations';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  Instagram,
  Mail,
  MessageCircle,
  Navigation,
  Quote
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [testimonials, setTestimonials] = useState<CustomerTestimonials[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Efeito de Parallax para o Hero
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

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

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-paragraph text-[#1A1A1A] overflow-x-hidden selection:bg-accent selection:text-white">
      <Header />

      {/* --- HERO SECTION: CINEMATIC & MINIMALIST --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <motion.div style={{ y: y1, opacity: opacityHero }} className="absolute inset-0 z-0">
          <img
            src="https://jeri4xp.vercel.app/img/jeri1.e05b0107.webp"
            className="w-full h-full object-cover scale-110"
            alt="Jeri Landscape"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#FDFCFB]" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1 }}
            className="text-accent font-bold uppercase text-xs md:text-sm mb-6 flex items-center justify-center gap-4"
          >
            <span className="h-[1px] w-8 bg-accent" /> Explore o Inexplorado <span className="h-[1px] w-8 bg-accent" />
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-9xl font-black italic tracking-tighter leading-none text-white uppercase"
          >
            Jeri<span className="text-accent text-outline">4</span>XP
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white/80 text-lg md:text-2xl mt-4 font-light italic"
          >
            A elegância do rústico. A adrenalina do paraíso.
          </motion.p>

          <motion.div
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.8 }}
             className="mt-12"
          >
            <Button
              onClick={() => window.open('https://wa.me/5585999001339')}
              className="bg-white text-black hover:bg-accent hover:text-white rounded-none px-12 py-8 text-sm font-bold tracking-[0.2em] transition-all duration-500 shadow-2xl group"
            >
              PLANEJAR JORNADA
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* --- BENTO GRID: EXPERIÊNCIAS --- */}
      <section id="experiencias" className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none text-secondary">
                Curadoria <br /> <span className="text-accent">de Aventuras</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-xs text-sm uppercase tracking-widest leading-relaxed">
              De passeios selvagens a estadias exclusivas. Escolha sua forma de viver Jeri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[1000px] md:h-[700px]">
            {/* Main Card: Passeios */}
            <ExperienceCard
              span="md:col-span-8 md:row-span-2"
              title="Passeios"
              img="https://jeri4xp.vercel.app/img/passeio.4d2eed74.webp"
              link="/passeios"
              desc="Explore dunas e lagoas secretas com guias especialistas."
            />
            {/* Side Card: Hospedagem */}
            <ExperienceCard
              span="md:col-span-4 md:row-span-1"
              title="Hospedagem"
              img="https://jeri4xp.vercel.app/img/hotel.a362b7ec.webp"
              link="/hospedagem"
              desc="Onde o luxo encontra o pé na areia."
            />
            {/* Bottom Card: Transfer */}
            <ExperienceCard
              span="md:col-span-4 md:row-span-1"
              title="Transfer"
              img="https://jeri4xp.vercel.app/img/transfer.fb2f24b4.webp"
              link="/transfer"
              desc="Conforto do aeroporto ao paraíso."
            />
          </div>
        </div>
      </section>

      {/* --- HISTÓRIA: EDITORIAL STYLE --- */}
      <section id="historia" className="bg-secondary py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
           <Navigation size={600} strokeWidth={0.5} />
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src="https://jeri4xp.vercel.app/img/jeri1.e05b0107.webp"
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl"
                alt="História"
              />
              <div className="absolute -bottom-10 -right-10 bg-accent p-12 hidden md:block">
                 <p className="text-5xl font-black italic">1984</p>
                 <p className="text-xs uppercase tracking-widest mt-2">O ano em que o <br/>mundo descobriu Jeri</p>
              </div>
            </motion.div>

            <div className="space-y-8">
              <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm">Nossa Essência</span>
              <h3 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
                Onde o tempo <br/> <span className="text-outline-white">não tem pressa</span>
              </h3>
              <p className="text-white/60 text-lg leading-relaxed font-light italic">
                Jericoacoara não é apenas um destino, é um estado de espírito. As ruas de areia e a ausência de postes preservam o que há de mais luxuoso na terra: a natureza intocada e o céu estrelado.
              </p>
              <div className="pt-8 border-t border-white/10 flex gap-12">
                 <div>
                    <p className="text-3xl font-bold">300km</p>
                    <p className="text-[10px] text-white/40 uppercase mt-1">De Fortaleza</p>
                 </div>
                 <div>
                    <p className="text-3xl font-bold">Parque</p>
                    <p className="text-[10px] text-white/40 uppercase mt-1">Nacional Protegido</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DEPOIMENTOS: FLOATING BUBBLES --- */}
      <section id="depoimentos" className="py-32 bg-[#FDFCFB]">
        <div className="container mx-auto px-6 text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black italic text-secondary uppercase tracking-tighter">Vozes de Jeri</h2>
        </div>

        <div className="container mx-auto px-6">
          {isLoading ? (
            <LoadingSpinner className="mx-auto text-accent" />
          ) : (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="break-inside-avoid bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 relative group"
                >
                  <Quote className="absolute top-4 right-4 text-accent opacity-10 group-hover:opacity-100 transition-opacity" size={40} />
                  <p className="text-gray-600 italic leading-relaxed mb-8">"{t.reviewText}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.customerPhoto || `https://i.pravatar.cc/150?u=${i}`} className="w-12 h-12 rounded-full grayscale hover:grayscale-0 transition-all duration-500" alt={t.customerName}/>
                    <div className="text-left">
                      <p className="font-bold text-sm uppercase">{t.customerName}</p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">{t.customerLocation}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- CONTACT: MINIMALIST DARK --- */}
      <section id="contato" className="bg-secondary py-32 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-5xl md:text-8xl font-black italic text-white uppercase tracking-tighter leading-none mb-12">
            Vamos criar sua <br/> <span className="text-accent text-outline-white">próxima memória?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            <ContactLink icon={<MessageCircle />} label="WhatsApp" value="85 9 9900.1339" href="https://wa.me/5585999001339" />
            <ContactLink icon={<Instagram />} label="Instagram" value="@jeri4xp" href="https://instagram.com/jeri4xp" />
            <ContactLink icon={<Mail />} label="E-mail" value="jeri4xp@gmail.com" href="mailto:jeri4xp@gmail.com" />
          </div>

          <div className="mt-20 flex flex-col items-center">
             <div className="w-px h-24 bg-gradient-to-b from-accent to-transparent" />
             <p className="mt-8 text-white/40 text-[10px] uppercase tracking-[0.5em]">Jericoacoara • Ceará • Brasil</p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating Action Button - Minimalist */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open('https://wa.me/5585999001339')}
        className="fixed bottom-10 right-10 z-[100] bg-accent text-white p-5 rounded-none shadow-2xl flex items-center justify-center hover:bg-black transition-colors"
      >
        <MessageCircle size={28} />
      </motion.button>
    </div>
  );
}

// --- SUBCOMPONENTES AUXILIARES ---

function ExperienceCard({ span, title, img, link, desc }: { span: string, title: string, img: string, link: string, desc: string }) {
  return (
    <motion.div
      whileHover="hover"
      className={`${span} relative overflow-hidden group bg-black`}
    >
      <motion.img
        variants={{ hover: { scale: 1.1 } }}
        transition={{ duration: 0.8 }}
        src={img}
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
        alt={title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute inset-0 p-10 flex flex-col justify-end">
        <motion.div
          variants={{ hover: { y: -10 } }}
          className="space-y-4"
        >
          <h3 className="text-white text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">{title}</h3>
          <p className="text-white/60 text-xs uppercase tracking-widest max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {desc}
          </p>
          <Link to={link}>
            <Button className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-none mt-4 hover:bg-accent hover:text-white transition-all">
              Ver detalhes
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ContactLink({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="bg-secondary p-12 flex flex-col items-center gap-4 hover:bg-white hover:text-secondary transition-all duration-500 group"
    >
      <div className="text-accent group-hover:scale-110 transition-transform">
        {React.cloneElement(icon as React.ReactElement, { size: 32 })}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 group-hover:text-secondary/40 mb-1">{label}</p>
        <p className="text-xl font-bold italic tracking-tighter text-white group-hover:text-secondary">{value}</p>
      </div>
    </a>
  );
}
