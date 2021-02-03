import React from 'react';
import './App.css';
import Header from './containers/Header';
import Home from './containers/Home';
import AboutMe from './containers/AboutMe';
import Projects from './containers/Projects';
import Contact from './containers/Contact';
import Footer from './containers/Footer';

function App() {
  return (
    <React.Fragment>
        <Header />
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
    </React.Fragment>
  );
}

export default App;
