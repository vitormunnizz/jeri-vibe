import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { MessageCircle, MapPin, Clock, Users } from 'lucide-react';
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

const transferOptions = [
  {
    id: 1,
    title: 'Transfer Aeroporto',
    description: 'Transporte confortável do Aeroporto de Fortaleza até Jericoacoara',
    image: 'https://jeri4xp.vercel.app/img/transfer.fb2f24b4.webp',
    features: ['Ar condicionado', 'Motorista profissional', 'Bagagem incluída', 'Horário flexível']
  },
  {
    id: 2,
    title: 'Transfer Jeri - Fortaleza',
    description: 'Retorno seguro e confortável de Jericoacoara para Fortaleza',
    image: 'https://jeri4xp.vercel.app/img/transfer.fb2f24b4.webp',
    features: ['Saída flexível', 'Ar condicionado', 'Motorista experiente', 'Paradas permitidas']
  },
  {
    id: 3,
    title: 'Transfer Privado',
    description: 'Transporte exclusivo para grupos e famílias com paradas personalizadas',
    image: 'https://jeri4xp.vercel.app/img/transfer.fb2f24b4.webp',
    features: ['Veículo privativo', 'Roteiro personalizado', 'Paradas turísticas', 'Máxima comodidade']
  },
  {
    id: 4,
    title: 'Transfer Compartilhado',
    description: 'Opção econômica com outros viajantes para reduzir custos',
    image: 'https://jeri4xp.vercel.app/img/transfer.fb2f24b4.webp',
    features: ['Preço reduzido', 'Conhecer outras pessoas', 'Horários fixos', 'Confortável']
  }
];

export default function TransferPage() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5585999001339', '_blank');
  };

  return (
    <div className="min-h-screen bg-background font-paragraph text-foreground overflow-x-hidden">
      <Header />

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[500px] flex flex-col items-center justify-center pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-br from-secondary to-secondary/80">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base font-bold tracking-widest uppercase text-white/80 mb-4"
          >
            Transporte Confortável
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Transfer em Jeri
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8"
          >
            Chegue com conforto e segurança ao seu destino
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-accent text-white hover:bg-accent/90 rounded-full px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              RESERVAR AGORA
            </Button>
          </motion.div>
        </div>
      </section>

      {/* TRANSFER OPTIONS SECTION */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <p className="text-sm font-bold tracking-widest uppercase mb-2 text-accent font-paragraph">Nossas Opções</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary">
              Serviços de Transfer
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {transferOptions.map((option) => (
              <motion.div key={option.id} variants={fadeInUp}>
                <Card className="overflow-hidden rounded-2xl border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={option.image}
                      alt={option.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-3">
                      {option.title}
                    </h3>

                    <p className="text-foreground/70 text-sm md:text-base mb-6">
                      {option.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-8 flex-grow">
                      {option.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-foreground/75">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                          <span className="text-sm md:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="bg-accent hover:bg-accent/90 text-white rounded-full w-full py-3 font-bold transition-all duration-300"
                    >
                      Solicitar Transfer
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INFO SECTION */}
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
              Por que escolher nosso transfer?
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
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-3">Rotas Conhecidas</h3>
              <p className="text-foreground/70">Motoristas experientes que conhecem todas as rotas e pontos turísticos</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-3">Pontualidade</h3>
              <p className="text-foreground/70">Chegamos sempre no horário combinado para sua comodidade</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-3">Atendimento Personalizado</h3>
              <p className="text-foreground/70">Equipe atenciosa pronta para tornar sua viagem especial</p>
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
              Pronto para sua jornada?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Reserve seu transfer agora e aproveite uma viagem confortável
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
