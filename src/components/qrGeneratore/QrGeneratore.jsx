import React, { useState } from 'react'
import QRCode from 'react-qr-code';

const QrGeneratore = () => {
    const [qrCode, setQrCode] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleGenerateQrCode = () => {
        setQrCode(inputValue);
        setInputValue('');
    }
    return (
        <div>
            <h1>Qr Code Generatore</h1>
            <div>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" name='qr-code' placeholder='enter your value here' />
                <button disabled={inputValue && inputValue.trim() !== '' ? false : true} onClick={handleGenerateQrCode}>Generate</button>
            </div>
            <QRCode id="qr-code-value" value={qrCode} size={400} bgColor='#fff' />
        </div>
    )
}

export default QrGeneratore
