import React from 'react'
import './Button.css'

function Button({text, handleOnClick}) {
    return (
        <button className="btn" onClick={handleOnClick}>
            {text}
        </button>
    )
}

export default Button