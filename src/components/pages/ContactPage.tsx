import { useEffect, useRef, useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { ContactInquiries } from '@/entities';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    senderPhone: '',
    messageContent: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await BaseCrudService.create<ContactInquiries>('contactinquiries', {
        _id: crypto.randomUUID(),
        senderName: formData.senderName,
        senderEmail: formData.senderEmail,
        senderPhone: formData.senderPhone,
        messageContent: formData.messageContent,
        submissionDate: new Date().toISOString()
      });
      
      setSubmitSuccess(true);
      setFormData({
        senderName: '',
        senderEmail: '',
        senderPhone: '',
        messageContent: ''
      });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://static.wixstatic.com/media/12d367_71ebdd7141d041e4be3d91d80d4578dd~mv2.png?id=1)' }}
        />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Estamos prontos para ajudar você a planejar sua aventura em Jericoacoara
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <AnimatedElement>
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-heading font-bold mb-6 text-foreground">
                    Fale Conosco
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Entre em contato através de qualquer um dos nossos canais. Estamos sempre prontos para atender você!
                  </p>
                </div>

                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-card">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-card-foreground">WhatsApp</h3>
                      <a href="https://wa.me/5585999001339" className="text-accent hover:underline">
                        85 9 9900-1339
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Clique para conversar</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-card">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Instagram className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-card-foreground">Instagram</h3>
                      <a href="https://instagram.com/jeri4xp" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        @jeri4xp
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Acompanhe as aventuras</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-card">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-card-foreground">E-mail</h3>
                      <a href="mailto:jeri4xp@gmail.com" className="text-accent hover:underline">
                        jeri4xp@gmail.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Envie sua mensagem</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-card">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-card-foreground">Localização</h3>
                      <p className="text-muted-foreground">Jericoacoara • Ceará • Brasil</p>
                    </div>
                  </div>
                </Card>
              </div>
            </AnimatedElement>

            {/* Contact Form */}
            <AnimatedElement style={{ animationDelay: '0.2s' }}>
              <Card className="p-8 border-0 bg-card shadow-xl">
                <h3 className="text-3xl font-heading font-bold mb-6 text-card-foreground">
                  Envie uma Mensagem
                </h3>
                
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg text-accent">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="senderName" className="text-card-foreground">Nome *</Label>
                    <Input
                      id="senderName"
                      name="senderName"
                      value={formData.senderName}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <Label htmlFor="senderEmail" className="text-card-foreground">E-mail *</Label>
                    <Input
                      id="senderEmail"
                      name="senderEmail"
                      type="email"
                      value={formData.senderEmail}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="senderPhone" className="text-card-foreground">Telefone</Label>
                    <Input
                      id="senderPhone"
                      name="senderPhone"
                      type="tel"
                      value={formData.senderPhone}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="(85) 99900-1339"
                    />
                  </div>

                  <div>
                    <Label htmlFor="messageContent" className="text-card-foreground">Mensagem *</Label>
                    <Textarea
                      id="messageContent"
                      name="messageContent"
                      value={formData.messageContent}
                      onChange={handleChange}
                      required
                      className="mt-2 min-h-[150px]"
                      placeholder="Como podemos ajudar você?"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </Card>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent via-accent to-accent/90">
        <div className="container mx-auto px-4 text-center">
          <AnimatedElement>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-accent-foreground">
              Prefere falar pelo WhatsApp?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-accent-foreground/90 max-w-2xl mx-auto">
              Clique no botão abaixo e converse diretamente com nossa equipe!
            </p>
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/5585999001339', '_blank')}
              className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 text-lg px-12 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Abrir WhatsApp
            </Button>
          </AnimatedElement>
        </div>
      </section>

      <Footer />
    </div>
  );
}
