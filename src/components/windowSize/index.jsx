import { useLayoutEffect, useState } from "react";


//useeffect load when all the dom elements will be render in browser
//useLayoutEffect load befor all the dom elements be rendred
export default function useWindowResize(){
    const [windowSize, setWindowSize] = useState({
        width : 0,
        height : 0
    })

    function handleResize(){
        setWindowSize({
            width: window.innerWidth,
            height : window.innerHeight
        })
    }

    useLayoutEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[])

    return windowSize;
}