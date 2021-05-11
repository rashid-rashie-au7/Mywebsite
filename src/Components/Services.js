import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFileCode, faCode,faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import './Services.css'

const Services = () => {
    return (
        <div className='services'>
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                       <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="service-icon" icon={faLaptopCode} size='2x' /></div>
                                <h3>Web Design</h3>
                                <p>I approch each project individualy and always focus on the result</p>
                            </div>   
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="service-icon" icon={faFileCode} size='2x' /></div>
                                <h3>Web Development</h3>
                                <p>Your website will be build with a new proven technologies</p>
                            </div>   
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="service-icon" icon={faDesktop} size='2x' /></div>
                                <h3>Desktop Applications</h3>
                                <p>Your website will be build with a new proven technologies</p>
                            </div>   
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="service-icon" icon={faCode} size='2x' /></div>
                                <h3>UI/UX Designer</h3>
                                <p>Your website will be build with a new proven technologies</p>
                            </div>   
                        </div> 
                    </div>
                </div>
            </div>
    )
}

export default Services
