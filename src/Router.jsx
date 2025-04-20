import React from 'react'; 
import { createBrowserRouter } from 'react-router-dom'; 
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import Inventory from './components/authentication/Inventory.jsx';
import Agent from './components/authentication/Agent.jsx';
import Admin from './components/authentication/Admin.jsx';
import Customer from './components/authentication/Customers.jsx';

const routes = [
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '',
        element:<App /> 
      },
      {
        path:'inventory',
        element: <Inventory />
      },
      {
        path:'agent',
        element: <Agent />
      },
      {
        path:'admin',
        element: <Admin />
      },
      {
        path:'customers',
        element: <Customer />
      }
    ]
  }
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
  }
});

export default router;
