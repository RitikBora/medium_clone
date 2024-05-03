import { useRecoilValueLoadable } from "recoil";
import BlogAtomFamily from "../recoil/atoms/BlogAtom";
import BlogDetails from "../components/BlogDetails";


const Blog = () =>
{
    const id = window.location.pathname.split('/blog/')[1];  
    const {state , contents} = useRecoilValueLoadable(BlogAtomFamily(id));


    if(state === 'loading')
    {
        return <div className="flex justify-center">Loading...</div>
    }


    return (<>
        <BlogDetails title={contents.title}  content={contents.content} timestamp= {contents.timestamp} author={contents.author.name}/> 
    </>)
}

// <div>
//             {contents.title}
//             {contents.author.name}
//             {contents.content}
//         </div>

export default Blog;