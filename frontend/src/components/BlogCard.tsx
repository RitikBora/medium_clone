import Avatar from "./Avatar";
import { Link } from "react-router-dom";


export interface BlogCardProps{
    id : string,
    authorName : string,
    title : string,
    content : string,
    date : string
}
const BlogCard = ({ id , authorName , title , content , date} : BlogCardProps) =>
{
    return (<>
        <Link to={`/blog/${id}`}>
        <div>
            <div className="flex pt-5 cursor-pointer">
                <Avatar name={authorName} size="small"/>
                <div className="text-md flex flex-col justify-center px-1"> {authorName}</div>
                <div className="text-sm flex flex-col justify-center text-slate-600">&#9679;</div>
                <div className="text-md flex flex-col justify-center font-extralight px-2">{date}</div>
                
            </div>
            <div className="text-xl py-2 font-bold">{title}</div>
            <div className="text-md font-light">{content.slice(0 , 100) + "..."}"</div>
            <div className="text-slate-400 text-sm pt-4">{Math.ceil(content.length / 100)} min read</div>
            <div className="border-b-2 border-slate-200 py-2"></div>
        </div>
        </Link>
    </>)
}



export default BlogCard;

