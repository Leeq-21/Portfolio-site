import AnimatedCounter from './components/AnimatedCounter';
import NavBar from './components/NavBar';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero'
import ShowcaseSection from './components/sections/ShowcaseSection';
import TechStack from './components/sections/TechStack';

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <ShowcaseSection/>
      <TechStack/>
      <Contact/>
    </>
  );
};

export default App;
