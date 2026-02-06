import React, { useEffect } from "react";
import Navbar from "./components/Navigation/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import BrandStory from "./components/Sections/BrandStory";
import ProductShowcase from "./components/Sections/ProductShowcase";
import HealthBenefits from "./components/Sections/HealthBenefits";
import FoodProducts from "./components/Sections/FoodProducts";
import DeliveryInfo from "./components/Sections/DeliveryInfo";
import SocialMedia from "./components/Sections/SocialMedia";
import Footer from "./components/Footer/Footer";

function App() {
  // Respect user's motion preferences
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty(
        "--animation-duration",
        "0.01ms",
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <BrandStory />
        <ProductShowcase />
        <HealthBenefits />
        <FoodProducts />
        <DeliveryInfo />
        <SocialMedia />
      </main>
      <Footer />
    </div>
  );
}

export default App;
