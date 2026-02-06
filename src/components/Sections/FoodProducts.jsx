import React from "react";
import { motion } from "framer-motion";

const FoodProducts = () => {
  const bowls = [
    {
      id: 1,
      name: "Acai Bowl",
      description: "Topped with granola, fresh berries, and honey",
      image:
        "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Pitaya Bowl",
      description: "Dragon fruit base with coconut and tropical fruits",
      image:
        "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Green Bowl",
      description: "Spirulina blend with kiwi, banana, and chia seeds",
      image:
        "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Superfood Bowls
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delicious, nutrient-dense bowls to fuel your day
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bowls.map((bowl, index) => (
            <motion.div
              key={bowl.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={bowl.image}
                  alt={bowl.name}
                  width="600"
                  height="400"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {bowl.name}
                </h3>
                <p className="text-white/90">{bowl.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            All bowls are made fresh to order with organic ingredients
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              Gluten-Free
            </span>
            <span className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
              Vegan Options
            </span>
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              No Added Sugar
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FoodProducts;
