import React, { Component } from 'react'
import Nav from '../Base/Nav'
import Footer from '../Base/Footer'
import Backdrop from '../Base/Backdrop';



class About extends Component {


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
            <div>
                <Nav unshow={this.backDropClickHandler} show ={this.state.sideDrawerOpen} drawer={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler} />
                {backDrop}
                    <h1>This is about page</h1>
                <Footer />
            </div>
        )
    }
}

export default About
