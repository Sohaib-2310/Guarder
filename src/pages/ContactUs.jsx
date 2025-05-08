import React from 'react'
import './ContactUs.scss'
import Button from '../components/Button';

const ContactUs = () => {
    return (
        <>
            <div className="contact">
                <div className="contactContainer">
                    <h1>GET IN TOUCH</h1>

                    <form action="post">
                        <input type="text" placeholder='FULL NAME' />
                        <input type="email" placeholder='EMAIL' />
                        <input type="phone" placeholder='PHONE NUMBER' />
                        <input type="text" id='msg' placeholder='MESSAGE' />
                    </form>

                    <Button title="SEND" />
                </div>
            </div>
        </>
    )
}

export default ContactUs
