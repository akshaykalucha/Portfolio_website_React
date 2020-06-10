import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Index from './Index'
import About from '../About/About'
import ContactForm from '../Contact/ContactForm'
import Nav from '../Base/Nav';
import Footer from '../Base/Footer'
import BlogMain from '../Blog/BlogMain'
import Software from '../Software/Software'
import ScrollTop from '../Base/ScrollTop'

export default class Main extends Component {
    render() {
        return (
            <Router>
            <ScrollTop />
            <div style={{height: '100%'}}>
            <Nav />
                    <Switch>
                        <Route path="/" exact component={Index} />
                        <Route path="/about" exact component={About} />
                        <Route path="/contact" exact component={ContactForm} />
                        <Route path="/blog" exact component={BlogMain} />
                        <Route path="/software" exact component={Software} />
                    </Switch>
                <Footer />
            </div>
            </Router>
        )
    }
}
