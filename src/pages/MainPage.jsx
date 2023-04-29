import {Link, NavLink} from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'

function MainPage(){
    return(
        <main className="flex min-h-screen items-center">
            <div className="max-w-md w-full mx-auto text-center p-4 flex flex-col gap-4">
                <form className="w-full flex flex-col gap-4">
                    <Link to='/'>Logo</Link>
                    <h1 className="text-3xl font-bold">Login to access Chirp</h1>
                    <Input labelName="Email" inputType="email" placeholder="you@example.com" required/>
                    <Input labelName="Password" inputType="password" placeholder="Enter password" required/>
                    <Button>Login</Button>
                </form>
                <button className="border border-slate-500 text-slate-700 rounded-md p-2 text-xl hover:bg-slate-500 hover:text-white">Login as Guest</button>
                <p className="text-slate-700 font-medium">New to Chirp ? Create Your account <Link to='/signup' className="text-teal-500">here</Link></p>
            </div>
        </main>
    )
}

export default MainPage