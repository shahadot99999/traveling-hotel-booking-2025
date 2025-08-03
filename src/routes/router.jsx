import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import BookingLayout from "../layout/BookingLayout";
import HotelBookingLayout from "../layout/HotelBookingLayout";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
    },
    {
        path: "/booking",
        element: <BookingLayout></BookingLayout>,
        // children: [
        //     {
        //         path: "hotelbooking", 
        //         element: <HotelBookingLayout></HotelBookingLayout>,
        //     },
        //     // You can add more child routes here if needed
        // ]
    },
    {

        path:"/hotelbooking",
        element:<HotelBookingLayout></HotelBookingLayout>
    },
    {
        path: "auth",
        element: <h1>Login Layout</h1>,
    },
    {
        path: "*",
        element: <h1>Error</h1>,
    },
])

export default router;