
import BlogCard from "../components/BlogCard"

import { useBlogs } from "../hooks";


const Blogs = () =>
{
    const {loading , blogs} = useBlogs();

    if(loading)
    {
        return <div className="flex justify-center">Loading ...</div>
    }
    return(<>
       <div className="flex justify-center  py-10">
            <div className="max-w-xl">
                {
                    blogs.map((blog)  =>
                    {
                       return <BlogCard key={blog.id} id={blog.id} authorName={blog.author.name} title={blog.title} content={blog.content} date="24 02 2000"/>
                    })
                }
            </div>
       </div>
    </>)
}


export default Blogs;