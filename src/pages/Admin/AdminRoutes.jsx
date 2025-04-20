import React from 'react'; 
import { createBrowserRouter } from 'react-router-dom'; 
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import AdminHomePage from './AdminHomePage.jsx';


const routes = [
  {
    path: '/adminhomepage',
    element: <AdminHomePage />,
    children: [
      {
        path: '',
        element:<App /> 
      }
    ]
  }
];

const adminRoutes = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
  }
});

export default adminRoutes;
