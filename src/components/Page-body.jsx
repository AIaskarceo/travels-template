import heroImage from "../assets/hero.png";
import beach from "../assets/beach.png";
import temple from "../assets/temple.png";
import hills from "../assets/hills.png";
import "./Page-body.css"; // Add this for custom background

export default function PageBody() {
  return (
    <div className="text-gray-800 body-bg">
      {/* Hero Section */}
      <section
        className="h-[75vh] bg-cover bg-center flex items-center justify-start px-10"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="  p-8 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg text-white mb-6 max-w-md">
            Explore breathtaking destinations, unforgettable experiences, and
            hidden gems across the country.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow-lg transition">
            Explore Now
          </button>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
          Top Travel Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card Template */}
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
                className="bg-white/30 backdrop-blur-md hover:scale-105 hover:shadow-2xl transition duration-300 rounded-xl overflow-hidden shadow-md"
              >
                <img src={image} alt={titles[index]} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-green-700">{titles[index]}</h3>
                  <p className="text-gray-700">{descriptions[index]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
