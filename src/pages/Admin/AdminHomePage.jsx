const AdminHomePage=()=>{
    const auth=[{label:"Sign Up",href:"/admin/register"},{label:"Sign In",href:"/admin/signin"}]
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100"> 
            <h1 className="text-black text-8xl font-bold mb-6 text-center ">Welcome to AdminHome</h1>
            <div className="space-x-4" >{auth.map((item,index)=>(
                <a key={index} href={item.href} className=" w-full sm:w-auto bg-blue-600  shadow-md px-6 py-3 text-center text-lg text-black font-medium rounded-md hover:bg-green-400 transition-all duration-200">{item.label}</a>
            ))}</div>
            
        </div>
    )
}

export default AdminHomePage