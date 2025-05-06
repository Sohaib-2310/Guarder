import React from 'react'
import './LandingPg.scss'
import Navbar from '../components/Navbar'
import { FaCircle } from "react-icons/fa";

const LandingPg = () => {
    return (
        <>
            <div className="hero">
                <Navbar />

                <div className="landingContainer">
                    <div className="landingText">
                        <div className="landingHeading">
                            <span>Your Saftey</span>
                            <span className='orange'>Our Responsibility</span>
                        </div>

                        <div className="landingPara">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod magna aliqua. Ut enim ad minim veniam</p>
                        </div>

                        <div className="landingBtns">
                            <button>Read more</button>
                            <button className='orange'>Get A Quote</button>
                        </div>
                    </div>

                </div>

                <div className="landingIndicators">
                    <ul>
                        <li className='active'><FaCircle /></li>
                        <li><FaCircle /></li>
                        <li><FaCircle /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default LandingPg
