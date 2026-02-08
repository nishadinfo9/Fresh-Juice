import React from "react";
import Navbar from "../components/Navigation/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main className="pt-18 md:pt-20">
        <Outlet />
      </main>

      <Footer />

      <a
        href="https://wa.me/8801736052046?text=Hi!%20I%20have%20a%20question%20about%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 z-50 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48a11.978 11.978 0 0 0-17 0 11.978 11.978 0 0 0 0 17l-1.5 5.5 5.5-1.5a11.978 11.978 0 0 0 17-17zM12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9zm5.1-6.5c-.2-.1-1.2-.6-1.4-.7s-.3-.1-.4.1c-.1.2-.4.7-.5.8-.1.1-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.2-1.3-1.4-.1-.2 0-.3 0-.4s.5-1.1.6-1.2c.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3s-.7-1.6-.9-2.2c-.2-.6-.4-.5-.5-.5s-.3 0-.5 0c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.1 3c.1.2 1.9 2.9 4.6 3.9 3 .9 3.3.8 3.9.8s1.3-.5 1.5-1.1c.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3z" />
        </svg>
      </a>
    </div>
  );
};

export default Layout;
