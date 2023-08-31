import { useContext } from "react";
import "../Components/Css/Home.css";
import {useNavigate} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Home()
{
    const {state,dispatch} = useContext(AuthContext)

    return(    
        <div>
            <h1>
                Homepage user -{state?.user?.name} 
            </h1>
            <button onClick={() => dispatch({type:"Logout"})}>Logout</button>
        </div>
    )
}
export default Home;