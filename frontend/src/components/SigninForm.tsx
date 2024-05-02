import { useState } from "react";
import InputBox from "./IntputBox";
import { SigninType} from "@ritikbora/common";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSetRecoilState } from "recoil";
import { userAtom } from "../recoil/atoms/UserAtom";

const SigninForm = () =>
{
    const [signinInputs , setSigninInputs] = useState<SigninType>({
        email : "",
        password: ""    
    });

    const setUser = useSetRecoilState(userAtom);

    const navigate = useNavigate();

    const sendRequest = async() =>{
        try
        {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin` , signinInputs);

            const token = response.data.token;
                localStorage.setItem('token' , token);
                setUser({isLoading: false , name : response.data.user.name});
                navigate('/blogs');
        }catch(err : any)
        {
           toast.error(err.response.data.error , {
            position: 'top-right' 
        })
            //handle error
        }
    }
    return(<>
        <div className=" h-full flex justify-center items-center">
            <div className="w-1/2">
                
                <h1 className="text-4xl font-bold text-center">Log into account</h1>
                <p className="text-gray-500 text-m text-center">Dont have an accout? <Link to="/signup" className="underline">Signup</Link></p><br /> 
               
                <InputBox label="Email" placeholder = "m@example.com" type="text" onChange={(e) => {
                    setSigninInputs({
                        ...signinInputs,
                        email: e.target.value
                    })
                }}/>
                <InputBox label="Password" placeholder = "" type="password" onChange={(e) => {
                    setSigninInputs({
                        ...signinInputs,
                        password: e.target.value
                    })
                }}/>
                <button className="w-full bg-black text-white border rounded-md px-2 py-2 my-2" onClick={sendRequest}>Signin</button>
                <ToastContainer />
            </div>
          </div>
    </>)
}

export default SigninForm;