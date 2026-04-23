// Image exports for the Jeri4xp website
// All images are centralized here for easy management

const kitePreaPath = './kitePrea.png';

export const images = {
  // Logo
  logo: "./logo.png",

  // Hero backgrounds
  hero: "./hero.png",

  // Experience cards
  experiencePasseios:  "./PasseiosHome.png",
  experienceHospedagem:  "./hospedagemHome.png",
  experienceTransfer: "./transferHome.png",
  experienceAulas: "./aulasHome.png",

  // Carousel images
  carouselPasseios: kitePreaPath,
  carouselHospedagem: kitePreaPath,

  // Transfer images
  transferFortaleza: kitePreaPath,
  transferCruz: kitePreaPath,

  // Aulas images
  aulasKitesurf: kitePreaPath,
  aulasWindsurf: kitePreaPath,
  aulasSurf: kitePreaPath,
  aulasWingFoil: kitePreaPath,

  // Avatar placeholders
  avatarPlaceholder: (seed: string) => kitePreaPath,
};
