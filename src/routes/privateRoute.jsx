import { Navigate, useLocation } from "react-router"
import UseAuth from "../hooks/useAuth"


export default function PrivateRoute({children}){
    const { user, loading } = UseAuth()
    const location = useLocation()
  
    if (loading) return <p className="text-2xl text-center font-semibold py-4">Loading.....</p>
    if (user) return children
  
    return <Navigate to='/login' state={location.pathname} replace={true} />
}