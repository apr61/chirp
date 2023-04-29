import Header from '../components/Header'
import SideNavbar from '../components/SideNavbar'
import Button from '../components/Button'
import {BiMessageSquareAdd} from 'react-icons/bi'

export default function Messages(){
  return(
    <>
        <main className="max-w-5xl mx-auto flex min-h-screen">
          <SideNavbar />
          <div className="flex-1 flex border-x border-slate-300">
                <div className='basis-1/3 border-r border-gray-300'>
                    <div className='flex justify-between align-center p-4 sticky top-0'>
                        <h1 className="text-xl font-bold">Messages</h1>
                        <button>
                            <BiMessageSquareAdd className='text-xl'/>
                        </button>
                    </div>
                    <div className="p-4">
                        <h2 className="font-bold text-3xl">Welcome to your inbox!</h2>
                        <p className='my-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et</p>
                        <Button>Write a message</Button>
                    </div>
                </div>
                <div className="basis-2/3 flex justify-center align-center h-full flex-col mx-auto max-w-xs">
                    <h2 className="font-bold text-3xl">Select a message</h2>
                        <p className='my-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et</p>
                        <Button>New message</Button>
                </div>
          </div>
        </main>
    </>
  )
}