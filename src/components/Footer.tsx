import { MessageCircle, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://wa.me/5585999001339"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
              title="WhatsApp"
            >
              <MessageCircle size={32} className="text-white" />
            </a>
            <a
              href="https://instagram.com/jeri4xp"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
              title="Instagram"
            >
              <Instagram size={32} className="text-white" />
            </a>
            <a
              href="mailto:jeri4xp@gmail.com"
              className="hover:scale-110 transition-transform"
              title="E-mail"
            >
              <Mail size={32} className="text-white" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm">© 2026 jeri4xp.vercel.app. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
