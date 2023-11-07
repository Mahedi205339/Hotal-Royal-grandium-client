import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Registration";
import CheckOut from "../Pages/CheckOut/CheckOut";

const route = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'checkout/:id',
                element:<CheckOut></CheckOut>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)

            },
           
        ]
    }
])

export default route