import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { Tours } from '@/entities';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Clock, MapPin, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AnimatedElement: React.FC<{children: React.ReactNode; className?: string; style?: React.CSSProperties}> = ({ children, className, style }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { 
        el.classList.add('is-visible'); 
        observer.unobserve(el); 
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} style={style} className={`${className || ''} opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0`}>{children}</div>;
};

export default function ToursPage() {
  const navigate = useNavigate();
  const [tours, setTours] = useState<Tours[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const limit = 12;

  useEffect(() => {
    loadTours();
  }, [skip]);

  const loadTours = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<Tours>('tours', {}, { limit, skip });
      setTours(result.items);
      setHasNext(result.hasNext);
    } catch (error) {
      console.error('Error loading tours:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://static.wixstatic.com/media/792b6b_9c7de966011445e78b852bb86c62a027~mv2.png?originWidth=1152&originHeight=576)' }}
        />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 text-center text-primary-foreground py-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Passeios em Jericoacoara
          </h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto opacity-90">
            Descubra as maravilhas de Jeri através de experiências inesquecíveis. Da icônica Pedra Furada às lagoas paradisíacas.
          </p>
        </div>
      </section>

      {/* Tours Grid Section */}
      <section className="py-12 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="min-h-[600px]">
            {isLoading ? (
              <div className="flex items-center justify-center min-h-[400px]">
                <LoadingSpinner />
              </div>
            ) : tours.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tours.map((tour, index) => (
                    <AnimatedElement key={tour._id} style={{ animationDelay: `${index * 0.1}s` }}>
                      <Card 
                        className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 bg-card h-full"
                        onClick={() => navigate(`/tours/${tour._id}`)}
                      >
                        <div className="relative h-64 overflow-hidden">
                          {tour.itemImage && (
                            <Image 
                              src={tour.itemImage}
                              alt={tour.itemName || 'Tour'}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              width={400}
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                          {tour.category && (
                            <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                              {tour.category}
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="text-2xl font-heading font-bold mb-3 text-card-foreground group-hover:text-accent transition-colors">
                            {tour.itemName}
                          </h3>
                          <p className="text-muted-foreground mb-4 line-clamp-2">
                            {tour.itemDescription}
                          </p>
                          <div className="flex flex-wrap gap-3 mb-4">
                            {tour.duration && (
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                <span>{tour.duration}h</span>
                              </div>
                            )}
                            {tour.difficultyLevel && (
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <TrendingUp className="w-4 h-4" />
                                <span>{tour.difficultyLevel}</span>
                              </div>
                            )}
                          </div>
                          {tour.itemPrice && (
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                              <span className="text-2xl font-bold text-accent">
                                R$ {tour.itemPrice.toFixed(2)}
                              </span>
                              <Button 
                                size="sm"
                                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open('https://wa.me/5585999001339', '_blank');
                                }}
                              >
                                Reservar
                              </Button>
                            </div>
                          )}
                        </div>
                      </Card>
                    </AnimatedElement>
                  ))}
                </div>

                {/* Pagination */}
                {(skip > 0 || hasNext) && (
                  <div className="flex justify-center gap-4 mt-12">
                    {skip > 0 && (
                      <Button
                        onClick={() => setSkip(Math.max(0, skip - limit))}
                        variant="outline"
                        className="hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        Anterior
                      </Button>
                    )}
                    {hasNext && (
                      <Button
                        onClick={() => setSkip(skip + limit)}
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        Próxima
                      </Button>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">Nenhum passeio disponível no momento.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-accent via-accent to-accent/90">
        <div className="container mx-auto px-4 text-center">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-accent-foreground">
              Pronto para sua aventura?
            </h2>
            <p className="text-base md:text-lg mb-6 text-accent-foreground/90 max-w-2xl mx-auto">
              Entre em contato conosco e reserve seu passeio em Jericoacoara hoje mesmo!
            </p>
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/5585999001339', '_blank')}
              className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 text-lg px-12 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Falar no WhatsApp
            </Button>
          </AnimatedElement>
        </div>
      </section>

      <Footer />
    </div>
  );
}
