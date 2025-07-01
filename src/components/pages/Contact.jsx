import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function Contact() {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split and animate heading
      const split = new SplitType(titleRef.current, { types: "words, chars" });

      gsap.from(split.chars, {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: "back.out",
      });

      // Animate form fields with pop-in effect (no scroll trigger)
      gsap.fromTo(
        ".animate-field",
        {
          y: 40,
          scale: 0.95,
          autoAlpha: 0,
        },
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.3, // ✅ ensures each element appears one after another
        }
      );




    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}

      className="min-h-screen bg-gradient-to-b from-[#c2f0f7] via-[#ffeec2] to-[#d6f5d6] p-5 sm:p-10 animate-field"
    >
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-10 space-y-10">
        <h2
          ref={titleRef}
          className="text-5xl font-bold text-center text-[#006666]"
        >
          Get in Touch with Us
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <input
            type="text"
            placeholder="Your Name"
            className="animate-field w-full p-4 border border-gray-300 rounded-xl shadow-md  focus:outline-none focus:ring-2 focus:ring-[#00bfa6] "
          />
          <input
            type="email"
            placeholder="Your Email"
            className="animate-field w-full p-4 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#00bfa6] "
          />
          <input
            type="text"
            placeholder="Subject"
            className="animate-field col-span-1 md:col-span-2 w-full p-4 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#00bfa6] "
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="animate-field col-span-1 md:col-span-2 w-full p-4 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#00bfa6] "
          ></textarea>
          <button
            type="submit"
            className="animate-field col-span-1 md:col-span-2 w-full bg-[#00bfa6] text-white py-3 px-8 rounded-xl shadow-lg hover:bg-[#009e8c]  text-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
