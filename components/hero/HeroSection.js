"use client";

import { motion } from "framer-motion";
import SocialIcons from "../SocialIcons";
import TypewriterText from "./TypewriterText";
import ProfileImage from "./ProfileImage";
import ResumeButton from "./ResumeButton";

export default function HeroSection() {
  return (
    <section id="about" className="relative pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left flex-1"
        >
          <TypewriterText />

          <p className="text-gray-300 text-lg sm:text-xl max-w-xl">
            I&apos;m a Clemson Student and Developer, always looking to grow my
            coding skills. It&apos;s nice to meet you!
          </p>

          <ResumeButton />

          <div className="mt-8 scale-110 flex justify-center md:justify-start">
            <SocialIcons />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ProfileImage />
        </motion.div>
      </div>
    </section>
  );
}
