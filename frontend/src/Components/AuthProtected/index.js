import {useContext} from "react"
import {AuthContext} from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"

function AuthProtected({children})
{
    const{ state } = useContext(AuthContext)
    
    const router = useNavigate()

    if(state?.user?.name)
    return(
        children
    )
    else{
        toast.error("you are not allowed to access the page");
       return(
        <div>
            <h1>this page is AuthProtected</h1>
            <button onClick={()=> router('/login')}>Go to login</button>
        </div>
       )
    }
}


export default AuthProtected;