import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import BG_MAGENTA from './assets/bg-magenta.png';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-slate-950'>
      <div
        style={{
          backgroundImage: `url(${BG_MAGENTA})`,
          backgroundPosition: `50% 50%`,
        }}
      >
        <NavBar />
        <Hero />
      </div>
      <Skills />
      <WorkExperience />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
