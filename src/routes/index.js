import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import User from '../components/User';

export default() =>(
    <Router>
        <div>
            <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/user" component={User}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            <Footer/>
        </div>
    </Router>
)