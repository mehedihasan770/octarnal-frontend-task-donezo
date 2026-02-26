import { createBrowserRouter } from "react-router";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
    {
        path : "/",
        Component : AuthLayout,
        children : [
            {
                index : true,
                Component : Login
            }
        ]
    }
])