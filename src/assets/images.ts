// Image exports for the Jeri4xp website
// All images are centralized here for easy management

import logoImg from './logo.png';
import heroImg from './hero.png';
import passeiosImg from './PasseiosHome.png';
import hospedagemImg from './hospedagemHome.png';
import transferImg from './transferHome.png';
import aulasImg from './aulasHome.png';
import kitePreaImg from './kitePrea.png';

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
