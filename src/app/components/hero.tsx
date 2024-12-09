import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-200 px-4">
      <div className="flex flex-wrap items-center max-w-5xl mx-auto">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4 mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Rocket Single Seater
          </h1>
          <button className="px-6 py-2 bg-black text-white text-sm md:text-lg font-semibold rounded-md hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 px-4">
          <div className="relative mx-auto max-w-xs md:max-w-sm">
            <Image
              src="/chair.png" // Ensure the image is saved in the public folder as chair.png
              alt="Rocket Single Seater"
              width={500}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
