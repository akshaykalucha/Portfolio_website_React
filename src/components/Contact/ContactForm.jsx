import React, { Component } from 'react'
import Nav from '../Base/Nav'
import Footer from '../Base/Footer'
import './contactform.css'

export class ContactForm extends Component {

    state={
        name: "",
        email: "",
        message: "",
        submitClicked: false,
        success: false
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formSubmit(e){
        e.preventDefault();
        this.setState({
            ...this.state,
            submitClicked: true
        })
        console.log('form submit in action')
        setTimeout(() => {
            this.setState({
                success: true,
                submitClicked: false,
            })
        }, 4000)
    }


    render() {
        if(this.state.success===true){
            return(
                <div>
                    <Nav />
                    <h1 style={{marginTop:"9rem"}}>Voila your message has been submitetd</h1>
                    <Footer />
                </div>
            )
        }
        if(this.state.submitClicked === false){
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
                            <form onSubmit={ e => this.formSubmit(e)} method="POST"  className="form-main">
                                <div className="fullname">
                                    <label htmlFor="name" aria-label="please insert your name">
                                        Full name: <br/>
                                        <input onChange={e => this.handleChange(e)} value={this.state.name} className="fillnameLabel" type="text" name="name" id="name" />
                                    </label>
                                    <div className="error__message__fullname"></div>
                                </div>
                                <div className="emai">
                                    <label htmlFor="email" aria-label="please insert your email">
                                        Your email: <br/>
                                        <input onChange={e => this.handleChange(e)} value={this.state.email} className="emailLabel" type="text" name="email" id="email" />
                                    </label>
                                    <div className="error__message__email"></div>
                                </div>
                                <div className="message">
                                    <label htmlFor="name" aria-label="please insert your message">
                                        Message: <br/>
                                        <textarea onChange={e => this.handleChange(e)} value={this.state.message} className="messageLabel" type="text" name="message" id="message" />
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
        else{
            return(
                <div>
                    <Nav />
                    <h1 style={{marginTop:"9rem"}}>Loading.....</h1>
                    <Footer />
                </div>
            )
        }
    }
}

export default ContactForm
