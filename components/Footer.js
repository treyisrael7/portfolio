"use client";

import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <motion.footer
      className="mt-20 border-t border-[#2a2a2a] py-10 px-6 text-center text-gray-400 text-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <p className="mb-4">
        Thanks for checking out my website. Hope to connect with you soon! 🙌
      </p>
      <div className="flex justify-center">
        <SocialIcons />
      </div>
    </motion.footer>
  );
}
