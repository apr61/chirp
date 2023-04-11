import React from 'react'
import './SingleChirp.css'
import ChirpActions from '../chirpActions/ChirpActions'
import {FaReply, FaRetweet, FaRegHeart, FaShareAlt} from 'react-icons/fa'

function SingleChirp({userFullname, username, time, message, likes, replies, rechirps}) {
    return (
        <div className="singleChirp">
            <img src="https://pbs.twimg.com/profile_images/1562127188618801152/bp4EV_JS_400x400.jpg"
                alt="user" className='singleChirp__user-pic' />
            <div className="singleChirp__wrapper">
                <div className="singleChirp__user-details">
                    <h3 className="singleChirp__user-fullname">{userFullname}</h3>
                    <p className="singleChirp__username">@{username}</p>
                    <p className="singleChirp__time"> - {time}h</p>
                </div>
                <p className="singleChirp__message">{message}</p>
                <div className="singleChirp__options">
                    <ChirpActions Icon={FaReply} stats={replies} title={'Reply'}/>
                    <ChirpActions Icon={FaRetweet} stats={rechirps} title={'Rechirp'}/>
                    <ChirpActions Icon={FaRegHeart} stats={likes} title={'Like'}/>
                    <ChirpActions Icon={FaShareAlt} title={'Share'}/>
                </div>
            </div>
        </div>
    )
}

export default SingleChirp