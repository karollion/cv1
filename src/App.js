import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Container from './components/Container/Container';

const App = () => {
  return (
    <div>
      <Hero />
      <Container>
        <Home />
        <About />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
};

export default App;