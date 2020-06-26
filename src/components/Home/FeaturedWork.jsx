import React, {  } from 'react'
import './featuredwork.css'
// import Aos from 'aos'
import 'aos/dist/aos.css'
import { connect } from 'react-redux'



// let AOS1
// let AOS2
// let AOS3
// let anchorAOS


function FeaturedWork(props) {

    // const [isMobile, setisMobile] = useState(false)
    // console.log(isMobile)


    // if(isMobile===true){
    //     AOS1 = "fade-up"
    //     AOS2 = "fade-left"
    //     AOS3 = "fade-right"
    //     anchorAOS = null

    // }else if(isMobile===false){
    //     AOS1 = "fade-up"
    //     AOS2 = "fade-up"
    //     AOS3 = "fade-up"
    //     anchorAOS = ".container_card"
    // }

    function scalezoom(e){
        console.log("touched")
    }


    // function resize() {
    //     let currentHideNav = (window.innerWidth <= 760);
    //     if (currentHideNav) {
    //         setisMobile(true);
    //     }
    //     else{
    //         setisMobile(false)
    //     }
    // }

    // useEffect(() => {
    //     Aos.init({});
    // }, [])

    // useEffect(() => {
    //     /* eslint-disable */
    //     window.addEventListener("resize", resize.bind(this));
    //     resize();
    // })
    return (
        <div>
            <div style={ props.isDarknessStore ? {backgroundColor: "#212121"} : null } className="container_card">
                <h1 style={ props.isDarknessStore ? {color: "white"} : null } className="featured_heading">Featured work</h1>
                <h3 style={ props.isDarknessStore ? {color: "white"} : null } className="featured_subheading">Side Projects</h3>
                    <div className="card_container">
                    <div className="featured__work">
                        <div style={ props.isDarknessStore ? {backgroundColor: "#2b2a2a", boxShadow: "none"} : null } className="work__card">
                            <div className="card__main-heading">
                                <h1 style={ props.isDarknessStore ? {color: "white"} : null }>
                                    Catchit 1.0
                                </h1>
                                <div onTouchStart={e=>scalezoom(e)} className="card-image">
                                    <picture>
                                        <img src="https://smakosh.com/static/2a6a2fe9035f56572ff11a4368086561/f4ab0/catchit.jpg" alt=""/>
                                    </picture>
                                </div>
                                <div className="card__info-footer">
                                    <p style={ props.isDarknessStore ? {color: "white"} : null }>Collect stars & avoid obstacles while trying to put the ball into the right basket to unlock new levels!</p>
                                </div>
                            </div>
                        </div>
                        <div style={ props.isDarknessStore ? {backgroundColor: "#2b2a2a", boxShadow: "none"} : null } className="work__card">
                            <div className="card__main-heading">
                                <h1 style={ props.isDarknessStore ? {color: "white"} : null }>
                                    Catchit 1.0
                                </h1>
                                <div className="card-image">
                                    <picture>
                                        <img src="https://smakosh.com/static/2a6a2fe9035f56572ff11a4368086561/f4ab0/catchit.jpg" alt=""/>
                                    </picture>
                                </div>
                                <div className="card__info-footer">
                                    <p style={ props.isDarknessStore ? {color: "white"} : null }>Collect stars & avoid obstacles while trying to put the ball into the right basket to unlock new levels!</p>
                                </div>
                            </div>
                        </div>
                        <div style={ props.isDarknessStore ? {backgroundColor: "#2b2a2a", boxShadow: "none"} : null } className="work__card">
                            <div className="card__main-heading">
                                <h1 style={ props.isDarknessStore ? {color: "white"} : null }>
                                    Catchit 1.0
                                </h1>
                                <div className="card-image">
                                    <picture>
                                        <img src="https://smakosh.com/static/2a6a2fe9035f56572ff11a4368086561/f4ab0/catchit.jpg" alt=""/>
                                    </picture>
                                </div>
                                <div className="card__info-footer">
                                    <p style={ props.isDarknessStore ? {color: "white"} : null }>Collect stars & avoid obstacles while trying to put the ball into the right basket to unlock new levels!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isDarknessStore: state.isDark
    }
}


export default connect(mapStateToProps)(FeaturedWork)