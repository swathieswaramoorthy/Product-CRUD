
import { useEffect, useState } from "react";
import API from "../services/api";

function SubCategory() {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [editId, setEditId] = useState(null);

    const [form, setForm] = useState({
        category: "",
        subCategoryName: ""
    });

    const fetchData = async () => {
        const cat = await API.get("/categories");
        const sub = await API.get("/subcategories");

        setCategories(cat.data);
        setSubCategories(sub.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const saveSubCategory = async () => {
        if (editId) {
            await API.put(`/subcategories/${editId}`, form);
        } else {
            await API.post("/subcategories", form);
        }

        setForm({ category: "", subCategoryName: "" });
        setEditId(null);
        fetchData();
    };

    const editSub = (s) => {
        setForm({
            category: s.category?._id,
            subCategoryName: s.subCategoryName
        });
        setEditId(s._id);
    };

    const deleteSub = async (id) => {
        await API.delete(`/subcategories/${id}`);
        fetchData();
    };

    return (
        <div className="container">
            <div className="card">
                <h2>SubCategory</h2>

                <select
                    value={form.category}
                    onChange={(e) =>
                        setForm({ ...form, category: e.target.value })
                    }
                >
                    <option value="">Select Category</option>
                    {categories.map((c) => (
                        <option key={c._id} value={c._id}>
                            {c.categoryName}
                        </option>
                    ))}
                </select>

                <input
                    value={form.subCategoryName}
                    onChange={(e) =>
                        setForm({ ...form, subCategoryName: e.target.value })
                    }
                    placeholder="SubCategory Name"
                />

                <button onClick={saveSubCategory}>
                    {editId ? "Update" : "Add"}
                </button>
            </div>

            <div className="card">
                <table>
                    <thead>
                        <tr>
                            <th>SubCategory</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {subCategories.map((s) => (
                            <tr key={s._id}>
                                <td>{s.subCategoryName}</td>
                                <td>{s.category?.categoryName}</td>
                                <td>
                                    <button className="edit" onClick={() => editSub(s)}>
                                        Edit
                                    </button>
                                    <button className="delete" onClick={() => deleteSub(s._id)}>
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

export default SubCategory;