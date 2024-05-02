
import BlogCard from "../components/BlogCard"
import Skeleton from "../components/Skeleton";

import { useBlogs } from "../hooks";

type BlogsType =  {
    type : "myBlogs" | "all"
}
const Blogs = ({type} : BlogsType) =>
{
    const {loading , blogs} = useBlogs(type);

    if(loading)
    {
        return <>
            <div className="flex justify-center  py-10">
            <Skeleton/>    
        </div>
        </>
    }
    return(<>
       <div className="flex justify-center  py-10">
            <div className="max-w-xl">
                {
                    blogs.map((blog)  =>
                    {
                       return <BlogCard key={blog.id} id={blog.id} authorName={blog.author.name} title={blog.title} content={blog.content} date={blog.timestamp}/>
                    })
                }
            </div>
       </div>
    </>)
}


export default Blogs;