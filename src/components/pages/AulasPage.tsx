import { Image } from '@/components/ui/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Instagram, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function AulasPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const navItems = [
    { name: 'Visão Geral', link: '#geralAulas' },
    { name: 'Aulas', link: '#aulas' },
    { name: 'Funcionamento', link: '#funcionamento' },
    { name: 'Dúvidas', link: '#duvidaAulas' },
    { name: 'Contato', link: '#contato' },
  ];

  const aulas = [
    {
      image: 'https://static.wixstatic.com/media/792b6b_8422e221a25f4714825deac834453cb3~mv2.png',
      titulo: 'Kitesurf',
      desc: 'Aprenda kitesurf no Preá com ventos constantes e evolução rápida.',
      beneficios: [
        'Equipamento completo incluso',
        'Aulas no Preá com vento ideal',
        'Segurança total',
        'Instrutores certificados'
      ],
      msg: 'Olá! Quero agendar uma aula de Kitesurf.'
    },
    {
      image: 'https://static.wixstatic.com/media/792b6b_6c8eafd808e4465f8481472f77bfb76e~mv2.png',
      titulo: 'Windsurf',
      desc: 'Aprenda windsurf com evolução progressiva e controle total.',
      beneficios: [
        'Equipamentos inclusos',
        'Instrutores qualificados',
        'Para iniciantes e avançados'
      ],
      msg: 'Olá! Quero agendar uma aula de Windsurf.'
    },
    {
      image: 'https://static.wixstatic.com/media/792b6b_2fab59f071e54e1ba72c8513563d5e41~mv2.png',
      titulo: 'Surf',
      desc: 'Aulas de surf para iniciantes com foco em evolução rápida.',
      beneficios: [
        'Instrutores locais',
        'Equipamento incluso',
        'Segurança no mar'
      ],
      msg: 'Olá! Quero agendar uma aula de Surf.'
    },
    {
      image: 'https://static.wixstatic.com/media/792b6b_54cbbf0d83184de8904ab7160600cc23~mv2.png',
      titulo: 'Wing Foil',
      desc: 'Aprenda a voar sobre a água com o wing foil.',
      beneficios: [
        'Equipamento completo',
        'Aulas adaptadas',
        'Alta evolução'
      ],
      msg: 'Olá! Quero agendar uma aula de Wing Foil.'
    },
  ];

  const faqs = [
    {
      question: 'Preciso de experiência?',
      answer: 'Não. As aulas são para iniciantes e avançados.'
    },
    {
      question: 'Equipamento incluso?',
      answer: 'Sim, tudo incluso durante a aula.'
    }
  ];

  return (
    <div className="font-sans">

      {/* HERO */}
      <section className="min-h-screen w-full text-white relative">
        <Image src="https://static.wixstatic.com/media/792b6b_f1a29dfb5f294176b121771875f4bafa~mv2.png" className="absolute w-full h-full object-cover" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-black mb-6">
            Aulas em Jericoacoara
          </h1>

          <a href="https://wa.me/5585999001339" className="bg-accent px-8 py-3 rounded-full font-bold">
            Reservar Agora
          </a>
        </div>
      </section>

      {/* AULAS */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="flex items-center gap-4">
            <button onClick={() => setCarouselIndex((carouselIndex - 1 + aulas.length) % aulas.length)}>
              <ChevronLeft />
            </button>

            <div className="flex-1">
              <Image src={aulas[carouselIndex].image} className="rounded-xl mb-4" />
              <h3 className="text-2xl font-bold">{aulas[carouselIndex].titulo}</h3>
              <p>{aulas[carouselIndex].desc}</p>
            </div>

            <button onClick={() => setCarouselIndex((carouselIndex + 1) % aulas.length)}>
              <ChevronRight />
            </button>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border p-4 rounded">
              <button onClick={() => setExpandedFaq(index)}>
                {faq.question}
              </button>
              {expandedFaq === index && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section className="py-20 px-6 bg-accent">
        <div className="grid md:grid-cols-3 gap-8">

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/5585999001339"
            className="bg-orange-700 p-8 rounded-3xl text-white text-center group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4 bg-green-500 p-4 rounded-2xl group-hover:scale-110 transition">
              <Phone size={40} className="stroke-[2.5]" />
            </div>
            <h3>WhatsApp</h3>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://instagram.com/jeri4xp"
            className="bg-orange-700 p-8 rounded-3xl text-white text-center group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4 bg-gradient-to-r from-pink-500 to-yellow-500 p-4 rounded-2xl">
              <Instagram size={40} className="stroke-[2.5]" />
            </div>
            <h3>Instagram</h3>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:jeri4xp@gmail.com"
            className="bg-orange-700 p-8 rounded-3xl text-white text-center group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4 bg-blue-500 p-4 rounded-2xl">
              <Mail size={40} className="stroke-[2.5]" />
            </div>
            <h3>Email</h3>
          </motion.a>

        </div>
      </section>

      {/* FLOAT BUTTON */}
      <a
        href="https://wa.me/5585999001339"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white shadow-lg hover:scale-110 transition"
      >
        <Phone size={26} className="stroke-[2.5]" />
      </a>

    </div>
  );
}
