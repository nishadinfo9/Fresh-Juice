import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FiCheckCircle } from "react-icons/fi";

const Checkout = () => {
  const { getCartTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const [success, setSuccess] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0); // store total before clearing cart

  const total = getCartTotal().toFixed(2);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, address, phone } = formData;
    if (!name || !address || !phone) {
      alert("All fields are required!");
      return;
    }

    // Save total before clearing cart
    setOrderTotal(total);
    setSuccess(true);

    clearCart(); // clear cart after saving total

    // Redirect to home after 5 seconds
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        {!success ? (
          <>
            <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Checkout
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Delivery Address"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Phone Number"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-500 text-white py-2 rounded-lg font-semibold hover:bg-primary-600 transition"
              >
                Place Order (Cash on Delivery)
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-10">
            <FiCheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-green-600 mb-2">
              Order Placed!
            </h2>
            <p className="text-gray-700 mb-4">
              Total: <strong>${orderTotal}</strong>
            </p>
            <a
              href={`https://wa.me/8801736052046?text=Hi, I placed an order totaling $${orderTotal}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Contact via WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
