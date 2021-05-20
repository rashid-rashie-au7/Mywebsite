import React from 'react'
import { PopupboxContainer, PopupboxManager } from 'react-popupbox'
import './Portfolio.css'
import image1 from '../assets/portfolio/FM_Home.PNG';
import image2 from '../assets/portfolio/FM_SellerHome.PNG';
import image3 from '../assets/portfolio/SI_Home.PNG';
import image4 from '../assets/portfolio/SI_SellrHome.PNG';
import image5 from '../assets/portfolio/SI_SellrHome.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faGithub, } from "@fortawesome/free-brands-svg-icons";
import 'react-popupbox/dist/react-popupbox.css'
import Carousel, { Dots, autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Portfolio = () => {
    const openPubFM = () => {
        const content = (
            <>
                {/* <img className="portfolio-pub" src={image3} alt="" /> */}
                <Carousel
                    plugins={[
                        'infinite',
                        {
                            resolve: autoplayPlugin,
                            options: {
                                interval: 1000,
                            }
                        },
                    ]}
                    animationSpeed={1000}
                >
                    <img className="portfolio-pub" src={image4} />
                    <img className="portfolio-pub" src={image2} />
                    <img className="portfolio-pub" src={image3} />
                </Carousel>
                <p>Description : Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Nobis, sequi?</p>
                <b></b>
                <div className="h-links">
                    <a className="hyper-link"
                        onClick={() => window.open('https://github.com/rashid-rashie-au7/fleet_market')}>
                        <FontAwesomeIcon icon={faGithub} size="2x" />github </a>

                    <a className="hyper-link"
                        onClick={() => window.open('https://grocery-erp-fleet-market.herokuapp.com/')}>
                        <FontAwesomeIcon icon={faDesktop} size="2x" />Live Demo </a>
                </div>
            </>

        )
        PopupboxManager.open({ content })
    }

    const pubConfigFM = {
        titleBar: {
            enable: true,
            text: "Fleet Market"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    return (
        <div className='portfolio-wraper'>
            <div className="container">
                <h1 className="text-center py-5">Portfolio</h1>
                <div className="image-box-wraper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPubFM} >
                        <img src={image5} alt="" className="portfolio-image" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} >Explore</FontAwesomeIcon>
                    </div>

                    <div className="portfolio-image-box">
                        <img src={image1} alt="" className="portfolio-image" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} >Explore</FontAwesomeIcon>
                    </div>

                    <div className="portfolio-image-box">
                        <img src={image2} alt="" className="portfolio-image" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} >Explore</FontAwesomeIcon>
                    </div>

                    <div className="portfolio-image-box">
                        <img src={image3} alt="" className="portfolio-image" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} >Explore</FontAwesomeIcon>
                    </div>

                    <div className="portfolio-image-box">
                        <img src={image4} alt="" className="portfolio-image" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} >Explore</FontAwesomeIcon>
                    </div>
                </div>

            </div>
            <PopupboxContainer{...pubConfigFM} />
        </div>
    )
}

export default Portfolio
