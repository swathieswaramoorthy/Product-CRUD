import {
    FaHome,
    FaBoxes,
    FaLayerGroup,
    FaTags,
    FaSignOutAlt
} from "react-icons/fa";

import {
    Link,
    useLocation,
    useNavigate
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import "../css/dashboard.css";

export default function Sidebar() {

    const location = useLocation();
    const navigate = useNavigate();

    const { logout } = useAuth();

    const handleLogout = () => {

        logout();

        navigate("/");

    };

    const menu = [

        {
            title: "Dashboard",
            icon: <FaHome />,
            path: "/admin"
        },

        {
            title: "Categories",
            icon: <FaLayerGroup />,
            path: "/category"
        },

        {
            title: "Sub Categories",
            icon: <FaTags />,
            path: "/subcategory"
        },

        {
            title: "Products",
            icon: <FaBoxes />,
            path: "/product"
        }

    ];

    return (

        <div className="sidebar">

            <h2 className="logo">

                A-Z Shop

            </h2>

            <div className="menu-list">

                {

                    menu.map((item) => (

                        <Link

                            key={item.path}

                            to={item.path}

                            className={

                                location.pathname === item.path

                                    ? "menu active"

                                    : "menu"

                            }

                        >

                            {item.icon}

                            <span>{item.title}</span>

                        </Link>

                    ))

                }

            </div>

            <button

                className="logout-btn"

                onClick={handleLogout}

            >

                <FaSignOutAlt />

                <span>Logout</span>

            </button>

        </div>

    );

}