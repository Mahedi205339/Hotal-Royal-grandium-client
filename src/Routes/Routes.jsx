import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Registration";
import CheckOut from "../Pages/CheckOut/CheckOut";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import BookService from "../Pages/BookService/BookService";
import UpdateBookings from "../components/UpdateBookings/UpdateBookings";

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
                path: 'checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path: '/details/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoute><BookService></BookService></PrivateRoute>

            },
            {
                path: '/updateBookings/:id',
                element: <PrivateRoute><UpdateBookings></UpdateBookings> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }



        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])

export default route