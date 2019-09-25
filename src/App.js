import React, {useState, useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';


import Resume from './components/Resume/Resume';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import ProjPg from './components/Projects/ProjPg';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
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
    return () => {
      window.removeEventListener('resize', setProps);
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <Route path="/resume" exact component={Resume}/>
        <Route path="/projects" render={(props) => {
          window.removeEventListener('resize', setProps);
           return( <>
            <Nav size={size} page="proj"/>
            <ProjPg location={props.location}/>
            <Footer />
           </>)
           }
        }/>
        <Route path="/" exact render={() => 
          <Fragment>
            <Nav size={size} page="home"/>
            <Hero size={size} />
            <Projects />
            <About />
            <Contact />
            <Footer />
          </Fragment>
        }/>
      </div>
    </Router>
  );
}

export default App;
