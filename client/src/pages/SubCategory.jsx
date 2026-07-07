
// import { useEffect, useState } from "react";
// import API from "../services/api";
// import { toast } from "react-toastify";
// import DashboardLayout from "../components/DashboardLayout";
// function SubCategory() {

//     const [categories, setCategories] = useState([]);
//     const [subCategories, setSubCategories] = useState([]);
//     const [editId, setEditId] = useState(null);
//     const [search, setSearch] = useState("");

//     const [form, setForm] = useState({
//         category: "",
//         subCategoryName: ""
//     });

//     const fetchData = async () => {

//         try {

//             const cat = await API.get("/categories");
//             const sub = await API.get("/subcategories");

//             setCategories(cat.data);
//             setSubCategories(sub.data);

//         } catch (err) {

//             toast.error("Failed to load data");

//         }

//     };

//     useEffect(() => {

//         fetchData();

//     }, []);

//     const saveSubCategory = async () => {

//         if (!form.category || !form.subCategoryName.trim()) {

//             toast.warning("Please fill all fields");
//             return;

//         }

//         try {

//             if (editId) {

//                 await API.put(`/subcategories/${editId}`, form);

//                 toast.success("Sub Category Updated Successfully");

//             } else {

//                 await API.post("/subcategories", form);

//                 toast.success("Sub Category Added Successfully");

//             }

//             setForm({
//                 category: "",
//                 subCategoryName: ""
//             });

//             setEditId(null);

//             fetchData();

//         } catch (err) {

//             toast.error("Operation Failed");

//         }

//     };

//     const editSub = (sub) => {

//         setEditId(sub._id);

//         setForm({

//             category: sub.category?._id,

//             subCategoryName: sub.subCategoryName

//         });

//     };

//    const deleteSub = async (id) => {

//     if (!window.confirm("Delete this SubCategory?\n\nAll Products inside it will also be deleted.")) {
//         return;
//     }

//     await API.delete(`/subcategories/${id}`);

//     toast.success("SubCategory Deleted");

//     fetchData();

// };

//     const filteredSubCategories = subCategories.filter((s) =>
//         s.subCategoryName
//             .toLowerCase()
//             .includes(search.toLowerCase())
//     );

//     return (
// <DashboardLayout>
//         <div className="container mt-4">

//             {/* Form */}

//             <div className="card shadow p-4 mb-4">

//                 <h2 className="text-center text-success fw-bold">

//                     Sub Category Master

//                 </h2>

//                 <div className="row mt-4">

//                     <div className="col-md-4">

//                         <select
//                             className="form-select"
//                             value={form.category}
//                             onChange={(e) =>
//                                 setForm({
//                                     ...form,
//                                     category: e.target.value
//                                 })
//                             }
//                         >

//                             <option value="">

//                                 Select Category

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

//                     <div className="col-md-5">

//                         <input
//                             className="form-control"
//                             placeholder="Enter Sub Category"
//                             value={form.subCategoryName}
//                             onChange={(e) =>
//                                 setForm({
//                                     ...form,
//                                     subCategoryName: e.target.value
//                                 })
//                             }
//                         />

//                     </div>

//                     <div className="col-md-3">

//                         <button
//                             className={`btn w-100 ${
//                                 editId
//                                     ? "btn-warning"
//                                     : "btn-success"
//                             }`}
//                             onClick={saveSubCategory}
//                         >

//                             {editId
//                                 ? "Update"
//                                 : "Add"}

//                         </button>

//                     </div>

//                 </div>

//             </div>

//             {/* Table */}

//             <div className="card shadow p-4">

//                 <div className="d-flex justify-content-between mb-3">

//                     <h4>

//                         Sub Category List

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

//                 <table className="table table-bordered table-hover">

//                     <thead className="table-dark">

//                         <tr>

//                             <th>

//                                 Category

//                             </th>

//                             <th>

//                                 Sub Category

//                             </th>

//                             <th className="text-center">

//                                 Actions

//                             </th>

//                         </tr>

//                     </thead>

//                     <tbody>

//                         {filteredSubCategories.length > 0 ? (

//                             filteredSubCategories.map((sub) => (

//                                 <tr key={sub._id}>

//                                     <td>

//                                         {sub.category?.categoryName}

//                                     </td>

//                                     <td>

//                                         {sub.subCategoryName}

//                                     </td>

//                                     <td className="text-center">

//                                         <button
//                                             className="btn btn-warning btn-sm me-2"
//                                             onClick={() =>
//                                                 editSub(sub)
//                                             }
//                                         >

//                                             Edit

//                                         </button>

//                                         <button
//                                             className="btn btn-danger btn-sm"
//                                             onClick={() =>
//                                                 deleteSub(sub._id)
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
//                                     colSpan="3"
//                                     className="text-center text-muted"
//                                 >

//                                     No Sub Categories Found

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

// export default SubCategory;
import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import API from "../services/api";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../css/subCategory.css";

export default function SubCategory(){

const [categories,setCategories]=useState([]);
const [subCategories,setSubCategories]=useState([]);

const [editId,setEditId]=useState(null);

const [search,setSearch]=useState("");

const [form,setForm]=useState({
category:"",
subCategoryName:""
});

const fetchData=async()=>{

const cat=await API.get("/categories");
const sub=await API.get("/subcategories");

setCategories(cat.data);
setSubCategories(sub.data);

};

useEffect(()=>{

fetchData();

},[]);

const saveSubCategory=async()=>{

if(!form.category || !form.subCategoryName){

toast.warning("Fill all fields");

return;

}

try{

if(editId){

await API.put(`/subcategories/${editId}`,form);

toast.success("SubCategory Updated");

}
else{

await API.post("/subcategories",form);

toast.success("SubCategory Added");

}

setForm({
category:"",
subCategoryName:""
});

setEditId(null);

fetchData();

}
catch{

toast.error("Operation Failed");

}

};

const editSub=(sub)=>{

setEditId(sub._id);

setForm({

category:sub.category?._id,

subCategoryName:sub.subCategoryName

});

};

const deleteSub=(id)=>{

Swal.fire({

title:"Delete SubCategory?",

text:"Products under this SubCategory will also be deleted.",

icon:"warning",

showCancelButton:true,

confirmButtonColor:"#ef4444"

}).then(async(result)=>{

if(result.isConfirmed){

await API.delete(`/subcategories/${id}`);

toast.success("Deleted Successfully");

fetchData();

}

});

};

const filtered=subCategories.filter(item=>

item.subCategoryName
.toLowerCase()
.includes(search.toLowerCase())

);

return(

<DashboardLayout>

<motion.div

initial={{opacity:0,y:30}}

animate={{opacity:1,y:0}}

>

<h2 className="page-title">

SubCategory Management

</h2>

<div className="subcategory-container">

<div className="sub-card">

<h4>

{editId?"Update":"Add"} SubCategory

</h4>

<select

className="form-select mb-3"

value={form.category}

onChange={(e)=>setForm({
...form,
category:e.target.value
})}

>

<option value="">Select Category</option>

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

<input

className="form-control mb-3"

placeholder="SubCategory Name"

value={form.subCategoryName}

onChange={(e)=>setForm({
...form,
subCategoryName:e.target.value
})}

/>

<button

className="save-btn"

onClick={saveSubCategory}

>

{editId?"Update":"Add SubCategory"}

</button>

</div>

<div className="table-card">

<input

className="form-control search-box"

placeholder="Search SubCategory..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

<table className="table table-hover">

<thead>

<tr>

<th>#</th>

<th>SubCategory</th>

<th>Category</th>

<th>Actions</th>

</tr>

</thead>

<tbody>

{

filtered.map((sub,index)=>(

<tr key={sub._id}>

<td>{index+1}</td>

<td>{sub.subCategoryName}</td>

<td>

<span className="badge-category">

{sub.category?.categoryName}

</span>

</td>

<td>

<button

className="action-btn edit-btn"

onClick={()=>editSub(sub)}

>

<FaEdit/>

</button>

<button

className="action-btn delete-btn"

onClick={()=>deleteSub(sub._id)}

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