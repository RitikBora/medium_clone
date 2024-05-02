import { useRecoilValue } from "recoil";
import { userAtom } from "../recoil/atoms/UserAtom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Landing() {
    const user = useRecoilValue(userAtom);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.isLoading) {
            if (user.name) {
                navigate("/blogs");
            } else {
                navigate("/signin");
            }
        }
    }, [user]);

    return null; 
}
