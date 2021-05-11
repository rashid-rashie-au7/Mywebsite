import React from 'react'
import Typed from 'react-typed'
import './Header.css'

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
               <h1>Hi, I'm Abdul Rashid A</h1> 
               <Typed 
                    className="typed-text"
                    strings={["Fullstack Web Developer", "web development","UI/UX designer","Desktop Application"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
               />
               <a href="" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
