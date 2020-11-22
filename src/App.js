import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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
      <Switch>
        <Route exact path='/index'><About /></Route>
        <Route path='/contact'><Contact links={links} /></Route>
        <Route path='/portfolio'><Portfolio /></Route>
        <Redirect to='/index' />
      </Switch>
      <Footer links={links} />
    </Router>
  );
}

export default App;
