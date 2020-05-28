import React, { useEffect } from 'react'
import Nav from '../Base/Nav'
import Footer from '../Base/Footer'
import Backdrop from '../Base/Backdrop';
import * as actionTypes from '../Store/actions'
import { connect } from 'react-redux'




function About(props) {

    useEffect(() => {
        console.log('this is state from the reducer', props.DrawerOpenStore)    
    })

    const drawerToggleClickHandler = () => {
        props.setDrawer(!props.DrawerOpenStore)
    }

    const backDropClickHandler = () => {
        props.setDrawer(false)

    }

        let backDrop;

        if(props.DrawerOpenStore){
            backDrop = <Backdrop click ={backDropClickHandler} />
        }

        return (
            <div>
                <Nav unshow={backDropClickHandler} show ={props.DrawerOpenStore} drawer={props.DrawerOpenStore} drawerClickHandler={drawerToggleClickHandler} />
                {backDrop}
                    <h1>This is about page</h1>
                <Footer />
            </div>
        )
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
