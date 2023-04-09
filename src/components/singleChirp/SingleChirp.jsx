import React from 'react'
import './SingleChirp.css'
import ChirpActions from '../chirpActions/ChirpActions'
import {FaReply, FaRetweet, FaRegHeart, FaShareAlt} from 'react-icons/fa'

function SingleChirp({userFullname, username, time, message, likes, replies, rechirps}) {
    return (
        <div className="singleChirp">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAMAAAAv+uv7AAAAh1BMVEX///8AESEAAADy9PQAAhpJS1MAABMAABD8/PwAAA4AEiAAABf///3+/f8AABoAAAYACR7DxciQk5fR09WEh4tKTVLc3d7p6+w/Q0wxNUGJjY+oq66eoaYPEiMlJy9gY2gqLjkLERq5u79zdXlVWF03O0Sxs7YbHicFDRsiJilnanETGCQpLTMPWTKZAAADkklEQVR4nO2a23aqMBCGQ4IQIBjOULUeELW7u+//fDuo3WorRiVMezHfhaWuuvqvyZ/JzERCEARBEARBEARBEARBzBGK/Q8hflgHaQVwxhhvn8OfVMKK2boZjUbNelrwn5HA23CUyYZSdxzY9tijNJ8xtVrwSjhh2Ura1omAzpUWAR0aQeINjaxLIpoXwFFR/y2hY+s7jrMFFcIFT74F5DMstQBcIE6m9KqOvZSYACaX2I0s/7oS/+21gBPCd9c88t8rDZySpHNt9tAaRkZIyl3UsTRHq2wYkJLZ7ZBYvjItRFYJeXXLJS3yHSa/pW8aIVb0pwTYyCGZejollgeRUwTJpF7JdHAdLQtHq8TNQJTkgT4mawghYvRblJDm1yh5v2PvwPhkot87cguwi0NS65WsUhAlxe56uXYi+mAQxZLQJxSZgZRtnGw1Z7FFUwAdLWxze3mcBVhJHWtqNsBCtrnlFAqT1g6U8+48S3MO12WEqlrqsIofvBQErvMKQ2WV61FxI9UZwzbpxUbZ1j+r8dvniDYlqArSLhBbu8q3F+2Gs5ow8AmKWiASV9Q72WXs0YXKaODzkwNFVlGFbF/yBHxhLmBFPcuyyawuYPq+Ls5XIgRMIycBgvC4OD59ogyihBUxrE/YNvfme1+cdkqoKoEy+fDyLYMb5dQb6qjcEazrc3Oweh3QyAroBmLWxoUgaUWPw0+XypfJNE7TNJ5OXiR1D2/btFLVI+dDrpNyJZ+tzg9iW0rHjmxHyvPs76xm6i+HzXFlQ8/GOL71mWVPT/vfVNofcFereJP0r74pPoZllw63sTmJd8HNudallAFHF3XHOPg67WR2ELhquR4RoqTIeoiTWXnkdXz30uzx7ddB2o2S3u+RTwJquhnkRLDGfVSHwl0wYrKsbbOlZi7dBU0OHzcmRdds3ZASm4yJOmyqezPaV5zK7BVu932OPihGJ6Ll/LFMck70YbK+fdKux6AkpmTwXiFR5/K8NNZ69HBJK8WYUwS/Yyp9i6AKDW2ftFdILIPTrjsuL25jalDMct0dl45xbqaUTPuGxLKkmeXpt3P2GNo9C/2NgQ5vYUIIX2pvILW8LU2ktnL1cKn2DX9l4uxJn6nVvuKasGzhGYiJZ2JszZb9cn1LsDSSUGpJA7sPAZWGvn1RZE0+ep68ycxdKbRf43seU8VJW+X0O9PFxTwOQRAEQRAEQRAEQRDkHv4ByxoykhEXhvYAAAAASUVORK5CYII="
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