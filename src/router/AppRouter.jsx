import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout & Utils
import Layout from "../layout/Layout";
import ScrollToTop from "../utils/ScrollToTop";

// Regular (critical) pages
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import NotFound from "../pages/NotFound";

// Lazy-loaded secondary/heavy pages
const About = lazy(() => import("../pages/About"));
const Nutrition = lazy(() => import("../pages/Nutrition"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const MenuProducts = lazy(() => import("../pages/MenuProducts"));

// --- Generic Suspense wrapper ---
const withSuspense = (Component) => () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

// Wrapped lazy pages
const AboutWrapper = withSuspense(About);
const NutritionWrapper = withSuspense(Nutrition);
const ProductDetailsWrapper = withSuspense(ProductDetails);
const MenuProductsWrapper = withSuspense(MenuProducts);

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: () => (
        <>
          <ScrollToTop />
          <Layout />
        </>
      ),
      children: [
        // Critical pages (no lazy)
        { path: "/", Component: Home },
        { path: "/shop", Component: Shop },
        { path: "/menu", Component: Menu },
        { path: "/cart", Component: Cart },
        { path: "/checkout", Component: Checkout },

        // Lazy-loaded pages
        { path: "/about", Component: AboutWrapper },
        { path: "/nutrition", Component: NutritionWrapper },
        { path: "/menu/:category", Component: MenuProductsWrapper },
        { path: "/product/:id", Component: ProductDetailsWrapper },

        // Not found
        { path: "/*", Component: NotFound },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
