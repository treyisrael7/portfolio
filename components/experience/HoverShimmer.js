"use client";

import { motion, useTime, useTransform } from "framer-motion";

export default function HoverShimmer() {
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });

  const rotatingBg = useTransform(
    rotate,
    (r) =>
      `conic-gradient(from ${r}deg,
        transparent 8%,
        #a78bfa44 20%,
        #c084fc44 35%,
        #a78bfa44 50%,
        transparent 80%)`
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
      style={{ background: rotatingBg }}
      className="absolute inset-0 p-[2px] rounded-lg pointer-events-none z-10"
    >
      <div className="w-full h-full rounded-md bg-[#1e1e1e]" />
    </motion.div>
  );
} 