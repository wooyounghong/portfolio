import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Skills from './Skills';
import Resume from './Resume';
import Contact from './Contact';
import Profile from './Profile';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/profile" component={Profile} />
    <Route path="/skills" component={Skills} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Main;
