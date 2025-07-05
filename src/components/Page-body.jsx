import React, { useLayoutEffect, useRef, useState } from "react";
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

  
useLayoutEffect(() => {
  const video = videoRef.current;

  const handleLoaded = () => {
    requestAnimationFrame(() => {
      setDuration(video.duration);

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
          invalidateOnRefresh: true,
        },
      });

      tl.to(wrapperRef.current, {
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          alignOrigin: [0.62, 0.62],
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

      // Refresh scroll trigger in case layout shifts
      ScrollTrigger.refresh();
    });
  };

  if (video.readyState >= 1) {
    handleLoaded();
  } else {
    video.addEventListener("loadedmetadata", handleLoaded);
  }

  return () => {
    video.removeEventListener("loadedmetadata", handleLoaded);
  };
}, []);

  return (
    <div className="text-gray-800 body-bg relative motion-container min-[100vh]:">
      {/* 🛣️ SVG Path & Animated Bus */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none overflow-visible">
        <svg className="w-full h-full">
          <path
            ref={pathRef}
            d="
              M 20 545.5
              L 1350 545.5
              L 20 545.5
              C 20 719,75 695, 465 695
              Q 492 695, 492 732
              L 492 1060
              Q 492 1112, 592 1112
              L 1260 1112
            "
            fill="none"
           
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
