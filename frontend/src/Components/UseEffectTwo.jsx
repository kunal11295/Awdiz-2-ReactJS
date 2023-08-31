import { useEffect, useState } from "react"

function UseEffectTwo()
{
    const [counter,setCounter] = useState(0)

    useEffect(() => {console.log("Render")},[])

    return(
        <div>
            <h1> Type 2- Counter - {counter}</h1>
            <button onClick={() => setCounter ((prevstate) => (prevstate + 1))}>+</button>
        </div>
    )
    
}

export default UseEffectTwo;

