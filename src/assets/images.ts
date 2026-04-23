// Image exports for the Jeri4xp website
// All images are centralized here for easy management

const kitePreaPath = '../src/assets/kitePrea.png';

export const images = {
  // Logo
  logo: "../src/assets/logo.png",

  // Hero backgrounds
  hero: "../src/assets/hero.png",

  // Experience cards
  experiencePasseios:  "../src/assets/passeiosHome.png",
  experienceHospedagem:  "../src/assets/hospedagemHome.png",
  experienceTransfer: "../src/assets/transferHome.png",
  experienceAulas: "../src/assets/aulasHome.png",

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
