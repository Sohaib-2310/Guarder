import React from 'react'
import './Services.scss'
import Button from '../components/Button'
import HomeIcon from '../assets/s1.svg'
import OfficeIcon from '../assets/s2.svg'
import BodyguardIcon from '../assets/s3.svg'

const Services = () => {
    return (
        <>
            <div className="servicesContainer">
                <h1>Our Services</h1>

                <div className="servicesCards">

                    <div className="card homeSecurity">
                        <img className='icon' src={HomeIcon} alt="" />
                        <p className="heading">Home Security</p>
                        <p className="details">Minima consequatur architecto eaque assumenda ipsam
                            itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti
                            excepturi ullam.</p>
                        <Button title='Read More' />
                    </div>

                    <div className="card officeSecurity">
                        <img className='icon' src={OfficeIcon} alt="" />
                        <p className="heading">Office Security</p>
                        <p className="details">Minima consequatur architecto eaque assumenda ipsam
                            itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti
                            excepturi ullam..</p>
                        <Button title='Read More' />
                    </div>

                    <div className="card bodyguard">
                        <img className='icon' src={BodyguardIcon} alt="" />
                        <p className="heading">Bodyguard</p>
                        <p className="details">Minima consequatur architecto eaque assumenda ipsam
                            itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti
                            excepturi ullam.</p>
                        <Button title='Read More' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Services
