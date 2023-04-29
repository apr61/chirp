import React from 'react'
import Input from './Input'
import useSignUpContext from '../hooks/useSignUpContext'

function SignupUserDetails() {
	const { signUpState: { name, email, dob }, handleInputOnChange } = useSignUpContext()
	return (
		<>
			<h1 className='font-bold text-3xl'>Create your account</h1>
			<Input labelName={'Name'}
				required={true}
				placeholder={'Enter your name'}
				inputType={'text'}
				inputName="NAME"
				inputValue={name}
				handleOnChange={handleInputOnChange} 
				autoFocus={true}/>
			<Input
				labelName={'Email'}
				required={true}
				placeholder={'you@example.com'}
				inputType={'email'}
				inputName="EMAIL"
				inputValue={email}
				handleOnChange={handleInputOnChange} />
			<Input
				labelName={'Date of birth'}
				required={true}
				inputType={'date'}
				inputName="DOB"
				inputValue={dob}
				handleOnChange={handleInputOnChange} />
		</>
	)
}

export default SignupUserDetails