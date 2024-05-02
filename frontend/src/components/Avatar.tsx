
const Avatar = ({name , size} : {name : string , size: "small" | "big"}) =>
{
    const nameDetails = name.split(" ");
    const initials = nameDetails[0][0].toUpperCase();

    return (<>
        <div className={`relative inline-flex items-center justify-center ${size === 'small' ? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className="font-medium text-gray-600 dark:text-gray-300">{initials}</span>
        </div>
        
    </>)
}

export default Avatar;