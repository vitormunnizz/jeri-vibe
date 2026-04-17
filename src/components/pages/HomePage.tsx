{/* HERO SECTION */}
  <section className="relative w-full h-screen flex flex-col items-center justify-start pt-24 md:pt-32 overflow-hidden bg-[#F4EBE1]">
    {/* Background Illustration */}
    <div
      className="absolute inset-0 z-0 bg-cover bg-bottom md:bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(https://jeri4xp.vercel.app/img/jeri1.e05b0107.webp)' }}
    />

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-8 md:mt-16">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm md:text-base font-bold tracking-widest uppercase text-primary mb-4"
      >
        Bem-vindo ao Destino Nº 1
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white drop-shadow-md mb-8 leading-tight"
      >
        JERI4XP: SUA CONEXÃO<br />COM O PARAÍSO.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Button
          onClick={handleWhatsAppClick}
          className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          RESERVAR AGORA
        </Button>
      </motion.div>
    </div>

    {/* Bottom White Wave/Transition (Simulated with a div if needed, but the image handles it mostly) */}
    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />
  </section>

  {/* HISTÓRIA SECTION */}
  <section id="historia" className="h-screen py-20 md:py-32 bg-accent text-white relative z-20 flex items-center">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <p className="text-sm font-bold tracking-widest uppercase mb-2 opacity-80 font-paragraph">Descubra a Vila</p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold">História de Jericoacoara</h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid md:grid-cols-2 gap-8 md:gap-16 text-lg leading-relaxed"
      >
        <motion.div variants={fadeInUp} className="space-y-6">
          <p className="first-letter:text-7xl first-letter:font-heading first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:leading-none">
            Jericoacoara, carinhosamente apelidada de Jeri, é um destino onde o tempo parece ditar o próprio ritmo através do movimento das marés e dos ventos.
          </p>
          <p>
            Localizada no Ceará, a cerca de 300 km de Fortaleza, a vila transformou-se de uma isolada aldeia de pescadores em um refúgio de fama internacional.
          </p>
          <p>
            A essência rústica permanece intacta: as ruas continuam cobertas de areia e a iluminação pública é inexistente para preservar o brilho do céu estrelado, criando uma conexão única com o cosmos.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="space-y-6">
          <p>
            A história mudou drasticamente em 1984, quando o The Washington Post a elegeu como uma das dez praias mais bonitas do mundo.
          </p>
          <p>
            Hoje, protegida como Parque Nacional, a jornada de contrastes começa pela icônica Pedra Furada e passa pela Duna do Pôr do Sol.
          </p>
          <p>
            Para quem busca relaxamento, as famosas redes nas lagoas do Paraíso e Azul são paradas obrigatórias. Já o lado oeste revela a beleza crua do Mangue Seco e a travessia do Rio Guriú, onde a natureza se manifesta em raízes expostas e águas calmas.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>

  {/* EXPERIÊNCIAS SECTION */}
  <section className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4 max-w-7xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-20"
      >
        <p className="text-sm font-bold tracking-widest uppercase mb-2 text-accent font-paragraph">Descubra</p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary">
          Nossas Experiências
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        {/* Passeios */}
        <motion.div variants={fadeInUp}>
          <Link to="/passeios" className="block group h-full">
            <Card className="relative h-[350px] md:h-[420px] overflow-hidden rounded-2xl border-0 shadow-md hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
              <Image
                src="https://jeri4xp.vercel.app/img/passeio.4d2eed74.webp"
                alt="Passeios"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col items-start justify-end h-full">
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 uppercase tracking-wide">Passeios</h3>
                <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 py-3 h-auto font-bold text-sm md:text-base transition-all duration-300 group-hover:translate-x-1">
                  SAIBA MAIS
                </Button>
              </div>
            </Card>
          </Link>
        </motion.div>

        {/* Hospedagem */}
        <motion.div variants={fadeInUp}>
          <Link to="/hospedagem" className="block group h-full">
            <Card className="relative h-[350px] md:h-[420px] overflow-hidden rounded-2xl border-0 shadow-md hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
              <Image
                src="https://jeri4xp.vercel.app/img/hotel.a362b7ec.webp"
                alt="Hospedagem"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col items-start justify-end h-full">
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 uppercase tracking-wide">Hospedagem</h3>
                <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 py-3 h-auto font-bold text-sm md:text-base transition-all duration-300 group-hover:translate-x-1">
                  SAIBA MAIS
                </Button>
              </div>
            </Card>
          </Link>
        </motion.div>

        {/* Transfer */}
        <motion.div variants={fadeInUp}>
          <Link to="/transfer" className="block group h-full">
            <Card className="relative h-[350px] md:h-[420px] overflow-hidden rounded-2xl border-0 shadow-md hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
              <Image
                src="https://jeri4xp.vercel.app/img/transfer.fb2f24b4.webp"
                alt="Transfer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col items-start justify-end h-full">
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 uppercase tracking-wide">Transfer</h3>
                <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 py-3 h-auto font-bold text-sm md:text-base transition-all duration-300 group-hover:translate-x-1">
                  SAIBA MAIS
                </Button>
              </div>
            </Card>
          </Link>
        </motion.div>

        {/* Aulas */}
        <motion.div variants={fadeInUp}>
          <Link to="/aulas" className="block group h-full">
            <Card className="relative h-[350px] md:h-[420px] overflow-hidden rounded-2xl border-0 shadow-md hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
              <Image
                src="https://jeri4xp.vercel.app/img/aula.208d909e.webp"
                alt="Aulas"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col items-start justify-end h-full">
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 uppercase tracking-wide">Aulas</h3>
                <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 py-3 h-auto font-bold text-sm md:text-base transition-all duration-300 group-hover:translate-x-1">
                  SAIBA MAIS
                </Button>
              </div>
            </Card>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>

  {/* TESTIMONIALS SECTION */}
  <section className="py-24 md:py-32 bg-[#FAFAFA]">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <p className="text-sm font-bold tracking-widest uppercase mb-2 text-accent font-paragraph">Avaliações</p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary">
          O que dizem sobre a Jeri 4XP
        </h2>
      </motion.div>

      <div className="relative min-h-[400px]">
        {/* Loading state */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isLoading ? 'opacity-100 z-10' : 'opacity-0 -z-10 pointer-events-none'}`}>
          <LoadingSpinner className="w-10 h-10 text-accent" />
        </div>

        {/* Empty state */}
        {!isLoading && testimonials.length === 0 && (
          <div className="flex items-center justify-center h-[400px]">
            <p className="text-muted-foreground text-center">Nenhum depoimento disponível no momento.</p>
          </div>
        )}

        {/* Testimonials grid */}
        {!isLoading && testimonials.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial._id} variants={fadeInUp}>
                <Card className="p-6 md:p-8 h-full flex flex-col bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-5xl md:text-6xl text-accent/15 font-serif leading-none">"</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < (testimonial.rating || 5) ? 'fill-accent text-accent' : 'text-muted-foreground/30'}`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-foreground/75 italic mb-6 md:mb-8 flex-grow text-sm md:text-base leading-relaxed">
                    {testimonial.reviewText}
                  </p>

                  <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 md:pt-6 border-t border-border/50">
                    {testimonial.customerPhoto ? (
                      <Image
                        src={testimonial.customerPhoto}
                        alt={testimonial.customerName || 'Customer'}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-accent/20 flex-shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm flex-shrink-0">
                        {testimonial.customerName?.charAt(0) || 'C'}
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="font-bold text-secondary text-sm truncate">{testimonial.customerName}</p>
                      <p className="text-xs text-muted-foreground truncate">{testimonial.customerLocation}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  </section>

  {/* CTA / CONTACT SECTION */}
  <section className="py-24 md:py-32 bg-accent text-white relative overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 max-w-7xl relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-20"
      >
        <p className="text-sm font-bold tracking-widest uppercase mb-2 opacity-80 font-paragraph">Fale com a gente</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
          Prepare sua próxima<br />aventura em Jeri
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Entre em contato conosco através de qualquer um dos canais abaixo. Estamos prontos para ajudar você a planejar a experiência perfeita.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid md:grid-cols-3 gap-8 mb-16"
      >
        {/* WhatsApp Card */}
        <motion.a
          variants={fadeInUp}
          href="https://wa.me/5585999001339"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-10 flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-3 group"
        >
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h3 className="font-bold text-2xl mb-3">WhatsApp</h3>
          <p className="text-white/80 mb-6 text-lg font-semibold">85 9 9900-1339</p>
          <span className="text-sm font-semibold flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
            Clique para conversar <ArrowRight className="w-4 h-4" />
          </span>
        </motion.a>

        {/* Instagram Card */}
        <motion.a
          variants={fadeInUp}
          href="https://instagram.com/jeri4xp"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-10 flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-3 group"
        >
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <Instagram className="w-10 h-10 text-white" />
          </div>
          <h3 className="font-bold text-2xl mb-3">Instagram</h3>
          <p className="text-white/80 mb-6 text-lg font-semibold">@jeri4xp</p>
          <span className="text-sm font-semibold flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
            Acompanhe as aventuras <ArrowRight className="w-4 h-4" />
          </span>
        </motion.a>

        {/* Email Card */}
        <motion.a
          variants={fadeInUp}
          href="mailto:jeri4xp@gmail.com"
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-10 flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-3 group"
        >
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <Mail className="w-10 h-10 text-white" />
          </div>
          <h3 className="font-bold text-2xl mb-3">E-mail</h3>
          <p className="text-white/80 mb-6 text-lg font-semibold">jeri4xp@gmail.com</p>
          <span className="text-sm font-semibold flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
            Envie sua mensagem <ArrowRight className="w-4 h-4" />
          </span>
        </motion.a>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center"
      >
        <p className="mb-10 text-white/80 tracking-widest uppercase text-sm font-semibold">Jericoacoara • Ceará • Brasil</p>
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
    {/* Optional tooltip */}
    <span className="absolute right-full mr-4 bg-white text-secondary px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
      Fale conosco!
    </span>
  </button>
</div>
