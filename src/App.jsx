import Layout from "./commponent/Layout"
import Home from "./commponent/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';

export default function App() {
  let router = createBrowserRouter([
   {path:"", element:<Layout/>,
     children:[
       {path:"", element:<Home/>},

       ]
    }
  ])
 return ( 
<>
<RouterProvider router={router} />

</>

 
 )
}