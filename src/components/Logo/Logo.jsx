import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
    >
      <img className="w-10 " src="/logo.png" loading="lazy" alt="logo" />
      Fresh Juice
    </Link>
  );
};

export default Logo;
