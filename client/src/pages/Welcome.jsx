import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaShoppingBag,
  FaShippingFast,
  FaShieldAlt,
  FaStar
} from "react-icons/fa";

import shopImage from "../assets/hero.png";
import "../css/welcome.css";

function Welcome() {
  return (
    <div className="welcome-page">

      {/* Background Blur Circles */}

      <div className="circle circle1"></div>
      <div className="circle circle2"></div>

      <div className="container">

        <div className="row align-items-center hero-section">

          {/* LEFT */}

          <div className="col-lg-6">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
            >

              <span className="tag">

                <FaShoppingBag />

                &nbsp; India's Smart Shopping Destination

              </span>

              <h1 className="hero-title">

                Welcome to A-Z Shop

              

              </h1>

              <p className="hero-text">

                Shop premium quality products at unbeatable prices.

                Fast delivery, secure payments and an amazing shopping

                experience—all in one place.

              </p>

              <div className="hero-buttons">

                <Link
                  to="/login"
                  className="login-btn"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="signup-btn"
                >
                  Signup
                </Link>

              </div>

              {/* Stats */}

              <div className="stats">

                <div className="stat-box">
                  <h2>500+</h2>
                  <p>Products</p>
                </div>

                <div className="stat-box">
                  <h2>100+</h2>
                  <p>Brands</p>
                </div>

                <div className="stat-box">
                  <h2>24/7</h2>
                  <p>Support</p>
                </div>

              </div>

            </motion.div>

          </div>

          {/* RIGHT */}

          <div className="col-lg-6 text-center">

            <motion.img

              src={shopImage}

              alt="Shopping"

              className="hero-image"

              animate={{
                y: [0, -18, 0]
              }}

              transition={{
                duration: 3,
                repeat: Infinity
              }}

            />

          </div>

        </div>

        {/* Features */}

        <motion.div

          className="row feature-row"

          initial={{ opacity: 0 }}

          whileInView={{ opacity: 1 }}

          transition={{ duration: 1 }}

        >

          <div className="col-md-4">

            <div className="feature-card">

              <FaShippingFast className="feature-icon" />

              <h4>Fast Delivery</h4>

              <p>

                Get your favourite products delivered quickly and safely.

              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="feature-card">

              <FaShieldAlt className="feature-icon" />

              <h4>Secure Payments</h4>

              <p>

                Multiple payment options with complete security.

              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="feature-card">

              <FaStar className="feature-icon" />

              <h4>Premium Quality</h4>

              <p>

                Trusted brands and quality products for every customer.

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </div>
  );
}

export default Welcome;