import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import FirstProject from "./pages/FirstProject.jsx";
import { FirstProject, FinanceTracker } from "./pages"
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

