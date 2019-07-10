import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


const Main = () => (
  <Switch>
    <BrowserRouter basename="portfolio"  >
    <Route exact path="/" component={LandingPage} /> 
    </BrowserRouter>   
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;
