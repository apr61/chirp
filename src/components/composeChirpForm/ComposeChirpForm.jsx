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
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAMAAAAv+uv7AAAAh1BMVEX///8AESEAAADy9PQAAhpJS1MAABMAABD8/PwAAA4AEiAAABf///3+/f8AABoAAAYACR7DxciQk5fR09WEh4tKTVLc3d7p6+w/Q0wxNUGJjY+oq66eoaYPEiMlJy9gY2gqLjkLERq5u79zdXlVWF03O0Sxs7YbHicFDRsiJilnanETGCQpLTMPWTKZAAADkklEQVR4nO2a23aqMBCGQ4IQIBjOULUeELW7u+//fDuo3WorRiVMezHfhaWuuvqvyZ/JzERCEARBEARBEARBEARBzBGK/Q8hflgHaQVwxhhvn8OfVMKK2boZjUbNelrwn5HA23CUyYZSdxzY9tijNJ8xtVrwSjhh2Ura1omAzpUWAR0aQeINjaxLIpoXwFFR/y2hY+s7jrMFFcIFT74F5DMstQBcIE6m9KqOvZSYACaX2I0s/7oS/+21gBPCd9c88t8rDZySpHNt9tAaRkZIyl3UsTRHq2wYkJLZ7ZBYvjItRFYJeXXLJS3yHSa/pW8aIVb0pwTYyCGZejollgeRUwTJpF7JdHAdLQtHq8TNQJTkgT4mawghYvRblJDm1yh5v2PvwPhkot87cguwi0NS65WsUhAlxe56uXYi+mAQxZLQJxSZgZRtnGw1Z7FFUwAdLWxze3mcBVhJHWtqNsBCtrnlFAqT1g6U8+48S3MO12WEqlrqsIofvBQErvMKQ2WV61FxI9UZwzbpxUbZ1j+r8dvniDYlqArSLhBbu8q3F+2Gs5ow8AmKWiASV9Q72WXs0YXKaODzkwNFVlGFbF/yBHxhLmBFPcuyyawuYPq+Ls5XIgRMIycBgvC4OD59ogyihBUxrE/YNvfme1+cdkqoKoEy+fDyLYMb5dQb6qjcEazrc3Oweh3QyAroBmLWxoUgaUWPw0+XypfJNE7TNJ5OXiR1D2/btFLVI+dDrpNyJZ+tzg9iW0rHjmxHyvPs76xm6i+HzXFlQ8/GOL71mWVPT/vfVNofcFereJP0r74pPoZllw63sTmJd8HNudallAFHF3XHOPg67WR2ELhquR4RoqTIeoiTWXnkdXz30uzx7ddB2o2S3u+RTwJquhnkRLDGfVSHwl0wYrKsbbOlZi7dBU0OHzcmRdds3ZASm4yJOmyqezPaV5zK7BVu932OPihGJ6Ll/LFMck70YbK+fdKux6AkpmTwXiFR5/K8NNZ69HBJK8WYUwS/Yyp9i6AKDW2ftFdILIPTrjsuL25jalDMct0dl45xbqaUTPuGxLKkmeXpt3P2GNo9C/2NgQ5vYUIIX2pvILW8LU2ktnL1cKn2DX9l4uxJn6nVvuKasGzhGYiJZ2JszZb9cn1LsDSSUGpJA7sPAZWGvn1RZE0+ep68ycxdKbRf43seU8VJW+X0O9PFxTwOQRAEQRAEQRAEQRDkHv4ByxoykhEXhvYAAAAASUVORK5CYII="
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