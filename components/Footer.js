"use client";

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <motion.footer
      className="mt-24 border-t border-[#2a2a2a] bg-[#1e1e1e]/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          <motion.div 
            className="flex items-center gap-2 text-2xl font-bold text-white hover:text-[#a78bfa] transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCode className="text-[#a78bfa]" />
            <span>Trey Israel</span>
          </motion.div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-400 text-center max-w-md">
              Thanks for checking out my website. I'm always excited to connect with new people and explore potential opportunities! 🙌
            </p>
            <div className="scale-90">
              <SocialIcons />
            </div>
          </div>

          <div className="flex gap-6 text-sm text-gray-500">
            <motion.a 
              href="#about"
              className="hover:text-[#a78bfa] transition-colors"
              whileHover={{ y: -2 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#experience"
              className="hover:text-[#a78bfa] transition-colors"
              whileHover={{ y: -2 }}
            >
              Experience
            </motion.a>
            <motion.a 
              href="#contact"
              className="hover:text-[#a78bfa] transition-colors"
              whileHover={{ y: -2 }}
            >
              Contact
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
