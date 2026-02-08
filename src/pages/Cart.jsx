import { useContext } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } =
    useContext(CartContext);

  const subtotal = getCartTotal();
  const discount = (getCartTotal() * 10) / 100;
  const tax = ((subtotal - discount) * 5) / 100;
  const total = subtotal + tax - discount;
  console.log(total);

  const handleRemoveCart = (id) => {
    alert("are you sure");
    removeFromCart(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600">Your cart is empty.</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-6"
          >
            {/* Cart Items */}
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white shadow-lg rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-24 h-24 object-cover rounded-xl"
                />

                {/* Name & Price */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-600">
                    ${parseFloat(item.price).toFixed(2)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-primary-100 text-primary-600 p-2 rounded-full hover:bg-primary-200 transition"
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className="px-3 font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-primary-100 text-primary-600 p-2 rounded-full hover:bg-primary-200 transition"
                  >
                    <AiOutlinePlus />
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveCart(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <AiOutlineDelete size={24} />
                </button>

                {/* Subtotal */}
                <div className="mt-2 sm:mt-0 font-semibold text-gray-900">
                  ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                </div>
              </motion.div>
            ))}

            {/* Total & Checkout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-lg rounded-2xl p-6 flex   justify-between items-center mt-6"
            >
              <div className="flex flex-col">
                <div className="text-xl font-semibold text-gray-900">
                  Subtotal: ${subtotal.toFixed(2)}
                </div>
                <div className="text-xl font-semibold text-gray-900">
                  Discount: ${discount.toFixed(2)}
                </div>
                <div className="text-xl font-semibold text-gray-900">
                  Tax: ${tax.toFixed(2)}
                </div>
                <div className="text-2xl font-bold text-gray-900 mt-3">
                  Total: ${total.toFixed(2)}
                </div>
              </div>
              <button
                onClick={() => navigate("/checkout")}
                className="mt-4 md:mt-0 bg-primary-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-600 transition"
              >
                Checkout
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Cart;
