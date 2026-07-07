import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!form.email || !form.password) {

            toast.warning("Please fill all fields");

            return;
        }

        try {

            setLoading(true);

            const res = await API.post("/auth/login", form);

            login(res.data.user, res.data.token);

            toast.success("Login Successful");

            if (res.data.user.role === "admin") {

                navigate("/admin");

            } else {

                navigate("/home");

            }

        } catch (err) {

            toast.error(
                err.response?.data?.message || "Login Failed"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body p-4">

                            <h2 className="text-center fw-bold mb-2">

                                Product Management

                            </h2>

                            <p className="text-center text-muted mb-4">

                                Login to Continue

                            </p>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label>Email</label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Password</label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={form.password}
                                        onChange={handleChange}
                                    />

                                </div>

                                <button
                                    className="btn btn-dark w-100"
                                    disabled={loading}
                                >

                                    {loading ? "Logging in..." : "Login"}

                                </button>

                            </form>

                            <div className="text-center mt-3">

                                Don't have an account?

                                <Link to="/signup">

                                    {" "}Signup

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}