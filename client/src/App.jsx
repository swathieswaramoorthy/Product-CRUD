// import { Routes, Route } from "react-router-dom";


// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Home from "./pages/Home";
// import Welcome from "./pages/Welcome";

// import AdminDashboard from "./pages/AdminDashboard";
// import Category from "./pages/Category";
// import SubCategory from "./pages/SubCategory";
// import Product from "./pages/Product";
// import Navbar from "./components/Navbar";

// import PrivateRoute from "./routes/PrivateRoute";
// import AdminRoute from "./routes/AdminRoute";

// function App() {

//     return (

//         <>
        

//             <Navbar />

//             <Routes>

//                 {/* Public Routes */}

//                 <Route path="/" element={<Welcome />} />

//                 <Route path="/login" element={<Login />} />

//                 <Route path="/signup" element={<Signup />} />
//                 <Route
//         path="/home"
//         element={
//             <PrivateRoute>
//                 <Home />
//             </PrivateRoute>
//         }
//     />

//                 {/* Private Route */}

//                 <Route
//                     path="/admin"
//                     element={
//                         <PrivateRoute>
//                             <AdminDashboard />
//                         </PrivateRoute>
//                     }
//                 />

//                 {/* Admin Routes */}

//                 <Route
//                     path="/category"
//                     element={
//                         <AdminRoute>
//                             <Category />
//                         </AdminRoute>
//                     }
//                 />

//                 <Route
//                     path="/subcategory"
//                     element={
//                         <AdminRoute>
//                             <SubCategory />
//                         </AdminRoute>
//                     }
//                 />

//                 <Route
//                     path="/product"
//                     element={
//                         <AdminRoute>
//                             <Product />
//                         </AdminRoute>
//                     }
//                 />

//             </Routes>

//         </>

//     );
// }

// export default App;

import { Routes, Route, useLocation } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";

import AdminDashboard from "./pages/AdminDashboard";
import Category from "./pages/Category";
import SubCategory from "./pages/SubCategory";
import Product from "./pages/Product";

import Navbar from "./components/Navbar";

import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";

function App() {

    const location = useLocation();

    // Hide Navbar on Admin Pages
    const hideNavbar =
        location.pathname === "/admin" ||
        location.pathname === "/category" ||
        location.pathname === "/subcategory" ||
        location.pathname === "/product";

    return (
        <>

            {!hideNavbar && <Navbar />}

            <Routes>

                {/* Public Pages */}

                <Route path="/" element={<Welcome />} />

                <Route path="/login" element={<Login />} />

                <Route path="/signup" element={<Signup />} />

                {/* Customer Home */}

                <Route
                    path="/home"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />

                {/* Admin Dashboard */}

                <Route
                    path="/admin"
                    element={
                        <PrivateRoute>
                            <AdminDashboard />
                        </PrivateRoute>
                    }
                />

                {/* Admin CRUD Pages */}

                <Route
                    path="/category"
                    element={
                        <AdminRoute>
                            <Category />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/subcategory"
                    element={
                        <AdminRoute>
                            <SubCategory />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/product"
                    element={
                        <AdminRoute>
                            <Product />
                        </AdminRoute>
                    }
                />

            </Routes>

        </>
    );
}

export default App;