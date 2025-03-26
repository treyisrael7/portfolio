import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      className="relative w-[300px] h-[400px] rounded-2xl bg-[#111] border border-[#3c3c3c] shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
    >
      <Image
        src="/portfolio%20image.jpeg"
        alt="Trey Israel"
        height={1000}
        width={800}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
} 