import React, { useEffect } from 'react'
import './testimonials.css'
import Glider from './glider.min.js'
import { connect } from 'react-redux'


function Testimonials(props) {


    useEffect(() => {
            if (props.isMobileStore===true) {
                var slider = document.querySelector('.glider');
                console.log("mobiletest")
                if (slider){
                    new Glider(slider, {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        draggable: true,
                        arrows: {
                          prev: '.glider-prev',
                          next: '.glider-next'
                        },
                        rewind: true,
                        dragVelocity: 1,
                        duration: 0.7,
                        scrollLock: true,
                        scrollLockDelay: 30
                    });
                }

            }
    })

    if(props.isMobileStore===false){
        var slider = document.querySelector('.glider');
        console.log("desktoptest")
        if(slider){
            new Glider(slider, {
                slidesToShow: 3.5,
                slidesToScroll: 3,
                draggable: true,
                arrows: {
                  prev: '.glider-prev',
                  next: '.glider-next'
                },
                rewind: true,
                dragVelocity: 1,
                duration: 0.7
            });
        }
    }




    return (
        <div>
            <script src=""></script>
            <div className="glideer-contain multiple testimonial__card">
                <h1 className="testimonials-h1">Testimonials</h1>
                <button className="glider-prev testimonial__button-prev">
                    <i className="fa fa-chevron-left"></i>
                </button>

                <div className="glider testimonial__glider-main">
                    <figure>
                        <p className="testimonials__quote-1">"Akshay is actually a wonderful person, I've known him for a while now. He's a very humble person, he helps me like all the time! I got the chance to meet him and attend his talk in the ZEIT Community Meetup held in Casablanca, talking about Gatsby!"</p>
                        <h4>Aman Gupta</h4>
                    </figure>
                    <figure>
                        <p className="testimonials__quote-2">"Akshay is actually a wonderful person, I've known him for a while now. He's a very humble person, he helps me like all the time! "</p>
                        <h4>John Doe</h4>
                    </figure>
                    <figure>
                        <p className="testimonials__quote-3">"Akshay is actually a wonderful person, I've known him for a while now. He's a very humble person, he helps me like all the time! I got the chance to meet him and attend his talk "</p>
                        <h4>Person 3</h4>
                    </figure>
                    <figure>
                        <p className="testimonials__quote-4">"Akshay is actually a wonderful person, I've known him for a while now. He's a very humble person"</p>
                        <h4>John Doe 2</h4>
                    </figure>
                    <figure>
                        <p className="testimonials__quote-5">"Akshay is actually a wonderful person, I've known him for a while now. He's a very humble personhe helps me like all the time! I got the chance to meet him and attend his talk in the ZEIT Community Meetup held in Casablanca, talking about Gatsby! Ismail is a very talented person he is the kind of person that if he is going to do something he will do it well!"</p>
                        <h4>John Doe4</h4>
                    </figure>
                    <figure>
                        <p className="testimonials__quote-6">"Akshay is actually a wonderful person, I've known him for a while now. He's a very humble person, he helps me like all the time! I got the chance to meet him and attend his talk in the ZEIT Community Meetup held in Casablanca, talking about Gatsby! Ismail is a very talented person "</p>
                        <h4>John Person</h4>
                    </figure>
                    <figure>
                        <p className="testimonials__quote-7">"Akshay is actually a wonderful person"</p>
                        <h4>Random person</h4>
                    </figure>
                    <figure>
                        <p className="testimonials__quote-8">"Akshay is actually a wonderful person, I've known him for a while now. He's a very humble person, he helps me like all"</p>
                        <h4>John Doe5</h4>
                    </figure>
                </div>

                <button className="glider-next testimonial__button-next">
                    <i className="fa fa-chevron-right"></i>
                </button>
            </div>
        </div>
    )
    
}


const mapStateToProps = state => {
    return {
        isMobileStore: state.isMobile,
    }
}

export default connect(mapStateToProps)(Testimonials)