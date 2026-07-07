

// import { useEffect, useState } from "react";
// import API from "../services/api";
// import { toast } from "react-toastify";
// import DashboardLayout from "../components/DashboardLayout";

// function Product() {

//     const [categories, setCategories] = useState([]);
//     const [subCategories, setSubCategories] = useState([]);
//     const [products, setProducts] = useState([]);

//     const [editId, setEditId] = useState(null);
//     const [search, setSearch] = useState("");

//     const [form, setForm] = useState({
//         productName: "",
//         productCode: "",
//         category: "",
//         subCategory: "",
//         brand: "",
//         mrp: "",
//         price: ""
//     });

//     // Fetch Data

//     const fetchData = async () => {

//         try {

//             const cat = await API.get("/categories");
//             const sub = await API.get("/subcategories");
//             const prod = await API.get("/products");

//             setCategories(cat.data);
//             setSubCategories(sub.data);
//             setProducts(prod.data);

//         } catch (err) {

//             toast.error("Failed to load products");

//         }

//     };

//     useEffect(() => {

//         fetchData();

//     }, []);

//     // Filter Sub Categories

//     const filteredSubCategories = subCategories.filter(

//         (s) => s.category?._id === form.category

//     );

//     // Save Product

//     const saveProduct = async () => {

//         if (
//             !form.productName ||
//             !form.productCode ||
//             !form.category ||
//             !form.subCategory ||
//             !form.brand ||
//             !form.mrp ||
//             !form.price
//         ) {

//             toast.warning("Please fill all fields");

//             return;

//         }

//         try {

//             if (editId) {

//                 await API.put(`/products/${editId}`, form);

//                 toast.success("Product Updated Successfully");

//             } else {

//                 await API.post("/products", form);

//                 toast.success("Product Added Successfully");

//             }

//             setForm({

//                 productName: "",
//                 productCode: "",
//                 category: "",
//                 subCategory: "",
//                 brand: "",
//                 mrp: "",
//                 price: ""

//             });

//             setEditId(null);

//             fetchData();

//         } catch (err) {

//             toast.error("Operation Failed");

//         }

//     };

//     // Edit Product

//     const editProduct = (p) => {

//         setEditId(p._id);

//         setForm({

//             productName: p.productName,
//             productCode: p.productCode,
//             category: p.category?._id,
//             subCategory: p.subCategory?._id,
//             brand: p.brand,
//             mrp: p.mrp,
//             price: p.price

//         });

//     };

//     // Delete Product

//    const deleteProduct = async (id) => {

//     if (!window.confirm("Delete this Product?")) {
//         return;
//     }

//     await API.delete(`/products/${id}`);

//     toast.success("Product Deleted");

//     fetchData();

// };
//     // Search

//     const filteredProducts = products.filter((p) =>

//         p.productName
//             .toLowerCase()
//             .includes(search.toLowerCase())

//     );

//     return (
// <DashboardLayout>
//         <div className="container mt-4">

//             {/* Product Form */}

//             <div className="card shadow p-4 mb-4">

//                 <h2 className="text-center text-primary fw-bold">

//                     Product Master

//                 </h2>

//                 <div className="row g-3 mt-2">

//                     <div className="col-md-6">

//                         <input
//                             className="form-control"
//                             placeholder="Product Name"
//                             value={form.productName}
//                             onChange={(e) =>
//                                 setForm({
//                                     ...form,
//                                     productName: e.target.value
//                                 })
//                             }
//                         />

//                     </div>

//                     <div className="col-md-6">

//                         <input
//                             className="form-control"
//                             placeholder="Product Code"
//                             value={form.productCode}
//                             onChange={(e) =>
//                                 setForm({
//                                     ...form,
//                                     productCode: e.target.value
//                                 })
//                             }
//                         />

//                     </div>

//                     <div className="col-md-6">

//                         <select
//                             className="form-select"
//                             value={form.category}
//                             onChange={(e) =>
//                                 setForm({
//                                     ...form,
//                                     category: e.target.value,
//                                     subCategory: ""
//                                 })
//                             }
//                         >

//                             <option value="">

//                                 Select Category

//                             </option>

//                             {categories.map((c) => (

//                                 <option
//                                     key={c._id}
//                                     value={c._id}
//                                 >

//                                     {c.categoryName}

//                                 </option>

//                             ))}

//                         </select>

//                     </div>

//                     <div className="col-md-6">

//                         <select
//                             className="form-select"
//                             value={form.subCategory}
//                             disabled={!form.category}
//                             onChange={(e) =>
//                                 setForm({
//                                     ...form,
//                                     subCategory: e.target.value
//                                 })
//                             }
//                         >

//                             <option value="">

//                                 Select Sub Category

//                             </option>

//                             {filteredSubCategories.map((s) => (

//                                 <option
//                                     key={s._id}
//                                     value={s._id}
//                                 >

//                                     {s.subCategoryName}

//                                 </option>

//                             ))}

//                         </select>

//                     </div>

//                     <div className="col-md-4">

//                         <input
//                             className="form-control"
//                             placeholder="Brand"
//                             value={form.brand}
//                             onChange={(e) =>
//                                 setForm({
//                                     ...form,
//                                     brand: e.target.value
//                                 })
//                             }
//                         />

//                     </div>

//                     <div className="col-md-4">

//                         <input
//                             type="number"
//                             className="form-control"
//                             placeholder="MRP"
//                             value={form.mrp}
//                             onChange={(e) =>
//                                 setForm({
//                                     ...form,
//                                     mrp: e.target.value
//                                 })
//                             }
//                         />

//                     </div>

//                     <div className="col-md-4">

//                         <input
//                             type="number"
//                             className="form-control"
//                             placeholder="Price"
//                             value={form.price}
//                             onChange={(e) =>
//                                 setForm({
//                                     ...form,
//                                     price: e.target.value
//                                 })
//                             }
//                         />

//                     </div>

//                     <div className="col-md-12">

//                         <button
//                             className={`btn w-100 ${
//                                 editId
//                                     ? "btn-warning"
//                                     : "btn-primary"
//                             }`}
//                             onClick={saveProduct}
//                         >

//                             {editId
//                                 ? "Update Product"
//                                 : "Add Product"}

//                         </button>

//                     </div>

//                 </div>

//             </div>
//                         {/* Product List */}

//             <div className="card shadow p-4">

//                 <div className="d-flex justify-content-between align-items-center mb-3">

//                     <h4 className="fw-bold">

//                         Product List

//                     </h4>

//                     <input
//                         type="text"
//                         className="form-control w-25"
//                         placeholder="Search Product..."
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                     />

//                 </div>

//                 <div className="table-responsive">

//                     <table className="table table-bordered table-hover align-middle">

//                         <thead className="table-dark">

//                             <tr>

//                                 <th>Product</th>

//                                 <th>Code</th>

//                                 <th>Category</th>

//                                 <th>Sub Category</th>

//                                 <th>Brand</th>

//                                 <th>MRP</th>

//                                 <th>Price</th>

//                                 <th className="text-center">

//                                     Actions

//                                 </th>

//                             </tr>

//                         </thead>

//                         <tbody>

//                             {filteredProducts.length > 0 ? (

//                                 filteredProducts.map((p) => (

//                                     <tr key={p._id}>

//                                         <td>

//                                             {p.productName}

//                                         </td>

//                                         <td>

//                                             {p.productCode}

//                                         </td>

//                                         <td>

//                                             {p.category?.categoryName}

//                                         </td>

//                                         <td>

//                                             {p.subCategory?.subCategoryName}

//                                         </td>

//                                         <td>

//                                             {p.brand}

//                                         </td>

//                                         <td>

//                                             ₹{p.mrp}

//                                         </td>

//                                         <td>

//                                             <span className="fw-bold text-success">

//                                                 ₹{p.price}

//                                             </span>

//                                         </td>

//                                         <td className="text-center">

//                                             <button
//                                                 className="btn btn-warning btn-sm me-2"
//                                                 onClick={() => editProduct(p)}
//                                             >

//                                                 Edit

//                                             </button>

//                                             <button
//                                                 className="btn btn-danger btn-sm"
//                                                 onClick={() =>
//                                                     deleteProduct(p._id)
//                                                 }
//                                             >

//                                                 Delete

//                                             </button>

//                                         </td>

//                                     </tr>

//                                 ))

//                             ) : (

//                                 <tr>

//                                     <td
//                                         colSpan="8"
//                                         className="text-center text-muted py-4"
//                                     >

//                                         No Products Found

//                                     </td>

//                                 </tr>

//                             )}

//                         </tbody>

//                     </table>

//                 </div>

//             </div>

//         </div>
//         </DashboardLayout>

//     );

// }

// export default Product;
import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import API from "../services/api";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import "../css/product.css";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Product() {

    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [products, setProducts] = useState([]);

    const [editId, setEditId] = useState(null);

    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [subCategoryFilter, setSubCategoryFilter] = useState("");

    const [form, setForm] = useState({
        productName: "",
        productCode: "",
        category: "",
        subCategory: "",
        brand: "",
        mrp: "",
        price: ""
    });

    const fetchData = async () => {

        try {

            const cat = await API.get("/categories");
            const sub = await API.get("/subcategories");
            const prod = await API.get("/products");

            setCategories(cat.data);
            setSubCategories(sub.data);
            setProducts(prod.data);

        }
        catch (err) {

            toast.error("Unable to fetch products");

        }

    };

    useEffect(() => {

        fetchData();

    }, []);

    const filteredSubCategories = subCategories.filter(

        item => item.category?._id === form.category

    );

    const saveProduct = async () => {

        if (
            !form.productName ||
            !form.productCode ||
            !form.category ||
            !form.subCategory ||
            !form.brand ||
            !form.mrp ||
            !form.price
        ) {

            toast.warning("Please fill all fields");

            return;

        }

        try {

            if (editId) {

                await API.put(`/products/${editId}`, form);

                toast.success("Product Updated Successfully");

            }
            else {

                await API.post("/products", form);

                toast.success("Product Added Successfully");

            }

            setForm({

                productName: "",
                productCode: "",
                category: "",
                subCategory: "",
                brand: "",
                mrp: "",
                price: ""

            });

            setEditId(null);

            fetchData();

        }
        catch (err) {

            toast.error(

                err.response?.data?.message ||

                "Operation Failed"

            );

        }

    };

   const editProduct = (product) => {

    setEditId(product._id);

    setForm({

        productName: product.productName,
        productCode: product.productCode,
        category: product.category?._id,
        subCategory: product.subCategory?._id,
        brand: product.brand,
        mrp: product.mrp,
        price: product.price

    });

};
const deleteProduct = async (id) => {

    try {

        await API.delete(`/products/${id}`);

        toast.success("Product Deleted Successfully");

        fetchData();

    } catch (err) {

        toast.error("Delete Failed");

    }

};

    return (

        <DashboardLayout>

            <motion.div

                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}

            >

                <h2 className="page-title">

                    Product Management

                </h2>

                <div className="product-container">

                    {/* FORM */}

                    <div className="product-card">

                        <h4>

                            {editId ?

                                "Update Product"

                                :

                                "Add Product"

                            }

                        </h4>

                        <input

                            className="form-control mb-3"

                            placeholder="Product Name"

                            value={form.productName}

                            onChange={(e) =>

                                setForm({

                                    ...form,

                                    productName: e.target.value

                                })

                            }

                        />

                        <input

                            className="form-control mb-3"

                            placeholder="Product Code"

                            value={form.productCode}

                            onChange={(e) =>

                                setForm({

                                    ...form,

                                    productCode: e.target.value

                                })

                            }

                        />

                        <select

                            className="form-select mb-3"

                            value={form.category}

                            onChange={(e) =>

                                setForm({

                                    ...form,

                                    category: e.target.value,

                                    subCategory: ""

                                })

                            }

                        >

                            <option value="">

                                Select Category

                            </option>

                            {

                                categories.map(cat => (

                                    <option

                                        key={cat._id}

                                        value={cat._id}

                                    >

                                        {cat.categoryName}

                                    </option>

                                ))

                            }

                        </select>

                        <select

                            className="form-select mb-3"

                            value={form.subCategory}

                            onChange={(e) =>

                                setForm({

                                    ...form,

                                    subCategory: e.target.value

                                })

                            }

                        >

                            <option value="">

                                Select SubCategory

                            </option>

                            {

                                filteredSubCategories.map(sub => (

                                    <option

                                        key={sub._id}

                                        value={sub._id}

                                    >

                                        {sub.subCategoryName}

                                    </option>

                                ))

                            }

                        </select>

                        <input

                            className="form-control mb-3"

                            placeholder="Brand"

                            value={form.brand}

                            onChange={(e) =>

                                setForm({

                                    ...form,

                                    brand: e.target.value

                                })

                            }

                        />

                        <input

                            type="number"

                            className="form-control mb-3"

                            placeholder="MRP"

                            value={form.mrp}

                            onChange={(e) =>

                                setForm({

                                    ...form,

                                    mrp: e.target.value

                                })

                            }

                        />

                        <input

                            type="number"

                            className="form-control mb-4"

                            placeholder="Selling Price"

                            value={form.price}

                            onChange={(e) =>

                                setForm({

                                    ...form,

                                    price: e.target.value

                                })

                            }

                        />

                        <button

                            className="save-btn"

                            onClick={saveProduct}

                        >

                            {

                                editId ?

                                    "Update Product"

                                    :

                                    "Add Product"

                            }

                        </button>

                    </div>

                    {/* TABLE COMING NEXT */}

                    <div className="table-card">

    {/* Search & Filter */}

    <div className="search-section">

        <input
            type="text"
            className="form-control"
            placeholder=" Search Products"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />

        <select
            className="form-select"
            value={categoryFilter}
            onChange={(e)=>{

                setCategoryFilter(e.target.value);
                setSubCategoryFilter("");

            }}
        >

            <option value="">

                All Categories

            </option>

            {

                categories.map(cat=>(

                    <option
                        key={cat._id}
                        value={cat._id}
                    >

                        {cat.categoryName}

                    </option>

                ))

            }

        </select>

        <select
            className="form-select"
            value={subCategoryFilter}
            onChange={(e)=>setSubCategoryFilter(e.target.value)}
        >

            <option value="">

                All SubCategories

            </option>

            {

                subCategories
                .filter(

                    s=>

                    categoryFilter===""

                    ||

                    s.category?._id===categoryFilter

                )

                .map(sub=>(

                    <option
                        key={sub._id}
                        value={sub._id}
                    >

                        {sub.subCategoryName}

                    </option>

                ))

            }

        </select>

    </div>

    <div className="table-responsive">

        <table className="table table-hover">

            <thead>

                <tr>

                    <th>#</th>

                    <th>Product</th>

                    <th>Code</th>

                    <th>Category</th>

                    <th>SubCategory</th>

                    <th>Brand</th>

                    <th>MRP</th>

                    <th>Price</th>

                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

                {

                    products

                    .filter(product=>{

                        const searchMatch=

                        product.productName
                        .toLowerCase()
                        .includes(search.toLowerCase())

                        ||

                        product.productCode
                        .toLowerCase()
                        .includes(search.toLowerCase());

                        const categoryMatch=

                        categoryFilter===""

                        ||

                        product.category?._id===categoryFilter;

                        const subCategoryMatch=

                        subCategoryFilter===""

                        ||

                        product.subCategory?._id===subCategoryFilter;

                        return(

                            searchMatch &&

                            categoryMatch &&

                            subCategoryMatch

                        );

                    })

                    .map((product,index)=>(

                        <tr key={product._id}>

                            <td>

                                {index+1}

                            </td>

                            <td>

                                {product.productName}

                            </td>

                            <td>

                                {product.productCode}

                            </td>

                            <td>

                                <span className="badge-category">

                                    {product.category?.categoryName}

                                </span>

                            </td>

                            <td>

                                <span className="badge-sub">

                                    {product.subCategory?.subCategoryName}

                                </span>

                            </td>

                            <td>

                                {product.brand}

                            </td>

                            <td>

                                <span className="mrp">

                                    ₹{product.mrp}

                                </span>

                            </td>

                            <td>

                                <span className="price">

                                    ₹{product.price}

                                </span>

                            </td>

                            <td>

    <button
        className="action-btn edit-btn"
        onClick={() => editProduct(product)}
    >
        <FaEdit />
    </button>

    <button
        className="action-btn delete-btn"
        onClick={() => deleteProduct(product._id)}
    >
        <FaTrash />
    </button>

</td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    </div>

</div>
                </div>

            </motion.div>

        </DashboardLayout>

    );

}