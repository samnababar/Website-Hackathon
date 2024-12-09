// components/Hero.tsx
import React from "react";

const Blogss = () => {
  return (
    <section className="relative bg-gray-50 py-16 px-4">
      {/* Main Content */}
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Our Instagram
        </h1>
        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          Follow our store on Instagram
        </p>
        <button className="mt-6 rounded-full bg-gray-900 px-6 sm:px-8 py-3 text-white shadow-lg hover:bg-gray-800 transition text-sm sm:text-base">
          Follow Us
        </button>
      </div>

      {/* Background Design */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('/path-to-your-background-image.jpg')",
        }}
      ></div>
    </section>
  );
};

export default Blogss;
