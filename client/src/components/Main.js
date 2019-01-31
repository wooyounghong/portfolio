import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import Skills from './Skills';
import Resume from './Resume';
import Contact from './Contact';
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/skills" component={Skills} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Main;
