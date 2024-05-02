import { useEffect } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userAtom } from "./recoil/atoms/UserAtom";

export function InitUser() {
    const setUser = useSetRecoilState(userAtom);
    useEffect(() =>
    {
        init();
    } , [])

    const init = async () =>
    {
        const token = localStorage.getItem("token");
        const headers = {
            Authorization: `Bearer ${token}`
        }
        try
        {
            const response = await axios.get(`${BACKEND_URL}/api/v1/user/me` , {headers});
            setUser({isLoading : false , name : response.data.user.name});

        }catch(err)
        {
            setUser({isLoading : false , name : null});
        }
    }

    return <></>
} 