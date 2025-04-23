
import AdminHomePage from './pages/Admin/AdminHomePage.jsx'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import AdminRegister from './pages/Admin/Authentication/AdminRegister.jsx'
import AdminLogin from './pages/Admin/Authentication/AdminLogin.jsx'


export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/*Admin*/ }
      <Route path="/adminhomepage" element={<AdminHomePage />} />
      <Route path="/admin/register" element={<AdminRegister />} />
      <Route path="/admin/login" element={<AdminLogin/>} />


    </Routes>

    </>
  )
}
