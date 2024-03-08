import Avatar from "./Avatar";

const BlogDetails = ({title , content , author} : {title : string , content: string , author : string}) =>
{
    return(
        <div className="grid grid-cols-12">
            <div className="col-span-8 m-20">
                <div className="font-extrabold text-5xl ">
                    {title}
                </div>
                <div className="py-5 text-slate-400 text-m">
                    Published on Timestamp!
                </div>
                <div className="">
                    {content}
                </div>
            </div>
            <div className="col-span-4 my-20">
                <div>
                    <div className="text-sm">
                        Author
                    </div>
                    <div className=" flex pt-2">
                        <div className="px-2 flex flex-col justify-center">
                            <Avatar  name={author} size="big"/>
                        </div>
                        <div>
                            <div className="font-bold text-xl">
                                {author}
                            </div>
                            <div className="text-slate-500">
                                Just a small description about the author {author} .. 
                            </div>
                        </div>
                    </div>
                    
                </div>    
               
            </div>
        </div>
    )
}

export default BlogDetails;