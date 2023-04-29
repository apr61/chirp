import React from 'react'
import Input from './Input'
import useSignUpContext from '../hooks/useSignUpContext'

function SignupUserPassword() {
    const {signUpState: {password, cpassword}, handleInputOnChange} = useSignUpContext()
    return (
        <>
            <h1 className='font-bold text-3xl'>Create your password</h1>
            <Input
                labelName={'Password'}
                placeholder={'Enter your password'}
                required={true}
                inputType={'password'} 
                inputName={'PASSWORD'}
                inputValue={password}
                handleOnChange={handleInputOnChange}
                autoFocus={true}/>
            <Input
                labelName={'Confirm Password'}
                placeholder={'Re - Enter your password'}
                required={true}
                inputType={'password'} 
                inputName={'CPASSWORD'}
                inputValue={cpassword}
                handleOnChange={handleInputOnChange}/>
        </>
    )
}

export default SignupUserPassword