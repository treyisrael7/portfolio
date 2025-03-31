"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeEditor({ activeFile, files }) {
  return (
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
  );
}
