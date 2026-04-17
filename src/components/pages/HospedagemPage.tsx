import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { Accommodations } from '@/entities';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Users, MapPin, Waves, MessageCircle } from 'lucide-react';
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

export default function HospedagemPage() {
  const [accommodations, setAccommodations] = useState<Accommodations[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAccommodations();
  }, []);

  const loadAccommodations = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<Accommodations>('accommodations', {}, { limit: 50 });
      setAccommodations(result.items);
    } catch (error) {
      console.error('Error loading accommodations:', error);
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
      <section className="relative w-full min-h-[500px] flex flex-col items-center justify-center pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base font-bold tracking-widest uppercase text-white/80 mb-4"
          >
            Conforto e Qualidade
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Hospedagem em Jeri
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8"
          >
            Escolha entre as melhores opções de hospedagem para sua estadia
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

      {/* ACCOMMODATIONS SECTION */}
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
              Hospedagens Disponíveis
            </h2>
          </motion.div>

          <div className="relative min-h-[400px]">
            {/* Loading state */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isLoading ? 'opacity-100 z-10' : 'opacity-0 -z-10 pointer-events-none'}`}>
              <LoadingSpinner className="w-10 h-10 text-accent" />
            </div>

            {/* Empty state */}
            {!isLoading && accommodations.length === 0 && (
              <div className="flex items-center justify-center h-[400px]">
                <p className="text-muted-foreground text-center">Nenhuma hospedagem disponível no momento.</p>
              </div>
            )}

            {/* Accommodations grid */}
            {!isLoading && accommodations.length > 0 && (
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {accommodations.map((accommodation) => (
                  <motion.div key={accommodation._id} variants={fadeInUp}>
                    <Card className="overflow-hidden rounded-2xl border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <Image 
                          src={accommodation.itemImage || 'https://static.wixstatic.com/media/792b6b_3f1a3acdbdd44018ae82c290ae76f0f9~mv2.png?originWidth=384&originHeight=384'}
                          alt={accommodation.itemName || 'Hospedagem'}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold">
                          R$ {accommodation.itemPrice?.toFixed(2)}/noite
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8 flex-grow flex flex-col">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">
                          {accommodation.itemName}
                        </h3>

                        {/* Details */}
                        <div className="space-y-3 mb-6 flex-grow">
                          {accommodation.accommodationType && (
                            <div className="flex items-center gap-3 text-foreground/75">
                              <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                              <span className="text-sm md:text-base">{accommodation.accommodationType}</span>
                            </div>
                          )}
                          {accommodation.capacity && (
                            <div className="flex items-center gap-3 text-foreground/75">
                              <Users className="w-5 h-5 text-accent flex-shrink-0" />
                              <span className="text-sm md:text-base">Até {accommodation.capacity} hóspedes</span>
                            </div>
                          )}
                          {accommodation.hasPool && (
                            <div className="flex items-center gap-3 text-foreground/75">
                              <Waves className="w-5 h-5 text-accent flex-shrink-0" />
                              <span className="text-sm md:text-base">Piscina disponível</span>
                            </div>
                          )}
                          {accommodation.location && (
                            <div className="flex items-center gap-3 text-foreground/75">
                              <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                              <span className="text-sm md:text-base">{accommodation.location}</span>
                            </div>
                          )}
                        </div>

                        {accommodation.itemDescription && (
                          <p className="text-foreground/70 text-sm md:text-base mb-6 line-clamp-3">
                            {accommodation.itemDescription}
                          </p>
                        )}

                        {accommodation.amenities && (
                          <p className="text-foreground/60 text-xs md:text-sm mb-6 italic">
                            <strong>Amenidades:</strong> {accommodation.amenities}
                          </p>
                        )}

                        {/* Button */}
                        <Button 
                          onClick={handleWhatsAppClick}
                          className="bg-accent hover:bg-accent/90 text-white rounded-full w-full py-3 font-bold transition-all duration-300"
                        >
                          Reservar Agora
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Encontre seu lugar perfeito
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Converse com nosso time para encontrar a hospedagem ideal para você
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-accent text-white hover:bg-accent/90 rounded-full px-12 py-7 text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
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
