import React from 'react'
import './About.scss'
import aboutImage from '../assets/about-img.jpg'
import Button from '../components/Button'

const About = () => {
    return (
        <>
            <div className="aboutContainer">
                <div className="aboutImg">
                    <img src={aboutImage} alt="" />
                </div>

                <div className="aboutText">
                    <h1>Who Are We?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit
                    </p>
                    <Button title='READ MORE'/>
                </div>
            </div>
        </>
    )
}

export default About
