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
                    <Link className="sidebarmenu__link">
                        <li className="sidebarmenu__list-item">
                            Chirp
                        </li>
                    </Link>
                    <Link className='sidebarmenu__link' to='/'>
                        <li className="sidebarmenu__list-item">
                            <AiOutlineHome />
                            Home
                        </li>
                    </Link>
                    <Link className='sidebarmenu__link' to='/explore'>
                        <li className="sidebarmenu__list-item">
                            <FaHashtag />
                            Explore
                        </li>
                    </Link>
                    <Link className='sidebarmenu__link' to='/notifications'>
                        <li className="sidebarmenu__list-item">
                            <FaRegBell />
                            Notifications
                        </li>
                    </Link>
                    <Link className='sidebarmenu__link' to='/messages'>
                        <li className="sidebarmenu__list-item">
                            <HiOutlineMail />
                            Messages
                        </li>
                    </Link>
                    <Link className='sidebarmenu__link' to='/bookmarks'>
                        <li className="sidebarmenu__list-item">
                            <FaRegBookmark />
                            Bookmarks
                        </li>
                    </Link>
                    <Link className='sidebarmenu__link' to='/profile'>
                        <li className="sidebarmenu__list-item">
                            <FaUserAlt />
                            Profile
                        </li>
                    </Link>
                    <button className="sidebarmenu__btn">
                        <li className="sidebarmenu__list-item">
                            <CgMenuRound />
                            More
                        </li>
                    </button>
                    <button className="sidebarmenu__btn sidebarmenu__btn--chirp" onClick={handleComposeChirp}>
                        Chirp
                    </button>
                    <button className='sidebarmenu__btn sidebarmenu__btn--user'>
                        <li className="sidebarmenu__list-item">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAMAAAAv+uv7AAAAh1BMVEX///8AESEAAADy9PQAAhpJS1MAABMAABD8/PwAAA4AEiAAABf///3+/f8AABoAAAYACR7DxciQk5fR09WEh4tKTVLc3d7p6+w/Q0wxNUGJjY+oq66eoaYPEiMlJy9gY2gqLjkLERq5u79zdXlVWF03O0Sxs7YbHicFDRsiJilnanETGCQpLTMPWTKZAAADkklEQVR4nO2a23aqMBCGQ4IQIBjOULUeELW7u+//fDuo3WorRiVMezHfhaWuuvqvyZ/JzERCEARBEARBEARBEARBzBGK/Q8hflgHaQVwxhhvn8OfVMKK2boZjUbNelrwn5HA23CUyYZSdxzY9tijNJ8xtVrwSjhh2Ura1omAzpUWAR0aQeINjaxLIpoXwFFR/y2hY+s7jrMFFcIFT74F5DMstQBcIE6m9KqOvZSYACaX2I0s/7oS/+21gBPCd9c88t8rDZySpHNt9tAaRkZIyl3UsTRHq2wYkJLZ7ZBYvjItRFYJeXXLJS3yHSa/pW8aIVb0pwTYyCGZejollgeRUwTJpF7JdHAdLQtHq8TNQJTkgT4mawghYvRblJDm1yh5v2PvwPhkot87cguwi0NS65WsUhAlxe56uXYi+mAQxZLQJxSZgZRtnGw1Z7FFUwAdLWxze3mcBVhJHWtqNsBCtrnlFAqT1g6U8+48S3MO12WEqlrqsIofvBQErvMKQ2WV61FxI9UZwzbpxUbZ1j+r8dvniDYlqArSLhBbu8q3F+2Gs5ow8AmKWiASV9Q72WXs0YXKaODzkwNFVlGFbF/yBHxhLmBFPcuyyawuYPq+Ls5XIgRMIycBgvC4OD59ogyihBUxrE/YNvfme1+cdkqoKoEy+fDyLYMb5dQb6qjcEazrc3Oweh3QyAroBmLWxoUgaUWPw0+XypfJNE7TNJ5OXiR1D2/btFLVI+dDrpNyJZ+tzg9iW0rHjmxHyvPs76xm6i+HzXFlQ8/GOL71mWVPT/vfVNofcFereJP0r74pPoZllw63sTmJd8HNudallAFHF3XHOPg67WR2ELhquR4RoqTIeoiTWXnkdXz30uzx7ddB2o2S3u+RTwJquhnkRLDGfVSHwl0wYrKsbbOlZi7dBU0OHzcmRdds3ZASm4yJOmyqezPaV5zK7BVu932OPihGJ6Ll/LFMck70YbK+fdKux6AkpmTwXiFR5/K8NNZ69HBJK8WYUwS/Yyp9i6AKDW2ftFdILIPTrjsuL25jalDMct0dl45xbqaUTPuGxLKkmeXpt3P2GNo9C/2NgQ5vYUIIX2pvILW8LU2ktnL1cKn2DX9l4uxJn6nVvuKasGzhGYiJZ2JszZb9cn1LsDSSUGpJA7sPAZWGvn1RZE0+ep68ycxdKbRf43seU8VJW+X0O9PFxTwOQRAEQRAEQRAEQRDkHv4ByxoykhEXhvYAAAAASUVORK5CYII="
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