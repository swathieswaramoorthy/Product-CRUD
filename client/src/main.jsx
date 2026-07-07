// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./style.css";
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(

<BrowserRouter>

<AuthProvider>

<App/>
<ToastContainer
position="top-right"
autoClose={3000}
/>
</AuthProvider>

</BrowserRouter>

);