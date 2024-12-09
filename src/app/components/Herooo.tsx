import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 py-12 bg-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Top Picks For You</h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product 1 */}
        <div className="text-center">
          <img
            src="/pic.png" // Replace with actual image path
            alt="Trenton modular sofa_3"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-medium text-gray-800">
            Trenton modular sofa_3
          </h3>
          <p className="text-gray-700 font-semibold">Rs. 25,000.00</p>
        </div>

        {/* Product 2 */}
        <div className="text-center">
          <img
            src="/picc.png" // Replace with actual image path
            alt="Granite dining table with dining chair"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-medium text-gray-800">
            Granite dining table with dining chair
          </h3>
          <p className="text-gray-700 font-semibold">Rs. 25,000.00</p>
        </div>

        {/* Product 3 */}
        <div className="text-center">
          <img
            src="/piccc.png" // Replace with actual image path
            alt="Outdoor bar table and stool"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-medium text-gray-800">
            Outdoor bar table and stool
          </h3>
          <p className="text-gray-700 font-semibold">Rs. 25,000.00</p>
        </div>

        {/* Product 4 */}
        <div className="text-center">
          <img
            src="/picccc.png" // Replace with actual image path
            alt="Plain console with teak mirror"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-medium text-gray-800">
            Plain console with teak mirror
          </h3>
          <p className="text-gray-700 font-semibold">Rs. 25,000.00</p>
        </div>
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition">
          View More
        </button>
      </div>
    </section>
  );
};

export default Hero;

