import React, { useState, useRef, useEffect } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import styles from './App.module.css';
import "./App.css"
import Ism from './components/Ism';
import CvDowland from './components/CvDowland';
import MeImg from './components/MeImg';
import Nav from './components/Nav';
import Tarmoqlar from './components/Tarmoqlar';
// import Asabniki from './components/Asabniki';
import About from './components/About';
import About2 from './components/About2';
import AboutGif from './components/AboutGif';
import AboutGif2 from './components/AboutGif2';
import Experience from './components/Experience';



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Reflar: har bir bo‘limga biriktirilgan
  const sections = {
    home: useRef(null),
    about: useRef(null),
    // Kelajakda qo‘shish uchun:
    Experience: useRef(null),
    // contact: useRef(null),
    
  };

  // Scroll funksiyasi
  const scrollToSection = (id) => {
    sections[id]?.current?.scrollIntoView({ behavior: 'smooth' });
    
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  // URLni bo‘limga qarab o‘zgartirish
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            window.history.replaceState(null, '', `#${id}`);
          }
        });
      },
      {
        threshold: 0.5, // bo‘lim 50% ko‘rinsa, URL o‘zgaradi
      }
    );

    // Har bir refni observe qilamiz
    Object.entries(sections).forEach(([id, ref]) => {
      if (ref.current) {
        ref.current.setAttribute('id', id); // DOMga id ham qo‘shamiz
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={isDarkMode ? styles.dark : styles.light}>
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Home bo‘limi */}
      <section ref={sections.home}>
        <Ism />
        <CvDowland />
        <MeImg />
        <Tarmoqlar />
        {/* <Asabniki /> */}

        
      </section>

      {/* About */}
      <section ref={sections.about}>
        <About />
        <About2 />
        <AboutGif/>
        <AboutGif2/>

        
      </section>

      {/* Kelajakda boshqa bo‘limlar uchun */}
      <section ref={sections.Experience}>
        <Experience/>
        
      </section>
      {/* <section ref={sections.contact}>Contact...</section> */}

      {/* Navga scroll funksiyasini uzatamiz */}
      <Nav onNavigate={scrollToSection} />
    </div>
  );
}

export default App;
