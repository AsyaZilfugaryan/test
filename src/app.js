import React, { useState } from "react"; //hook

const App = () => {

    const [x, setX] = useState(0)

    function plus() {
        setX(x + 1)
    }

    function minus() {
        setX(x - 1)
    }
   

    return (
        <div>
            <h1>{x}</h1>
            <div>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
                
            </div>
        </div>
    )
}
export default App