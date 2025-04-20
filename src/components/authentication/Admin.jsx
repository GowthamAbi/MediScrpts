const Admin=()=>{
    const auth=[{label:"Register",href:"/register"},{label:"Sign in",href:"/signin"}]
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100"> 
            <h1 className="text-black text-8xl font-bold mb-6 text-center ">Welcome to Admin</h1>
            <div className="space-x-4" >{auth.map((item,index)=>(
                <a key={index} href={item.href} className=" w-full sm:w-auto bg-white  shadow-md px-6 py-3 text-center text-lg text-black font-medium rounded-md hover:bg-blue-100 transition-all duration-200">{item.label}</a>
            ))}</div>
            
        </div>
    )
}

export default Admin