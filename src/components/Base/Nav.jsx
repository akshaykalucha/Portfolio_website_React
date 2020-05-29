import React, { useState, useEffect } from 'react'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile';
import SideDrawer from '../Base/SideDrawer';
import { connect } from 'react-redux'
import * as actionTypes from '../Store/actions'




function Nav(props) {


    function resize() {
        let currentHideNav = (window.innerWidth <= 768);
        if (currentHideNav) {
            props.setIsMobile(true)
        }
        else{
            props.setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", resize.bind(this));
        resize();
    })


        if(props.isMobileStore===false){
            return(
                <NavDesktop />
            )
        }else{
            return(
                <div>
                <NavMobile drawerHandler={props.drawer} click={props.drawerClickHandler} />
                <SideDrawer unshowsideDrawer={props.unshow} showSidedrawer ={props.show}  />
                </div>
            )
        }
    }

    const mapStateToProps = state => {
        return {
            isMobileStore: state.isMobile
        }
    }
    
    const mapDispatchToProps = dispatch => {
        return {
            setIsMobile: (value) => dispatch({type: actionTypes.SET_MOBILE, param: value})
        }}
    
    export default connect(mapStateToProps, mapDispatchToProps)(Nav)