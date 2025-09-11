"use client";

import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full top-0 left-0 z-50">
      <nav
        className={`px-3 py-3 my-4 rounded-full flex items-center justify-between transition-all duration-200 ${
          scrolled
            ? "bg-forest-950 text-off-white shadow-lg mx-4 border-1 border-forest-850"
            : "bg-transparent text-off-white mx-6 border-transparent"
        }`}
      >
        <div className="flex items-center space-x-2">
          <img
            src="/Jayden Hagerty pfp Aug 2024.jpg"
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
          />
          <span className="font-bold text-xl tracking-widest font-emphasize">
            Jayden.
          </span>
        </div>

        <ul
          className={`hidden md:flex font-semibold text-lg ${
            scrolled ? "text-off-white" : "text-forest-700"
          }`}
        >
          {["Home", "Software", "Music", "Film"].map((item) => (
            <li
              key={item}
              className={`py-1 px-3 transition hover:bg-off-white/5 rounded-[4px] hover:transform-[translateY(-3px)] ease-out cursor-pointer duration-100 text-xl`}
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        <a
          href="https://ffm.bio/jayden"
          target="_blank"
          className="bg-off-white text-forest-800 px-4 py-2 rounded-full font-semibold transition"
        >
          More Links!
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
