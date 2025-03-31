"use client";

export default function WindowControls() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border-b border-[#3c3c3c]">
      <span
        className="w-3 h-3 rounded-full bg-[#ff5f56] hover:opacity-80 transition-opacity"
        title="Close"
      />
      <span
        className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:opacity-80 transition-opacity"
        title="Minimize"
      />
      <span
        className="w-3 h-3 rounded-full bg-[#27c93f] hover:opacity-80 transition-opacity"
        title="Maximize"
      />
    </div>
  );
}
