import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RainbowkitProvider from "./providers/RainbowkitProvider.tsx";
import Layout from "./components/Layout.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RainbowkitProvider>
      <ToastContainer />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/:filename" element={<App />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </RainbowkitProvider>
  </React.StrictMode>
);
