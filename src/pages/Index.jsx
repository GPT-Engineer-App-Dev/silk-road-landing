import React from "react";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100">
        <img
          src="/placeholder.svg"
          alt="Great Wall of China"
          className="mx-auto rounded-xl object-cover w-[1200px] h-[600px]"
        />
        <h1 className="text-5xl font-bold mt-8">Welcome to China</h1>
        <p className="text-xl mt-4">Explore the rich culture, history, and beauty of China</p>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-20">
        <h2 className="text-4xl font-bold text-center">Culture</h2>
        <p className="text-center mt-4 max-w-2xl mx-auto">
          Chinese culture is one of the world's oldest cultures, tracing back thousands of years. It includes
          customs and traditions, music, dance, painting, literature, and cuisine.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <img
            src="/placeholder.svg"
            alt="Chinese Festival"
            className="mx-auto rounded-xl object-cover w-[400px] h-[300px]"
          />
          <img
            src="/placeholder.svg"
            alt="Traditional Clothing"
            className="mx-auto rounded-xl object-cover w-[400px] h-[300px]"
          />
          <img
            src="/placeholder.svg"
            alt="Chinese Cuisine"
            className="mx-auto rounded-xl object-cover w-[400px] h-[300px]"
          />
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center">History</h2>
        <p className="text-center mt-4 max-w-2xl mx-auto">
          China's history is rich and complex, with a continuous culture stretching back nearly 4,000 years.
        </p>
        <div className="mt-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
              <p>221 BC: Qin Dynasty unifies China</p>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
              <p>618-907 AD: Tang Dynasty - Golden Age of China</p>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
              <p>1368-1644 AD: Ming Dynasty - Construction of the Great Wall</p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Section */}
      <section id="travel" className="py-20">
        <h2 className="text-4xl font-bold text-center">Travel</h2>
        <p className="text-center mt-4 max-w-2xl mx-auto">
          China offers a vast array of travel destinations, from bustling cities to serene landscapes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <img
            src="/placeholder.svg"
            alt="Beijing"
            className="mx-auto rounded-xl object-cover w-[400px] h-[300px]"
          />
          <img
            src="/placeholder.svg"
            alt="Shanghai"
            className="mx-auto rounded-xl object-cover w-[400px] h-[300px]"
          />
          <img
            src="/placeholder.svg"
            alt="Guilin"
            className="mx-auto rounded-xl object-cover w-[400px] h-[300px]"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-800 text-white text-center">
        <p>Contact us: info@discoverchina.com</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
        <p className="mt-4">&copy; 2023 Discover China. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;