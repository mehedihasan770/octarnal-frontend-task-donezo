import { Navigate } from "react-router";
import { jwtDecode } from "jwt-decode";

export const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    const savedEmail = localStorage.getItem("userEmail");
    
    let isAuthorized = false;

    if (token && savedEmail) {
        try {
            const decoded = jwtDecode(token);

            if (decoded.email === savedEmail) {
                isAuthorized = true;
            }
        } catch (error) {
            isAuthorized = false;
        }
    }

    if (!isAuthorized) {
        localStorage.clear();
        return <Navigate to="/login" replace />;
    }

    return children;
};