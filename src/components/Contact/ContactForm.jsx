import React, { Component } from 'react'
import Nav from '../Base/Nav'
import Footer from '../Base/Footer'
import './contactform.css'

export class ContactForm extends Component {

    state={

    }


    render() {
        return (
            <div>
                <Nav />
                <div className="contactForm__main">
                    <div className="contactForm">
                        <h4 className="form-heading">
                            Feel free to email me via
                            <a className="my__email" href="akshay23l@hotmail.com" target="_top">akshay23l@hotmail.com"</a>
                        </h4>
                        <p className="form__para">Or fill in the contact form down below</p>
                        <form className="form-main" action="">
                            <div className="fullname">
                                <label htmlFor="name" aria-label="please insert your name">
                                    Full name: <br/>
                                    <input className="fillnameLabel" type="text" name="name" id="name" />
                                </label>
                                <div className="error__message__fullname"></div>
                            </div>
                            <div className="emai">
                                <label htmlFor="email" aria-label="please insert your email">
                                    Your email: <br/>
                                    <input className="emailLabel" type="text" name="email" id="email" />
                                </label>
                                <div className="error__message__email"></div>
                            </div>
                            <div className="message">
                                <label htmlFor="name" aria-label="please insert your message">
                                    Message: <br/>
                                    <textarea className="messageLabel" type="text" name="message" id="message" />
                                </label>
                                <div className="error__message__message"></div>
                            </div>
                            <div className="submit__button">
                                <button type="submit" className="submitButton" name="submit" id="">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ContactForm
