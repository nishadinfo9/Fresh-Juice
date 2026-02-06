import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import Shop from "../pages/Shop";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Nutrition from "../pages/Nutrition";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        { path: "/", Component: Home },
        { path: "/shop", Component: Shop },
        { path: "/menu", Component: Menu },
        { path: "/about", Component: About },
        { path: "/nutrition", Component: Nutrition },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
