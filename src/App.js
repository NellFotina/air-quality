import React from 'react';
import './App.scss';
import HeroBlock from './components/HeroBlock/HeroBlock';
import logoShid from './assets/shid_logo.svg';
import logoITN from './assets/ITN.svg';
import logoGlobal from './assets/GC2.svg';
//import heroBg from './assets/bg.jpg';

function App() {
  const partners = [
    logoShid,
    logoITN,
    logoGlobal
  ]
  const navLinks =  [
  {
    title: "Основные факты",
    href: "#facts"
  },
  {
    title: "Индекс качества воздуха",
    href: "#quality"
  },
  {
    title: "Политика по уменьшению загрязнений",
    href: "#politics"
  }
  ]
  return (
    <>
    <HeroBlock titles="Качество атмосферного воздуха и здоровье"
    logos={partners}
    //bgImg={heroBg}
    links={navLinks}/>
    </>
  );
}

export default App;
