import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"

export default function UseAuth(){
    const auth = useContext(AuthContext)
    return auth
}