import React, { Component } from 'react'
import Nav from '../Base/Nav'
import Footer from '../Base/Footer'
import Backdrop from '../Base/Backdrop';
import * as actionTypes from '../Store/actions'
import { connect } from 'react-redux'




class About extends Component {

    componentDidMount(){
        console.log('this is state from the reducer', this.props.DrawerOpenStore)
    }


    state ={
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.props.setDrawer(!this.props.DrawerOpenStore)
        // console.log('this is state from the reducer', this.props.DrawerOpen)
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        })
    }

    backDropClickHandler = () => {
        this.props.setDrawer(false)
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


const mapStateToProps = state => {
    return {
        DrawerOpenStore: state.sideDrawerOpen,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setDrawer: (value) => dispatch({type: actionTypes.SHOW_DRAWER, param: value})
    }}

export default connect(mapStateToProps, mapDispatchToProps)(About)
