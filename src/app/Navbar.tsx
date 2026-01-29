"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full top-0 left-0 z-50">
      <div className="absolute top-0 left-0 w-full h-1/2 backdrop-blur-lg"></div>

      <nav
        className={`relative z-10 px-3 py-1 my-4 min-h-[60px] rounded-full flex items-center justify-between transition-all duration-200 ${
          scrolled
            ? "bg-forest-950 text-off-white shadow-lg mx-4 border border-off-white/30"
            : "bg-transparent text-off-white mx-6 border-transparent"
        }`}
      >
        {/* Left */}
        <div className="flex items-center space-x-2">
          <img
            src="/Jayden Hagerty pfp Aug 2024.jpg"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-bold text-xl tracking-widest font-emphasize">
            Jayden.
          </span>
        </div>

        {/* Middle */}
        <ul
          className={`hidden md:flex font-semibold text-lg ${
            scrolled ? "text-off-white" : "text-forest-700"
          }`}
        >
          {["Home", "Software", "Music", "Film"].map((item) => {
            const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const isActive =
              pathname === href || pathname.startsWith(href + "/");

            return (
              <li
                key={item}
                className={`py-3 transition duration-100 ease-out
                  hover:-translate-y-[3px] text-xl
                  ${isActive ? "underline underline-offset-8 decoration-2" : ""}
                `}
              >
                <Link className={`py-3 px-3 rounded-[4px] transition duration-100 ease-out
                  hover:bg-off-white/5 hover:-translate-y-[3px] text-xl
                `} href={href}>{item}</Link>
              </li>
            );
          })}
        </ul>

        {/* Right */}
        <a
          // href="https://ffm.bio/jayden"
          target="_blank"
          className="button"
        >
          Contact Me!
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
