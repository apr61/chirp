import React from 'react'
import useSignUpContext from '../hooks/useSignUpContext'
import Input from './Input'

function SignupUserUsername() {
	const { signUpState: { username }, handleInputOnChange } = useSignUpContext()
    return (
        <>
            <h1 className='font-bold text-3xl'>Create your unique username</h1>
            <Input labelName={'Username'}
                required={true}
                placeholder={'Enter your username'}
                inputType={'text'}
                inputName="USERNAME"
                inputValue={username}
                handleOnChange={handleInputOnChange}
                autoFocus={true} />
        </>
    )
}

export default SignupUserUsername