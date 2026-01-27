
import NavBar from './components/NavBar';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Hero from './components/sections/Hero'
import ShowcaseSection from './components/sections/ShowcaseSection';
import TechStack from './components/sections/TechStack';

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <TechStack/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
