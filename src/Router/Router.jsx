import { createBrowserRouter, Navigate } from "react-router";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
    {
        path : "/",
        Component : AuthLayout,
        children : [
            {
                index : true,
                element: <Navigate to="/login" replace />
            },
            {
                path : "/login",
                Component : Login
            }
        ]
    },
])