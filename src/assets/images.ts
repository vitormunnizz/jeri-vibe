// Image exports for the Jeri4xp website
// All images are centralized here for easy management

import aulasImg from '../src/assets/aulasHome.png';
import heroImg from '../src/assets/hero.png';
import hospedagemImg from '../src/assets/hospedagemHome.png';
import kitePreaImg from '../src/assets/kitePrea.png';
import logoImg from '../src/assets/logo.png';
import passeiosImg from '../src/assets/PasseiosHome.png';
import transferImg from '../src/assets/transferHome.png';

export const images = {
  // Logo
  logo: logoImg,

  // Hero backgrounds
  hero: heroImg,

  // Experience cards
  experiencePasseios: passeiosImg,
  experienceHospedagem: hospedagemImg,
  experienceTransfer: transferImg,
  experienceAulas: aulasImg,

  // Carousel images
  carouselPasseios: kitePreaImg,
  carouselHospedagem: kitePreaImg,

  // Transfer images
  transferFortaleza: kitePreaImg,
  transferCruz: kitePreaImg,

  // Aulas images
  aulasKitesurf: kitePreaImg,
  aulasWindsurf: kitePreaImg,
  aulasSurf: kitePreaImg,
  aulasWingFoil: kitePreaImg,

  // Avatar placeholders
  avatarPlaceholder: (seed: string) => kitePreaImg,
};
