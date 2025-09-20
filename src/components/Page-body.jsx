import React from "react";

import heroImage from "../assets/hero.png";
import beach from "../assets/beach.png";
import temple from "../assets/temple.png";
import hills from "../assets/hills.png";
import "./Page-body.css";

export default function PageBody() {
  return (
    <div className="text-gray-800 body-bg relative">
      {/* Hero Section */}
      <section
        className="h-[75vh] bg-cover bg-center flex items-center justify-start px-4 sm:px-6 lg:px-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="p-6 sm:p-8 rounded-lg max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-base sm:text-lg text-white mb-6 max-w-md">
            Explore breathtaking destinations, unforgettable experiences, and
            hidden gems across the country.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Explore Now
          </button>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-green-800">
          Top Travel Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {[beach, temple, hills].map((image, index) => {
            const titles = ["Beach Escapes", "Heritage Tours", "Hill Adventures"];
            const descriptions = [
              "Relax on golden sands, surf crystal-clear waves, and enjoy coastal cuisine.",
              "Dive into rich culture and ancient architecture at historic temples and forts.",
              "Trek breathtaking peaks, breathe mountain air, and feel the serenity of nature.",
            ];

            return (
              <div
                key={index}
                className="bg-white/30 backdrop-blur-md hover:shadow-2xl transition duration-300 rounded-xl overflow-hidden shadow-md transform hover:-translate-y-2"
              >
                <img
                  src={image}
                  alt={titles[index]}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-700">
                    {titles[index]}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">{descriptions[index]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
