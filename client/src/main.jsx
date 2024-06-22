import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FirstProject, FinanceTracker, FinanceTransactionDetails, LoginPage, RegisterPage } from "./pages"
import "./index.css";
import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Routes } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "first_project",
    element: <FirstProject />,
  },
  {
    path: "finance_tracker",
    element: <FinanceTracker />,
  },
  {
    path: "txn/:txnId",
    element: <FinanceTransactionDetails />,
  },
  {
    path: "maintenance_management",
    element: <LoginPage />,
  },
  {
    path: "register_page",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Router>
        <Routes>
          {router}
        </Routes>
      </Router>
    </RouterProvider>
  </React.StrictMode>
);