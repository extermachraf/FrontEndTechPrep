import React, { useEffect, useState } from 'react'

// create a custom hook to set the theme to the local storage
// the hook takes in two parameters the key and the default value of the theme to be set to the local storage
const UseLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        let currentValue;
        try {
            currentValue = JSON.parse(localStorage.getItem(key)) || String(defaultValue);
        }
        catch (error) {
            currentValue = defaultValue;
        }
        return currentValue;
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])
    return [value, setValue];
}

export default UseLocalStorage
