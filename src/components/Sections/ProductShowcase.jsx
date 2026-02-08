import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../UI/ProductCard";

const ProductShowcase = () => {
  const juices = [
    {
      id: 1,
      name: "Orange Sunrise",
      description: "Fresh-squeezed oranges with a hint of ginger",
      price: 6.99,
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Green Detox",
      description: "Kale, spinach, apple, and lemon blend",
      price: 7.99,
      image:
        "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Berry Blast",
      description: "Mixed berries with coconut water",
      price: 7.49,
      image:
        "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop",
    },
  ];

  const smoothies = [
    {
      id: 4,
      name: "Tropical Paradise",
      description: "Mango, pineapple, and passion fruit",
      price: 8.99,
      image:
        "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      name: "Protein Power",
      description: "Banana, peanut butter, and plant protein",
      price: 9.49,
      image:
        "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      name: "Acai Energy",
      description: "Acai berries, banana, and granola",
      price: 9.99,
      image:
        "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=400&fit=crop",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Juices Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Fresh Juices
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cold-pressed perfection in every bottle
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {juices.map((juice) => (
              <motion.div key={juice.id} variants={itemVariants}>
                <ProductCard {...juice} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Smoothies Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Power Smoothies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nutrient-packed blends for your active lifestyle
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {smoothies.map((smoothie) => (
              <motion.div key={smoothie.id} variants={itemVariants}>
                <ProductCard {...smoothie} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
