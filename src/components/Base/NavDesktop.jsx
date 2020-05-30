import React, { Component } from 'react';
import './navdesktop.css'
import Mylogo from './mylogo.svg';
import Darkness from './darkness.svg';
import Brightness from './brightness.svg';
import { connect } from 'react-redux'
import * as actionTypes from '../Store/actions';


class NavDesktop extends Component {


    componentDidMount(){
        console.log(this.props.isDarknessStore, "this is darknes level")
    }

    handleDarkMode(e){
        e.preventDefault();
        console.log("making dark")
        this.props.setIsDark(!this.props.isDarknessStore)
    }

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
                            <a href="/">
                            <img className="nav__Darkness" onClick={e => this.handleDarkMode(e)} src={this.props.isDarknessStore ? Brightness : Darkness} alt=""/>
                            </a>
                        </ul>
                    </div>
                </nav>
            </header>
            </div>

        )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(NavDesktop)