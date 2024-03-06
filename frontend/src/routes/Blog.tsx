import { useRecoilValueLoadable } from "recoil";
import BlogAtomFamily from "../recoil/atoms/BlogAtom";


const Blog = () =>
{
    const id = window.location.pathname.split('/blog/')[1];  
    const {state , contents} = useRecoilValueLoadable(BlogAtomFamily(id));

    if(state === 'loading')
    {
        return <div className="flex justify-center">Loading...</div>
    }

    if(state === 'hasValue')
    {
        console.log(contents);
    }


    return (<>
        <div>
            {contents.title}
            {contents.author.name}
            {contents.content}
        </div>
    </>)
}

export default Blog;