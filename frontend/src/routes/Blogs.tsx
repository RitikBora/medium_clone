import { useEffect, useState } from "react"
import BlogCard, { BlogCardProps } from "../components/BlogCard"
import axios from "axios";
import { BACKEND_URL } from "../../config";


const Blogs = () =>
{
    const [blogs , setBlogs] = useState<BlogCardProps[]>([]);
    
    useEffect(() => {
        init();
    } , [])

    const init = async() =>
    {
        const token = localStorage.getItem("token");
        
        try
        {
            const headers = {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`,
              };

            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/all` ,  { headers })  ;
            console.log(response.data.posts);
            setBlogs(response.data.posts);
         
        }catch(err)
        {

        }
    } 
    return(<>
       <div className="flex justify-center  py-10">
            <div className="max-w-xl">
                {
                    blogs.map((blog)  =>
                    {
                       return <BlogCard authorName={blog.authorName} title={blog.title} content={blog.content} date="24 02 2000"/>
                    })
                }
            </div>
       </div>
    </>)
}


export default Blogs;