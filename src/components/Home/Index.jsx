import React, { Component } from 'react';
import Intro from './Intro'
import Outro from './Outro'
import MyWork from './MyWork'
// import Testimonials from './Testimonials'
import FeaturedWork from './FeaturedWork'
import BlogArticle from './BlogArticle'


export class Index extends Component {

    render() {
        
        return (
            <div>
                {/* <main className="index__main" style={{marginTop: "164px"}}>
                </main> */}
                <Intro />
                <MyWork />
                <FeaturedWork />
                <Outro />
                {/* <Testimonials /> */}
                <BlogArticle />
            </div>
        )
    }
}

export default Index
