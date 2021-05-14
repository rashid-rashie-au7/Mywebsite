import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFileCode, faCode, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import reactpng from '../assets/css.png'
import './Services.css'

const Services = () => {
    return (
        <div className='services'>
            <h1 className="py-5">My Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="service-icon" icon={faLaptopCode} size='2x' /></div>
                            <h3>Web Design</h3>
                            <p>I approch each project individualy and always focus on the result</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="service-icon" icon={faFileCode} size='2x' /></div>
                            <h3>Web Development</h3>
                            <p>Your website will be build with a new proven technologies</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box education">
                        <div class="overlay"></div>
                            <div className="circle">
                                <FontAwesomeIcon className="service-icon" icon={faDesktop} size='2x' />
                            </div>
                            <h3>Desktop Applications</h3>
                            <p>Your website will be build with a new proven technologies</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="service-icon" icon={faCode} size='2x' /></div>
                            <h3>UI/UX Designer</h3>
                            <p>Your website will be build with a new proven technologies</p>
                        </div>
                    </div>
                </div>
                <div className="tech">
                <h1 className='py-3'>Technologies Used</h1>
                    <div className="row tech-container">
                        
                            <div className="col-md-2 col-sm-4 tech-icon">
                                <img src={reactpng} alt="" width='94px' height='94px' />
                                ReactJS
                            </div>
                            <div className="col-md-2 col-sm-4 tech-icon">
                            <img src={reactpng} alt="" width='94px' height='94px' />
                                Redux
                            </div>
                            <div className="col-md-2 col-sm-4 tech-icon">
                            <img src={reactpng} alt="" width='94px' height='94px' />
                                Hooks
                            </div>
                            <div className="col-md-2 col-sm-4 tech-icon">
                            <img src={reactpng} alt="" width='94px' height='94px' />
                                NodeJS
                            </div>
                            <div className="col-md-2 col-sm-4 tech-icon">
                            <img src={reactpng} alt="" width='94px' height='94px' />
                                ExpressJS
                            </div>
                            <div className="col-md-2 col-sm-4 tech-icon">
                            <img src={reactpng} alt="" width='94px' height='94px' />
                                MongoDB
                            </div>
                            <div className="col-md-2 col-sm-4 tech-icon">
                            <img src={reactpng} alt="" width='94px' height='94px' />
                                Java8
                            </div>
                            <div className="col-md-2 col-sm-4 tech-icon">
                            <img src={reactpng} alt="" width='94px' height='94px' />
                                JavaFX
                            </div>
                            <div className="col-md-2 col-sm-4 tech-icon">
                            <img src={reactpng} alt="" width='94px' height='94px' />
                                MySQL
                            </div>
                            <div className="col-md-2 col-sm-4 tech-icon">
                            <img src={reactpng} alt="" width='94px' height='94px' />
                                CSS
                            </div>
                            <div className="col-md-2 col-sm-4 tech-icon">
                            <img src={reactpng} alt="" width='94px' height='94px' />
                                Html
                            </div>
                            <div className="col-md-2 col-sm-4 tech-icon">
                            <img src={reactpng} alt="" width='94px' height='94px' />
                                Bootstrap
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services




// <a href="#" class="card education">
//      <div class="overlay"></div>
//   <div class="circle">
        // img
//   </div>
//   <p>Education</p>
// </a>
