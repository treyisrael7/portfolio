"use client";

import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";
import SocialIcons from "./SocialIcons";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left flex-1"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Hey! I&apos;m <span className="text-[#a78bfa]">Trey Israel</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-xl">
            I&apos;m a Clemson student looking to grow my coding skills.
            It&apos;s nice to meet you! :)
          </p>

          <a
            href="/Trey Israel Resume.pdf"
            download
            className="mt-8 scale-110 inline-flex items-center gap-3 px-6 py-3 text-sm sm:text-base bg-[#a78bfa]/10 border border-[#a78bfa] text-white font-semibold rounded-md hover:bg-[#a78bfa] hover:text-black transition"
          >
            <FaFileDownload className="text-lg sm:text-xl" />
            Download Resume
          </a>

          <div className="mt-8 scale-110 flex justify-center md:justify-start">
            <SocialIcons />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="relative w-[300px] h-[400px] rounded-2xl bg-gradient-to-br from-[#2a9d8f] to-[#e76f51] shadow-2xl group overflow-hidden"
        >
          <Image
            src="/portfolio%20image.jpeg"
            alt="Trey Israel"
            height={1000}
            width={800}
            className="relative z-10 w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
