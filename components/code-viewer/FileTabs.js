"use client";

export default function FileTabs({
  openFiles,
  activeFile,
  onFileSelect,
  onFileClose,
}) {
  return (
    <div className="flex border-b border-[#3c3c3c] text-sm overflow-x-auto">
      {openFiles.map((file) => (
        <div
          key={file}
          onClick={() => onFileSelect(file)}
          className={`flex items-center gap-2 px-4 py-2 select-none whitespace-nowrap group
            ${
              activeFile === file
                ? "bg-[#2d2d2d] text-white border-b-2 border-[#a78bfa]"
                : "text-gray-400 hover:text-white hover:bg-[#2d2d2d]"
            }`}
        >
          <span className="truncate max-w-[120px]">{file}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onFileClose(file);
            }}
            className="opacity-0 group-hover:opacity-60 hover:opacity-100 hover:bg-[#3c3c3c] rounded-sm p-0.5 transition-all duration-150"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
