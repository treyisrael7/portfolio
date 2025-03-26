"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HoverShimmer from "./HoverShimmer";
import TechLogo from "./TechLogos";

export default function ExperienceCard({ exp }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{
        rotateY: 7,
        rotateX: -4,
        scale: 1.02,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className="group relative min-w-[340px] max-w-[340px] h-[420px] bg-[#1e1e1e] border border-[#3c3c3c] rounded-xl shadow-lg flex-shrink-0 flex flex-col justify-between overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <AnimatePresence>{isHovered && <HoverShimmer />}</AnimatePresence>

      <div className="p-6 flex flex-col gap-6 flex-grow z-20">
        <div className="min-h-[88px]">
          <div className="text-sm font-medium text-[#a78bfa] mb-1">
            {exp.date}
          </div>
          <h3 className="text-xl font-bold leading-snug line-clamp-2 text-white/90">
            {exp.title}
          </h3>
        </div>
        <p className="text-[15px] text-gray-300 leading-relaxed line-clamp-4">
          {exp.description}
        </p>
      </div>

      <div className="p-6 pt-0 flex flex-wrap gap-2 z-20">
        {exp.tech.map((tech, i) => (
          <div
            key={i}
            className="bg-[#a78bfa]/10 pl-2 pr-3 py-1.5 rounded-full border border-[#a78bfa]/20 text-[13px] font-medium text-[#a78bfa] hover:border-[#a78bfa]/40 transition-colors flex items-center gap-1.5 group whitespace-nowrap"
          >
            <TechLogo name={tech} small />
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
} 