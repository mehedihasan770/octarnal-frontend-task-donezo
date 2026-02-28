import { createBrowserRouter, Navigate } from "react-router";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Dashboard from "../Layouts/Dashboard";
import { ProtectedRoute } from "../Components/ProtectedRoute";
import DashboardHome from "../Pages/DashboardHome";
import NotFound from "../Components/NotFound";

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
                Component : DashboardHome
            },
            {
                path : "/dashboard/tasks",
                element : <h1>hallo task</h1>
            },
            {
                path : "/dashboard/calendar",
                element : <h1>hallo /dashboard/calendar</h1>
            },
            {
                path : "/dashboard/analytics",
                element : <h1>hallo /dashboard/analytics</h1>
            },
            {
                path : "/dashboard/team",
                element : <h1>hallo /dashboard/team</h1>
            },
            {
                path : "/dashboard/settings",
                element : <h1>hallo /dashboard/settings</h1>
            },
            {
                path : "/dashboard/help",
                element : <h1>hallo /dashboard/help</h1>
            },
        ]
    },
    {
        path : "*",
        element : <NotFound/>
    }
])