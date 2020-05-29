import React, { Component } from 'react';
import Nav from '../Base/Nav';
import Intro from './Intro'
import MyWork from './MyWork'
import Footer from '../Base/Footer'
import Testimonials from './Testimonials'
import FeaturedWork from './FeaturedWork'


export class Index extends Component {

    render() {
        
        return (
            <div style={{height: '100%'}}>
                <Nav />
                <main className="index__main" style={{marginTop: "164px"}}>
                </main>
                <Intro />
                <MyWork />
                <FeaturedWork />
                <Testimonials />
                <Footer />
            </div>
        )
    }
}

export default Index
