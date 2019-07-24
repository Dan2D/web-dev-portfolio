import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
     {/* Use Material UI */}
     <CssBaseline />
     <Nav />
     <Hero />
     <Projects />
    </div>
  );
}

export default App;
