import { memo, useState } from "react";
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
    addToCart(id);
  };
  console.log(id);

  return (
    <div className="group bg-white md:h-96 md:w-72 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative h-64 w-full overflow-hidden">
        {imageError ? (
          <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
            <span className="text-6xl">🥤</span>
          </div>
        ) : (
          <Link to={`/product/${id}`}>
            <img
              src={image}
              alt={name}
              onError={handleImageError}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </Link>
        )}
      </div>

      {/* Content Section */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <Link to={`/product/${id}`}>
            <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
              {name?.length > 20 ? name.slice(0, 20) + "..." : name}
            </h3>
          </Link>
          {description && (
            <p className="text-gray-600 text-sm line-clamp-2">
              {description.length > 35
                ? description.slice(0, 35) + "..."
                : description}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-4">
          {price && (
            <p className="text-primary-600 font-bold text-lg">${price}</p>
          )}

          <button
            onClick={handleAddToCart}
            className="flex items-center space-x-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
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

export default memo(ProductCard);
