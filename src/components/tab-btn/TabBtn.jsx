import React from 'react'
import './TabBtn.css'

function TabBtn({ tabName, handleActiveTab, active }) {
    return (
        <button className={`tab-btn ${active && 'tab-btn--active'}`}
            onClick={handleActiveTab}>{tabName}</button>
    )
}

export default TabBtn