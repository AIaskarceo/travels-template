import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/react.svg";
import "./Navbar.css";

const navItems = ["Home", "About", "Services", "Contact"];

export default function Navbar() {
  const location = useLocation();

  // 1) derive the initial activeIndex directly from the current path
  const getIndexFromPath = (pathname) =>
    navItems.findIndex((item) =>
      pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`)
    );
  const [activeIndex, setActiveIndex] = useState(
    () => getIndexFromPath(location.pathname) ?? 0
  );

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imageLeft, setImageLeft] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const itemRefs = useRef([]);

  // 2) whenever the route changes, keep activeIndex in sync
  useEffect(() => {
    const next = getIndexFromPath(location.pathname);
    if (next >= 0 && next !== activeIndex) setActiveIndex(next);
  }, [location.pathname]);

  const currentIndex = hoveredIndex ?? activeIndex;

  // 3) position the icon whenever currentIndex changes
  useEffect(() => {
    const el = itemRefs.current[currentIndex];
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const scrollX = window.scrollX;
    setImageLeft(rect.left + rect.width / 2 + scrollX - 30);

    // after the very first placement, flip the flag so transitions kick in
    if (!hasLoaded) setHasLoaded(true);
  }, [currentIndex]);

  return (
    <div className="fixed   w-full z-50 bg-transparent px-4 py-4 nav-bg">
      <nav className="flex justify-center space-x-8 sm:space-x-10 md:space-x-12 pr-4 relative">

        {/* only add the transition class after the first placement */}
        {hasLoaded && (
          <div
            className={`absolute -top-4  pointer-events-none ${
              hasLoaded
                ? "transition-all duration-300 ease"
                : ""
            }`}
            style={{ left: imageLeft }}
          >
            <img src={logo} alt="hover-icon" className="w-6 h-6 " />
          </div>
        )}

        {navItems.map((item, i) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          return (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="flex flex-col items-center cursor-pointer "
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveIndex(i)}
            >
              <Link
                to={path}
                className={`transition-colors duration-300 ${
                  currentIndex === i ? "text-green-400" : "nav-text"
                }`}
              >
                {item}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}