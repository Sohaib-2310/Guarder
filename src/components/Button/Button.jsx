import React from 'react'
import './Button.scss'

const Button = (props) => {
    return (
        <>
            <div className="btnContainer">
                <button>{props.title}</button>
            </div>
        </>
    )
}

export default Button
