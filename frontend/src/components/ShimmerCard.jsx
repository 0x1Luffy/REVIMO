const ShimmerCard = () => {
  return (
    <div className="w-full max-w-sm rounded-lg bg-white p-4 shadow-lg sm:p-6 md:p-8">
      {/* Product Image Shimmer */}
      <div className="mb-4 w-full h-48 bg-gray-300 rounded-lg animate-pulse"></div>

      {/* Product Title Shimmer */}
      <div className="mb-2 w-3/4 h-6 bg-gray-300 rounded-lg animate-pulse"></div>

      {/* Rating Shimmer */}
      <div className="mb-3 flex items-center space-x-2">
        <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
      </div>

      {/* Price and Button Shimmer */}
      <div className="flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div className="w-24 h-6 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-full h-10 bg-teal-600 rounded-lg animate-pulse sm:w-auto"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
