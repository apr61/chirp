import React, { useState } from 'react'
import Explore from '../explore/Explore'
import { Link } from 'react-router-dom'
import { FaHashtag } from 'react-icons/fa'
import './AuthPage.css'
import Modal from '../../components/modal/Modal'
import Login from '../../components/login/Login'
import SignUp from '../../components/signup/SignUp'

function AuthPage() {
    const [activeAuth, setActiveAuth] = useState('')
    const [modal, setModal] = useState(false)
    function handleActiveAuth(e) {
        setModal(!modal)
        setActiveAuth(e.target.textContent)
    }
    return (
        <>
            <div className="authPage">
                <div className="mainPageLayout">
                    <div className="sidebarmenu">
                        <ul className="sidebarmenu__list">
                            <Link className="sidebarmenu__link" to='/'>
                                <li className="sidebarmenu__list-item">
                                    Chirp
                                </li>
                            </Link>
                            <Link className='sidebarmenu__link' to='/explore'>
                                <li className="sidebarmenu__list-item">
                                    <FaHashtag className='sidebarmenu__icon' />
                                    Explore
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="mainPageLayout__container">
                        <Explore />
                    </div>
                    <div className="sidebarsuggestions">

                    </div>
                </div>
                <nav className="authPage__nav">
                    <ul className="authPage__list">
                        <button className='authPage__btn' onClick={handleActiveAuth}>
                            <li className="authPage__list-item">Login</li>
                        </button>
                        <button className='authPage__btn' onClick={handleActiveAuth}>
                            <li className="authPage__list-item authPage__list-item--signup">Sign up</li>
                        </button>
                    </ul>
                </nav>
            </div>
            {
                modal && activeAuth === 'Login' ? (<Modal handleComposeChirp={() => setModal(!modal)}><Login /></Modal>) :
                    modal && activeAuth === 'Sign up' && (<Modal handleComposeChirp={() => setModal(!modal)}><SignUp /></Modal>)
            }
        </>
    )
}

export default AuthPage