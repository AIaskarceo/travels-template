import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import './Services.css';

import coorgImg from '../../assets/coorg.png';
import wonderlaImg from '../../assets/wonderla.png';
import jeepImg from '../../assets/jeep.png';
import supportImg from '../../assets/support.png';

gsap.registerPlugin(ScrollTrigger);

const packages = [
  { image: coorgImg, title: 'Coorg Adventure', description: 'Coffee hills, waterfalls, serene retreats.' },
  { image: wonderlaImg, title: 'Wonderla Day Out', description: 'Thrill rides and wave pools.' },
  { image: jeepImg, title: 'Chikmagalur Safari', description: 'Jeep safari and plantations.' },
  { image: supportImg, title: 'All-Inclusive Plan', description: 'Stay, food, and transport.' },
  { image: coorgImg, title: 'Weekend Getaway', description: 'Unwind with short trips.' },
];

const services = [
  { image: supportImg, title: '24/7 Support', description: 'Led by Mr. Rahman and team.' },
  { image: coorgImg, title: 'Custom Itineraries', description: 'Tailored for groups and colleges.' },
  { image: wonderlaImg, title: 'Affordable Pricing', description: 'Transparent rates, no hidden costs.' },
  { image: jeepImg, title: 'Safe Travel', description: 'Insured and verified transport.' },
  { image: coorgImg, title: 'Flexible Scheduling', description: 'Pick your own dates.' },
];

export default function Services() {
  const headingsRef = useRef([]);
  const pkgWrapperRef = useRef(null);
  const svcWrapperRef = useRef(null);

  useEffect(() => {
    if (!pkgWrapperRef.current || !svcWrapperRef.current) return;

    // Split and animate headings
    const splitHeading = (el) => {
      const split = new SplitType(el, { types: 'words, chars' });
      gsap.from(split.chars, {
        opacity: 0,
        y: 30,
        stagger: 0.05,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    };
    headingsRef.current.forEach(splitHeading);

    const scrollLoop = (wrapper, duration = 20) => {
      const cards = Array.from(wrapper.querySelectorAll('.scroll-card'));
      const totalWidth = wrapper.scrollWidth;

      // Animate original cards (ashes fade-in)
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {

            opacity: 0,


          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotateZ: 0,
            scale: 1,
            delay: i * 0.1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'left 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Clone the cards instead of innerHTML +=
      cards.forEach((card) => {
        const clone = card.cloneNode(true);
        wrapper.appendChild(clone);
      });

      // Continuous scrolling animation
      const tween = gsap.to(wrapper, {
        x: `-=${totalWidth / 2}`,
        duration,
        ease: 'linear',
        repeat: -1,
      });

      // Pause on hover
      wrapper.addEventListener('mouseenter', () => tween.pause());
      wrapper.addEventListener('mouseleave', () => tween.play());

      // Pause on manual scroll
      const parent = wrapper.parentElement;
      let scrollTimeout;
      parent.addEventListener('scroll', () => {
        tween.pause();
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => tween.play(), 3000);
      });
    };

    scrollLoop(pkgWrapperRef.current);
    scrollLoop(svcWrapperRef.current);
  }, []);

  const renderCards = (data, ref) => (
    <div className="overflow-x-auto scrollbar-hide w-full px-6 scroll-smooth">
      <div ref={ref} className="flex gap-6 w-max">
        {data.map((card, idx) => (
          <div
            key={idx}
            className="scroll-card bg-white rounded-2xl shadow-lg w-72 min-w-[18rem] transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-40 w-full object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="py-16 bg-gradient-to-b from-yellow-50 to-blue-100 space-y-20">
      <h2
        ref={(el) => (headingsRef.current[0] = el)}
        className="text-4xl font-bold text-teal-800 text-center mb-6"
      >
        Our Travel Packages
      </h2>
      {renderCards(packages, pkgWrapperRef)}

      <h2
        ref={(el) => (headingsRef.current[1] = el)}
        className="text-4xl font-bold text-teal-800 text-center mb-6"
      >
        Our Services
      </h2>
      {renderCards(services, svcWrapperRef)}
    </div>
  );
}
