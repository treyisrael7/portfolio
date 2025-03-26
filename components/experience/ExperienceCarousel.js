"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import CarouselNav from "./CarouselNav";
import { experiences } from "./experienceData";

export default function ExperienceCarousel() {
  const [showNav, setShowNav] = useState(false);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 340 + 24; // card width + gap
    const newScrollPosition = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <section
      id="experience"
      className="relative py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-6 sm:mb-8 relative"
        >
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#a78bfa] rounded opacity-50" />
          <h2 className="text-2xl sm:text-3xl font-bold text-left tracking-wide mb-2">
            Here&apos;s My Experience
          </h2>
          <p className="text-gray-400 max-w-md">
            A quick look at some of my favorite projects that have helped me grow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative group rounded-xl overflow-hidden"
          onMouseEnter={() => setShowNav(true)}
          onMouseLeave={() => setShowNav(false)}
        >
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-visible relative z-10 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#a78bfa]/30 hover:scrollbar-thumb-[#a78bfa]/50 pb-4"
            style={{
              perspective: "1000px",
              padding: "2rem 1.5rem",
              scrollBehavior: "smooth",
              maskImage: "linear-gradient(to right, transparent, black 2%, black 98%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 2%, black 98%, transparent)",
            }}
          >
            <div className="flex gap-6">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} />
              ))}
              <div className="min-w-[64px] flex-shrink-0" />
            </div>
          </div>

          <CarouselNav
            onPrev={() => scroll('left')}
            onNext={() => scroll('right')}
            show={showNav}
          />
        </motion.div>
      </div>
    </section>
  );
} 