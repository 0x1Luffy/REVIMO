import { Star } from "lucide-react";

const Card = ({ product }) => {
  return (
    <div className="w-full max-w-sm rounded-lg bg-white p-4 shadow-lg sm:p-6 md:p-8 relative">
      {/* Badge */}
      <div
        className={`absolute top-2 right-2  z-10 p-2 text-center  text-xs font-semibold rounded-full ${
          product.recommendation === "Must Buy"
            ? "bg-green-500 text-white"
            : "bg-red-500 text-white"
        }`}
      >
        {product.recommendation}
      </div>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="mb-4 w-full rounded-lg object-cover"
      />

      {/* Product Title */}
      <h2 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl md:text-2xl">
        {product.title}
      </h2>

      {/* Rating */}
      <div className="mb-3 flex items-center">
        {Array(product.stars)
          .fill()
          .map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-yellow-400 text-yellow-400 sm:h-5 sm:w-5"
            />
          ))}
        <span className="ml-2 text-sm font-medium text-gray-600">
          {product.rating}
        </span>
      </div>

      {/* Price and Button */}
      <div className="flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <span className="text-2xl font-bold text-gray-900 sm:text-3xl">
          ${product.price}
        </span>
        <button className="w-full rounded-lg bg-teal-600 px-4 py-2 text-white hover:bg-teal-700 sm:w-auto">
          Full Review
        </button>
      </div>
    </div>
  );
};

export default Card;
