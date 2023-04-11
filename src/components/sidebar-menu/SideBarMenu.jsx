import React, { useState } from 'react'
import './SideBarMenu.css'
import { Link } from 'react-router-dom'
import { FaHashtag, FaRegBell, FaRegBookmark, FaUserAlt } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineHome } from 'react-icons/ai'
import { CgMenuRound } from 'react-icons/cg'
import { BsThreeDots } from 'react-icons/bs'
import Modal from '../modal/Modal'
import ComposeChirpForm from '../composeChirpForm/ComposeChirpForm'

function SideBarMenu() {
    const [composeChirp, setComposeChirp] = useState(false)

    function handleComposeChirp() {
        setComposeChirp(!composeChirp)
    }
    return (
        <>
            <aside className='sidebarmenu'>
                <ul className="sidebarmenu__list">
                    <Link className="sidebarmenu__link"  to='/'>
                        <li className="sidebarmenu__list-item">
                            Chirp
                        </li>
                    </Link>
                    <Link className='sidebarmenu__link' to='/'>
                        <li className="sidebarmenu__list-item">
                            <AiOutlineHome className='sidebarmenu__icon'/>
                            Home
                        </li>
                    </Link>
                    <Link className='sidebarmenu__link' to='/explore'>
                        <li className="sidebarmenu__list-item">
                            <FaHashtag className='sidebarmenu__icon'/>
                            Explore
                        </li>
                    </Link>
                    <Link className='sidebarmenu__link' to='/notifications'>
                        <li className="sidebarmenu__list-item">
                            <FaRegBell className='sidebarmenu__icon'/>
                            Notifications
                        </li>
                    </Link>
                    <Link className='sidebarmenu__link' to='/messages'>
                        <li className="sidebarmenu__list-item">
                            <HiOutlineMail className='sidebarmenu__icon'/>
                            Messages
                        </li>
                    </Link>
                    <Link className='sidebarmenu__link' to='/bookmarks'>
                        <li className="sidebarmenu__list-item">
                            <FaRegBookmark className='sidebarmenu__icon'/>
                            Bookmarks
                        </li>
                    </Link>
                    <Link className='sidebarmenu__link' to='/profile'>
                        <li className="sidebarmenu__list-item">
                            <FaUserAlt className='sidebarmenu__icon'/>
                            Profile
                        </li>
                    </Link>
                    <button className="sidebarmenu__btn">
                        <li className="sidebarmenu__list-item">
                            <CgMenuRound className='sidebarmenu__icon'/>
                            More
                        </li>
                    </button>
                    <button className="sidebarmenu__btn sidebarmenu__btn--chirp" onClick={handleComposeChirp}>
                        Chirp
                    </button>
                    <button className='sidebarmenu__btn sidebarmenu__btn--user'>
                        <li className="sidebarmenu__list-item">
                            <img src="https://pbs.twimg.com/profile_images/1562127188618801152/bp4EV_JS_400x400.jpg"
                                alt="user" className='sidebarmenu__user-pic' />
                            User
                            <BsThreeDots />
                        </li>
                    </button>
                </ul>
            </aside>
            {
                composeChirp && (<Modal handleComposeChirp={handleComposeChirp}><ComposeChirpForm /></Modal>)
            }
        </>
    )
}

export default SideBarMenu