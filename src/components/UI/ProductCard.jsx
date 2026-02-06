import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../context/UseCart";
import { Link } from "react-router-dom";

const ProductCard = ({ id, image, name, description, price }) => {
  const [imageError, setImageError] = useState(false);
  const { addToCart } = useCart();

  const handleImageError = () => {
    setImageError(true);
  };

  const handleAddToCart = () => {
    addToCart({ id, image, name, description, price });
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      <div className="relative overflow-hidden aspect-square">
        {imageError ? (
          <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
            <span className="text-6xl">🥤</span>
          </div>
        ) : (
          <Link to={"/"}>
            <img
              src={image}
              alt={name}
              width="400"
              height="400"
              loading="lazy"
              onError={handleImageError}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </Link>
        )}
      </div>

      <div className="p-6">
        <Link to={"/"}>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        </Link>

        {description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
        )}

        <div className="flex items-center justify-between">
          {price && (
            <p className="text-primary-600 font-bold text-lg">{price}</p>
          )}

          <button
            onClick={handleAddToCart}
            className="flex items-center space-x-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors min-h-[44px] min-w-[44px]"
            aria-label={`Add ${name} to cart`}
          >
            <FiShoppingCart className="w-5 h-5" />
            <span className="text-sm font-semibold">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
