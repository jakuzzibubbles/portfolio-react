import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import BG_MAGENTA from './assets/bg-magenta.jpg';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
          <div className='bg-slate-950'>
            <div
              style={{
                backgroundImage: `url(${BG_MAGENTA})`,
                backgroundPosition: `50% 50%`,
              }}
            >
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
          </div>
     </Router>
  );
};

export default App;
