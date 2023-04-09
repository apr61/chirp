import React from 'react'
import './Profile.css'
import {FaCalendar} from 'react-icons/fa'

function Profile() {
  return (
    <div className="profile">
      <div className="main__header">
        <div className="profile__header">
          <h1 className="profile__title">Pradeep</h1>
          <p className="profile__chirps-count">0 Chirps</p>
        </div>
      </div>
      <div className="profile__body">
        <div className="profile__photo-container">
          <img src='https://pbs.twimg.com/profile_banners/1562031695813296128/1661275139/1500x500' alt="" className="profile__header-photo" />
          <img src='https://pbs.twimg.com/profile_images/1562127188618801152/bp4EV_JS_400x400.jpg' alt="" className="profile__photo" />
        </div>
        <div className="profile__details">
          <button className="profile__btn-edit">Edit profile</button>
          <div className="profile__wrapper">
            <h1 className="profile__title">Pradeep</h1>
            <p className="profile__username">@pradeep9</p>
            <p className="profile__joined-date"><FaCalendar /> Joined August 2022</p>
            <div className="profile__follow-details">
              <p className="profile__follow">9 Following</p>
              <p className="profile__follow">9 Followers</p>
            </div>
          </div>
        </div>
        <div className="profile__tabs">
          <button className="profile__tab">Chirps</button>
          <button className="profile__tab">Replies</button>
          <button className="profile__tab">Media</button>
          <button className="profile__tab">Likes</button>
        </div>
      </div>
    </div>
  )
}

export default Profile