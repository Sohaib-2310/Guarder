import React from 'react'
import './LandingPg.scss'
import Navbar from '../../components/Navbar/Navbar'
import Button from '../../components/Button/Button';
import { FaCircle } from "react-icons/fa";

const LandingPg = () => {
    return (
        <>
            <div className="hero">
                <Navbar />

                <div className="landingContainer">
                    <div className="landingText">
                        <div className="landingHeading">
                            <p>Your Saftey</p>
                            <p className='orange'>Our Responsibility</p>
                        </div>

                        <div className="landingPara">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod magna aliqua. Ut enim ad minim veniam</p>
                        </div>

                        <div className="landingBtns">
                            <div className="read-more"><Button title='Read more' /></div>
                            <div className="get-quote"><Button title='Get A Quote' /></div>
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
