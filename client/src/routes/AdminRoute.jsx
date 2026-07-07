import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminRoute({ children }) {

    const { user, loading } = useAuth();

    if (loading) {
        return <h3 style={{ textAlign: "center", marginTop: "100px" }}>Loading...</h3>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (user.role !== "admin") {
        return <Navigate to="/home" replace />;
    }

    return children;
}