"use client";

import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, SiJavascript } from "react-icons/io5";

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
  const [openFiles, setOpenFiles] = useState(["aboutMe.js"]);

  // Load tabs from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("openTabs"));
    if (stored && Array.isArray(stored.openFiles)) {
      setOpenFiles(stored.openFiles);
      setActiveFile(stored.activeFile || stored.openFiles[0]);
    }
  }, []);

  // Save open tabs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("openTabs", JSON.stringify({ openFiles, activeFile }));
  }, [openFiles, activeFile]);

  const handleOpenFile = (file) => {
    if (!openFiles.includes(file)) {
      setOpenFiles((prev) => [...prev, file]);
    }
    setActiveFile(file);
  };

  const handleCloseFile = (file) => {
    const updatedFiles = openFiles.filter((f) => f !== file);
    setOpenFiles(updatedFiles);
    if (activeFile === file) {
      setActiveFile(updatedFiles[0] || "");
    }
  };

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
          <h2 className="text-2xl sm:text-3xl font-bold text-left tracking-wide mb-2 text-white">
            A Little About Me
          </h2>
          <p className="text-gray-400 mb-10 max-w-md">
            Here&apos;s a peek into my background, education, and what I love doing
            in life.
          </p>
        </div>

        <div className="rounded-xl border border-[#3c3c3c] shadow-xl overflow-hidden bg-[#1e1e1e]">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-[#3c3c3c]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="bg-[#252526] w-full md:w-64 p-5 text-base font-mono border-b md:border-b-0 md:border-r border-[#3c3c3c]">
              <p className="text-gray-400 mb-4 text-sm uppercase tracking-widest">
                portfolio
              </p>
              <ul className="space-y-2">
                {Object.keys(files).map((file) => (
                  <li
                    key={file}
                    onClick={() => handleOpenFile(file)}
                    className={`relative flex items-center gap-2 cursor-pointer pl-3 py-2 rounded-md transition font-mono text-sm
                      ${
                        activeFile === file
                          ? "bg-[#3c3c3c] text-blue-300 font-semibold before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-blue-400"
                          : "hover:bg-[#2d2d2d] text-gray-300"
                      }`}
                  >
                    {file}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full bg-[#1e1e1e]">
              <div className="flex border-b border-[#3c3c3c] text-sm overflow-x-auto">
                <AnimatePresence mode="popLayout">
                  {openFiles.map((file) => (
                    <motion.div
                      key={file}
                      layout
                      initial={{ opacity: 0, x: 10, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setActiveFile(file)}
                      className={`flex items-center gap-2 px-4 py-2 cursor-pointer transition whitespace-nowrap
                        ${
                          activeFile === file
                            ? "bg-[#2d2d2d] text-white border-b-2 border-[#a78bfa]"
                            : "text-gray-400 hover:text-white"
                        }`}
                    >
                      {file}
                      <IoClose
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCloseFile(file);
                        }}
                        className="text-xs hover:text-red-400"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="p-5 text-base font-mono overflow-auto h-[460px]">
                <AnimatePresence mode="wait">
                  {activeFile ? (
                    <motion.div
                      key={activeFile}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
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
                    </motion.div>
                  ) : (
                    <motion.div
                      key="no-files"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4 }}
                      className="text-gray-400 text-center pt-10"
                    >
                      You closed all the files! 🌙 Time for a break?
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
