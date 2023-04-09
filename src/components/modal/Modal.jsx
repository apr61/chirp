import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

function Modal({ handleComposeChirp, children }) {

    return ReactDOM.createPortal(
        <div className="modal__overlay">
            <div className="modal">
                <div className="modal__card">
                    <button className="modal__btn" title='Close' onClick={handleComposeChirp}>X</button>
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal