import React, { Component } from 'react'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile';
import SideDrawer from '../Base/SideDrawer';



class Nav extends Component {

    state={
        isMobile: false
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    
    resize() {
        let currentHideNav = (window.innerWidth <= 760);
        if (currentHideNav) {
            this.setState({isMobile: !this.state.isMobile});
        }
        else{
            this.setState({isMobile: false})
        }
    }


    render() {

        if(this.state.isMobile===false){
            return(
                <NavDesktop />
            )
        }else{
            return(
                <div>
                <NavMobile drawerHandler={this.props.drawer} click={this.props.drawerClickHandler} />
                <SideDrawer unshowsideDrawer={this.props.unshow} showSidedrawer ={this.props.show}  />
                </div>
            )
        }
    }
}

export default Nav
