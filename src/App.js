import React from 'react';
import './App.scss';
import HeroBlock from './components/HeroBlock/HeroBlock';
import Facts from './components/Facts/Facts';
import SectorList from './components/SectorList/SectorList';
import AirQuality from './components/AirQuality/AirQuality';
import Footer from './components/Footer/Footer';
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
  const sectors = [
    {
      name:"Промышленность",
      imgUrl: require("./assets/Section4Sector/1_Industry.jpg"),
      description: "Чистые технологии, способствующие уменьшению выбросов из промышленных дымовых труб; улучшенная утилизация городских и сельскохозяйственных отходов, включая каптаж (улавливание) метана, выделяемого в местах утилизации отходов, в качестве варианта, альтернативного сжиганию (для использования в качестве биогаза)"
    },
    {
      name:"Транспорт",
      imgUrl: require("./assets/Section4Sector/2_Transport.jpg"),
      description: "Переход к чистым способам выработки энергии; уделение приоритетного внимания скоростному городскому транспорту, пешеходным и велосипедным сетям в городах, а также железнодорожным междугородным грузовым и пассажирским перевозкам; переход к использованию более чистых большегрузных дизельных транспортных средств и автомобилей с низким уровнем выбросов, а также более чистых видов топлива, включая топливо со сниженной концентрацией серы"
    },
    {
      name:"Городское планирование",
      imgUrl: require("./assets/Section4Sector/3_Sity_planing.jpg"),
      description: "Есть много примеров успешной политики по уменьшению загрязнения воздуха в таких секторах, как транспорт, городское планирование, энергетика и промышленность:"
    },
    {
      name:"Энергия",
      imgUrl: require("./assets/Section4Sector/4_Energy.jpg"),
      description: "Обеспечение доступа к недорогостоящим источникам энергии в быту для приготовления пищи, отопления и освещения"
    },
    {
      name:"Энергетика",
      imgUrl: require("./assets/Section4Sector/5_Energetic.jpg"),
      description: " Более широкое использование видов топлива с низким уровнем выбросов и возобновляемых источников энергии, не основанных на сжигании (таких как энергия солнца, ветра или гидроэнергия); комбинированная выработка тепла и энергии; и распределенная выработка энергии (например, энергетические минисистемы и размещаемые на крыше установки для выработки энергии из солнечной энергии)"
    },
    {
      name:"Утилизация отходов",
      imgUrl: require("./assets/Section4Sector/6_Utilization.jpg"),
      description: "стратегии уменьшения отходов, сортировки отходов, рециклирования, повторного использования или переработки отходов; а также улучшенные методы биологической утилизации отходов, такие как анаэробная переработка отходов для производства биогаза, являются практически осуществимыми, недорогими альтернативными вариантами открытому сжиганию твердых отходов"
    }
  ];

  return (
    <>
    <HeroBlock title="Качество атмосферного воздуха и здоровье"
                logos={partners}
                links={navLinks}/>
    <Facts title="Основные факты" slides={factsSlider} />
    <AirQuality/>   
    <SectorList title="Политика по уменьшению загрязнений"
                  subtitle="Есть много примеров успешной политики по уменьшению загрязнения воздуха в таких секторах, как транспорт, городское планирование, энергетика и промышленность:"
                  items={sectors}/>
    <Footer links={navLinks} partners={partners}/>
    </>
  );
}

export default App;
