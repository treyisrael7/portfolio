"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const imageLocations = [
  {
    src: "/garden%20portfolio.jpeg",
    location: "Brookgreen Gardens",
    description:
      "The prettiest botanical garden I've ever had the pleasure of visiting",
  },
  {
    src: "/portfolio%20tree.jpeg",
    location: "Edisto Beach State Park",
    description: "A walk down the beach where trees come out of the ocean",
  },
];

const NatureImages = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full md:w-[320px] flex flex-col gap-4"
    >
      <div className="flex flex-col gap-4">
        {imageLocations.map((image, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#3c3c3c] bg-[#111] group hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src={image.src}
              alt={`Nature ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 90vw, 300px"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold text-[#a78bfa] mb-2">
                {image.location}
              </h3>
              <p className="text-gray-200 text-center text-sm">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-400 mt-2 text-center">
        Any nature pictures are very welcome :)
      </p>
    </motion.div>
  );
};

export default NatureImages;
