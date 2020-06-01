import React from 'react';
import './intro.css'
import skill1 from './icon1.svg'
import skill2 from './icon4.svg'
import skill3 from './icon5.svg'

function Intro(props)  {

        return (
            <div>
                <section className="main__intro__name">
                    <h1 className="branding__name">I'm Akshay Kalucha</h1>
                    <p>Self-learning software and programming hobbyist through research & development.
                        I love open source and building side projects. algorithms to document the logic, reasoning, and problems,
                        but there’s also a lot more to it.
                    </p><br/>
                    <div className="neon__buttons__color">
                        <a href="/" className="view__resume">View Resume</a>
                        <a href="/" className="neon__button-contact">Get In Touch</a>
                    </div>
                </section>
                <section className="skwedpath">
                    <div className="main__section__skwed">
                        <h1 className="skwed__h1">Skills</h1>
                        <div className="skills__div">
                            <div className="skill1">
                                <img src={skill1} alt=""/>
                            </div>
                            <div className="skill2">
                                <img src={skill2} alt=""/>
                            </div>
                            <div className="skill3">
                                <img src={skill3} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="skwed__imd__labels">
                        <h4 className="img__label__DSALGO">DS-Algo & ML</h4>
                        <h4 className="img__label__fullstack">Full stack development</h4>
                        <h4 className="img__label__backend">Back end development</h4>
                    </div>
                </section>
            </div>
        )
    }


export default Intro