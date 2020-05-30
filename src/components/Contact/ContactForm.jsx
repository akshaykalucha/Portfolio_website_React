import React, { Component } from 'react'
import Nav from '../Base/Nav'
import Footer from '../Base/Footer'
import './contactform.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import 'regex'

const validEmailRegex = RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);


export class ContactForm extends Component {

    state={
        name: "",
        email: "",
        message: "",
        submitClicked: false,
        success: false,
        errorMessage: {
            nameError: "",
            emailError: "",
            messageError: "",
            validEmail: null
        },
        firstFocus: false
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        if(e.target.name==="email"){
            let email = e.target.value
            this.setState({
                email: email
            })
            console.log(email)
            if(email.length>=2){
                if(this.state.firstFocus){
                    if(validEmailRegex.test(email)===false){
                        this.setState({
                            ...this.state,
                            email: email,
                            errorMessage: {
                                ...this.state.errorMessage,
                                validEmail: "Please enter a valid email!",
                                emailError: ""
                            }
                        })
                    }
                }
                if(validEmailRegex.test(email)===true){
                    this.setState({
                        ...this.state,
                        email: email,
                        errorMessage: {
                            ...this.state.errorMessage,
                            validEmail: null
                        }
                    })
                }
            }if(email.length<=2){
                this.setState({
                    ...this.state,
                    email: email,
                    errorMessage: {
                        ...this.state.errorMessage,
                        emailError: "Email is required",
                        validEmail: null
                    }
                })
            }

        }
    }

    formSubmit(e){
        e.preventDefault();
        if(this.state.name.length <= 1 || this.state.email.length <= 1 || this.state.message.length <= 1){
            console.log('please fill the fields')
            this.setState({
                ...this.state,
                firstFocus: true,
                errorMessage: {
                    ...this.state.errorMessage,
                    nameError: "Name is required",
                    emailError: "Email is required",
                    messageError: "Message is required"
                }            
            })
        }else{
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
    }

    goBack(e){
        console.log('going back')
        this.setState({
            success: false
        })
    }
    onFocusName() {
        document.getElementById("myInput");
    }

    onBlurName(e) {
        this.setState({
            firstFocus: true,
            errorMessage: {
                ...this.state.errorMessage,
                nameError: "Name is required"
            }
        })
    }
    onFocusEmail() {
        document.getElementById("myInput");
    }

    onBlurEmail(e) {
        this.setState({
            firstFocus: true,
            errorMessage: {
                ...this.state.errorMessage,
                emailError: "Email is required"
            }
        })
    }

    onFocusMessage() {
        document.getElementById("myInput");
    }

    onBlurMessage(e) {
        this.setState({
            firstFocus: true,
            errorMessage: {
                ...this.state.errorMessage,
                messageError: "Message is required"
            }
        })
    }


    render() {

        let progress
        if(this.state.submitClicked){
            progress = <CircularProgress />
        }

        if(this.state.success===true){
            return(
                <div>
                    <Nav />
                    <div className="goBack">
                        <h1 className="confirmation__heading" style={{}}>Sent email successfully</h1>
                        <button className="back__button" onClick={e => this.goBack(e)}>Back</button>
                    </div>
                    <Footer />
                </div>
            )
        }
        else{
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
                                        <input onChange={e => this.handleChange(e)}  onFocus={this.onFocusName} onBlur={e => this.onBlurName(e)} value={this.state.name} className="fillnameLabel" type="text" name="name" id="name" />
                                    </label>
                                    <div className="error__message__fullname"></div>
                                </div>
                                <div className="emai">
                                    <label htmlFor="email" aria-label="please insert your email">
                                        Your email: <br/>
                                        <input onChange={e => this.handleChange(e)}  onFocus={this.onFocusEmail} onBlur={e => this.onBlurEmail(e)} value={this.state.email} className="emailLabel" type="text" name="email" id="email" />
                                    </label>
                                    <div className="error__message__email"></div>
                                </div>
                                <div className="message">
                                    <label htmlFor="name" aria-label="please insert your message">
                                        Message: <br/>
                                        <textarea onChange={e => this.handleChange(e)} onFocus={this.onFocusMessage} onBlur={e => this.onBlurMessage(e)} value={this.state.message} className="messageLabel" type="text" name="message" id="message" />
                                    </label>
                                    <div className="error__message__message"></div>
                                </div>
                                <div className="submit__button">
                                    <button type="submit" className="submitButton" name="submit" id="">Send</button>
                                </div>
                            </form>
                        </div>
                        <div className="progressIcon">
                            {progress}
                        </div>
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}

export default ContactForm
