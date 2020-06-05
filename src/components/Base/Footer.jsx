import React from 'react'
import FooterCard from './FooterCard'
import mylogo from './mylogo.svg'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <FooterCard />
            <section className="footer__main">
                <div className="branding__footer">
                    <ul className="brand__ul">
                        <li>
                        <img src={mylogo} alt=""/>
                            <Link to="/">
                            Akcosh
                            </Link>
                        </li>
                    </ul>
                    <ul className="links__ul">
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/software">Software</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <ul className="social__media-ul">
                        <li className="social__media__heading">Follow me on</li>
                        <li>
                            <a href="/">
                            <i className="SM__links-snapchat fab fa-snapchat"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                            <i className="SM__links-twitter fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                            <i className="SM__links-github fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                            <i className="SM__links-linkedin fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                            <i className="SM__links-instagram fab fa-instagram"></i>                            
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Footer
