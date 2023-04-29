import { useId } from 'react'

function Input({ labelName, inputType, placeholder, required, handleOnChange, inputName, inputValue, autoFocus = false }) {
    const id = useId()
    return (
        <div className="flex gap-2 flex-col items-start w-full">
            <label htmlFor={id} className="text-xl">{labelName}</label>
            <input
                type={inputType}
                placeholder={placeholder}
                id={id}
                name={inputName}
                required={required}
                className="w-full p-4 text-xl border rounded-md focus:outline-none focus:border-2 focus:border-black"
                value={inputValue}
                onChange={handleOnChange} 
                autoFocus={autoFocus}/>
        </div>
    )
}

export default Input