import React from 'react'
import './SingleChirp.css'
import ChirpActions from '../chirpActions/ChirpActions'
import { FaReply, FaRetweet, FaRegHeart, FaShareAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function SingleChirp({ userFullname, chirpId, username, time, message, likes, replies, rechirps }) {
    function handleChirpAction(e) {

    }
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
                <Link to={`${username}/status/${chirpId}`} className='singleChirp__link'>
                    <p className="singleChirp__message">{message}</p>
                </Link>
                <div className="singleChirp__options">
                    <ChirpActions Icon={FaReply} stats={replies} title={'Reply'} handleChirpAction={handleChirpAction} />
                    <ChirpActions Icon={FaRetweet} stats={rechirps} title={'Rechirp'} handleChirpAction={handleChirpAction} />
                    <ChirpActions Icon={FaRegHeart} stats={likes} title={'Like'} handleChirpAction={handleChirpAction} />
                    <ChirpActions Icon={FaShareAlt} title={'Share'} handleChirpAction={handleChirpAction} />
                </div>
            </div>
        </div>
    )
}

export default SingleChirp