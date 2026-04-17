import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-heading font-bold text-primary hover:text-accent transition-colors">
            jeri4xp.vercel.app
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/tours" className="text-foreground hover:text-accent transition-colors font-medium">
              Passeios
            </Link>
            <Link to="/accommodations" className="text-foreground hover:text-accent transition-colors font-medium">
              Hospedagem
            </Link>
            <Link to="/about" className="text-foreground hover:text-accent transition-colors font-medium">
              Sobre
            </Link>
            <Link to="/contact" className="text-foreground hover:text-accent transition-colors font-medium">
              Contato
            </Link>
            <Button 
              onClick={() => window.open('https://wa.me/5585999001339', '_blank')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Reservar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4">
            <Link 
              to="/tours" 
              className="text-foreground hover:text-accent transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Passeios
            </Link>
            <Link 
              to="/accommodations" 
              className="text-foreground hover:text-accent transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Hospedagem
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-accent transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-accent transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Button 
              onClick={() => {
                window.open('https://wa.me/5585999001339', '_blank');
                setIsMenuOpen(false);
              }}
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
            >
              Reservar Agora
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
