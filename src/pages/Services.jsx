import React from 'react'
import './Services.scss'
import Button from '../components/Button'
import homeSecurityImg from '../assets/s1.svg'
import officeSecurityImg from '../assets/s2.svg'
import bogyguardImg from '../assets/s3.svg'


const Services = () => {
    return (
        <>
            <div className="servicesContainer">
                <h1>Our Services</h1>

                <div className="servicesCards">

                    <div className="card homeSecurity">
                        <img className='icon' src={homeSecurityImg} alt="" />
                        <p className="heading">Home Security</p>
                        <p className="details">Minima consequatur architecto eaque assumenda ipsam
                            itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti
                            excepturi ullam.</p>
                        <Button title='Read more' />
                    </div>

                    <div className="card officeSecurity">
                        <img className='icon' src={officeSecurityImg} alt="" />
                        <p className="heading">Office Security</p>
                        <p className="details">Minima consequatur architecto eaque assumenda ipsam
                            itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti
                            excepturi ullam..</p>
                        <Button title='Read more' />
                    </div>

                    <div className="card bodyguard">
                        <img className='icon' src={bogyguardImg} alt="" />
                        <p className="heading">Bodyguard</p>
                        <p className="details">Minima consequatur architecto eaque assumenda ipsam
                            itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti
                            excepturi ullam.</p>
                        <Button title='Read more' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Services
