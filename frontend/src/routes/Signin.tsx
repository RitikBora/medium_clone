import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signin = () =>
{
    return (<>
         <div className="h-screen grid grid-cols-2">
            <Auth type="signin"/>
            <div className="invisible lg:visible">
                <Quote/>
            </div>
        </div>
    </>)
}

export default Signin;