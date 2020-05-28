import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './Index'
import About from '../About/About'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Index} />
                        <Route path="/about" exact component={About} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
