import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Resume from './Resume';
import Contact from './Contact';
import Profile from './Profile';
import Projects from './Skills';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/profile" component={Profile} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Main;
