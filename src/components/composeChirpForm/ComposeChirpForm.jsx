import React from 'react'
import './ComposeChirpForm.css'

function ComposeChirpForm() {
  function handleTextAreaHeight(e) {
    e.target.style.height = 'inherit'
    e.target.style.height = `${e.target.scrollHeight}px`
  }
  function handleComposeChirp(e){
    e.preventDefault();
    console.log('data gone')
  }
  return (
    <form className='chirpForm' onSubmit={handleComposeChirp}>
      <div className="chirpForm__wrapper">
        <img src="https://pbs.twimg.com/profile_images/1562127188618801152/bp4EV_JS_400x400.jpg"
          alt="user" className='chirpForm__user-pic' />
        <textarea placeholder="What's happening?" className='chirpForm__input' onKeyDown={handleTextAreaHeight}></textarea>
      </div>
      <div className="chirpForm__options">
        <button className="chirpForm__btn">Chirp</button>
      </div>
    </form>
  )
}

export default ComposeChirpForm