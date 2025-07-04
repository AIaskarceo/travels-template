import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import contactCover from "../../assets/bus.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const titleRef = useRef(null);
  const formRef = useRef(null);

  // Form input refs
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // 🔠 Animate heading using SplitType
    const split = new SplitType(titleRef.current, { types: "chars" });

    gsap.from(split.chars, {
      y: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      ease: "back.out",
    });

    // 🟢 Animate form fields using fromTo
    const refs = [nameRef, emailRef, subjectRef, messageRef, buttonRef];
    gsap.fromTo(
      refs.map((ref) => ref.current),
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
        stagger: 0.3,
      }
    );

    // 🟡 Animate the whole form on scroll
    gsap.fromTo(
      formRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative poppins-i"
      style={{ backgroundImage: `url(${contactCover})` }}
    >
      {/* Dark blur overlay */}
      <div className="absolute inset-0 bg-black/50  z-0" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        {/* Title */}
        <h1
          ref={titleRef}
          className="text-white text-4xl sm:text-6xl font-bold text-center mb-12"
        >
          Contact Us
        </h1>

        {/* Form */}
        <div
          ref={formRef}
          className="w-full max-w-4xl bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl text-white"
        >
          <form className="space-y-8">
            <div>
              <label className="block text-lg font-semibold mb-2">Name</label>
              <input
                ref={nameRef}
                type="text"
                placeholder="Enter your Name"
                className="w-full p-4 rounded-lg bg-white/10 border border-white/30 focus:outline-none text-white placeholder-white/70"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">Email</label>
              <input
                ref={emailRef}
                type="email"
                placeholder="Enter your Email"
                className="w-full p-4 rounded-lg bg-white/10 border border-white/30 focus:outline-none text-white placeholder-white/70"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">Subject</label>
              <input
                ref={subjectRef}
                type="text"
                placeholder="Enter your Subject"
                className="w-full p-4 rounded-lg bg-white/10 border border-white/30 focus:outline-none text-white placeholder-white/70"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">Message</label>
              <textarea
                ref={messageRef}
                rows="6"
                placeholder="Enter your Message"
                className="w-full p-4 rounded-lg bg-white/10 border border-white/30 focus:outline-none text-white placeholder-white/70"
              />
            </div>

            <button
              ref={buttonRef}
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
