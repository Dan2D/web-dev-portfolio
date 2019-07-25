import React, {useEffect} from 'react';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import smoothscroll from 'smoothscroll-polyfill';
import './App.css';
// TODO(GET POLYFILL FOR SCROLL)
function App() {
  useEffect(() => {
    smoothscroll.polyfill();
    window.scrollTo(0,0);
  }, [])
  return (
    <div className="App">
     <Nav />
     <Hero />
     <Projects />
     <About />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
