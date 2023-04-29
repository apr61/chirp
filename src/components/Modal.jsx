

function Modal({children, isOpen, handleModalState}){
    if(!isOpen) return
    return(
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-10 z-50 h-full">
            <div className="bg-white max-w-xl w-full fixed top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg">
                <div className='realtive mt-8'>
                    <button className='absolute top-2 right-2 text-xl hover:bg-gray-300 rounded-full w-8 h-8' title="Close" onClick={handleModalState}>X</button>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal