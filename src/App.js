import NavBar from './components/layout/NavBar/NavBar'
import Footer from './components/layout/Footer/Footer';
import Home from './components/pages/Home/Home';
import Resume from './components/pages/Resume/Resume';
import Projects from './components/pages/Projects/Projects';
import Contact from './components/pages/Contact/Contact';
import Container from './components/common/Container/Container';
import Stars from './components/features/Stars/Stars';
import { Routes, Route } from 'react-router-dom';


const App = () => {

  return (
    <div>
      <Stars />
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
};

export default App;