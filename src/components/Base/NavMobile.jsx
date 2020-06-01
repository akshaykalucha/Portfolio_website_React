import React from 'react'
import DrawerButton from './DrawerButton'
import classes from './navmobile.module.css'
import Mylogo from './mylogo.svg';


function NavMobile(props) {
        return (
            <div>
            <header className={classes.toolbar}>
                <nav className={classes.toolbar__navigation}>
                    <img className={classes.Nav__Logo__A} src={Mylogo} alt=""/>
                    <div className={classes.toolbar__logo}><a href="/">Akcosh</a></div>
                    <div className={classes.spacer}></div>
                </nav>
            </header>
            <DrawerButton drawer={props.drawerHandler} clickbutton={props.click} />
            </div>

        )
    }

export default NavMobile