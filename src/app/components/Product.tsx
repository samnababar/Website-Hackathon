import Image from "next/image";

const Product = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {/* Product 1: Side Table */}
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Image */}
          <div className="relative w-60 h-60">
            <Image
              src="/Sidetable.png" // Place "Sidetable.png" in the public folder
              alt="Side table"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          {/* Title */}
          <h2 className="text-xl font-bold text-black">Side Table</h2>
          {/* View More Link */}
          <a href="#" className="text-lg font-medium text-black hover:underline">
            View More
          </a>
        </div>

        {/* Product 2: Sofa */}
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Image */}
          <div className="relative w-60 h-60">
            <Image
              src="/sofa.png" // Place "sofa.png" in the public folder
              alt="Sofa"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          {/* Title */}
          <h2 className="text-xl font-bold text-black">Sofa</h2>
          {/* View More Link */}
          <a href="#" className="text-lg font-medium text-black hover:underline">
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
