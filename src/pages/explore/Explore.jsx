import React, { useState } from 'react'
import './Explore.css'
import Search from '../../components/search/Search'
import TabBtn from '../../components/tab-btn/TabBtn'

function Explore() {
  const [activeTab , setActiveTab] = useState('For You')
  function handleActiveTab(e){
    setActiveTab(e.target.textContent);
  }
  return (
    <div className="explore">
      <div className="main__header">
        <div className="explore__header">
          <Search />
          <div className="explore__tabs">
            <TabBtn tabName={'For You'} active={activeTab === 'For You'} handleActiveTab={handleActiveTab}/>
            <TabBtn tabName={'Trending'} active={activeTab === 'Trending'} handleActiveTab={handleActiveTab}/>
            <TabBtn tabName={'News'} active={activeTab === 'News'} handleActiveTab={handleActiveTab}/>
            <TabBtn tabName={'Sports'} active={activeTab === 'Sports'} handleActiveTab={handleActiveTab}/>
            <TabBtn tabName={'Entertainment'} active={activeTab === 'Entertainment'} handleActiveTab={handleActiveTab}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore