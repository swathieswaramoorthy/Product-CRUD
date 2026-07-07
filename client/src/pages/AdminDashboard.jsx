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
import { useEffect, useState } from "react";
import API from "../services/api";
import DashboardLayout from "../components/DashboardLayout";

import { motion } from "framer-motion";

import {
    FaBoxes,
    FaLayerGroup,
    FaTags,
    FaUsers
} from "react-icons/fa";

import "../css/adminDashboard.css";

export default function AdminDashboard() {

    const [dashboard, setDashboard] = useState({

        productCount: 0,
        categoryCount: 0,
        subCategoryCount: 0,
        recentProducts: []

    });

    const fetchDashboard = async () => {

        try {

            const res = await API.get("/dashboard");

            setDashboard(res.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        fetchDashboard();

    }, []);

    const cards = [

        {
            title: "Products",
            value: dashboard.productCount,
            icon: <FaBoxes />,
            color: "#2563EB"
        },

        {
            title: "Categories",
            value: dashboard.categoryCount,
            icon: <FaLayerGroup />,
            color: "#10B981"
        },

        {
            title: "Sub Categories",
            value: dashboard.subCategoryCount,
            icon: <FaTags />,
            color: "#F59E0B"
        },

    

    ];

    return (

        <DashboardLayout>

            <motion.div

                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}

                className="dashboard-header"

            >

                <h1>

                    Dashboard

                </h1>

                <p>

                    Manage your entire shop from one place.

                </p>

            </motion.div>

            <div className="stats-grid">

                {

                    cards.map((card, index) => (

                        <motion.div

                            key={index}

                            className="stat-card"

                            initial={{
                                opacity: 0,
                                y: 30
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            transition={{
                                delay: index * 0.15
                            }}

                        >

                            <div>

                                <h5>

                                    {card.title}

                                </h5>

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

                className="recent-products"

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{
                    delay: .6
                }}

            >

                <h3>

                    Recently Added Products

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

                        {

                            dashboard.recentProducts.length > 0 ?

                                dashboard.recentProducts.map(product => (

                                    <tr key={product._id}>

                                        <td>

                                            {product.productName}

                                        </td>

                                        <td>

                                            {product.category?.categoryName}

                                        </td>

                                        <td>

                                            {product.brand}

                                        </td>

                                        <td>

                                            ₹{product.price}

                                        </td>

                                    </tr>

                                ))

                                :

                                <tr>

                                    <td
                                        colSpan="4"
                                        className="empty-row"
                                    >

                                        No Products Available

                                    </td>

                                </tr>

                        }

                    </tbody>

                </table>

            </motion.div>

        </DashboardLayout>

    );

}