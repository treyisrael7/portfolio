"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { motion } from "framer-motion";

const files = {
  "aboutMe.js": `const name = "Trey Israel";
const role = "College Student & Developer";
const whereabouts = "Greenville, South Carolina, USA";

function intro() {
  return \`Hi, I'm Trey! I would love to get to know you more, please feel free to contact me!\`;
}`,

  "education.js": `const education = [
  {
    school: "Clemson University",
    major: "Computer Science",
    minor: "Financial Management",
    graduation: "Expected December 2025"
  }
];`,

  "hobbies.js": `const hobbies = [
  "Basketball",
  "Pickleball",
  "Playing video games",
  "Spending time with my girlfriend, friends, and family",
  "Finding new trails to hike",
  "Trying to get better at coding",
  "Finding new places to eat at",
  "Watching Survivor"
];`,
};

export default function CodeViewer() {
  const [activeFile, setActiveFile] = useState("aboutMe.js");

  return (
    <motion.section
      id="about"
      className="py-24 px-4 sm:px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-left tracking-wide mb-2">
            A Little About Me
          </h2>
          <p className="text-gray-400 mb-10 max-w-md">
            Here&apos;s a peek into my background, education, and what I love doing in life.
          </p>
        </div>
        <div className="flex flex-col md:flex-row overflow-hidden rounded-xl border border-[#3c3c3c] shadow-lg">
          {/* Sidebar */}
          <div className="bg-[#252526] w-full md:w-64 p-5 text-base font-mono border-b md:border-b-0 md:border-r border-[#3c3c3c]">
            <p className="text-gray-400 mb-4 text-sm uppercase tracking-widest">
              portfolio
            </p>
            <ul className="space-y-2">
              {Object.keys(files).map((file) => (
                <li
                  key={file}
                  onClick={() => setActiveFile(file)}
                  className={`cursor-pointer pl-3 py-2 rounded-md transition ${
                    activeFile === file
                      ? "bg-[#3c3c3c] text-blue-300 font-semibold"
                      : "hover:bg-[#2d2d2d] text-gray-300"
                  }`}
                >
                  {file}
                </li>
              ))}
            </ul>
          </div>

          {/* Code Panel */}
          <div className="w-full bg-[#1e1e1e]">
            <div className="flex border-b border-[#3c3c3c] text-sm px-5 py-3">
              <div className="text-white bg-[#2d2d2d] px-4 py-1.5 rounded-t text-sm font-medium">
                {activeFile}
              </div>
            </div>
            <div className="p-5 text-base font-mono overflow-auto h-[460px]">
              <SyntaxHighlighter
                language={activeFile.split(".").pop()}
                style={vscDarkPlus}
                showLineNumbers
                wrapLines
                customStyle={{
                  backgroundColor: "transparent",
                  padding: "0.75rem",
                  fontSize: "16px",
                  lineHeight: "1.75",
                  fontFamily: "var(--font-jetbrains), monospace",
                }}
                lineNumberStyle={{
                  color: "#666",
                  fontSize: "0.85rem",
                  marginRight: "12px",
                }}
              >
                {files[activeFile]}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
