import { createBrowserRouter, Navigate } from "react-router";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Dashboard from "../Layouts/Dashboard";

export const router = createBrowserRouter([
    {
        path : "/",
        Component : AuthLayout,
        children : [
            {
                index : true,
                element: localStorage.getItem("token") ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />
            },
            {
                path : "/login",
                Component : Login
            }
        ]
    },
    {
        path : "/dashboard",
        Component : Dashboard
    },
    {
        path : "*",
        element : <h1>Page Not Found</h1>
    }
])