import React from 'react'
import DrawerButton from './DrawerButton'
import classes from './navmobile.module.css'
import Mylogo from './mylogo.svg';
import { Link } from 'react-router-dom'


function NavMobile(props) {
        return (
            <div>
            <header className={classes.toolbar}>
                <nav className={classes.toolbar__navigation}>
                    <img className={classes.Nav__Logo__A} src={Mylogo} alt=""/>
                    <div className={classes.toolbar__logo}><Link to="/">Akcosh</Link></div>
                    <div className={classes.spacer}></div>
                </nav>
            </header>
            <DrawerButton drawer={props.drawerHandler} clickbutton={props.click} />
            </div>

        )
    }

export default NavMobile