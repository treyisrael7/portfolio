"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer Intern – WebstaurantStore",
    date: "Professional",
    description:
      "Built internal tools in React and TypeScript to streamline QA workflows, automate test plans, and improve deployment efficiency with CI/CD pipelines.",
    tech: ["C#", "React", "TypeScript", "Azure DevOps", "Rancher Desktop"],
  },
  {
    title: "Privacy Compliance in Software Development",
    date: "Research",
    description:
      "Researched privacy compliance in third-party apps using NLP, sentiment analysis, and static code tools to assess and improve user data protection.",
    tech: ["Python", "VADER Sentiment", "Pushshift API", "Google Play Scraper"],
  },
  {
    title: "Anomaly Detection in Autonomous Vehicles",
    date: "Research",
    description:
      "Developed RL agents in MetaDrive to improve autonomous driving stability, integrating trajectory prediction and multi-agent training for safer navigation.",
    tech: ["MetaDrive Simulator", "Python", "PPO", "SAC"],
  },
  {
    title: "CUSports API",
    date: "School",
    description:
      "Designed a scalable serverless API with AWS to handle secure, reliable order processing for Clemson Athletics, with 30+ endpoints and automated testing.",
    tech: ["AWS Lambda", "API Gateway", "Postman", "DynamoDB"],
  },
  {
    title: "Scalable Checkers Game",
    date: "School",
    description:
      "Designed a memory-efficient checkers game with support for up to 100x100 boards and smooth gameplay.",
    tech: ["Java", "JUnit", "Dynamic Memory"],
  },
  {
    title: "Sorting Visualizer",
    date: "Personal",
    description:
      "Built in React & JS, supports 10+ sorting algorithms, scales array size/speed, shows comparisons/swaps, and has full control options.",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    title: "This Portfolio!",
    date: "Personal",
    description:
      "Created this portfolio with Next.js and Tailwind, with interactive sections and animations.",
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
  },
];

export default function ExperienceCarousel() {
  return (
    <section
      id="experience"
      className="py-20 px-6 max-w-6xl mx-auto text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-left tracking-wide mb-2">
          Here's My Experience!
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#a78bfa]/50"
      >
        <div className="flex gap-6 pb-4 pr-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{ willChange: "transform" }}
              className="min-w-[300px] max-w-[300px] h-[400px] bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg shadow-md flex-shrink-0 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-5 flex flex-col gap-6 flex-grow">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold leading-snug line-clamp-2">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-400">{exp.date}</p>
                </div>
                <p className="text-sm text-gray-200 line-clamp-5">
                  {exp.description}
                </p>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-[#333] flex flex-wrap gap-2 text-xs text-[#a78bfa] font-medium">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#a78bfa]/10 px-3 py-1 rounded-full border border-[#a78bfa]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
