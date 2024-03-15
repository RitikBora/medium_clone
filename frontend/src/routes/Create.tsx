import axios from "axios";
import { BACKEND_URL } from "../../config";
import {ToastContainer, toast } from 'react-toastify'
import { useState } from "react";

const Create = () =>
{
    const [title , setTitle] = useState("");

    const [content, setContent] = useState("");



    const publishBlog = async () =>
    {
        const token = localStorage.getItem('token');

        const postBody = {
            title : title,
            content : content    
        }

        const headers = {
            'Content-Type': 'application/json',
            "Authorization" : `Beared ${token}`
        }
        try
        {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog` , postBody , {headers});

            if(response.status === 200)
            {
                toast.success("Blog Published!!" , {
                    position: 'top-right'
                })
            }
        }catch(err : any)
        {
            toast.error(err.response.data.error , {
                position: 'top-right' 
            });
        }

    }

    return <>
        <div className="m-40 pt-2 w-1/2">
            <div className="mb-10 text-4xl font-bold">
                New Blog 
            </div>
            <div >
                <label  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Title</label>
                <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => {
                    setTitle(e.target.value);
                }}/>
            </div>
            <div>
                <label  className="block mb-2 pt-8  text-lg font-medium text-gray-900 dark:text-white">Content</label>
                <textarea id="message"   className="block p-2.5 w-full min-h-[200px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." onChange={(e) =>
                {
                    setContent(e.target.value);
                }
                }></textarea>
            </div>
            <div>
            <button type="button" className="text-white mt-8 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 text-lg w-32 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800" onClick={publishBlog}>Publish</button>
            </div>
        </div>
        <ToastContainer/>
    </>
}

export default Create;