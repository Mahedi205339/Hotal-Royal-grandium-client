import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Login from "../Pages/Login/Login";

const route = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/aboutUs',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])

export default route