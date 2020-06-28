import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Nav from '../Base/Nav';
import Footer from '../Base/Footer'
import ScrollTop from '../Base/ScrollTop'



const IndexComponent = (
    lazy(()=> (
        import ('./Index')
    ))
)

const AboutComponent = (
    lazy(() => (
      import('../About/About')
    ))
)
const SoftwareComponent = (
    lazy(() => (
      import('../Software/Software')
    ))
)
const ContactComponent = (
    lazy(() => (
      import('../Contact/ContactForm')
    ))
)
const BlogComponent = (
    lazy(() => (
      import('../Blog/BlogMain')
    ))
)

const LoadingMessage = () => (
    "I'm loading..."
)
  

export default class Main extends Component {
    render() {
        return (
            <Router>
            <ScrollTop />
            <div style={{height: '100%'}}>
            <Nav />
                    <Suspense fallback={<LoadingMessage />}>
                        <Switch>
                            <Route path="/" exact component={IndexComponent} />
                            <Route path="/about">
                                <AboutComponent />
                            </Route>
                            <Route path="/contact" exact component={ContactComponent} />
                            <Route path="/blog" exact component={BlogComponent} />
                            <Route path="/software" exact component={SoftwareComponent} />
                        </Switch>
                    </Suspense>
                <Footer />
            </div>
            </Router>
        )
    }
}
