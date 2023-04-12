import React from 'react'
import './Messages.css'
import SideBarMenu from '../../components/sidebar-menu/SideBarMenu'
import Button from '../../components/button/Button'
import { BiMessageAltAdd } from 'react-icons/bi'

function Messages() {
  return (
    <div className="mainPageLayout">
      <SideBarMenu />
      <div className="messages">
        <div className="messages__left">
          <div className="messages__header">
            <h1 className="messages__title">Messages</h1>
            <button className='messages__new-message-btn'>
              <BiMessageAltAdd className='messages__new-message-icon' />
            </button>
          </div>
          <div className="messages__body">
            <h1 className="messages__empty-title">Welcome to your inbox!</h1>
            <p className="messages__empty-desc">Drop a line, share Chirps and more with private conversations between you and others on Chirp. </p>
            <Button text={'Write a message'} />
          </div>
        </div>
        <div className="messages__right">
          <div className="messages__body messages__body--right">
            <h1 className="messages__empty-title">Select a message</h1>
            <p className="messages__empty-desc">Choose from your existing conversations, start a new one, or just keep swimming.</p>
            <Button text={'New message'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages