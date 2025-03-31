"use client";

export default function FileExplorer({ files, activeFile, onFileSelect }) {
  return (
    <div className="bg-[#252526] w-full md:w-64 p-5 text-base font-mono border-b md:border-b-0 md:border-r border-[#3c3c3c]">
      <div className="flex items-center gap-2 mb-4">
        <p className="text-gray-400 text-sm uppercase tracking-widest">
          portfolio
        </p>
      </div>
      <ul className="space-y-2">
        {Object.keys(files).map((file) => (
          <li
            key={file}
            onClick={() => onFileSelect(file)}
            className={`relative flex items-center gap-2 cursor-pointer pl-3 py-2 rounded-md transition font-mono text-sm group
              ${
                activeFile === file
                  ? "bg-[#3c3c3c] text-blue-300 font-semibold before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-blue-400"
                  : "hover:bg-[#2d2d2d] text-gray-300 hover:text-white"
              }`}
          >
            {file}
          </li>
        ))}
      </ul>
    </div>
  );
}
