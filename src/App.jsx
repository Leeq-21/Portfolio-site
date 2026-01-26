import AnimatedCounter from './components/AnimatedCounter';
import NavBar from './components/NavBar';
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
    </>
  );
};

export default App;
