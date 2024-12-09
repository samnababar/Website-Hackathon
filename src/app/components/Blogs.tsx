import React from "react";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      image: "/one.png", // Update with your image paths
      readTime: "5 min",
      date: "12th Oct 2022",
    },
    {
      id: 2,
      title: "Going all-in with millennial design",
      image: "/two.png", // Update with your image paths
      readTime: "5 min",
      date: "12th Oct 2022",
    },
    {
      id: 3,
      title: "Going all-in with millennial design",
      image: "/three.png", // Update with your image paths
      readTime: "5 min",
      date: "12th Oct 2022",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Blogs
        </h2>
        <p className="text-gray-600 mt-2">
          Find a bright idea to suit your taste with our great selection
        </p>
      </div>

      {/* Blog Posts */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105"
          >
            {/* Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">
                {post.title}
              </h3>
              <button className="mt-4 text-blue-600 font-medium hover:underline">
                Read More
              </button>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center mt-4 text-gray-600 text-sm">
                {/* Reading Time */}
                <span className="flex items-center mr-4">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22c5.522 0 10-4.478 10-10S17.522 2 12 2 2 6.478 2 12s4.478 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm1 4h-2v6h6v-2h-4V8z"></path>
                  </svg>
                  {post.readTime}
                </span>

                {/* Date */}
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10V7c0-2.8 2.2-5 5-5s5 2.2 5 5v3c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V11c0-.6.4-1 1-1zm7-3v3H9V7c0-1.6 1.4-3 3-3s3 1.4 3 3zm2 11H8v-8h8v8z"></path>
                  </svg>
                  {post.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Posts Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          View All Posts
        </button>
      </div>
    </section>
  );
};

export default Blogs;
