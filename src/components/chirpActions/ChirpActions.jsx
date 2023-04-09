import React from 'react'
import './ChirpActions.css'

function ChirpActions({ Icon, stats, title }) {
    return (
        <button className="chirp-actions-btn" title={title}>
            <span className={'chirp-actions-btn__icon'}>
                <Icon />
            </span>
            {stats}
        </button>
    )
}

export default ChirpActions