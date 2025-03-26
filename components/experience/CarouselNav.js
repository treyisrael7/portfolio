"use client";

import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CarouselNav({ onPrev, onNext, show }) {
  return (
    <>
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: show ? 1 : 0, x: show ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        onClick={onPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#1e1e1e]/80 border border-[#3c3c3c] text-white hover:bg-[#1e1e1e] hover:border-[#a78bfa] transition-colors"
        aria-label="Previous card"
      >
        <FaChevronLeft className="text-lg" />
      </motion.button>
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: show ? 1 : 0, x: show ? 0 : 20 }}
        transition={{ duration: 0.2 }}
        onClick={onNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#1e1e1e]/80 border border-[#3c3c3c] text-white hover:bg-[#1e1e1e] hover:border-[#a78bfa] transition-colors"
        aria-label="Next card"
      >
        <FaChevronRight className="text-lg" />
      </motion.button>
    </>
  );
} 