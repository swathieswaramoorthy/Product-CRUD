// import DashboardCard from "../components/DashboardCard";
// import { useAuth } from "../context/AuthContext";

// export default function AdminDashboard() {

//     const { user } = useAuth();

//     return (

//         <div className="container mt-5">

//             <div className="text-center mb-5">

//                 <h1 className="fw-bold">

//                     Admin Dashboard

//                 </h1>

//                 <h5 className="text-secondary">

//                     Welcome,

//                     <span className="text-primary">

//                         {" "}

//                         {user?.name}

//                     </span>

//                 </h5>

//             </div>

//             <div className="row">

//                 <DashboardCard

//                     title="Categories"

//                     description="Add, Edit and Delete Categories"

//                     color="primary"

//                     link="/category"

//                 />

//                 <DashboardCard

//                     title="Sub Categories"

//                     description="Manage Product Sub Categories"

//                     color="success"

//                     link="/subcategory"

//                 />

//                 <DashboardCard

//                     title="Products"

//                     description="Manage Products"

//                     color="warning"

//                     link="/product"

//                 />

//             </div>

//         </div>

//     );

// }
import DashboardLayout from "../components/DashboardLayout";
import "../css/adminDashboard.css";
import { motion } from "framer-motion";
import {
    FaBoxes,
    FaLayerGroup,
    FaTags,
    FaUsers
} from "react-icons/fa";

import "../css/adminDashboard.css";

export default function AdminDashboard() {

    const cards = [

        {
            title: "Products",
            value: "128",
            icon: <FaBoxes />,
            color: "#2563EB"
        },

        {
            title: "Categories",
            value: "12",
            icon: <FaLayerGroup />,
            color: "#10B981"
        },

        {
            title: "Sub Categories",
            value: "36",
            icon: <FaTags />,
            color: "#F59E0B"
        },

        {
            title: "Customers",
            value: "86",
            icon: <FaUsers />,
            color: "#EF4444"
        }

    ];

    return (

        <DashboardLayout>

            <motion.div

                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}

            >

                <div className="welcome-card">

                    <div>

                        <h1>

                            Welcome Back 👋

                        </h1>

                        <p>

                            Manage your products, categories and customers
                            efficiently.

                        </p>

                    </div>

                </div>

            </motion.div>

            <div className="stats-grid">

                {

                    cards.map((card, index) => (

                        <motion.div

                            key={index}

                            initial={{
                                opacity: 0,
                                y: 40
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            transition={{
                                delay: index * .2
                            }}

                            className="stat-card"

                        >

                            <div>

                                <h4>

                                    {card.title}

                                </h4>

                                <h2>

                                    {card.value}

                                </h2>

                            </div>

                            <div

                                className="stat-icon"

                                style={{
                                    background: card.color
                                }}

                            >

                                {card.icon}

                            </div>

                        </motion.div>

                    ))

                }

            </div>

            <motion.div

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ delay: .8 }}

                className="recent-card"

            >

                <h3>

                    Recent Products

                </h3>

                <table>

                    <thead>

                        <tr>

                            <th>Product</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Price</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>

                            <td>Notebook</td>

                            <td>Stationery</td>

                            <td>Classmate</td>

                            <td>₹120</td>

                        </tr>

                        <tr>

                            <td>Knife Set</td>

                            <td>Kitchen</td>

                            <td>Pigeon</td>

                            <td>₹699</td>

                        </tr>

                        <tr>

                            <td>Flower Pot</td>

                            <td>Decor</td>

                            <td>Home Centre</td>

                            <td>₹999</td>

                        </tr>

                    </tbody>

                </table>

            </motion.div>

        </DashboardLayout>

    );

}