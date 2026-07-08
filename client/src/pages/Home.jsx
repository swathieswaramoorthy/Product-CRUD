// import { useEffect, useState } from "react";
// import API from "../services/api";
// import Loader from "../components/Loader";

// function Home() {

//     const [products, setProducts] = useState([]);
//     const [filteredProducts, setFilteredProducts] = useState([]);

//     const [categories, setCategories] = useState([]);
//     const [subCategories, setSubCategories] = useState([]);

//     const [selectedCategory, setSelectedCategory] = useState("");
//     const [selectedSubCategory, setSelectedSubCategory] = useState("");

//     const [search, setSearch] = useState("");

//     const [loading, setLoading] = useState(true);

//     useEffect(() => {

//         fetchData();

//     }, []);

//     const fetchData = async () => {

//         try {

//             setLoading(true);

//             const prod = await API.get("/products");
//             const cat = await API.get("/categories");
//             const sub = await API.get("/subcategories");

//             setProducts(prod.data);
//             setFilteredProducts(prod.data);

//             setCategories(cat.data);
//             setSubCategories(sub.data);

//         } catch (err) {

//             console.log(err);

//         }

//         setLoading(false);

//     };

//     useEffect(() => {

//         let temp = [...products];

//         if (search !== "") {

//             temp = temp.filter((p) =>
//                 p.productName
//                     .toLowerCase()
//                     .includes(search.toLowerCase())
//             );

//         }

//         if (selectedCategory !== "") {

//             temp = temp.filter(
//                 (p) =>
//                     p.category?._id === selectedCategory
//             );

//         }

//         if (selectedSubCategory !== "") {

//             temp = temp.filter(
//                 (p) =>
//                     p.subCategory?._id ===
//                     selectedSubCategory
//             );

//         }

//         setFilteredProducts(temp);

//     }, [
//         search,
//         selectedCategory,
//         selectedSubCategory,
//         products,
//     ]);

//     const filteredSubCategories = subCategories.filter(
//         (s) => s.category?._id === selectedCategory
//     );

//     if (loading) {

//         return <Loader />;

//     }

//     return (

//         <div className="container mt-4">

//             <h2 className="text-center fw-bold mb-4">

//                 Product Catalogue

//             </h2>

//             {/* Search & Filter */}

//             <div className="card shadow p-4 mb-4">

//                 <div className="row">

//                     <div className="col-md-4">

//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Search Product..."
//                             value={search}
//                             onChange={(e) =>
//                                 setSearch(e.target.value)
//                             }
//                         />

//                     </div>

//                     <div className="col-md-4">

//                         <select
//                             className="form-select"
//                             value={selectedCategory}
//                             onChange={(e) => {

//                                 setSelectedCategory(e.target.value);

//                                 setSelectedSubCategory("");

//                             }}
//                         >

//                             <option value="">

//                                 All Categories

//                             </option>

//                             {categories.map((cat) => (

//                                 <option
//                                     key={cat._id}
//                                     value={cat._id}
//                                 >

//                                     {cat.categoryName}

//                                 </option>

//                             ))}

//                         </select>

//                     </div>

//                     <div className="col-md-4">

//                         <select
//                             className="form-select"
//                             value={selectedSubCategory}
//                             onChange={(e) =>
//                                 setSelectedSubCategory(
//                                     e.target.value
//                                 )
//                             }
//                             disabled={!selectedCategory}
//                         >

//                             <option value="">

//                                 All Sub Categories

//                             </option>

//                             {filteredSubCategories.map((sub) => (

//                                 <option
//                                     key={sub._id}
//                                     value={sub._id}
//                                 >

//                                     {sub.subCategoryName}

//                                 </option>

//                             ))}

//                         </select>

//                     </div>

//                 </div>

//             </div>

//             {/* Products */}

//             <div className="row">

//                 {filteredProducts.length > 0 ? (

//                     filteredProducts.map((product) => (

//                         <div
//                             className="col-lg-4 col-md-6 mb-4"
//                             key={product._id}
//                         >

//                             <div className="card shadow h-100">

//                                 <div className="card-body">

//                                     <h4 className="fw-bold">

//                                         {product.productName}

//                                     </h4>

//                                     <hr />

//                                     <p>

//                                         <strong>Product Code :</strong>

//                                         {" "}

//                                         {product.productCode}

//                                     </p>

//                                     <p>

//                                         <strong>Category :</strong>

//                                         {" "}

//                                         {
//                                             product.category
//                                                 ?.categoryName
//                                         }

//                                     </p>

//                                     <p>

//                                         <strong>Sub Category :</strong>

//                                         {" "}

//                                         {
//                                             product.subCategory
//                                                 ?.subCategoryName
//                                         }

//                                     </p>

//                                     <p>

//                                         <strong>Brand :</strong>

//                                         {" "}

//                                         {product.brand}

//                                     </p>

//                                     <h5 className="text-danger">

//                                         MRP :

//                                         <del>

//                                             ₹{product.mrp}

//                                         </del>

//                                     </h5>

//                                     <h4 className="text-success">

//                                         Price : ₹{product.price}

//                                     </h4>

//                                 </div>

//                             </div>

//                         </div>

//                     ))

//                 ) : (

//                     <div className="col-12">

//                         <div className="alert alert-warning text-center">

//                             No Products Found

//                         </div>

//                     </div>

//                 )}

//             </div>

//         </div>

//     );

// }

// export default Home;
import { useEffect, useState } from "react";
import API from "../services/api";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

import "../css/home.css";

export default function Home(){

const [products,setProducts]=useState([]);
const [search,setSearch]=useState("");

const fetchProducts=async()=>{

try{

const res=await API.get("/products");

setProducts(res.data);

}

catch(error){

console.log(error);

}

};

useEffect(()=>{

fetchProducts();

},[]);

const filteredProducts=products.filter(product=>

product.productName
.toLowerCase()
.includes(search.toLowerCase())

);


return (

<div className="home">

    {/* Hero Section */}

    
    {/* Search */}

    <div className="search-box">

        <FaSearch/>

        <input

            placeholder="Search Products..."

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

        />

    </div>

    {/* Heading */}

    <div className="heading">

        <div>

            <h2>

                Featured Products

            </h2>

            <span>

                Explore our latest collection

            </span>

        </div>

        <div className="count">

            {filteredProducts.length}

            <small> Products</small>

        </div>

    </div>

    {/* Products */}

    <div className="product-grid">

        {

        filteredProducts.map(product=>{

        const discount=Math.round(

        ((product.mrp-product.price)/product.mrp)*100

        );

        return(

        <motion.div

        key={product._id}

        className="product-card"

        whileHover={{

        y:-8,

        scale:1.02

        }}

        >

            <div className="discount-badge">

                {discount}% OFF

            </div>

            <div className="new-badge">

                NEW

            </div>

            <div className="product-body">

                <h3>

                    {product.productName}

                </h3>

                <h5>

                    {product.brand}

                </h5>

                <p>

                    {product.category?.categoryName}

                </p>

                <div className="price-box">

                    <span className="mrp">

                        ₹{product.mrp}

                    </span>

                    <span className="price">

                        ₹{product.price}

                    </span>

                </div>

    

            </div>

        </motion.div>

        )

        })

        }

    </div>

</div>

)
}