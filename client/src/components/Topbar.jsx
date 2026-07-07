import { FaBell, FaUserCircle } from "react-icons/fa";

import "../css/dashboard.css";

export default function Topbar() {

    return (

        <div className="topbar">

            <div>

                <h3>

                    Admin Dashboard

                </h3>

                <p>

                    Welcome back 👋

                </p>

            </div>

            <div className="top-icons">

                <FaBell className="icon"/>

                <FaUserCircle className="icon"/>

            </div>

        </div>

    );

}