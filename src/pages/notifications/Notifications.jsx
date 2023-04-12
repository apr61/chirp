import React, { useState } from 'react'
import './Notifications.css'
import TabBtn from '../../components/tab-btn/TabBtn'

function Notifications() {
  const [activeTab, setActiveTab] = useState('All')
  function handleActiveTab(e){
    setActiveTab(e.target.textContent)
  }
  return (
    <div className="notifications">
      <div className="main__header">
        <div className="notifications__header">
          <h1 className="notifications__title">Notifications</h1>
        </div>
        <div className="notifications__tabs">
          <TabBtn tabName={'All'} handleActiveTab={handleActiveTab} active={activeTab === 'All'}/>
          <TabBtn tabName={'Verified'} handleActiveTab={handleActiveTab} active={activeTab === 'Verified'}/>
          <TabBtn tabName={'Mentions'} handleActiveTab={handleActiveTab} active={activeTab === 'Mentions'}/>
        </div>
      </div>
      <div className="notifications__body">
        <div className="notifications__empty">
          <h2 className="notifications__empty-title">Nothing to see here - yet</h2>
        </div>
      </div>
    </div>
  )
}

export default Notifications