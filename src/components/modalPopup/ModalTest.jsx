import React from 'react'
import { useState } from 'react'
import Popup from './Popup'
import './popup.css'
const ModalTest = () => {
    const [showModal, setShowModal] = useState(false)
    function handleModalPopup() {
        setShowModal(!showModal)
    }

    function onClose() {
        setShowModal(false)
    };

    return (
        <div>
            <button onClick={handleModalPopup}>open popup</button>
            {
                showModal && <Popup onClose={onClose} body={<div>Customize Body</div>} />
            }
        </div>
    )
}

export default ModalTest