import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Shop from './Components/Shop/Shop';
import Home from './Components/Layout/Home';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import cartProductsLoader from './Loders/CardProductsLoder';
import Chekout from './Components/Chekout/Chekout';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Components/Provider/AuthProvider';
import PrivatRoutes from './routes/PrivatRoutes';


const router = createBrowserRouter([
  {
    path: "/",

    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader

      },
      {
        path: 'inventory',
        element: <PrivatRoutes><Inventory></Inventory></PrivatRoutes>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'checkout',
        element: <PrivatRoutes><Chekout></Chekout></PrivatRoutes>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }

    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
