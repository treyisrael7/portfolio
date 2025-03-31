"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FileExplorer from "./FileExplorer";
import FileTabs from "./FileTabs";
import CodeEditor from "./CodeEditor";
import WindowControls from "./WindowControls";
import { files } from "./codeData";

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

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only handle keyboard shortcuts if we're focused within the code viewer
      const isWithinCodeViewer = e.target.closest("#code-viewer");
      if (!isWithinCodeViewer) return;

      // Cmd/Ctrl + W to close current file
      if ((e.metaKey || e.ctrlKey) && e.key === "w") {
        e.preventDefault();
        if (activeFile) {
          handleCloseFile(activeFile);
        }
      }

      // Cmd/Ctrl + number to switch tabs
      if ((e.metaKey || e.ctrlKey) && /^[1-9]$/.test(e.key)) {
        e.preventDefault();
        const index = parseInt(e.key) - 1;
        if (openFiles[index]) {
          setActiveFile(openFiles[index]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeFile, openFiles]);

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

  const handleReorderTabs = (newOrder) => {
    setOpenFiles(newOrder);
  };

  return (
    <motion.section
      id="about"
      className="relative py-24 px-4 sm:px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 relative"
        >
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#a78bfa] rounded opacity-50" />
          <h2 className="text-2xl sm:text-3xl font-bold text-left tracking-wide mb-2 text-white">
            A Little About Me
          </h2>
          <p className="text-gray-400 max-w-md">
            Here&apos;s a peek into my background, education, and what I love
            doing in life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-xl border border-[#3c3c3c] shadow-xl overflow-hidden bg-[#1e1e1e] transform hover:scale-[1.01] hover:border-[#a78bfa]/50 transition-all duration-300"
        >
          <WindowControls />

          <div className="flex flex-col md:flex-row">
            <FileExplorer
              files={files}
              activeFile={activeFile}
              onFileSelect={handleOpenFile}
            />

            <div className="w-full bg-[#1e1e1e]">
              <FileTabs
                openFiles={openFiles}
                activeFile={activeFile}
                onFileSelect={setActiveFile}
                onFileClose={handleCloseFile}
                onReorderTabs={handleReorderTabs}
              />

              <CodeEditor activeFile={activeFile} files={files} />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
