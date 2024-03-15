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
                <div>
                    <Link to={"/create"}>
                        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">New Blog</button>
                    </Link>
                    <Avatar name={"Ritik"} size="big"/>
                </div>
            </div>
            <div className="border-b-2 border-slate-200 py-2"></div>
        </div>
    </>)
}


export default Appbar;

