import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
    },
    {
        path: "/booking",
        element: <h1>Booking Layout</h1>,
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