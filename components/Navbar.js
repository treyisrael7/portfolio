"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const sections = ["about", "experience", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      let maxVisibility = 0;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const total = rect.height;
          const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          const percentage = visible / total;

          if (percentage > maxVisibility) {
            maxVisibility = percentage;
            current = id;
          }
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#1f1f1f]/80 backdrop-blur-md text-white px-6 py-4 shadow-md border-b border-[#333] sticky top-0 z-50"
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo / Name */}
        <motion.div 
          className="flex items-center gap-2 text-2xl font-bold text-white hover:text-[#a78bfa] transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaCode className="text-[#a78bfa]" />
          <span>Trey Israel</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex gap-8 text-lg">
          {sections.map((section) => (
            <motion.a
              key={section}
              href={`#${section}`}
              className="relative px-2 py-1 text-gray-300 hover:text-[#a78bfa] transition-colors duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-[#a78bfa] rounded"
                initial={false}
                animate={{
                  width: activeSection === section ? "100%" : "0%",
                  opacity: activeSection === section ? 1 : 0
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-3xl focus:outline-none"
          whileTap={{ scale: 0.9 }}
        >
          ☰
        </motion.button>
      </div>

      {/* Mobile Nav Links */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden mt-4 flex flex-col gap-4 text-lg px-2 overflow-hidden"
          >
            {sections.map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                className="relative px-2 py-1 text-gray-300"
                onClick={() => setOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#a78bfa] rounded"
                  initial={false}
                  animate={{
                    width: activeSection === section ? "100%" : "0%",
                    opacity: activeSection === section ? 1 : 0
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
