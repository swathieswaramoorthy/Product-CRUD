
import { useEffect, useState } from "react";
import API from "../services/api";

function Product() {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [products, setProducts] = useState([]);

    const [editId, setEditId] = useState(null);

    const [form, setForm] = useState({
        productName: "",
        productCode: "",
        category: "",
        subCategory: "",
        brand: "",
        mrp: "",
        price: ""
    });

    // FETCH DATA
    const fetchData = async () => {
        const cat = await API.get("/categories");
        const sub = await API.get("/subcategories");
        const prod = await API.get("/products");

        setCategories(cat.data);
        setSubCategories(sub.data);
        setProducts(prod.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    // FILTER SUBCATEGORIES BASED ON CATEGORY
    const filteredSubCategories = subCategories.filter(
        (s) => s.category?._id === form.category
    );

    // ADD / UPDATE PRODUCT
    const saveProduct = async () => {
        if (editId) {
            await API.put(`/products/${editId}`, form);
        } else {
            await API.post("/products", form);
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
    };

    // EDIT PRODUCT
    const editProduct = (p) => {
        setEditId(p._id);
        setForm({
            productName: p.productName,
            productCode: p.productCode,
            category: p.category?._id,
            subCategory: p.subCategory?._id,
            brand: p.brand,
            mrp: p.mrp,
            price: p.price
        });
    };

    // DELETE PRODUCT
    const deleteProduct = async (id) => {
        await API.delete(`/products/${id}`);
        fetchData();
    };

    return (
        <div className="container">

            {/* FORM CARD */}
            <div className="card">
                <h2>Product Master</h2>

                <input
                    placeholder="Product Name"
                    value={form.productName}
                    onChange={(e) =>
                        setForm({ ...form, productName: e.target.value })
                    }
                />

                <input
                    placeholder="Product Code"
                    value={form.productCode}
                    onChange={(e) =>
                        setForm({ ...form, productCode: e.target.value })
                    }
                />

                {/* CATEGORY */}
                <select
                    value={form.category}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            category: e.target.value,
                            subCategory: ""
                        })
                    }
                >
                    <option value="">Select Category</option>
                    {categories.map((c) => (
                        <option key={c._id} value={c._id}>
                            {c.categoryName}
                        </option>
                    ))}
                </select>

                {/* SUBCATEGORY (FILTERED) */}
                <select
                    value={form.subCategory}
                    onChange={(e) =>
                        setForm({ ...form, subCategory: e.target.value })
                    }
                    disabled={!form.category}
                >
                    <option value="">Select SubCategory</option>
                    {filteredSubCategories.map((s) => (
                        <option key={s._id} value={s._id}>
                            {s.subCategoryName}
                        </option>
                    ))}
                </select>

                <input
                    placeholder="Brand"
                    value={form.brand}
                    onChange={(e) =>
                        setForm({ ...form, brand: e.target.value })
                    }
                />

                <input
                    placeholder="MRP"
                    value={form.mrp}
                    onChange={(e) =>
                        setForm({ ...form, mrp: e.target.value })
                    }
                />

                <input
                    placeholder="Price"
                    value={form.price}
                    onChange={(e) =>
                        setForm({ ...form, price: e.target.value })
                    }
                />

                <button onClick={saveProduct}>
                    {editId ? "Update Product" : "Add Product"}
                </button>
            </div>

            {/* TABLE CARD */}
            <div className="card">
                <h3>Product List</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Category</th>
                            <th>SubCategory</th>
                            <th>Brand</th>
                            <th>MRP</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((p) => (
                            <tr key={p._id}>
                                <td>{p.productName}</td>
                                <td>{p.productCode}</td>
                                <td>{p.category?.categoryName}</td>
                                <td>{p.subCategory?.subCategoryName}</td>
                                <td>{p.brand}</td>
                                <td>₹{p.mrp}</td>
                                <td>₹{p.price}</td>
                                <td>
                                    <button
                                        className="edit"
                                        onClick={() => editProduct(p)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete"
                                        onClick={() => deleteProduct(p._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Product;