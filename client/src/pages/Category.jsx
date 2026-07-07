
// import { useEffect, useState } from "react";
// import API from "../services/api";
// import { toast } from "react-toastify";
// import DashboardLayout from "../components/DashboardLayout";
// function Category() {

//     const [categoryName, setCategoryName] = useState("");
//     const [categories, setCategories] = useState([]);
//     const [editId, setEditId] = useState(null);
//     const [search, setSearch] = useState("");

//     const fetchCategories = async () => {

//         try {

//             const res = await API.get("/categories");
//             setCategories(res.data);

//         } catch (err) {

//             toast.error("Failed to load categories");

//         }

//     };

//     useEffect(() => {

//         fetchCategories();

//     }, []);

//     const saveCategory = async () => {

//         if (!categoryName.trim()) {

//             toast.warning("Please enter Category Name");
//             return;

//         }

//         try {

//             if (editId) {

//                 await API.put(`/categories/${editId}`, {
//                     categoryName
//                 });

//                 toast.success("Category Updated Successfully");

//             } else {

//                 await API.post("/categories", {
//                     categoryName
//                 });

//                 toast.success("Category Added Successfully");

//             }

//             setCategoryName("");
//             setEditId(null);

//             fetchCategories();

//         } catch (err) {

//             toast.error("Operation Failed");

//         }

//     };

//     const editCategory = (cat) => {

//         setCategoryName(cat.categoryName);
//         setEditId(cat._id);

//     };

//    const deleteCategory = async (id) => {

//     if (!window.confirm("Delete this Category?\n\nAll SubCategories and Products inside it will also be deleted.")) {
//         return;
//     }

//     await API.delete(`/categories/${id}`);

//     toast.success("Category Deleted");

//     fetchCategories();

// };

//     const filteredCategories = categories.filter((c) =>
//         c.categoryName.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//         <DashboardLayout>

//         <div className="container mt-4">

//             <div className="card shadow p-4 mb-4">

//                 <h2 className="text-center text-primary fw-bold">

//                     Category Master

//                 </h2>

//                 <div className="row mt-4">

//                     <div className="col-md-8">

//                         <input
//                             className="form-control"
//                             placeholder="Enter Category Name"
//                             value={categoryName}
//                             onChange={(e) =>
//                                 setCategoryName(e.target.value)
//                             }
//                         />

//                     </div>

//                     <div className="col-md-4">

//                         <button
//                             className={`btn w-100 ${
//                                 editId
//                                     ? "btn-warning"
//                                     : "btn-primary"
//                             }`}
//                             onClick={saveCategory}
//                         >

//                             {editId
//                                 ? "Update Category"
//                                 : "Add Category"}

//                         </button>

//                     </div>

//                 </div>

//             </div>

//             <div className="card shadow p-4">

//                 <div className="d-flex justify-content-between mb-3">

//                     <h4>

//                         Category List

//                     </h4>

//                     <input
//                         className="form-control w-25"
//                         placeholder="Search..."
//                         value={search}
//                         onChange={(e) =>
//                             setSearch(e.target.value)
//                         }
//                     />

//                 </div>

//                 <table className="table table-hover table-bordered">

//                     <thead className="table-dark">

//                         <tr>

//                             <th width="70%">Category Name</th>

//                             <th className="text-center">

//                                 Actions

//                             </th>

//                         </tr>

//                     </thead>

//                     <tbody>

//                         {filteredCategories.length > 0 ? (

//                             filteredCategories.map((c) => (

//                                 <tr key={c._id}>

//                                     <td>

//                                         {c.categoryName}

//                                     </td>

//                                     <td className="text-center">

//                                         <button
//                                             className="btn btn-warning btn-sm me-2"
//                                             onClick={() =>
//                                                 editCategory(c)
//                                             }
//                                         >

//                                             Edit

//                                         </button>

//                                         <button
//                                             className="btn btn-danger btn-sm"
//                                             onClick={() =>
//                                                 deleteCategory(c._id)
//                                             }
//                                         >

//                                             Delete

//                                         </button>

//                                     </td>

//                                 </tr>

//                             ))

//                         ) : (

//                             <tr>

//                                 <td
//                                     colSpan="2"
//                                     className="text-center text-muted"
//                                 >

//                                     No Categories Found

//                                 </td>

//                             </tr>

//                         )}

//                     </tbody>

//                 </table>

//             </div>

//         </div>
//         </DashboardLayout>

//     );

// }

// export default Category;

import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import API from "../services/api";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../css/category.css";

export default function Category() {

    const [categoryName,setCategoryName]=useState("");

    const [categories,setCategories]=useState([]);

    const [search,setSearch]=useState("");

    const [editId,setEditId]=useState(null);

    const fetchCategories=async()=>{

        const res=await API.get("/categories");

        setCategories(res.data);

    };

    useEffect(()=>{

        fetchCategories();

    },[]);

    const saveCategory=async()=>{

        if(categoryName.trim()===""){

            toast.warning("Enter Category");

            return;

        }

        try{

            if(editId){

                await API.put(`/categories/${editId}`,{

                    categoryName

                });

                toast.success("Category Updated");

            }

            else{

                await API.post("/categories",{

                    categoryName

                });

                toast.success("Category Added");

            }

            setCategoryName("");

            setEditId(null);

            fetchCategories();

        }

        catch{

            toast.error("Operation Failed");

        }

    };

    const editCategory=(cat)=>{

        setCategoryName(cat.categoryName);

        setEditId(cat._id);

    };

    const deleteCategory=(id)=>{

        Swal.fire({

            title:"Delete Category?",

            text:"This cannot be undone",

            icon:"warning",

            showCancelButton:true,

            confirmButtonColor:"#ef4444"

        }).then(async(result)=>{

            if(result.isConfirmed){

                await API.delete(`/categories/${id}`);

                toast.success("Deleted");

                fetchCategories();

            }

        });

    };

    const filtered=categories.filter(c=>

        c.categoryName.toLowerCase()

        .includes(search.toLowerCase())

    );

    return(

<DashboardLayout>

<motion.div

initial={{opacity:0,y:30}}

animate={{opacity:1,y:0}}

>

<h2 className="page-title">

Category

</h2>

<div className="category-container">

<div className="category-card">

<h4>

{editId?"Update Category":"Add Category"}

</h4>

<input

className="form-control mb-3"

placeholder="Category Name"

value={categoryName}

onChange={(e)=>setCategoryName(e.target.value)}

/>

<button

className="save-btn"

onClick={saveCategory}

>

{editId?"Update":"Add Category"}

</button>

</div>

<div className="table-card">

<input

className="form-control search-box"

placeholder="Search Category..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

<table className="table table-hover">

<thead>

<tr>

<th>#</th>

<th>Category</th>

<th>Actions</th>

</tr>

</thead>

<tbody>

{

filtered.map((cat,index)=>(

<tr key={cat._id}>

<td>{index+1}</td>

<td>{cat.categoryName}</td>

<td>

<button

className="action-btn edit-btn"

onClick={()=>editCategory(cat)}

>

<FaEdit/>

</button>

<button

className="action-btn delete-btn"

onClick={()=>deleteCategory(cat._id)}

>

<FaTrash/>

</button>

</td>

</tr>

))

}

</tbody>

</table>

</div>

</div>

</motion.div>

</DashboardLayout>

);

}