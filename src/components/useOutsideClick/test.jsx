import { useRef, useState } from "react"
import useOutsideClick from "./index"

export default function UseOnclickOutsideTest() {
    const [showContent, setShowContent] = useState(false)
    const ref = useRef()
    useOutsideClick(ref, () => setShowContent(false))
    return(
        <div>
            {
                showContent 
                ? <div ref={ref}>
                    <h1>This is a random content</h1>
                    <p>please click on the button Show Content</p>
                </div>
                : <button onClick={() => setShowContent(!showContent)}>Show Content</button>
            }
        </div>
    )
}