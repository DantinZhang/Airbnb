import React from "react";
// import Home from "@/views/Home";
// import Detail from "@/views/Detail";
// import Entire from "@/views/Entire";
import { Navigate } from "react-router-dom";

const Home = React.lazy(() => import('@/views/Home'));
const Detail = React.lazy(() => import('@/views/Detail'));
const Entire = React.lazy(() => import('@/views/Entire'));

let routes = [
    {
        //重定向
        path:'/',
        element:<Navigate to='/home' />
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path:'/detail',
        element: <Detail/>
    }, 
    {
        path:'/entire',
        element:<Entire/>
    }
]

export default routes;