// import Demo from "@/views/Demo";
import React from "react";
// import Home from "@/views/Home";
// import Detail from "@/views/Detail";
// import Entire from "@/views/Entire";
import { Navigate } from "react-router-dom";

const Home = React.lazy(() => import('@/views/Home'));
const Detail = React.lazy(() => import('@/views/Detail'));
const Entire = React.lazy(() => import('@/views/Entire'));
const Demo = React.lazy(() => import('@/views/Demo'));

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
    },
    {
        path:'/demo',
        element:<Demo />
    }
]

export default routes;