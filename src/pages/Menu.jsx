import { motion } from "framer-motion";

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Orange Sunrise",
      description: "Fresh-squeezed oranges with a hint of ginger",
      price: "$6.99",
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Green Detox",
      description: "Kale, spinach, apple, and lemon blend",
      price: "$7.99",
      image:
        "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Tropical Paradise",
      description: "Mango, pineapple, and passion fruit",
      price: "$8.99",
      image:
        "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Protein Power",
      description: "Banana, peanut butter, and plant protein",
      price: "$9.49",
      image:
        "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      name: "Acai Bowl",
      description: "Topped with granola, fresh berries, and honey",
      price: "$11.99",
      image:
        "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      name: "Pitaya Bowl",
      description: "Dragon fruit base with coconut and tropical fruits",
      price: "$12.49",
      image:
        "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=600&h=400&fit=crop",
    },
  ];

  const handleClick = (item) => {
    alert(`You clicked on ${item.name}`);
    // Or open modal / redirect to details page
  };

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
            Our Menu
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our fresh juices, smoothies, and bowls. Click on any item to
            see more details.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => handleClick(item)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative h-56">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <span className="text-xl font-bold text-gray-900">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
