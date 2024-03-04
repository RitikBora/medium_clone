import Quote from "../components/Quote";
import SigninForm from "../components/SigninForm";


const Signin = () =>
{
    return (<>
         <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
            <SigninForm/>
            <div className="hidden  lg:block">
                <Quote/>
            </div>
        </div>
    </>)
}

export default Signin;