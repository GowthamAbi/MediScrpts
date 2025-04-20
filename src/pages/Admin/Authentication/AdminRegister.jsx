const AdminRegister =()=>{

    return(
        <div className="flex flex-col items-center h-auto space-y-4 justify-center max-w-7xl mx-auto mt-20 p-4 border rounded bg-slate-300">
            <h1 className="text-xl mb-4 font-serif font-bold text-xl">Registeration</h1>
            <form className=" flex flex-row flex-wrap gap-4 justify-center">
                <input name='name' type="text" placeholder="Enter Name" className="border p-2 rounded" />
                <input name='dob' type="date" placeholder="Enter DOB" className="border p-2 rounded" />
                <input name='phone' type="number" placeholder="Enter Phone" className="border p-2 rounded" />
                <input name='email' type="email" placeholder="Enter Email" className="border p-2 rounded" />
                <input name='phone' type="number" placeholder="Enter Phone" className="border p-2 rounded" />
                <input name='address' type="text" placeholder="Enter Address" className="border p-2 rounded" />
                <input name='companyName' type="text" placeholder="Enter CompanyName" className="border p-2 rounded" />
                <input name='companyPhone' type="number" placeholder="Enter CompanyPhone" className="border p-2 rounded" />
                <input name='Companymail' type="email" placeholder="Enter CompanyEmail" className="border p-2 rounded" />
                <input name='companyAddress' type="text" placeholder="Enter CompanyAddress" className="border p-2 rounded" />
                <input name='gst' type="text" placeholder="Enter GST NO" className="border p-2 rounded" />
                <input name='website' type="text" placeholder="Enter CompanyWebsite" className="border p-2 rounded" />
                <input name='password' type="text" placeholder="Enter Password" className="border p-2 rounded" />
                <input name='password' type="text" placeholder="Enter Conform Password" className="border p-2 rounded" />    
                
            </form>
            <button type="submit" className="bg-blue-600 px-8 py-4 rounded-xl font-serif text-xl font-bold text-white">Register</button>
        </div>
            
        
    )
}

export default AdminRegister;