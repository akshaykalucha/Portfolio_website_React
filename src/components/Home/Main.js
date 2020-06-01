import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './Index'
import About from '../About/About'
import ContactForm from '../Contact/ContactForm'
import Nav from '../Base/Nav';
import Footer from '../Base/Footer'

export default class Main extends Component {
    render() {
        return (
            <div style={{height: '100%'}}>
            <Nav />
                <Router>
                    <Switch>
                        <Route path="/" exact component={Index} />
                        <Route path="/about" exact component={About} />
                        <Route path="/contact" exact component={ContactForm} />
                    </Switch>
                </Router>
                <Footer />
            </div>
        )
    }
}
