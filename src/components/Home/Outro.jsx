import React from 'react'
import './outro.css'
import skill1 from './icon2.svg'
import skill2 from './icon3.svg'
import skill3 from './icon6.svg'

function Outro() {
    return (
        <div>
            <section className="skewed__path-outro">
                <div className="main__heading-outro">
                    <h1>Services</h1>
                </div>
                <div className="skewed__path-main">
                    <div className="main__items-outro">
                        <div className="item1-outro item__outro">
                            <img src={skill1} alt=""/>
                            <h3>Design System</h3>
                            <p>Colors, components, typography etc... all in one place, documented and easy to access as a npm module. Good looking user interfaces with a good user experience for an affordable price.</p>
                        </div>
                        <div className="item2-outro item__outro">
                            <img src={skill2} alt=""/>
                            <h3>Full Stack Development</h3>
                            <p>Get your mvp up & running in less than a week built with the MERN or JAM stack, ask your early users for feedback before scaling it.</p>
                        </div>
                        <div className="item3-outro item__outro">
                            <img src={skill3} alt=""/>
                            <h3>SEO & growth</h3>
                            <p>Your ranking on search engines will improve and growth hacking strategies will be tested and reported to keep you ahead of your competitors.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Outro
