import React, { useId } from 'react'
import './Input.css'

function Input({inputType, placeholder, labelName}) {
    const id = useId()
  return (
    <div className="input-wrapper">
        <label htmlFor={id} className='input-wrapper__label'>{labelName}</label>
        <input type={inputType} id={id} placeholder={placeholder} className='input-wrapper__input'/>
    </div>
  )
}

export default Input