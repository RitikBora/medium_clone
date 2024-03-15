import { useState , useEffect } from "react"
import axios from "axios";
import { BACKEND_URL } from "../../config";
type Blog = {
    title : string,
    content : string,
    id : string,
    timestamp : string
    author : {
        name : string
    }
}

export const useBlogs= () =>
{
    const [loading , setLoading] = useState(true);
    const [blogs , setBlogs] = useState<Blog[]>([]);


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
            
            setLoading(false);
            setBlogs(response.data.posts);
         
        }catch(err)
        {

        }
    } 

    return {blogs , loading};
}



