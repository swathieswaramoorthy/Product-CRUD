import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../services/api";

export default function Signup() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
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

        if (
            !form.name ||
            !form.email ||
            !form.password
        ) {

            toast.warning("Please fill all fields");

            return;

        }

        try {

            setLoading(true);

            await API.post("/auth/signup", form);

            toast.success("Account Created Successfully");

            setTimeout(() => {

                navigate("/login");

            }, 1500);

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                    "Signup Failed"
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

                                Create Account

                            </h2>

                            <p className="text-center text-muted mb-4">

                                Register as Customer

                            </p>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label>Name</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                    />

                                </div>

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
                                    className="btn btn-success w-100"
                                    disabled={loading}
                                >

                                    {loading ? "Creating..." : "Register"}

                                </button>

                            </form>

                            <div className="text-center mt-3">

                                Already have an account?

                                <Link to="/login">

                                    {" "}Login

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}