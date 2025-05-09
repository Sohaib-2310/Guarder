import React from 'react'
import './Navbar.scss'
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="upper">
          <div className="u location">
            <div className="icon"><MdLocationPin /></div>
            <div className="text">Lorem ipsum dolor sit amet,</div>
          </div>

          <div className="u phone">
            <div className="icon"><FaPhone /></div>
            <div className="text">Call : +01 1234567890</div>
          </div>

          <div className="u email">
            <div className="icon"><TbMailFilled /></div>
            <div className="text">demo@gmail.com</div>
          </div>
        </div>

        <div className="lower">
          <p className="logo"><b>Guarder</b></p>
          <ul>
            <li className='active'><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Guards</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
