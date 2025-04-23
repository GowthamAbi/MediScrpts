import { Routes,Route } from "react-router";
import AdminHomePage from "./Admin/AdminHomePage";


const HomePage = () => {
    const roll = [
      { label: "Inventory", href: "/inventoryhompage"},
      { label: "Admin", href: "/adminhomepage" ,},
      { label: "Agent", href: "/agent/homepage" },
      { label: "Customers", href: "/homepage" }
    ];
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100"> 
        <h1 className="text-black text-8xl font-bold mb-6 text-center ">Welcome</h1>
  
          <div className="flex flex-col sm:flex-row sm-flex-wrap items-center justify-center gap-4 w-fullq max-w-md">
          {roll.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="w-full sm:w-auto bg-white shadow-md px-6 py-3 text-center text-lg text-black font-medium rounded-md hover:bg-blue-100 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

      
      </div>
    );
  };
  
  export default HomePage;



  