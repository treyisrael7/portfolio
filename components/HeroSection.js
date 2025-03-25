"use client";

import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";
import SocialIcons from "./SocialIcons";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const fullText = "Hey! I'm Trey Israel";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const introText = "Hey! I'm ";
    const nameText = "Trey Israel";
    const typingDelay = 800;
    const introSpeed = 60;
    const nameSpeed = 120;

    let i = 0;

    const startTyping = setTimeout(() => {
      const typeIntro = setInterval(() => {
        setDisplayedText(introText.slice(0, i + 1));
        i++;
        if (i === introText.length) {
          clearInterval(typeIntro);
          i = 0;
          const typeName = setInterval(() => {
            setDisplayedText(introText + nameText.slice(0, i + 1));
            i++;
            if (i === nameText.length) {
              clearInterval(typeName);
              setInterval(() => {
                setShowCursor((prev) => !prev);
              }, 500);
            }
          }, nameSpeed);
        }
      }, introSpeed);
    }, typingDelay);

    return () => clearTimeout(startTyping);
  }, []);

  const introLength = "Hey! I'm ".length;
  const whitePart = displayedText.slice(0, introLength);
  const purplePart = displayedText.slice(introLength);

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left flex-1"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">{whitePart}</span>
            <span className="text-[#a78bfa]">{purplePart}</span>
            <span
              className={`ml-1 inline-block align-middle bg-[#a78bfa] transition-opacity duration-200 ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
              style={{
                width: "4px",
                height: "0.9em",
                transform: "translateY(-4px)",
                borderRadius: "1px",
              }}
            />
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-xl">
            I&apos;m a Clemson Student and Developer, always looking to grow my
            coding skills. It&apos;s nice to meet you!
          </p>

          <a
            href="/Trey Israel Resume.pdf"
            download
            className="group mt-8 inline-flex items-center gap-3 px-6 py-3 text-sm sm:text-base bg-[#a78bfa]/10 border border-[#a78bfa] text-white font-semibold rounded-md shadow-md hover:bg-[#a78bfa] hover:text-black hover:shadow-lg transition-all duration-300"
          >
            <FaFileDownload className="text-lg sm:text-xl transform group-hover:scale-110 group-hover:rotate-[-10deg] transition-transform duration-300" />
            <span className="relative">
              Download Resume
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
            </span>
          </a>

          <div className="mt-8 scale-110 flex justify-center md:justify-start">
            <SocialIcons />
          </div>
        </motion.div>

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
      </div>
    </section>
  );
}
