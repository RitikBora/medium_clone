import Avatar from "./Avatar";

const descriptions = [
    "Master of social commentary through Regency-era novels.",
    "Iconic minimalist prose, capturing the essence of life's struggles.",
    "Creator of the magical world of Harry Potter, inspiring millions.",
    "Master of horror, delving into the depths of human fear.",
    "Poet of the human condition, exploring race, identity, and history.",
    "Visionary of dystopian societies, warning of the dangers of totalitarianism.",
    "Queen of mystery, crafting intricate plots and memorable detectives.",
    "Pioneer of magical realism, blending fantasy with reality.",
    "Chronicler of southern life and the moral complexities of injustice.",
    "Russian literary giant, delving into the complexities of human nature and society."
]

const BlogDetails = ({title , content , author , timestamp} : {title : string , content: string , author : string , timestamp:string}) =>
{
    return(
        <div className="grid grid-cols-12 pr-4">
            <div className="col-span-8 m-20">
                <div className="font-extrabold text-5xl ">
                    {title}
                </div>
                <div className="py-5 text-slate-400 text-m">
                    Published on {timestamp}
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
                                {descriptions[Math.floor(Math.random() * 10)]}
                            </div>
                        </div>
                    </div>
                    
                </div>    
               
            </div>
        </div>
    )
}

export default BlogDetails;