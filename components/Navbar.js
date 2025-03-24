"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "contact"];
      let current = "";

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (window.scrollY >= offsetTop - offsetHeight / 3) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `relative transition font-medium px-2 py-1 hover:text-[#a78bfa] ${
      activeSection === id
        ? "text-[#a78bfa] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#a78bfa] after:rounded"
        : "text-gray-300"
    }`;

  return (
    <nav className="bg-[#1f1f1f]/80 backdrop-blur-sm text-white px-6 py-4 shadow-md border-b border-[#333] sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-white hover:text-[#a78bfa] transition duration-300">
          Trey Israel
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex gap-8 text-lg">
          <a href="#about" className={linkClass("about")}>
            About
          </a>
          <a href="#experience" className={linkClass("experience")}>
            Experience
          </a>
          <a href="#contact" className={linkClass("contact")}>
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav Links */}
      {open && (
        <div className="sm:hidden mt-4 flex flex-col gap-4 text-lg px-2">
          <a href="#about" className={linkClass("about")} onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#experience" className={linkClass("experience")} onClick={() => setOpen(false)}>
            Experience
          </a>
          <a href="#contact" className={linkClass("contact")} onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
