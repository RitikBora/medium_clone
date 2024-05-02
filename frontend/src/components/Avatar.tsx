import { useState } from "react";

const Avatar = ({name , size} : {name : string , size: "small" | "big"}) =>
{
    const nameDetails = name.split(" ");
    const initials = nameDetails[0][0].toUpperCase();
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () =>
    {
        setDropdownOpen(!isDropdownOpen);
    }
    
    const logoutUser = () =>
    {
        localStorage.removeItem("token");
        window.location.reload();

    }
    return (<>
        <button
            className={`relative inline-flex items-center justify-center ${size === 'small' ? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
            type="button"
            onClick={toggleDropdown} 
        >
            <span className="font-medium text-gray-600 dark:text-gray-300">{initials}</span>
        </button>
        {isDropdownOpen && (
           <div className="z-50 bg-gray-100 p-5 border-2 border-slate-300 text-base list-none bg-grey-200 divide-y divide-gray-100 rounded-lg shadow absolute right-0 mr-10 " id="user-dropdown">
                <div >
                    <ul  aria-labelledby="user-menu-button">
                        <li className="pb-2">
                            <a  className="block text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white font-bold cursor-pointer" onClick={logoutUser} >Logout</a>
                        </li>
                        <div className="border-b-2 border-slate-200"></div>
                        <li className="pt-2">
                            <a  className="block  text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white font-bold cursor-pointer" onClick={() => {}} >My Blogs</a>
                        </li>
                    </ul>
                </div>
            </div>
        )}

    </>)
}

export default Avatar;