
import { useEffect, useState } from "react";
import API from "../services/api";

function Category() {
    const [categoryName, setCategoryName] = useState("");
    const [categories, setCategories] = useState([]);
    const [editId, setEditId] = useState(null);

    const fetchCategories = async () => {
        const res = await API.get("/categories");
        setCategories(res.data);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const saveCategory = async () => {
        if (editId) {
            await API.put(`/categories/${editId}`, { categoryName });
        } else {
            await API.post("/categories", { categoryName });
        }

        setCategoryName("");
        setEditId(null);
        fetchCategories();
    };

    const editCategory = (cat) => {
        setCategoryName(cat.categoryName);
        setEditId(cat._id);
    };

    const deleteCategory = async (id) => {
        await API.delete(`/categories/${id}`);
        fetchCategories();
    };

    return (
        <div className="container">
            <div className="card">
                <h2>Category Master</h2>

                <input
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder="Category Name"
                />

                <button onClick={saveCategory}>
                    {editId ? "Update" : "Add"}
                </button>
            </div>

            <div className="card">
                <table>
                    <thead>
                        <tr>
                            <th>Category Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((c) => (
                            <tr key={c._id}>
                                <td>{c.categoryName}</td>
                                <td>
                                    <button className="edit" onClick={() => editCategory(c)}>
                                        Edit
                                    </button>
                                    <button className="delete" onClick={() => deleteCategory(c._id)}>
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

export default Category;