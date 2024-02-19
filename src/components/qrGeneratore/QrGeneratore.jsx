import React, { useState } from 'react'
import QRCode from 'react-qr-code';

// QrGeneratore component
//the component is used to generate qr code from the input value
//the input value is set to the qr code and the qr code is displayed
//the qr code is generated using the react-qr-code package which is installed using npm
const QrGeneratore = () => {
    //useState to set the qr code and input value
    const [qrCode, setQrCode] = useState('');
    const [inputValue, setInputValue] = useState('');

    //function to handle the generation of the qr code
    const handleGenerateQrCode = () => {
        setQrCode(inputValue);
        setInputValue('');
    }
    return (
        <div>
            {/* input field to enter the value to be set to the qr code */}
            <h1>Qr Code Generatore</h1>
            <div>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" name='qr-code' placeholder='enter your value here' />
                <button disabled={inputValue && inputValue.trim() !== '' ? false : true} onClick={handleGenerateQrCode}>Generate</button>
            </div>
            {/* qr code is displayed here */}
            <QRCode id="qr-code-value" value={qrCode} size={400} bgColor='#fff' />
        </div>
    )
}

export default QrGeneratore
