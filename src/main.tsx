import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/:cacheKey" element={<App />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
