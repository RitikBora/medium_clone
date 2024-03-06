import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";
import { BACKEND_URL } from "../../../config";


const BlogAtomFamily = atomFamily({
    key : "blogAtomFamily",
    default: selectorFamily({
        key : "blogSelector",
        get: (id : string) => async() =>
        {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}` , {
                            headers: {
                                Authorization: `Bearer ${token}` // Assuming Bearer token authentication
                              }
                        });
                        return response.data;
        }
    })
    
})
export default BlogAtomFamily;

