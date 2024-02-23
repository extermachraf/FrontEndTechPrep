import useWindowResize from "./index"

export default function UseWindowResizeTest() {

    const windowSize = useWindowResize()
    const {width, height} = windowSize
     return (
        <div>
            <h1>Use window resize hook</h1>
            <p>width is {width}</p>
            <p>height is {height}</p>
        </div>
    )
}