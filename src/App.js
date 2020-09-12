import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}

export default App;
