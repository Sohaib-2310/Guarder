import React from 'react'
import './Guards.scss'
import Button from '../../components/Button/Button'
import Guard1 from '../../assets/g1.jpg'
import Guard2 from '../../assets/g2.jpg'
import Guard3 from '../../assets/g3.jpg'

const Guards = () => {
    return (
        <>
            <div className="guards">
                <div className="guardsContainer">

                    <div className="details">
                        <h1>OUR GUARDS</h1>
                        <p>Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod
                            suspendisse vel, sed quam nulla mauris iaculis. Erat eget vitae malesuada,
                            tortor tincidunt porta lorem lectus.
                        </p>
                    </div>

                    <div className="cardsContainer">
                        <div className="cards card1">
                            <img src={Guard1} alt="" />
                            <div className="cardDetail">
                                <p className="name">Martin Anderson</p>
                                <p className="status">supervisor</p>
                            </div>
                        </div>

                        <div className="cards card2">
                            <img src={Guard2} alt="" />
                            <div className="cardDetail">
                                <p className="name">Denny Butler</p>
                                <p className="status">supervisor</p>
                            </div>
                        </div>

                        <div className="cards card2">
                            <img src={Guard3} alt="" />
                            <div className="cardDetail">
                                <p className="name">Nathan Mcpherson</p>
                                <p className="status">supervisor</p>
                            </div>
                        </div>
                    </div>

                    <Button title="View All" />
                </div>
            </div>
        </>
    )
}

export default Guards
