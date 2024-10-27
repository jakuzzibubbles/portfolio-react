import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./index.css";
import StarFieldBackground from "./StarFieldBackground";

const App = () => {
  return (
    <div className='bg-slate-950' style={{ position: 'relative', overflow: 'hidden' }}>
      
    
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          backgroundPosition: `50% 50%`,
        }}
      >
        <NavBar />
        <Hero />
        </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Skills />
        <WorkExperience />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
