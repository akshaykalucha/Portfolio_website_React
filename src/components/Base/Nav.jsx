import React, { useState, useEffect } from 'react'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile';
import SideDrawer from '../Base/SideDrawer';



function Nav(props) {


    const[isMobile, setIsMobile] = useState(false)

    function resize() {
        let currentHideNav = (window.innerWidth <= 768);
        if (currentHideNav) {
            setIsMobile(true)
        }
        else{
            setIsMobile(false)
        }
    }

    useEffect(() => {
        console.log('this is state of ismobile', isMobile)
        window.addEventListener("resize", resize.bind(this));
        resize();
    })


        if(isMobile===false){
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

export default Nav
