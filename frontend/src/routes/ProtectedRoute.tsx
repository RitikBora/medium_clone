import { Navigate } from "react-router-dom";


export const PrivateRoute = ({ children} : any) => {

      
  if (localStorage.getItem("token")) {
    return children
  }
    
  return <Navigate to="/signin" />
}