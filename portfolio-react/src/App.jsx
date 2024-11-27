import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
          <div className='bg-slate-950'>

              <NavBar />
              <Routes>
                <Route path="/" element={
                  <>
                  <Hero />
                  <Skills />
                  <WorkExperience />
                  <AboutMe />
                  <Contact />
                  </>
                } />
                </Routes>
               </div>
             <Footer />
     </Router>
  );
};

export default App;
