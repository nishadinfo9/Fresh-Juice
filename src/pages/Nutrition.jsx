import { motion } from "framer-motion";

const Nutrition = () => {
  const products = [
    {
      id: 1,
      name: "Orange Sunrise",
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop",
      calories: 120,
      protein: "2g",
      carbs: "28g",
      fats: "0.5g",
      sugar: "24g",
      ingredients: ["Orange", "Ginger", "Lemon"],
    },
    {
      id: 2,
      name: "Green Detox",
      image:
        "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=400&fit=crop",
      calories: 150,
      protein: "3g",
      carbs: "35g",
      fats: "0.8g",
      sugar: "22g",
      ingredients: ["Kale", "Spinach", "Apple", "Lemon"],
    },
    {
      id: 3,
      name: "Tropical Paradise",
      image:
        "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=400&fit=crop",
      calories: 180,
      protein: "4g",
      carbs: "40g",
      fats: "1g",
      sugar: "30g",
      ingredients: ["Mango", "Pineapple", "Passion Fruit"],
    },
    {
      id: 4,
      name: "Acai Bowl",
      image:
        "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=400&fit=crop",
      calories: 350,
      protein: "7g",
      carbs: "60g",
      fats: "10g",
      sugar: "35g",
      ingredients: ["Acai", "Banana", "Granola", "Berries", "Honey"],
    },
    {
      id: 5,
      name: "Pitaya Bowl",
      image:
        "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=600&h=400&fit=crop",
      calories: 320,
      protein: "6g",
      carbs: "55g",
      fats: "9g",
      sugar: "30g",
      ingredients: ["Dragon Fruit", "Coconut", "Tropical Fruits"],
    },
  ];

  const handleClick = (product) => {
    alert(
      `${product.name}\n\nIngredients: ${product.ingredients.join(
        ", ",
      )}\nCalories: ${product.calories} kcal`,
    );
    // In real app, open modal with detailed nutrition info
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Nutrition Info
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check calories, protein, carbs, fats, and ingredients of our fresh
            juices, smoothies, and bowls.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => handleClick(product)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative h-56">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  {product.name}
                </h3>
                <div className="flex justify-between text-gray-700 text-sm">
                  <span>Calories: {product.calories} kcal</span>
                  <span>Protein: {product.protein}</span>
                </div>
                <div className="flex justify-between text-gray-700 text-sm">
                  <span>Carbs: {product.carbs}</span>
                  <span>Fats: {product.fats}</span>
                </div>
                <div className="text-gray-600 text-sm">
                  Ingredients: {product.ingredients.join(", ")}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
