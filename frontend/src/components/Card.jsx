import { Star } from "lucide-react";

const Card = () => {
  return (
    <div className="flex justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-sm rounded-lg bg-white p-4 shadow-lg sm:p-6 md:p-8">
        {/* Single Product Image */}
        <img
          src="/api/placeholder/400/320"
          alt="Apple Watch Series 7"
          className="mb-4 w-full rounded-lg object-cover"
        />

        {/* Product Title */}
        <h2 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl md:text-2xl">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h2>

        {/* Rating */}
        <div className="mb-3 flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="h-4 w-4 fill-yellow-400 text-yellow-400 sm:h-5 sm:w-5"
            />
          ))}
          <span className="ml-2 text-sm font-medium text-gray-600">5.0</span>
        </div>

        {/* Price and Button */}
        <div className="flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <span className="text-2xl font-bold text-gray-900 sm:text-3xl">
            $599
          </span>
          <button className="w-full rounded-lg bg-teal-600 px-4 py-2 text-white hover:bg-teal-700 sm:w-auto">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
