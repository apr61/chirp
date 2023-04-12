import React from 'react'
import './ChirpActions.css'


function ChirpActions({ Icon, stats, title, handleChirpAction }) {
    return (
        <button className={`chirp-actions-btn chirp-actions-btn--${title.toLowerCase()}`} 
        title={title} 
        onClick={handleChirpAction}>
            <span className='chirp-actions-btn__icon-wrap'>
                <Icon className='chirp-actions-btn__icon'/>
            </span>
            {stats}
        </button>
    )
}

export default ChirpActions