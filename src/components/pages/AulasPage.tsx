import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { MessageCircle, Users, Clock, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

const classes = [
  {
    id: 1,
    title: 'Aula de Kitesurf',
    description: 'Aprenda a técnica do kitesurf com instrutores certificados em um dos melhores spots do Brasil',
    image: 'https://jeri4xp.vercel.app/img/aula.208d909e.webp',
    level: 'Iniciante a Avançado',
    duration: '2-3 horas',
    maxStudents: '4 pessoas',
    features: ['Equipamento fornecido', 'Instrutor certificado', 'Seguro incluído', 'Fotos do dia']
  },
  {
    id: 2,
    title: 'Aula de Windsurf',
    description: 'Domine as ondas de Jericoacoara com aulas personalizadas de windsurf',
    image: 'https://jeri4xp.vercel.app/img/aula.208d909e.webp',
    level: 'Iniciante a Avançado',
    duration: '2 horas',
    maxStudents: '3 pessoas',
    features: ['Equipamento incluído', 'Instrutor experiente', 'Técnica profissional', 'Certificado']
  },
  {
    id: 3,
    title: 'Aula de Surf',
    description: 'Pegue as melhores ondas de Jeri com instrutores experientes e apaixonados',
    image: 'https://jeri4xp.vercel.app/img/aula.208d909e.webp',
    level: 'Iniciante a Avançado',
    duration: '1.5-2 horas',
    maxStudents: '5 pessoas',
    features: ['Prancha fornecida', 'Instrutor profissional', 'Técnica moderna', 'Fotos incluídas']
  },
  {
    id: 4,
    title: 'Aula de Stand Up Paddle',
    description: 'Explore as lagoas e praias de Jeri com aulas de SUP relaxantes e divertidas',
    image: 'https://jeri4xp.vercel.app/img/aula.208d909e.webp',
    level: 'Iniciante',
    duration: '1.5 horas',
    maxStudents: '6 pessoas',
    features: ['Prancha e remo inclusos', 'Instrutor certificado', 'Colete salva-vidas', 'Seguro']
  },
  {
    id: 5,
    title: 'Aula de Yoga na Praia',
    description: 'Pratique yoga com vista para o mar em um ambiente paradisíaco',
    image: 'https://jeri4xp.vercel.app/img/aula.208d909e.webp',
    level: 'Iniciante a Intermediário',
    duration: '1 hora',
    maxStudents: '10 pessoas',
    features: ['Tapete fornecido', 'Instrutor certificado', 'Relaxamento total', 'Meditação']
  },
  {
    id: 6,
    title: 'Aula de Fotografia',
    description: 'Capture os melhores momentos de Jericoacoara com técnicas profissionais',
    image: 'https://jeri4xp.vercel.app/img/aula.208d909e.webp',
    level: 'Iniciante a Avançado',
    duration: '3 horas',
    maxStudents: '8 pessoas',
    features: ['Dicas profissionais', 'Locais especiais', 'Edição básica', 'Portfólio']
  }
];

export default function AulasPage() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5585999001339', '_blank');
  };

  return (
    <div className="min-h-screen bg-background font-paragraph text-foreground overflow-x-hidden">
      <Header />

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[500px] flex flex-col items-center justify-center pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-br from-accent to-accent/80">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base font-bold tracking-widest uppercase text-white/80 mb-4"
          >
            Aprenda e Divirta-se
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Aulas em Jeri
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8"
          >
            Desenvolva novas habilidades em um dos destinos mais incríveis do Brasil
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-white text-accent hover:bg-white/90 rounded-full px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              RESERVAR AGORA
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CLASSES SECTION */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <p className="text-sm font-bold tracking-widest uppercase mb-2 text-accent font-paragraph">Nossas Aulas</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary">
              Aulas Disponíveis
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {classes.map((classItem) => (
              <motion.div key={classItem.id} variants={fadeInUp}>
                <Card className="overflow-hidden rounded-2xl border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={classItem.image}
                      alt={classItem.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-3">
                      {classItem.title}
                    </h3>

                    <p className="text-foreground/70 text-sm md:text-base mb-6">
                      {classItem.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-3 mb-6 flex-grow">
                      <div className="flex items-center gap-3 text-foreground/75">
                        <Award className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm md:text-base">{classItem.level}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/75">
                        <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm md:text-base">{classItem.duration}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/75">
                        <Users className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm md:text-base">Máx: {classItem.maxStudents}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-8">
                      {classItem.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-foreground/60 text-xs md:text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="bg-accent hover:bg-accent/90 text-white rounded-full w-full py-3 font-bold transition-all duration-300"
                    >
                      Reservar Aula
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6">
              Por que aprender com a gente?
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-3">Instrutores Certificados</h3>
              <p className="text-foreground/70">Profissionais experientes e certificados internacionalmente</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-3">Horários Flexíveis</h3>
              <p className="text-foreground/70">Aulas em horários que se adequam à sua rotina</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-3">Grupos Pequenos</h3>
              <p className="text-foreground/70">Atenção personalizada em turmas reduzidas</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 md:py-32 bg-accent text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Comece sua jornada de aprendizado
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Reserve sua aula agora e desenvolva novas habilidades em Jericoacoara
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-white text-accent hover:bg-white/90 rounded-full px-12 py-7 text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
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
        <span className="absolute right-full mr-4 bg-white text-secondary px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
          Fale conosco!
        </span>
      </button>
    </div>
  );
}
