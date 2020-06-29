import React from 'react'
import './Testmonials2.css'

const Testmonials2 = () => {
    return (
        <div>
            <div className="col-12 popo">
                <ul className="carousel-simple">
                    <li>
                        <input checked="checked" id="item-1" type="radio" name="toggle" className="carausel-toggle"/>
                        <label htmlFor="item-1" className="dot"></label>
                        <ul className="carousel-content">
                            <div className="info col-2">
                                <p>“2 Parallax hace que sea más fácil dar instrucciones a personas que requieren asistencia en tiempo real para equipos sensibles ¡Sin la necesidad de viajar! Reduce en gran medida los costos de mantenimiento.”</p>
                                <div className="author">
                                    <div className="img-container"><img src="http://mouse.latercera.com/wp-content/uploads/2018/05/steven-1.jpg" alt=""/></div>
                                    <div>
                                        <h3>Caroline Gonzalez Flowers</h3>
                                        <span>CEO de Transtelco</span>
                                    </div>
                                </div>
                            </div>
                            <li>
                                <label htmlFor="item-1" className="arrow back">
                                    <img src="https://image.flaticon.com/icons/svg/126/126492.svg" alt=""/>
                                </label>
                                <label htmlFor="item-3" className="arrow next">
                                    <img src="https://image.flaticon.com/icons/svg/118/118740.svg" alt=""/>
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <input type="radio" id="item-2" name="toggle" className="carousel-toggle"/>
                        <label className="dot" htmlFor="item-2"></label>
                        <ul className="carousel-content">
                        <div className="info col-12">
                            <p>“2 Parallax hace que sea más fácil dar instrucciones a personas que requieren asistencia en tiempo real para equipos sensibles ¡Sin la necesidad de viajar! Reduce en gran medida los costos de mantenimiento.”</p>
                            <div className="author">
                                <div className="img-container"><img src="http://mouse.latercera.com/wp-content/uploads/2018/05/steven-1.jpg" alt=""/></div>
                                <div>
                                    <h3>Caroline Gonzalez Flowers</h3>
                                    <span>CEO de Transtelco</span>
                                </div>
                            </div>
                        </div>
                        <li>
                            <label htmlFor="item-1" className="arrow back">
                                <img src="https://image.flaticon.com/icons/svg/126/126492.svg" alt=""/>
                            </label>
                            <label htmlFor="item-3" className="arrow next">
                                <img src="https://image.flaticon.com/icons/svg/118/118740.svg" alt=""/>
                            </label>
                        </li>
                        </ul>
                    </li>
                    <li>
                        <input name="toggle" id="item-3" type="radio" className="carousel-toggle"/>
                        <label htmlFor="item-3" className="dot"></label>
                        <ul className="carousel-content">
                            <div className="info col-12">
                                <p>"3 Parallax hace que sea más fácil dar instrucciones a personas que requieren asistencia en tiempo real para equipos sensibles ¡Sin la necesidad de viajar! Reduce en gran medida los costos de mantenimiento.”</p>
                                <div className="author">
                                    <div className="img-container"><img src="http://mouse.latercera.com/wp-content/uploads/2018/05/steven-1.jpg" alt=""/></div>
                                    <div>
                                        <h3>Caroline Gonzalez Flowers</h3>
                                        <span>CEO de Transtelco</span>
                                    </div>
                                </div>
                            </div>
                            <li>
                                <label htmlFor="item-2" className="arrow back">
                                    <img src="https://image.flaticon.com/icons/svg/126/126492.svg" alt=""/>
                                </label>
                                <label htmlFor="item-4" className="arrow next">
                                    <img src="https://image.flaticon.com/icons/svg/118/118740.svg" alt=""/>
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <input name="toggle" id="item-4" type="radio" className="carousel-toggle"/>
                        <label className="dot" htmlFor="item-4"></label>
                        <ul className="carousel-content">
                            <div className="info col-12">
                                <p>“ 4 Parallax hace que sea más fácil dar instrucciones a personas que requieren asistencia en tiempo real para equipos sensibles ¡Sin la necesidad de viajar! Reduce en gran medida los costos de mantenimiento.”</p>
                                <div className="author">
                                    <div className="img-container"><img src="http://mouse.latercera.com/wp-content/uploads/2018/05/steven-1.jpg" alt=""/></div>
                                    <div>
                                        <h3>Caroline Gonzalez Flowers</h3>
                                        <span>CEO de Transtelco</span>
                                    </div>
                                </div>
                            </div>
                            <li>
                                <label htmlFor="item-3" className="arrow back">
                                    <img src="https://image.flaticon.com/icons/svg/126/126492.svg" alt=""/>
                                </label>
                                <label className="arrow next" htmlFor="item-1">
                                    <img src="https://image.flaticon.com/icons/svg/118/118740.svg" alt=""/>
                                </label>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testmonials2
