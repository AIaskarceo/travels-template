import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import myImage from '../../assets/about-bus1.png';
import beachBg from '../../assets/beach.png';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageWrapperRef = useRef(null);
  const trigger1 = useRef(null);
  const textRefs = useRef([]);
  const faqRef = useRef(null);
  const [busSrc, setBusSrc] = useState(myImage);

  useEffect(() => {
    if (!busSrc) return;
    gsap.fromTo(
      imageWrapperRef.current,
      { opacity: 1 },
      {
        x: '-100%',
        opacity: 0,
        scrollTrigger: {
          trigger: trigger1.current,
          scrub: true,
        },
        ease: 'power4.out',
      }
    );
  }, [busSrc]);

  useEffect(() => {
    textRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            duration: 1,
            ease: 'power3.out',
            delay: i * 0.1,
          }
        );
      }
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      faqRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: faqRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        duration: 1,
        ease: 'back.out(1.7)',
      }
    );
  }, []);

  return (
    <div
      className="relative overflow-hidden font-poppins bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,243,230,0.6), rgba(255,255,255,0.85)), url(${beachBg})`,
      }}
    >
      {/* 🔹 BUS + ABOUT OVERLAY SECTION */}
      {busSrc && (
        <div
  ref={imageWrapperRef}
  className="w-full flex items-center justify-center min-h-[100vh] sm:fixed sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 z-10 px-4 py-8"
>

          <div className="relative w-full sm:w-[100vw] mx-auto">
            {/* Bus Image */}
            <img
              src={busSrc}
              alt="Bus"
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* About Box Overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div
                className="w-full sm:w-4/5 max-w-2xl bg-[rgba(255,255,255,0.25)] backdrop-blur-lg border border-[rgba(85,46,46,0.3)]
                shadow-[0_0_30px_rgba(255,255,255,0.3)] text-[#111827] text-center rounded-3xl px-6 py-6"
              >
                <h1 className="text-4xl sm:text-5xl font-semibold mb-4 drop-shadow text-amber-700">
                  About Us
                </h1>
                <p className="text-base sm:text-lg leading-relaxed font-medium text-justify">
                  Sree Guru Holidays is a trusted travel partner, crafting journeys full of excitement, comfort, and lifelong memories.
                  Our mission is to provide hassle-free travel that combines scenic beauty, local culture, and personalized service for each traveler.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🔹 Scroll trigger spacer for bus animation */}
      <div className="h-[100vh]" />
      <div ref={trigger1} className="h-[100vh]" />

      {/* 🔹 Text Sections */}
      <section className="space-y-20 sm:space-y-24 md:space-y-32 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20 text-center">
        {[
          "We curate adventures that go beyond typical tours — weaving culture, comfort and discovery.",
          "Our destinations span lush hills, vibrant cities, ancient temples, and hidden gems.",
          "Whether it’s a weekend escape or a week-long exploration, we’ve got it covered.",
          "We believe travel isn’t about the miles, but the memories you make along the way.",
        ].map((text, i) => (
          <h2
            key={i}
            ref={(el) => (textRefs.current[i] = el)}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-snug max-w-4xl mx-auto bg-white/60 backdrop-blur-md rounded-xl py-6 px-4"
          >
            {text}
          </h2>
        ))}
      </section>

      {/* 🔹 FAQ Section */}
      <section ref={faqRef} className="h-fit py-12 px-4 flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md border border-amber-300 rounded-2xl shadow-lg p-8">
          <h3 className="text-3xl font-bold mb-6 text-center text-amber-800">Frequently Asked Questions</h3>
          <div className="space-y-4 text-left text-gray-800">
            <div>
              <h4 className="font-semibold">Q: What makes your tours different?</h4>
              <p>A: Our attention to detail, local experiences, and flexible plans set us apart from standard travel agencies.</p>
            </div>
            <div>
              <h4 className="font-semibold">Q: Are packages customizable?</h4>
              <p>A: Absolutely! We tailor every itinerary to your group’s needs, from school trips to corporate getaways.</p>
            </div>
            <div>
              <h4 className="font-semibold">Q: What safety measures do you follow?</h4>
              <p>A: We prioritize safety with trained staff, emergency support, and verified travel partners.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
