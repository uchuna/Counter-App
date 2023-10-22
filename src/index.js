import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import CounterPage from "./CounterPage";
import ErrorBoundaryTest from "./component/ErrorBoundaryTest";
import NotFound from "./pages/NotFound";
import "./index.css";

// This file is the main entry point of your React app.
// It sets up routes for your different pages using the 'react-router-dom' library.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/CounterPage",
    element: <CounterPage />,
  },
  {
    path: "ErrorBoundaryTest",
    element: <ErrorBoundaryTest />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

// The createRoot function renders the app in the HTML element with the ID "root."
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
