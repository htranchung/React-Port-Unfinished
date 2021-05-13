import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

const Main = () => (
    <div>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/landingpage" component={LandingPage} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/experience" component={Experience} />
            <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
    </div>

)

export default Main;