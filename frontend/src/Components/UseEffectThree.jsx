import { useEffect, useState } from "react"

function UseEffectThree()
{
    const [counter1,setCounter1] = useState(0)
    const [counter2,setCounter2] = useState(0)


    useEffect(() => {console.log("Render")},[counter1])

    return(
        <div>
            <h1>Type 3 - Counter1 - {counter1}</h1>
            <button onClick={() => setCounter1((prevState) =>(prevState + 1))}> + for Counter1</button>
            
            <h1>Type 3 -Counter2 - {counter2}</h1>
            <button onClick={() => setCounter2((prevState) =>(prevState + 1))}> + for Counter2</button>
        </div>
    )
}


export default UseEffectThree;
