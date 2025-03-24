import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function SocialIcons({ className }) {
  return (
    <div className={`flex justify-center md:justify-start ${className}`}>
      <div className="flex flex-wrap gap-8 sm:gap-10 text-3xl items-center">
        <a
          href="mailto:treyisraeliii@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#a78bfa] transition transform hover:scale-110"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/trey-israel-305239293/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#a78bfa] transition transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/treyisrael7/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#a78bfa] transition transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/treyisraeliii"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#a78bfa] transition transform hover:scale-110"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
