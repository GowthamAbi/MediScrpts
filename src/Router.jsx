import { createBrowserRouter } from 'react-router'
import App from './App'
import { Children } from 'react'
import ClientRouter from './routes/ClientRouter.jsx'


  const routes=[{
    path:"/",
    element:<App/>,
    children:[
      {
        path:'',
        element:<ClientRouter />
      }
    ]

  }]

  const router=createBrowserRouter(routes,{
    future:{
      v7_relativeSplatPath: true,
      
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,

    }
  })

  


export default router
