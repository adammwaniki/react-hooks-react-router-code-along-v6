import React from "react";
import ReactDOM from "react-dom/client";
// Step 1. Import react-router functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.js";

const router = createBrowserRouter(routes);
/*
import Home from "./pages/Home";
// Importing the other pages that we will be creating routes to
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";


    // Step 2. Create a route object
    // createBrowserRouter is used to create the router for our application. 
    // We'll pass it an array of route objects as its argument. 
    // Each route object will have a routing path and a corresponding element to be rendered on that path.

    const router = createBrowserRouter([

    {
      path: "/",
      element: <Home />,
      // If we want to render a different element when an error occurs, we can use the errorElement property
      // The errorElement can handle more than just bad URLs — it will redirect your app toward the provided Error component should any error occur within your main UI component! 
      // For that reason, we'll want to make sure each of our routes has an appropriate errorElement
      errorElement: <ErrorPage />
    }, 
    // Adding new routes to the array of route objects
    {
      path: "/about",
      element: <About />,
      errorElement: <ErrorPage />
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />
    },
    //what if we want to dynamically rendere the components? Here's how
    //Notice that we added /:id to the end of our path for our UserProfile route
    //This notation creates a URL parameter — a segment of our URL that can change and that contains data we can use in our components.
    //By including a URL parameter (or multiple parameters) in a route, we make that route dynamic — this single route can actually have many different URLs! 
    //For example, the /profile/1, /profile/2, and /profile/3 URLs will all lead to the same page. 
    //That page will just display different information depending on which URL is used!
    {
      path: "/profile/:id",
      element: <UserProfile />,
      errorElement: <ErrorPage />
    }

  ]);
  */
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // Step 3. Render the router
  // The RouterProvider provides the router created by createBrowserRouter to our application, so it can use React-Router's client-side routing.
  root.render(<RouterProvider router={router} />);