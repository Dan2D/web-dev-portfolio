import React, {useState, useEffect} from 'react';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import smoothscroll from 'smoothscroll-polyfill';
import './App.css';

function App() {
  const [size, setSize] = useState("");

  const setProps = () => {
    let width = document.documentElement.clientWidth;
    if (width > 992) return setSize("desktop");
    if (width < 481) return setSize("mobile");
    if (width < 992 && width > 768) return setSize("tablet");
    if (width > 481 && width < 768) return setSize("small-tablet");
  }

  useEffect(() => {
    smoothscroll.polyfill();
    window.scrollTo(0,0);
    window.addEventListener('resize', setProps);
  }, [])

  return (
    <div className="App">
     <Nav size={size}/>
     <Hero />
     <Projects />
     <About />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
