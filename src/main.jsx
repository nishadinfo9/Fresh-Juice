import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CartProvider } from "./context/CartProvider.jsx";
import AppRouter from "./router/AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <AppRouter />
    </CartProvider>
  </StrictMode>,
);
