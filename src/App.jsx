
import Layout from './pages/Layout.jsx'
import { Outlet } from 'react-router'


export default function App() {
  return (
    <>
    <Layout>
      <Outlet />
    </Layout>
    </>
  )
}
