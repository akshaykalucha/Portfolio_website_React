import React, { useEffect } from 'react'
import Nav from '../Base/Nav'
import Footer from '../Base/Footer'
import Backdrop from '../Base/Backdrop';
import * as actionTypes from '../Store/actions'
import { connect } from 'react-redux'
import './about.css'
import github from './github.svg'
import linkedin from './linkedin.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'


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
                    <section className="about__section">
                        <div className="about__container">
                            <h1>About Me</h1>
                            <p>I’m Akshay Kalucha, also known as Akcosh, I’m a self-taught software developer, Graphic, UI/UX Designer
                               and full stack JavaScript developer. I'm really interested in Technologies & solving dev problems. 
                               You can know more about me by reading my articles. Currently I'm working onsite for Intellify Delhi as a 
                               Full stack software developer and i love to work on new technologies while exploring and learning the core 
                               concepts of development.</p>
                        </div>
                        <div className="inquiry__container">
                            <p className="inqueries__para">For any inquiries feel free to get in touch with me at:</p>
                            <div className="contact-info">
                                <i className="fas fa-envelope envelope"></i><p className="email">akshay23l@hotmail.com</p>
                                <i className="fas fa-phone phone"></i><p className="phonenumber">************</p>
                                <i className="fas fa-map-marker-alt marker"></i><p className="location">626 ***** ****, New Delhi</p>
                                <i className="fas fa-map-marker-alt marker2"></i><p className="location2">Somewhere in North Campus, Delhi University, Delhi</p>
                            </div>
                        </div>
                        <div className="web__inquiry">
                            <h2 className="somewhere">Or somewhere else on the web</h2>
                            <div className="web__inquiry__main">
                                <a href="/">
                                    <img src={twitter} alt=""/>
                                    Twitter
                                </a>
                                <a href="/">
                                    <img src={instagram} alt=""/>
                                    Instagram
                                </a>

                                <a href="/">
                                    <img className="github__inquiry-img" src={github} alt=""/>
                                    GitHub
                                </a>

                                <a href="/">
                                    <img className="linkedin__inquiry-img" src={linkedin} alt=""/>
                                    Linkedin
                                </a>
                            </div>
                        </div>
                    </section>
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
