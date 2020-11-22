import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import "./assets/css/style.css"

function App() {
  const links = {
    linkedin: 'https://www.linkedin.com/in/cecil-e-king',
    github: 'https://github.com/cek333'
  }
  return (
    <Router>
      <Header />
      <About />
      <Footer links={links} />
    </Router>
  );
}

export default App;
