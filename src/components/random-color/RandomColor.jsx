import React from 'react'
import { useState } from 'react'
import './randomColor.css'
const RandomColor = () => {
    //am gonna use the math built in object to create a random color
    //#f12f25
    //rgb(255, 255, 255)
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#f15025');


    //tryin to create a randem color with hex and rgb
    //if random number is greater than 0.5 then create hex color else create rgb color
    function hndleCreateColor(){
        const randomColorType = Math.random() > 0.5 ? 'hex' : 'rgb';
        setTypeOfColor(randomColorType);

        if(typeOfColor === 'hex'){
            setColor(`#${Math.random().toString(16).substr(-6)}`);
        }
        else if(typeOfColor === 'rgb'){
            setColor(`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`);
        }
    }

    //create a random hex color
    function handleCreateHexColor(){
        setTypeOfColor('hex');
        setColor(`#${Math.random().toString(16).substr(-6)}`);
    }
    //create a random rgb color
    function handleCreateRgbColor(){
        setTypeOfColor('rgb');
        setColor(`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`);
    }
    return (
        <div style={{width: '100vw', height: `100vh`, background: color}} className='container'>
            <div className='wrraper'>
                <button onClick={handleCreateHexColor}>Create HEX colore</button>
                <button onClick={handleCreateRgbColor}>Create RGB color</button>
                <button onClick={hndleCreateColor}>Generate Random Color</button>
            </div>
            <div className='text'>{typeOfColor}</div>
            <div className='text'>{color}</div>
        </div>
  )
}

export default RandomColor
