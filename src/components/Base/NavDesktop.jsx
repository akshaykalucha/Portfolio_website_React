import React, { Component } from 'react';
import './navdesktop.css'
import Mylogo from './mylogo.svg';
import Darkness from './darkness.svg'


export default class NavDesktop extends Component {
    render() {
        return (
            <div>
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    <div className="toolbar__toggle-button">
                    </div>
                    <img className="Nav__Logo-A" src={Mylogo} alt=""/>
                    <div className="toolbar__logo"><a href="/">Akshay Kalucha</a></div>
                    <div className="spacer"></div>
                    <div className="toolbar_navigation-items">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Software</a></li>
                            <li><a href="/">Contact</a></li>
                            <img className="nav__Darkness" src={Darkness} alt=""/>
                        </ul>
                    </div>
                </nav>
            </header>
            </div>

        )
    }
}
