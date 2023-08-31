import "../Components/Css/Counter.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Counter(props)
{
    const {myName,myAge,Student,name,setName} = props;
     console.log(myName,myAge,Student,name,setName);
    const router = useNavigate();

    const [counter,setCounter] = useState(100)
    return(
        
        <div>
            <h1>Name -{name}</h1>
            <button onClick={()=> setName("xyz")}>Change Name</button>
            {/* <h1>Counter - {counter}</h1>
            <button className="btn" onClick={() => setCounter((prevState) => prevState + 2)}>Add</button>
            <button className="btn" onClick={() => setCounter((prevState) => prevState - 2)}>Minus</button>
            <button className="btn" onClick={() => router('/')}>HomePage</button> */}
        </div>
    )
}
export default Counter;