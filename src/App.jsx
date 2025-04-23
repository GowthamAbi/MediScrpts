
import AdminHomePage from './pages/Admin/AdminHomePage.jsx'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import AdminRegister from './pages/Admin/Authentication/AdminRegister.jsx'
import AdminLogin from './pages/Admin/Authentication/AdminLogin.jsx'
import AdminDashboard from './pages/Admin/Components/AdminDashboard.jsx'

import AgentDashboard from './pages/Agent/Components/AgentDashboard.jsx'
import AgentRegister from './pages/Agent/Authentication/AgentRegister.jsx'
import AgentLogin from './pages/Agent/Authentication/AgentLogin.jsx'
import AgentHomePage from './pages/Agent/AdminHomePage.jsx'
import CustomerHomePage from './pages/Customers/CustomerHomePage.jsx'
import CustomerRegister from './pages/Customers/Authentication/CustomerRegister.jsx'
import CustomerLogin from './pages/Customers/Authentication/CustomerLogin.jsx'
import CustomerDashboard from './pages/Customers/Components/CustomerDashboard.jsx'
import InventoryHomePage from './pages/Inventory/InventoryHomePage.jsx'
import InventoryRegister from './pages/Inventory/Authentication/InventoryRegister.jsx'
import InventoryLogin from './pages/Inventory/Authentication/InventoryLogin.jsx'
import InventoryDashboard from './pages/Inventory/Components/InventoryDashboard.jsx'


export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/*Admin*/ }
      <Route path="/adminhomepage" element={<AdminHomePage />} />
      <Route path="/admin/register" element={<AdminRegister />} />
      <Route path="/admin/login" element={<AdminLogin/>} />
      <Route path="/admin/dashboard" element={<AdminDashboard/>} />

      {/*Agent*/ }
      <Route path="/agent/homepage" element={<AgentHomePage/>} />
        <Route path="/agent/register" element={<AgentRegister />} />
        <Route path="/agent/login" element={<AgentLogin />} />
        <Route path="/agent/dashboard" element={<AgentDashboard />} />

      {/*Customer*/ }
       <Route path="/homepage" element={<CustomerHomePage />} /> 
        <Route path="/register" element={<CustomerRegister />} /> 
      <Route path="/login" element={<CustomerLogin/>} /> 
       <Route path="/dashboard" element={<CustomerDashboard />} /> 

      {/*Inventory*/}
      <Route path="/inventoryhompage" element={<InventoryHomePage />} />
        <Route path="/inventory/register" element={<InventoryRegister />} />
        <Route path="/inventory/login" element={<InventoryLogin/>} />
        <Route path="/inventory/Dashboard" element={<InventoryDashboard/>} />
   


    </Routes>

    </>
  )
}
