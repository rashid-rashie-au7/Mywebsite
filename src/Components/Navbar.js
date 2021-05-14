import React from 'react';
import './Navbar.css'
import logo from '../assets/Mylogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-trans">
            <div className="container">
            <a className="navbar-brand" href="#"><img className='logo' src={logo} alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon ={faBars} style={{color:'white'}}/>
                {/* <span className="navbar-toggler-icon"></span> */}
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    
                </ul>
                
        </div>
            </div>
           
        </nav>
    )
}
