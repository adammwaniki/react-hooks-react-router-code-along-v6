import React from "react";
import ReactDOM from "react-dom/client";
// Step 1. Import react-router functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
// Importing the other pages that we will be creating routes to
import About from "./pages/About";
import Login from "./pages/Login";

    // Step 2. Create a route object
    // createBrowserRouter is used to create the router for our application. 
    // We'll pass it an array of route objects as its argument. 
    // Each route object will have a routing path and a corresponding element to be rendered on that path.
const router = createBrowserRouter([

    {
      path: "/",
      element: <Home />
    }, 
    // Adding new routes to the array of route objects
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/login",
      element: <Login />
    }

  ]);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // Step 3. Render the router
  // The RouterProvider provides the router created by createBrowserRouter to our application, so it can use React-Router's client-side routing.
  root.render(<RouterProvider router={router} />);