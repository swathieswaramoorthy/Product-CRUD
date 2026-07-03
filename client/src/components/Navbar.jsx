import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ padding: "10px", background: "#222", color: "white" }}>
            <Link to="/" style={{ margin: "10px", color: "white" }}>Category</Link>
            <Link to="/subcategory" style={{ margin: "10px", color: "white" }}>SubCategory</Link>
            <Link to="/product" style={{ margin: "10px", color: "white" }}>Product</Link>
        </nav>
    );
}

export default Navbar;