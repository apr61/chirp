import React from 'react'
import './Bookmarks.css'
import SingleChirp from '../../components/singleChirp/SingleChirp'

function Bookmarks() {
  return (
    <div className="bookmarks">
      <div className="main__header">
        <div className="bookmarks__header">
          <h1 className="bookmarks__title">
            Bookmarks
          </h1>
          <p className="bookmarks__username">@pradeep9</p>
        </div>
      </div>
      <div className="bookmarks__body">
        <div className="bookmarks__empty">
           <h2 className="bookmarks__empty-title">Save Chirps for later</h2>
        </div>
      </div>
    </div>
  )
}

export default Bookmarks