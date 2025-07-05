import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import heroImage from "../assets/hero.png";
import beach from "../assets/beach.png";
import temple from "../assets/temple.png";
import hills from "../assets/hills.png";
import bus from "../assets/bus1.webm";
import "./Page-body.css";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function PageBody() {
  const wrapperRef = useRef(null);
  const pathRef = useRef(null);
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;

    const handleLoaded = () => {
      requestAnimationFrame(() => {
        setDuration(video.duration);

        // Center the bus on the path
        gsap.set(wrapperRef.current, {
          xPercent: -50,
          yPercent: -50,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".motion-container",
            start: "top top",
            end: "bottom 90%",
            scrub: 1,
            markers: false,
          },
        });

        tl.to(wrapperRef.current, {
          motionPath: {
            path: pathRef.current,
            align: pathRef.current,
            alignOrigin: [0.6, 0.6],
            autoRotate: true,
          },
          modifiers: {
            rotation: (value) => {
              const angle = parseFloat(value);
              const normalized = (angle + 360) % 360;
              return normalized > 90 && normalized < 270 ? angle + 180 : angle;
            },
          },
          ease: "none",
        });

        tl.to(video, {
          currentTime: video.duration,
          ease: "none",
        }, 0);
      });
    };

    // Use `window.onload` for full layout + image loading on hosted sites
    if (document.readyState === "complete") {
      handleLoaded();
    } else {
      window.addEventListener("load", handleLoaded);
    }

    return () => {
      window.removeEventListener("load", handleLoaded);
    };
  }, []);

  return (
    <div className="text-gray-800 body-bg relative motion-container">
      {/* 🛣️ SVG Path & Animated Bus */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none overflow-visible">
        <svg className="w-full h-full">
          <path
            ref={pathRef}
            d="
              M 20 485.5
              L 1300 485.5
              L 20 485.5
              C 20 655,30 635, 420 635
              Q 447 635, 447 675
              L 447 1000
              Q 447 1052, 487 1052
              L 1200 1052
            "
            fill="none"
            stroke="red"
            width="2"
           
          />
        </svg>

        <div
          ref={wrapperRef}
          className="absolute top-0 left-0 w-[12vw] max-w-[100px] h-[12vw] max-h-[100px] z-20"
        >
          <video
            ref={videoRef}
            src={bus}
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-contain block"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="h-[75vh] bg-cover bg-center flex items-center justify-start px-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="p-8 rounded-lg">
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
                className="bg-white/30 backdrop-blur-md hover:shadow-2xl transition duration-300 rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={image}
                  alt={titles[index]}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-green-700">
                    {titles[index]}
                  </h3>
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
