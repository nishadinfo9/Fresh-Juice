import { useParams } from "react-router-dom";
import { products } from "../data/data";
import { motion } from "framer-motion";
import ProductCard from "../components/UI/ProductCard";
import { memo } from "react";

const MenuProducts = () => {
  const { category } = useParams();

  const filteredProducts = products.filter((p) => p.category === category);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 capitalize">
            {category.replace("-", " ")} Menu
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our delicious {category.replace("-", " ")} products. Click
            any item to add to cart or see details.
          </p>
        </motion.div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
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
        ) : (
          <div className="text-center py-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl text-gray-600"
            >
              No products found in this menu.
            </motion.p>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(MenuProducts);
