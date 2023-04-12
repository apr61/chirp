import React from 'react'
import './SingleChirpPage.css'
import ChirpActions from '../../components/chirpActions/ChirpActions'
import { FaReply, FaRetweet, FaRegHeart, FaShareAlt } from 'react-icons/fa'

function SingleChirpPage() {
    function handleChirpAction() {

    }
    return (
        <div className="singleChirpPage">
            <div className="main__header">
                <div className="singleChirpPage__header">
                    <h1 className="singleChirpPage__title">Chirp</h1>
                </div>
            </div>
            <div className="singleChirpPage__body">
                <div className="singleChirpPage__chirp">
                    <div className="singleChirpPage__user-details">
                        <img src="https://pbs.twimg.com/profile_images/1562127188618801152/bp4EV_JS_400x400.jpg" alt="" className="singleChirpPage__img" />
                        <div className="singleChirpPage__user-wrapper">
                            <h1 className="singleChirpPage__user-fullname">Pradeep</h1>
                            <p className="singleChirpPage__username">@pradeep9</p>
                        </div>
                    </div>
                    <p className="singleChirpPage__chirp-msg">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi sed ipsum voluptatibus fugiat quo, beatae suscipit odio voluptas! Iure minus rem corporis cupiditate debitis fuga ratione assumenda nam dolores illo!
                    </p>
                    <p className="singleChirpPage__chirp-time-stamp">
                        1:55 PM · Apr 12, 2023
                    </p>
                </div>
                <div className="singleChirpPage__chirp-stats">
                    <p className="singleChirpPage__chirp-stat"><span className="singleChirpPage__chirp-stat-count">2</span> Rechirp</p>
                    <p className="singleChirpPage__chirp-stat"><span className="singleChirpPage__chirp-stat-count">3</span> Likes</p>
                </div>
                <div className="singleChirpPage__chirp-actions">
                    <ChirpActions Icon={FaReply} title={'Reply'} handleChirpAction={handleChirpAction} />
                    <ChirpActions Icon={FaRetweet} title={'Rechirp'} handleChirpAction={handleChirpAction} />
                    <ChirpActions Icon={FaRegHeart} title={'Like'} handleChirpAction={handleChirpAction} />
                    <ChirpActions Icon={FaShareAlt} title={'Share'} handleChirpAction={handleChirpAction} />
                </div>
            </div>
        </div>
    )
}

export default SingleChirpPage