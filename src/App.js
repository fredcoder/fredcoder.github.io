import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <AboutMe />
      <Projects />
    </React.Fragment>
  );
}

export default App;
