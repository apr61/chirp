import React from 'react'
import Input from '../input/Input'
import './auth.css'
import Button from '../button/Button'

function Login() {
  function handleLogin(){

  }
  return (
    <div className="auth">
      <h1 className="auth__title">Login to Chirp</h1>
      <Input inputType={'email'} labelName={'Email'} placeholder={'Enter your email'}/>
      <Input inputType={'password'} labelName={'Password'} placeholder={'Enter your Password'}/>
      <Button text={'Login'} handleOnClick={handleLogin}/>
    </div>
  )
}

export default Login