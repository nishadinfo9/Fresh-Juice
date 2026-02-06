import React from "react";
import { motion } from "framer-motion";

const BrandStory = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <span className="text-9xl">🌱</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-500 rounded-full opacity-20 blur-3xl"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Our Story
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2020, FreshJuice was born from a simple belief:
              everyone deserves access to fresh, nutritious, and delicious
              beverages that fuel their day.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              We partner with local organic farms to source the finest fruits
              and vegetables, ensuring every bottle is packed with vitamins,
              minerals, and natural goodness. Our cold-press process preserves
              maximum nutrients while delivering incredible taste.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              From our family to yours, we're committed to sustainability,
              health, and making a positive impact on our community and planet.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-gray-600 mt-1">Organic</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">0</div>
                <div className="text-sm text-gray-600 mt-1">Additives</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">24h</div>
                <div className="text-sm text-gray-600 mt-1">Fresh</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
