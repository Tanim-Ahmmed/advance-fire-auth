import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componants/root/Root';
import Home from './componants/paths/Home';
import Login from './componants/paths/Login';
import Register from './componants/paths/Register';
import AuthProvider from './componants/Provider/AuthProvider';
import Orders from './componants/paths/Orders';
import PrivateRoutes from './routees/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
       {
        path: "/",
        element:<Home></Home>,

       },
       {
        path: "/login",
        element:<Login></Login>,
       },
       {
        path:"/register",
        element:<Register></Register>,
       },
       {
        path:"/orders",
        element:<PrivateRoutes>  <Orders></Orders> </PrivateRoutes> 
       }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
   <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
