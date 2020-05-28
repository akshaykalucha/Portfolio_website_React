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
    componentDidUpdate(){
        console.log('this is state from the reducer', this.props.DrawerOpenStore)

    }

    drawerToggleClickHandler = () => {
        this.props.setDrawer(!this.props.DrawerOpenStore)
    }

    backDropClickHandler = () => {
        this.props.setDrawer(false)

    }
    render() {

        let backDrop;

        if(this.props.DrawerOpenStore){
            backDrop = <Backdrop click ={this.backDropClickHandler} />
        }

        return (
            <div>
                <Nav unshow={this.backDropClickHandler} show ={this.props.DrawerOpenStore} drawer={this.props.DrawerOpenStore} drawerClickHandler={this.drawerToggleClickHandler} />
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
