import {user} from '../App'
import Button from './Button'

function ComposeChirpForm(){
    function handleTextAreaHeight(e){
        e.target.style.height = 'inherit',
        e.target.style.height = `${e.target.scrollHeight}px`
    }
    function handleFormSubmit(e){
        e.preventDefault()
    }
    return(
        <form className='flex gap-4 mx-4 mt-4' onSubmit={handleFormSubmit}>
            <div className="w-12 h-12 overflow-hidden rounded-full shrink-0">
                <img src={user.profileImg} className="w-full h-full object-cover"/>
            </div>
            <div className='w-full'>
                <textarea className="w-full placeholder:text-xl placeholder:text-black focus:outline-none text-xl resize-none leading-6"
                    rows='4'
                    placeholder="What's happening?" 
                    onKeyDown={handleTextAreaHeight}>
                </textarea>
                <div className="flex">
                    <div className="ml-auto">
                        <Button rounded='rounded-md'>Chirp</Button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ComposeChirpForm