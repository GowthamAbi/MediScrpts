import axios from "axios";

const api=axios.create({
    baseURL:'https://mediscrpts-bd.onrender.com',
    headers:{
        'Content-Type':'Application/Json'
    }
})

//api inceptors

api.interceptors.request.use(
(config)=>{
const token=localStorage.getItem("authToken")
if(token)
{
    config.headers["Authorization"]=`Bearer${token}`
}
return config
},
(err)=>{
    return Promise.reject(err)
}

)


//api response

api.interceptors.response.use(
    (response)=>response,(error)=>{
        if(err.response)
        {
            if(err.response.status==401)
            {
                console.log("UnAuthorization Please Login")
                alert("UnAuthorization Please Login")

                localStorage.removeItem('authToken')

                window.location.href='/login'
            }
        }
        return Promise.reject(err)
    }
    )

    export default api
