import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
axios.defaults.baseURL = "https://task-app-backend-liard.vercel.app/";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ToastContainer />
      <App />
    </Router>
  </React.StrictMode>,
);
