import { createBrowserRouter, Navigate } from "react-router";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Dashboard from "../Layouts/Dashboard";
import { ProtectedRoute } from "../Components/ProtectedRoute";

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
        element : <ProtectedRoute><Dashboard/></ProtectedRoute>,
        children : [
            {
                index : true,
                element : <Navigate to="/dashboard/home" replace /> 
            },
            {
                path : "/dashboard/home",
                element : <h1>hallo home</h1>
            },
            {
                path : "/dashboard/tasks",
                element : <h1>hallo task</h1>
            },
        ]
    },
    {
        path : "*",
        element : <h1>Page Not Found</h1>
    }
])