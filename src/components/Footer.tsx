import { Instagram, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">Fale com a gente</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-accent-foreground/10 p-2 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a href="https://wa.me/5585999001339" className="hover:underline">85 9 9900-1339</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-accent-foreground/10 p-2 rounded-lg">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Instagram</p>
                  <a href="https://instagram.com/jeri4xp" target="_blank" rel="noopener noreferrer" className="hover:underline">@jeri4xp</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-accent-foreground/10 p-2 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">E-mail</p>
                  <a href="mailto:jeri4xp@gmail.com" className="hover:underline">jeri4xp@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">Links Rápidos</h3>
            <nav className="space-y-3">
              <Link to="/tours" className="block hover:underline transition-all">Passeios</Link>
              <Link to="/accommodations" className="block hover:underline transition-all">Hospedagem</Link>
              <Link to="/about" className="block hover:underline transition-all">Sobre</Link>
              <Link to="/contact" className="block hover:underline transition-all">Contato</Link>
            </nav>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">Localização</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <p>Jericoacoara • Ceará • Brasil</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/20 pt-8 text-center">
          <p className="text-sm">© 2026 jeri4xp.vercel.app. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
