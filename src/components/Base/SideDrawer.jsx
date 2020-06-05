import React from 'react'
import './sideDrawer.css'
import Darkness from './darkness.svg'
import { connect } from 'react-redux'
import * as actionTypes from '../Store/actions';
import Brightness from './brightness.svg';
import { Link } from 'react-router-dom'



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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/software">Software</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
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