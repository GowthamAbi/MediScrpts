import { useEffect } from "react"
import { toast } from "react-toastify"

const ClientRouter =()=>{
    useEffect(()=>{
        toast.success("Client Router Loaded")
    },[])
   
    return(
        <div>
            <h1>Client Router</h1>
        </div>
    )
}

export default ClientRouter