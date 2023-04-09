import React from 'react'
import './Search.css'
import {AiOutlineSearch} from 'react-icons/ai'

function Search() {
  return (
    <div className="search">
        <AiOutlineSearch />
        <input type="search" id="search" placeholder='Search Chirp' className='search__input'/>
    </div>
  )
}

export default Search