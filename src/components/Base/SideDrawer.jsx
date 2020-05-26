import React from 'react'
import './sideDrawer.css'
import Darkness from './darkness.svg'



 const SideDrawer = props => {

    let drawerClasses = 'side-drawer'
    if(props.showSidedrawer){

        drawerClasses = 'side-drawer open'
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
                    <img className="side-drawer__Darkness" src={Darkness} alt=""/>                       
                </ul>
            </nav>
        </div>
    )
}

export default SideDrawer