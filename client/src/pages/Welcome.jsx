import { Link } from "react-router-dom";
import shopImage from "../assets/hero.png";

function Welcome() {

    return (

        <div className="container">

            <div
                className="row align-items-center"
                style={{ minHeight: "85vh" }}
            >

                <div className="col-md-6">

                    <h1 className="display-4 fw-bold">

                        Welcome to

                        <span className="text-primary">

                            {" "}A-Z Shop

                        </span>

                    </h1>

                    <p className="lead mt-4">

                        Discover quality products at affordable prices.

                        Shop smarter, faster and easier with A-Z Shop.

                    </p>

                    <div className="mt-4">

                        <Link
                            to="/login"
                            className="btn btn-primary btn-lg me-3"
                        >
                            Login
                        </Link>

                        <Link
                            to="/signup"
                            className="btn btn-success btn-lg"
                        >
                            Signup
                        </Link>

                    </div>

                </div>

                <div className="col-md-6 text-center">

                    <img

                        src={shopImage}

                        className="img-fluid"

                        style={{
                            maxHeight: "450px"
                        }}

                        alt="A-Z Shop"

                    />

                </div>

            </div>

        </div>

    );

}

export default Welcome;