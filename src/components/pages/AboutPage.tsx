import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { Award, Heart, Users, Compass } from 'lucide-react';
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://static.wixstatic.com/media/792b6b_7d33ae859c2a43f58eb3f73e839c74a6~mv2.png?originWidth=1280&originHeight=704)' }}
        />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            Sobre Jeri4xp
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Sua conexão com o paraíso de Jericoacoara
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-foreground text-center">
                Nossa História
              </h2>
            </AnimatedElement>
            
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <AnimatedElement>
                <p>
                  A Jeri4xp nasceu da paixão por Jericoacoara e do desejo de compartilhar as maravilhas deste paraíso com visitantes de todo o mundo. Somos mais do que uma agência de turismo - somos embaixadores de uma das praias mais bonitas do planeta.
                </p>
              </AnimatedElement>
              
              <AnimatedElement>
                <p>
                  Desde 1984, quando o The Washington Post elegeu Jericoacoara como uma das dez praias mais bonitas do mundo, este destino tem atraído viajantes em busca de beleza natural, tranquilidade e aventura. Nossa missão é garantir que cada visitante experimente o melhor que Jeri tem a oferecer.
                </p>
              </AnimatedElement>
              
              <AnimatedElement>
                <p>
                  Com anos de experiência e conhecimento profundo da região, oferecemos passeios exclusivos, hospedagens cuidadosamente selecionadas, transfers confortáveis e aulas com os melhores profissionais. Cada detalhe é pensado para proporcionar uma experiência inesquecível.
                </p>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 text-foreground text-center">
              Nossos Valores
            </h2>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedElement>
              <div className="text-center p-8 bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-card-foreground">Excelência</h3>
                <p className="text-muted-foreground">
                  Comprometidos em oferecer serviços de alta qualidade em cada experiência.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement style={{ animationDelay: '0.1s' }}>
              <div className="text-center p-8 bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-card-foreground">Paixão</h3>
                <p className="text-muted-foreground">
                  Amamos Jericoacoara e compartilhamos essa paixão com cada visitante.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement style={{ animationDelay: '0.2s' }}>
              <div className="text-center p-8 bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-card-foreground">Atendimento</h3>
                <p className="text-muted-foreground">
                  Equipe dedicada e atenciosa, pronta para atender suas necessidades.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement style={{ animationDelay: '0.3s' }}>
              <div className="text-center p-8 bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Compass className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-card-foreground">Aventura</h3>
                <p className="text-muted-foreground">
                  Experiências únicas que criam memórias para toda a vida.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Jericoacoara Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-foreground text-center">
                Jericoacoara: Parque Nacional
              </h2>
            </AnimatedElement>
            
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <AnimatedElement>
                <p>
                  Jericoacoara é muito mais do que uma praia - é um Parque Nacional protegido, onde a natureza se manifesta em sua forma mais pura e impressionante. A vila mantém sua essência rústica, com ruas de areia e ausência de iluminação pública para preservar o céu estrelado.
                </p>
              </AnimatedElement>
              
              <AnimatedElement>
                <p>
                  Entre as atrações mais icônicas estão a Pedra Furada, formação rochosa que se tornou símbolo de Jeri, e a Duna do Pôr do Sol, onde centenas de pessoas se reúnem diariamente para assistir ao espetáculo natural mais bonito da região.
                </p>
              </AnimatedElement>
              
              <AnimatedElement>
                <p>
                  As lagoas do Paraíso e Azul oferecem momentos de relaxamento incomparáveis, com suas águas cristalinas e as famosas redes suspensas. Já o lado oeste revela a beleza crua do Mangue Seco e a travessia do Rio Guriú, onde raízes expostas e águas calmas criam cenários únicos.
                </p>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent via-accent to-accent/90">
        <div className="container mx-auto px-4 text-center">
          <AnimatedElement>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-accent-foreground">
              Venha conhecer Jericoacoara
            </h2>
            <p className="text-lg md:text-xl mb-8 text-accent-foreground/90 max-w-2xl mx-auto">
              Entre em contato conosco e comece a planejar sua aventura no paraíso!
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
