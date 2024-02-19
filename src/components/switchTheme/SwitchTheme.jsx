import React from 'react'
import './switchTheme.css'
import UseLocalStorage from './UseLocalStorage'
// SwitchTheme component to change the theme of the application from light to dark and vice versa
// the theme is set to the local storage using the custom hook UseLocalStorage which is created in the UseLocalStorage.jsx file
const SwitchTheme = () => {
    const [theme, setTheme] = UseLocalStorage('theme', "dark");

    function handleToggleTheme() {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    console.log(theme);
    return (
        <div className='light-dark-mode' data-theme={theme}>
            <div className='cont-ainer'>
                <p>Hellow world</p>
                <button className='button-style' onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    )
}

export default SwitchTheme
