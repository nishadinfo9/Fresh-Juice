import { useState } from "react";

const ProductCard = ({ image, name, description, price }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      <div className="relative overflow-hidden aspect-square">
        {imageError ? (
          <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
            <span className="text-6xl">🥤</span>
          </div>
        ) : (
          <img
            src={image}
            alt={name}
            width="400"
            height="400"
            loading="lazy"
            onError={handleImageError}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>

        {description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
        )}

        {price && <p className="text-primary-600 font-bold text-lg">{price}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
