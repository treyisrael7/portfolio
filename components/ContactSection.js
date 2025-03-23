"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactSection() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const mailtoLink = `mailto:your@email.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 max-w-6xl mx-auto text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row items-start gap-12">
        {/* Left: Contact Form */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Contact Me!</h2>
          <p className="text-gray-400 mb-10 max-w-md">
            Want to get in touch? Send me a message — I’d love to hear from you!
          </p>

          <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg border border-[#3c3c3c] w-full">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="What’s this about?"
                className="w-full p-3 rounded bg-[#2b2b2b] border border-[#3c3c3c] text-white"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Write your message here..."
                className="w-full p-3 rounded bg-[#2b2b2b] border border-[#3c3c3c] text-white"
              />
            </div>

            <button
              onClick={handleSend}
              className="px-6 py-3 bg-[#a78bfa]/10 border border-[#a78bfa] hover:bg-[#a78bfa] text-white font-semibold rounded-md transition"
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Right: Images & Caption */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-[300px] md:ml-auto"
        >
          <div className="flex flex-col gap-4">
            <div className="h-[200px] rounded-xl overflow-hidden shadow-lg border border-[#3c3c3c] bg-[#111]">
              <Image
                src="/portfolio%20sunset.jpeg"
                alt="Clemson Sunset 1"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[200px] rounded-xl overflow-hidden shadow-lg border border-[#3c3c3c] bg-[#111]">
              <Image
                src="/portfolio%20tree.jpeg"
                alt="Clemson Sunset 2"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-3 text-right">
            Any nature pictures are very welcome :)
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
