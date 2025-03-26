"use client";

import {
  FaReact,
  FaPython,
  FaJava,
  FaAws,
  FaCss3Alt,
  FaJs,
  FaCode,
  FaRobot,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";
import {
  SiTypescript,
  SiCsharp,
  SiPostman,
  SiJunit5,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiPython,
  SiRancher,
  SiOpenaigym,
  SiDotnet,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const techLogos = {
  "React": FaReact,
  "TypeScript": SiTypescript,
  "C#": SiDotnet,
  "Azure DevOps": FaCode,
  "Rancher Desktop": SiRancher,
  "Python": SiPython,
  "NLP": FaBrain,
  "API Development": TbApi,
  "MetaDrive Simulator": SiOpenaigym,
  "Reinforcement Learning": FaRobot,
  "AWS Lambda": FaAws,
  "API Gateway": FaAws,
  "Postman": SiPostman,
  "DynamoDB": FaDatabase,
  "Java": FaJava,
  "JUnit": SiJunit5,
  "Dynamic Memory": FaDatabase,
  "JavaScript": FaJs,
  "CSS": FaCss3Alt,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
};

export default function TechLogo({ name, small }) {
  // Use FaCode as fallback for technologies without specific icons
  const Icon = techLogos[name] || FaCode;

  if (small) {
    return <Icon className="text-lg text-[#a78bfa] group-hover:scale-110 transition-transform duration-200" />;
  }

  return (
    <div className="group relative">
      <Icon className="text-2xl text-[#a78bfa] hover:scale-110 transition-transform duration-200" />
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#1e1e1e] border border-[#3c3c3c] rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {name}
      </div>
    </div>
  );
} 