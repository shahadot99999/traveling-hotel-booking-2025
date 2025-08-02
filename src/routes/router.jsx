import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import BookingLayout from "../layout/BookingLayout";


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
        path: "auth",
        element: <h1>Login Layout</h1>,
    },
    {
        path: "*",
        element: <h1>Error</h1>,
    },
])

export default router;