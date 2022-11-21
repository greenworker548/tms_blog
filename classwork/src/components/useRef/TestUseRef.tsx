import { DOMElement, useRef, useState } from "react";

const COLORS = ['green', 'blue', 'yellow', 'red', 'brown', 'black', 'purple', 'orange', 'black', 'lightgray']
const TestUseRef = () => {
    const [pixels, setPixels] = useState(0)
    const ref = useRef<any>(null);
    const handleClick = () => {
        ref.current.scrollTo(0, pixels)
    }
    return (
        <div>
            <input value={pixels} onChange={(e) => setPixels(+e.target.value)}/>
            <button onClick={handleClick}>click</button>
            <div style={{ height: 200, overflow: 'auto', width: 100}} ref={ref} onScroll={() => {
                setPixels(Math.floor(ref.current.scrollTop))
                }}>
                {COLORS.map((color) => <div style={{ width: 100, backgroundColor: color, height: 250}}/>)}
            </div>
        </div>
    )
}

export { TestUseRef };
