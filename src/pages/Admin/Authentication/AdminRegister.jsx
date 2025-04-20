const AdminRegister =()=>{
    const regist=[
        {name:'name' ,type:"text" ,placeholder:"Enter Name"  },
        {name:'dob' ,type:"date" ,placeholder:"Enter DOB"  },
        {name:'phone' ,type:"number" ,placeholder:"Enter Phone"  },
        {name:'email' ,type:"email" ,placeholder:"Enter Email"  },
        {name:'phone' ,type:"number" ,placeholder:"Enter Phone"  },
        {name:'address' ,type:"text" ,placeholder:"Enter Address"  },
        {name:'companyName' ,type:"text" ,placeholder:"Enter CompanyName"  },
        {name:'companyPhone' ,type:"number" ,placeholder:"Enter CompanyPhone"  },
        {name:'Companymail' ,type:"email" ,placeholder:"Enter CompanyEmail"  },
        {name:'companyAddress' ,type:"text" ,placeholder:"Enter CompanyAddress"  },
        {name:'gst' ,type:"text" ,placeholder:"Enter GST NO"  },
        {name:'website' ,type:"text" ,placeholder:"Enter CompanyWebsite"  },
        {name:'password' ,type:"text" ,placeholder:"Enter Password"  },
        {name:'password' ,type:"text" ,placeholder:"Enter Conform Password"  }

    ]

    return(
        <div className="bg-red-300 h-screen pt-20">
        <div className="flex flex-col items-center h-auto space-y-4 justify-center max-w-5xl  mx-auto  p-4 border rounded bg-slate-300">
            <h1 className="text-xl mb-4 font-serif font-bold">Registeration</h1>
            <form className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center w-full">
            {regist.map((item,index)=>(
                <input name={item.name} type={item.type} placeholder={item.placeholder} className="border p-2 rounded" />
            ))}   
                
            </form>
            <button type="submit" className="bg-blue-600 px-8 py-4 rounded-xl font-serif text-xl font-bold text-white">Register</button>
        <div>
            
        </div>

        </div>
        </div>   
        
    )
}

export default AdminRegister;