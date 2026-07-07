// import { Link } from "react-router-dom";

// function Navbar() {
//     return (
//         <nav style={{ padding: "10px", background: "#222", color: "white" }}>
//             <Link to="/" style={{ margin: "10px", color: "white" }}>Category</Link>
//             <Link to="/subcategory" style={{ margin: "10px", color: "white" }}>SubCategory</Link>
//             <Link to="/product" style={{ margin: "10px", color: "white" }}>Product</Link>
//         </nav>
//     );
// }

// export default Navbar;
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

            <div className="container">

                <Link className="navbar-brand fw-bold" to="/">
                    Product Management
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto">

                        {/* ---------------- Guest ---------------- */}

                        {!user && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">
                                        Signup
                                    </Link>
                                </li>
                            </>
                        )}

                        {/* ---------------- Customer ---------------- */}

                        {user?.role === "customer" && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <span className="nav-link text-warning">
                                       {user.name}
                                    </span>
                                </li>

                                <li className="nav-item">
                                    <button
                                        className="btn btn-outline-light ms-3"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}

                        {/* ---------------- Admin ---------------- */}

                        {user?.role === "admin" && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin">
                                        Dashboard
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/category">
                                        Categories
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/subcategory">
                                        Sub Categories
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/product">
                                        Products
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <span className="nav-link text-info">
                                        {user.name}
                                    </span>
                                </li>

                                <li className="nav-item">
                                    <button
                                        className="btn btn-danger ms-3"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}

                    </ul>

                </div>

            </div>

        </nav>

    );
}