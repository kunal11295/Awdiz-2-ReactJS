import { useEffect, useState } from "react"

function UseEffectOne()
{
        const [counter,setCounter] = useState(0);

        useEffect(() => {console.log("Render")})

    return(
        <>
        <h1>Type 1 -Counter - {counter}</h1>
        <button onClick={()=> setCounter((prevstate) => (prevstate + 1))}>Add</button>
        </>
    )
}


export default  UseEffectOne;
