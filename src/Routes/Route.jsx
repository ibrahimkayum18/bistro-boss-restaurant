import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Pages/DashBoard/Dashboard/Dashboard";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import OurShop from "../Pages/OurShop/OurShop/OurShop";
import OurMenu from "../Pages/OurMenu/OurMenu/OurMenu";
import ContactUs from "../Pages/ContactUs/ContactUs";


const Route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/contact-us',
                element:<ContactUs></ContactUs>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/our-shop',
                element:<OurShop></OurShop>
            },
            {
                path:'/our-menu',
                element:<OurMenu></OurMenu>
            },
            
        ]
    }
])

export default Route;