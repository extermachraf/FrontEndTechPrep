import { useRef } from "react";
import UseFetch from "../fetchHook/UseFetch";

export default function TopAndButtomScroll(){

    const ref = useRef(null);
    const { data, error, pending } = UseFetch(
        "https://dummyjson.com/products?limit=100",
        {}
    );

    function handleScrollToBottom() {
        ref.current.scrollIntoView({behavior: 'smooth'})
    }
    function handleScrollToTop() {
        window.scrollTo({
            top : 0, left: 0, behavior: 'smooth'
        })
    }
    
    if(pending)
        return <h1>Loading ...</h1>
    if(error)
        return <h1>{error} an errore is Ocurred</h1>
    console.log(data)
    return <div>
        <h1>Scrool To Top And Bottom</h1>
        <h3>this is the top section</h3>
        <button onClick={handleScrollToBottom}>scroll to bottom</button>
        <ul>
            {
                data && data.products && data.products.length ? data.products.map(item=> <li>{item.title}</li>)
                : null
            }
        </ul>
        <button onClick={handleScrollToTop}>Scroll To the Top</button>
        <h3 ref={ref}>This is the Bottom section</h3>
    </div>
}