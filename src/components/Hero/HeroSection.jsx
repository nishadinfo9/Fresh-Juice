import React from "react";
import { motion } from "framer-motion";
import Button from "../UI/Button";
import FloatingElements from "./FloatingElements";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 ">
      <FloatingElements />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left z-10"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Fresh, Natural
              <span className="block text-primary-600">Juice & Smoothies</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover the perfect blend of taste and nutrition. Made with 100%
              organic fruits and vegetables, delivered fresh to your door.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                text="Shop Now"
                variant="primary"
                size="large"
                onClick={() => navigate("/shop")}
              />
              <Button
                text="Learn More"
                variant="secondary"
                size="large"
                onClick={() => navigate("/about")}
              />
            </div>
          </motion.div>

          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="col-span-1"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="aspect-square bg-gradient-to-br from-orange-200 to-orange-400 rounded-2xl flex items-center justify-center">
                    <span className="text-6xl">🍊</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="col-span-1 mt-12"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="aspect-square bg-gradient-to-br from-green-200 to-green-400 rounded-2xl flex items-center justify-center">
                    <span className="text-6xl">🥬</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="col-span-2"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="aspect-video bg-gradient-to-br from-pink-200 to-purple-400 rounded-2xl flex items-center justify-center">
                    <span className="text-8xl">🥤</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
