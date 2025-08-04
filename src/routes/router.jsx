import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import BookingLayout from "../layout/BookingLayout";
import HotelBookingLayout from "../layout/HotelBookingLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
    },
    {
        path: "/booking",
        element: <BookingLayout></BookingLayout>,
        
    },
    {

        path:"/hotelbooking",
        element:<HotelBookingLayout></HotelBookingLayout>
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
            
        ],
    },
    {
        path: "*",
        element: <h1>Error</h1>,
    },
])

export default router;