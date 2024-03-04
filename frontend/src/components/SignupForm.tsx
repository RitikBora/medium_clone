import { useState } from "react";
import InputBox from "./IntputBox";
import { SignupType} from "@ritikbora/common";
import { Link  , useNavigate} from "react-router-dom";
import axios from "axios";
import {BACKEND_URL} from '../../config'
import {ToastContainer, toast } from 'react-toastify'

const SignupForm = () =>
{
    const navigate = useNavigate();

    const [signupInputs , setSignupInputs] = useState<SignupType>({
        email : "",
        name: "",
        password: ""    
    });

    const sendRequest = async() =>{
        try
        {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup` , signupInputs);
            
            const token = response.data.token;
                localStorage.setItem('token' , token);
                navigate('/blog');

        }catch(err : any)
        {
            toast.error(err.response.data.error , {
                position: 'top-right' 
            //handle error
            })
        }
    }
    return(<>
        <div className=" h-full flex justify-center items-center">
            <div className="w-1/2">
                
                <h1 className="text-4xl font-bold text-center">Create an account</h1>
                <p className="text-gray-500 text-m text-center">Already have an account? <Link to="/signin" className="underline">Login</Link></p><br />
            
                <InputBox label="Name" placeholder = "Enter your name" type="text" onChange={(e) => {
                    setSignupInputs({
                        ...signupInputs,
                        name: e.target.value
                    })
                }} />

                <InputBox label="Email" placeholder = "m@example.com" type="text" onChange={(e) => {
                    setSignupInputs({
                        ...signupInputs,
                        email: e.target.value
                    })
                }}/>
                <InputBox label="Password" placeholder = "" type="password" onChange={(e) => {
                    setSignupInputs({
                        ...signupInputs,
                        password: e.target.value
                    })
                }}/>
                <button className="w-full bg-black text-white border rounded-md px-2 py-2 my-2" onClick={sendRequest}>Signup</button>
            </div>
          </div>
          <ToastContainer/>
    </>)
}

export default SignupForm;