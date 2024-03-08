import Avatar from "./Avatar";
import { Link } from "react-router-dom";

const Appbar  = () =>
{
    return (<>
        <div>
            <div className="flex justify-between mx-10 pt-4">
                <Link to={"/blogs"}>
                    <div className="font-bold text-xl flex justify-center flex-col">MEDIUM</div> 
                </Link>
                <Avatar name={"Ritik"} size="big"/>
            </div>
            <div className="border-b-2 border-slate-200 py-2"></div>
        </div>
    </>)
}


export default Appbar;

