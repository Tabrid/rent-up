import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/home/Home";
import About from "../Pages/about/About"
import Pricing from "../Pages/pricing/Pricing"
import Blog from "../Pages/blog/Blog"
import Services from "../Pages/services/Services"
import Contact from "../Pages/contact/Contact"
import Login from "../Pages/Login/Login"
import Signup from "../Pages/Signup/Signup";
import Dashboard from "../Layout/Dashboard";
import Assignment from "../Pages/Assignment/Assignment";
import Profile from "../Pages/Profile/Profile";
import Riyadh from "../Pages/Riyadh/Riyadh";
import Tomal from "../Pages/Tomal/Tomal";
import Poccod from "../Pages/Poccod/Poccod";
import Sayed from "../Pages/Sayed/Sayed";
import Saiful from "../Pages/Saiful/Saiful";

export const router = createBrowserRouter([
    {
        path : '/',
        element: <Main></Main>,
        children: [
            {
                path : '/',
                element: <Home></Home>,
            },
            {
                path : '/contact',
                element: <Contact></Contact>,
            },
            {
                path : '/pricing',
                element: <Pricing></Pricing>,
            },
            {
                path : '/blog',
                element: <Blog></Blog>,
            },
            {
                path : '/services',
                element: <Services></Services>,
            },
            {
                path : '/about',
                element: <About></About>,
            },
            {
                path : '/login',
                element: <Login></Login>,
            },
            {
                path : '/signup',
                element: <Signup></Signup>,
            },
            {
                path : '/riyadh',
                element: <Riyadh></Riyadh>,
            },
            {
                path : '/tomal',
                element: <Tomal></Tomal>,
            },
            {
                path : '/poccod',
                element: <Poccod></Poccod>,
            },
            {
                path : '/sayed',
                element: <Sayed></Sayed>,
            },
            {
                path : '/saiful',
                element: <Saiful></Saiful>,
            },
]},
{
    path : '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
        {
            
            path : '/dashboard/assignment',
            element: <Assignment></Assignment>
        },
        {
            
            path : '/dashboard/profile',
            element: <Profile></Profile>,
        },
    
    ]
    },
]);