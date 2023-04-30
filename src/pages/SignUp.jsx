import React from 'react'
import { Link } from 'react-router-dom'
import SignupUserDetails from '../components/SignupUserDetails'
import SignupUserPassword from '../components/SignupUserPassword'
import Button from '../components/Button'
import useMultiStepForm from '../hooks/useMultiStepForm'
import useSignUpContext from '../hooks/useSignUpContext'

function SignUp() {
    const { step, next, back, steps, currentStepIndex, isFirstStep, isLastStep } = useMultiStepForm([<SignupUserDetails />, <SignupUserPassword />])
    const {signUpUser, loading} = useSignUpContext()
    function handleOnSubmit(e) {
        e.preventDefault()
        if(!isLastStep) return next()
        // TODO: SignUp functionality
        signUpUser()
    }
    return (
        <main className="flex min-h-screen items-center">
            <div className="max-w-md w-full mx-auto text-center p-4 flex flex-col gap-4">
                <form className="w-full flex flex-col gap-4" onSubmit={handleOnSubmit}>
                    <div className='ml-auto'>
                        <p className='font-medium'>Step - {currentStepIndex + 1}/{steps.length}</p>
                    </div>
                    {step}
                    <div className='flex ml-auto gap-4'>
                        {
                            !isFirstStep && (
                                <button type='button' onClick={back} className='border py-2 px-4 rounded-md border-slate-800 hover:bg-slate-200'>Back</button>
                            )
                        }
                        <Button loading={loading} rounded={'rounded-md'}>{isLastStep ? 'Sign Up' : 'Next'}</Button>
                    </div>
                </form>
                <p className="text-slate-700 font-medium">Already have an account ? Go <Link to='/' className="text-teal-500">here</Link></p>
            </div>
        </main>
    )
}

export default SignUp