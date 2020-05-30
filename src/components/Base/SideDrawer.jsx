import React from 'react'
import './sideDrawer.css'
import Darkness from './darkness.svg'
import { connect } from 'react-redux'
import * as actionTypes from '../Store/actions';
import Brightness from './brightness.svg';



 const SideDrawer = props => {

    let drawerClasses = 'side-drawer'
    if(props.showSidedrawer){

        drawerClasses = 'side-drawer open'
    }

    const handleDarkMode = () => {
        console.log("making dark")
        props.setIsDark(!props.isDarknessStore)
    }

    return (
        <div onClick={props.unshowsideDrawer}>
            <nav className={drawerClasses}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Software</a></li>
                    <li><a href="/">Contact</a></li>
                    <img className="side-drawer__Darkness" onClick={handleDarkMode} src={props.isDarknessStore ? Brightness : Darkness} alt=""/>                       
                </ul>
            </nav>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isDarknessStore: state.isDark
    }}

const mapDispatchToProps = dispatch => {
    return {
        setIsDark: (value) => dispatch({type: actionTypes.SET_DARK, param: value}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer)