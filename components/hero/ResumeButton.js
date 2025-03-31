import { FaFileDownload } from "react-icons/fa";

export default function ResumeButton() {
  return (
    <a
      href="/Trey Israel Resume.pdf"
      download
      className="group mt-8 inline-flex items-center gap-3 px-6 py-3 text-sm sm:text-base bg-[#a78bfa]/10 border border-[#a78bfa] text-white font-semibold rounded-md shadow-md hover:bg-[#a78bfa] hover:text-black hover:shadow-lg transition-all duration-300"
    >
      <FaFileDownload className="text-lg sm:text-xl transform group-hover:scale-110 group-hover:rotate-[-10deg] transition-transform duration-300" />
      <span className="relative">
        Download Resume
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
      </span>
    </a>
  );
}
