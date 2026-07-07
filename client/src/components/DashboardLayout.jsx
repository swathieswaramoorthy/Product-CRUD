import Sidebar from "./Sidebar";
import "../css/dashboard.css";

export default function DashboardLayout({ children }) {

    return (

        <div className="dashboard">

            <Sidebar />

            <div className="main-content">

                {children}

            </div>

        </div>

    );

}