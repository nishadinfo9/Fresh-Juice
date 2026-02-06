import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/UI/ProductCard";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Orange Sunrise",
      description: "Fresh-squeezed oranges with a hint of ginger",
      price: "$6.99",
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop",
      category: "juice",
    },
    {
      id: 2,
      name: "Green Detox",
      description: "Kale, spinach, apple, and lemon blend",
      price: "$7.99",
      image:
        "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=400&fit=crop",
      category: "juice",
    },
    {
      id: 3,
      name: "Berry Blast",
      description: "Mixed berries with coconut water",
      price: "$7.49",
      image:
        "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop",
      category: "juice",
    },
    {
      id: 4,
      name: "Tropical Paradise",
      description: "Mango, pineapple, and passion fruit",
      price: "$8.99",
      image:
        "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=400&fit=crop",
      category: "smoothie",
    },
    {
      id: 5,
      name: "Protein Power",
      description: "Banana, peanut butter, and plant protein",
      price: "$9.49",
      image:
        "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=400&h=400&fit=crop",
      category: "smoothie",
    },
    {
      id: 6,
      name: "Acai Energy",
      description: "Acai berries, banana, and granola",
      price: "$9.99",
      image:
        "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=400&fit=crop",
      category: "smoothie",
    },
    {
      id: 7,
      name: "Acai Bowl",
      description: "Topped with granola, fresh berries, and honey",
      price: "$11.99",
      image:
        "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=400&fit=crop",
      category: "bowl",
    },
    {
      id: 8,
      name: "Pitaya Bowl",
      description: "Dragon fruit base with coconut and tropical fruits",
      price: "$12.49",
      image:
        "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=600&h=400&fit=crop",
      category: "bowl",
    },
    {
      id: 9,
      name: "Green Bowl",
      description: "Spirulina blend with kiwi, banana, and chia seeds",
      price: "$11.49",
      image:
        "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&h=400&fit=crop",
      category: "bowl",
    },
  ];

  const categories = [
    { id: "all", label: "All Products" },
    { id: "juice", label: "Juices" },
    { id: "smoothie", label: "Smoothies" },
    { id: "bowl", label: "Bowls" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fresh, organic, and delicious. Choose from our selection of juices,
            smoothies, and bowls.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 min-h-[44px] ${
                selectedCategory === category.id
                  ? "bg-primary-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-md"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
