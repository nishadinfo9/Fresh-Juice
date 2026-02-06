import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  const posts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=400&fit=crop",
      link: "#",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1546548970-71785318a17b?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=400&fit=crop",
      link: "#",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop",
      link: "#",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=400&fit=crop",
      link: "#",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FaInstagram className="text-4xl text-pink-600" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              @freshjuice
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow us for daily inspiration, recipes, and wellness tips
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link || "#"}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={post.image}
                alt={`Social media post ${post.id}`}
                width="400"
                height="400"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <FaInstagram className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[44px]"
          >
            <FaInstagram className="text-xl" />
            <span>Follow Us on Instagram</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;
