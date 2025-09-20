import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import myImage from '../../assets/about-bus1.png';
import beachBg from '../../assets/beach.png';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageWrapperRef = useRef(null);
  const busImageRef = useRef(null);
  const aboutBoxRef = useRef(null);
  const trigger1 = useRef(null);
  const textRefs = useRef([]);
  const faqRef = useRef(null);
  const [busSrc, setBusSrc] = useState(myImage);

  useEffect(() => {
    if (!busSrc || !busImageRef.current) return;
    
    // Bus image entrance animation
    gsap.fromTo(
      busImageRef.current,
      { 
        scale: 0.8,
        opacity: 0,
        y: 100,
        rotationY: -15
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        rotationY: 0,
        scrollTrigger: {
          trigger: imageWrapperRef.current,
          start: 'top 80%',
          end: 'center center',
          toggleActions: 'play none none reverse',
        },
        duration: 1.5,
        ease: 'power3.out',
      }
    );

    // About box entrance animation
    gsap.fromTo(
      aboutBoxRef.current,
      { 
        scale: 0.9,
        opacity: 0,
        y: 50
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: imageWrapperRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        duration: 1,
        ease: 'back.out(1.7)',
        delay: 0.3,
      }
    );

    // Bus exit animation on scroll
    gsap.fromTo(
      imageWrapperRef.current,
      { opacity: 1, x: 0 },
      {
        x: '-100%',
        opacity: 0,
        scrollTrigger: {
          trigger: trigger1.current,
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
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
          className="w-full flex items-center justify-center min-h-[100vh] px-4 py-8"
        >
          <div className="relative w-full max-w-6xl mx-auto">
            {/* Bus Image */}
            <img
              ref={busImageRef}
              src={busSrc}
              alt="Bus"
              className="w-full h-auto object-cover rounded-xl sm:rounded-2xl shadow-2xl"
            />

            {/* About Box Overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div
                ref={aboutBoxRef}
                className="w-full max-w-2xl bg-white/80 backdrop-blur-md border border-amber-300/50
                shadow-xl text-gray-800 text-center rounded-2xl px-6 py-6 sm:px-8 sm:py-8"
              >
                <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-amber-700">
                  About Us
                </h1>
                <p className="text-sm sm:text-base leading-relaxed font-medium text-gray-700">
                  Sree Guru Holidays is a trusted travel partner, crafting journeys full of excitement, comfort, and lifelong memories.
                  Our mission is to provide hassle-free travel that combines scenic beauty, local culture, and personalized service for each traveler.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🔹 Scroll trigger spacer for bus animation */}
      <div className="h-[50vh] sm:h-[75vh]" />
      <div ref={trigger1} className="h-[50vh] sm:h-[75vh]" />

      {/* 🔹 Text Sections */}
      <section className="space-y-12 sm:space-y-16 md:space-y-20 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-20 text-center">
        {[
          "We curate adventures that go beyond typical tours — weaving culture, comfort and discovery.",
          "Our destinations span lush hills, vibrant cities, ancient temples, and hidden gems.",
          "Whether it's a weekend escape or a week-long exploration, we've got it covered.",
          "We believe travel isn't about the miles, but the memories you make along the way.",
        ].map((text, i) => (
          <h2
            key={i}
            ref={(el) => (textRefs.current[i] = el)}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 leading-snug max-w-4xl mx-auto bg-white/60 backdrop-blur-md rounded-xl py-4 sm:py-6 px-4"
          >
            {text}
          </h2>
        ))}
      </section>

      {/* 🔹 FAQ Section */}
      <section ref={faqRef} className="h-fit py-8 sm:py-12 px-4 flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md border border-amber-300 rounded-2xl shadow-lg p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-amber-800">Frequently Asked Questions</h3>
          <div className="space-y-4 text-left text-gray-800">
            <div>
              <h4 className="font-semibold text-sm sm:text-base">Q: What makes your tours different?</h4>
              <p className="text-sm sm:text-base">A: Our attention to detail, local experiences, and flexible plans set us apart from standard travel agencies.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm sm:text-base">Q: Are packages customizable?</h4>
              <p className="text-sm sm:text-base">A: Absolutely! We tailor every itinerary to your group's needs, from school trips to corporate getaways.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm sm:text-base">Q: What safety measures do you follow?</h4>
              <p className="text-sm sm:text-base">A: We prioritize safety with trained staff, emergency support, and verified travel partners.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;