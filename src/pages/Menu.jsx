import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Menu = () => {
  const menuItems = [
    {
      id: "juice",
      name: "Fresh Juices",
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
    },
    {
      id: "smoothie",
      name: "Smoothies",
      image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625",
    },
    {
      id: "bowl",
      name: "Healthy Bowls",
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Explore Our Menu
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fresh, organic, and delicious. Choose from our selection of juices,
            smoothies, and bowls.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((menu, index) => (
            <motion.div
              key={menu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/menu/${menu.id}`}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">
                  <div className="h-60 overflow-hidden">
                    <img
                      src={menu.image}
                      alt={menu.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-semibold">{menu.name}</h3>
                    <p className="text-gray-500 mt-2">View all items</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
