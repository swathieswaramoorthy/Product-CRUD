import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Category from "./pages/Category";
import SubCategory from "./pages/SubCategory";
import Product from "./pages/Product";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Category />} />
                <Route path="/subcategory" element={<SubCategory />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;