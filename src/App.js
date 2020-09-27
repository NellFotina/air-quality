import React from 'react';
import './App.scss';
import HeroBlock from './components/HeroBlock/HeroBlock';
import Facts from './components/Facts/Facts';
import logoShid from './assets/Section1/shid_logo.svg';
import logoITN from './assets/Section1/ITN.svg';
import logoGlobal from './assets/Section1/GC2.svg';


function App() {
  const partners = [
    logoShid,
    logoITN,
    logoGlobal
  ];
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
  ];
  const factsSlider = [
    {
      id: '21',
      imgUrl: require("./assets/Section2Slider/sl1_1.jpg"),
      desc: "Женщины и дети – главные жертвы загрязнения воздуха"
    },
    {
      id: '22',
      imgUrl: require("./assets/Section2Slider/sl1_2.jpg"),
      desc: "Защитники окружающей среды подвергаются преследованиям"
    },
    {
      id: '23',
      imgUrl: require("./assets/Section2Slider/sl1_3.jpg"),
      desc: "Загрязнение воздуха – нарушение прав человека"
    },
    {
      id: '24',
      imgUrl: require("./assets/Section2Slider/sl2_1.jpg"),
      desc: "4,2 миллиона случаев преждевременной смерти людей из-за загрязнения атмосферного воздуха"
    },
    {
      id: '25',
      imgUrl: require("./assets/Section2Slider/sl2_2.jpg"),
      desc: "Согласно оценкам, суммарный объем затрат в связи с загрязнением воздуха превышает 5 трлн долл. в год."
    },
  ];

  return (
    <>
    <HeroBlock title="Качество атмосферного воздуха и здоровье"
                logos={partners}
                links={navLinks}/>
    <Facts title="Основные факты" slides={factsSlider} />
    </>
  );
}

export default App;
