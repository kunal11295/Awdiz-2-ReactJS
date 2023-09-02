import axios from "axios";
import {  useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import  {AuthContext} from "../Context/AuthContext"
import api from "../ApiConfig";


const Login = () => {
   
    const router = useNavigate();

    const { state,dispatch } = useContext(AuthContext)
    console.log(state, "state from context into login componnt")

    const [userData, setUserData] = useState({ email: "", password: "" });

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            try {
                const response = await api.post('/login', { 
                email:userData.email,
                password:userData.password
                })
                if (response.data.success) {
                    dispatch({
                        type: "Login",
                        payload: response.data.user
                    })
                    localStorage.setItem("batch2Token",JSON.stringify(response.data.token))
                    setUserData({ email: "", password: "" })
                    router('/Homepage')
                    toast.success(response.data.message)
                }
            } catch (error) {
                if(!error.response.data.success)
                toast.error(error.response.data.message)
            }
        } else {
            toast.error("All fields are mandtory.")
        }
    }

    useEffect(()=>{
        if(state?.user?.name)
        {
            toast.success("You are already Logged in")
            router('/')
        }
    },[state])


    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label>Email :</label><br />
                <input type="email" name='email' onChange={handleChange} /><br />
                <label>Password :</label><br />
                <input type="password" name="password" onChange={handleChange} /><br />
                <input type="submit" value="Login" /><br />
            </form>
            <button onClick={() => router("/register")}>Click to go Register</button>
            <button onClick={() => router("/")}>Click to go Home</button>
        </div>
    )
}

export default Login;