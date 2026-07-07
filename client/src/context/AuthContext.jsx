import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {

    const { user, loading } = useAuth();

    if (loading) {
        return <h3 style={{ textAlign: "center", marginTop: "100px" }}>Loading...</h3>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}