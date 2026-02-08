import { useParams } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { products } from "../data/data";
import { useCart } from "../context/UseCart";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));
  console.log(product);
  if (!product) {
    return <p className="text-center mt-32">Product not found</p>;
  }

  const { name, image, price, description } = product;

  return (
    <div className="px-4 md:px-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg p-6">
        {/* IMAGE */}
        <div className="w-full h-[420px] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{name}</h1>

            <p className="text-2xl font-semibold text-primary-600 mb-4">
              ${price}
            </p>

            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* ACTION */}
          <button
            onClick={() => addToCart(product.id)}
            className="mt-8 flex items-center justify-center gap-2 bg-primary-500 text-white py-3 rounded-xl hover:bg-primary-600 transition font-semibold"
          >
            <FiShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
