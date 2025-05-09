import React from 'react'
import './Footer.scss'
import { MdLocationPin } from "react-icons/md";
import { FaPhone, FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { TfiYoutube } from "react-icons/tfi";


const Footer = () => {
    return (
        <>
            <footer>
                <div className="footerContainer">

                    <div className="companyInfo">
                        <h2 className='heading'>Guarder</h2>
                        <p>dolor sit amet, consectetur magna aliqua. Ut enim ad minim
                            veniam, quisdotempor incididunt r
                        </p>
                    </div>

                    <div className="links">
                        <p className="heading">Useful Link</p>
                        <p>dolor sit amet, consectetur magna aliqua. Ut enim ad minim veniam,
                            quisdotempor incididunt r
                        </p>
                    </div>

                    <div className="contacts">
                        <p className="heading">Contact Us</p>

                        <div className="contactsContainer">

                            <div className="location">
                                <span className="icon"><MdLocationPin /></span>
                                <span>Lorem ipsum dolor sit amet,</span>
                            </div>

                            <div className="phone">
                                <span className="icon"><FaPhone /></span>
                                <span>Call : +01 1234567890</span>
                            </div>

                            <div className="email">
                                <span className="icon"><TbMailFilled /></span>
                                <span>demo@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="newsLetter">
                        <p className="heading">Newsletter</p>
                        <input type="email" id="email" placeholder='Enter your email' />
                        <button>SUBSCRIBE</button>
                        <div className="socialIcons">
                            <FaFacebookF />
                            <FaXTwitter />
                            <TfiYoutube />
                            <FaInstagram />
                        </div>
                    </div>
                </div>

                <div className="copyright">© 2025 All Rights Reserved. Design by Muhammad Sohaib</div>
            </footer>
        </>
    )
}

export default Footer
