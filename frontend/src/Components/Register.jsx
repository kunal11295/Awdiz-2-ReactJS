import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from "react-hot-toast";

const Register = () =>
{
    const [userData,setuserData] = useState({name:"",email:"",password:"",confirmpassword:""})
    const router = useNavigate()
    console.log(userData,"userData") 

    const handleChange = (event) =>
    {
        setuserData({...userData,[event.target.name]:event.target.value})
    }

    const handleSubmit = async (event) =>
    {
        event.preventDefault();
        if(userData.name && userData.email && userData.password && userData.confirmpassword)
        {
            
                try{
                    const response = await axios.post("http://localhost:4000/api/v1/register",{

                    name:userData.name, 
                    email:userData.email,
                    password:userData.password,
                    confirmpassword:userData.confirmpassword
                    })
                    if(response.data.success)
                    {
                       
                        toast.success(response.data.message)
                    }
                }catch(error)
                {
                    if(!error.response.data.success)
                    toast.error(error.response.data.message)
                }
        }else{
            toast.error("All field are mandatory")
        }
    }
    return(
        <div>
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
        <label>Name</label><br/>
        <input type="text" name="name" onChange={handleChange} /><br/>
        <label>Email</label><br/>
        <input type="email" name="email" onChange={handleChange} /><br/>
        <label>Password</label><br/>
        <input type="password" name="password" onChange={handleChange} /><br/>
        <label>ConfrimPassword</label><br/>
        <input type="password" name="confirmpassword" onChange={handleChange} /><br/>
        <input type="submit" value="Register"/>
        </form>
        <button onClick={() => router('/login')}>Click here to go Login</button>
        <button onClick={() => router('/')}>Click here to go Home</button>
        </div>
    )
}

export default Register;