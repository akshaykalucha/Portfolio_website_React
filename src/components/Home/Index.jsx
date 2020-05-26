import React, { Component } from 'react';
import Nav from '../Base/Nav';
import Backdrop from '../Base/Backdrop';
import Intro from './Intro'
import MyWork from './MyWork'
import Footer from '../Base/Footer'
import Testimonials from './Testimonials'
import FeaturedWork from './FeaturedWork'


export class Index extends Component {

    state ={
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        })
    }

    backDropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    }

    render() {

        let backDrop;

        if(this.state.sideDrawerOpen){
            backDrop = <Backdrop click ={this.backDropClickHandler} />
        }
        
        return (
            <div style={{height: '100%'}}>
                <Nav unshow={this.backDropClickHandler} show ={this.state.sideDrawerOpen} drawer={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler} />
                {backDrop}
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
