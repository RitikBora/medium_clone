import { useState } from "react";
import InputBox from "./IntputBox";
import { SignupType} from "@ritikbora/common";
const Auth = ({type} : {type : "signup" | "signin"}) =>
{
    const [signupInputs , setSignupInputs] = useState<SignupType>({
        email : "",
        name: "",
        password: ""    
    });


    return(<>
        <div className=" h-full flex justify-center items-center">
            <div className="w-1/2">
                {type === "signup" ? <>
                    <h1 className="text-4xl font-bold text-center">Create an account</h1>
                    <p className="text-gray-500 text-m text-center">Already have an account? <a href="/signin" className="underline">Login</a></p><br />
                    </> : <>
                    <h1 className="text-4xl font-bold text-center">Log into account</h1>
                    <p className="text-gray-500 text-m text-center">Dont have an accout? <a href="/signup" className="underline">Signup</a></p><br /> 
                </>}
            
                {type === "signup"  &&  <InputBox label="Name" placeholder = "Enter your name" type="text" onChange={(e) => {
                    setSignupInputs({
                        ...signupInputs,
                        name: e.target.value
                    })
                }} />}
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
                <button className="w-full bg-black text-white border rounded-md px-2 py-2 my-2">{type === "signup" ? "Signup" :"Signin"}</button>
            </div>
          </div>
    </>)
}

export default Auth;