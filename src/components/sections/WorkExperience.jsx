import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "PitchMatter",
    location: "Remote",
    dates: "June 2026 – Present",
    bullets: [
      "Conduct exploratory testing across application modules to identify functional, UI, and UX issues.",
      "Document bugs with clear reproduction steps, expected behavior, and impact assessments.",
      "Provide product improvement recommendations focused on usability, navigation, and user workflows.",
      "Collaborate with team members in a remote environment to review findings and improve product quality.",
      "Develop a stronger understanding of QA processes, product thinking, and software delivery workflows.",
    ],
    skills: [
      "Frontend Development",
      "QA Testing",
      "Bug Reporting",
      "UX Analysis",
      "Product Thinking",
      "Remote Collaboration",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "First Quantum Minerals",
    location: "Solwezi, Zambia",
    dates: "May 2025 – May 2026",
    bullets: [
      "Developed and maintained full-stack web applications using TypeScript, React, and Node.js, supporting internal business workflows.",
      "Designed and implemented RESTful APIs to handle data processing and system integration across services.",
      "Built and worked with asynchronous and event-driven systems, improving reliability and responsiveness of data flows.",
      "Integrated cloud-based messaging services (Kafka) to support scalable and decoupled communication between components.",
      "Collaborated with cross-functional teams to understand requirements, troubleshoot issues, and deliver practical, user-focused solutions.",
    ],
    skills: [
      "TypeScript",
      "React",
      "Node.js",
      "REST APIs",
      "Kafka",
      "Event-Driven Systems",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Comtech KKTC",
    location: "Nicosia, Cyprus",
    dates: "Jul 2023 – Sep 2023",
    bullets: [
      "Developed and optimized React-based components, improving performance and accessibility across key application views.",
      "Collaborated with cross-functional teams to enhance UI/UX design and implement state management solutions using Redux and Zustand.",
      "Built and maintained RESTful APIs with Node.js and Express, integrating with databases for efficient data storage.",
      "Worked on authentication, API security, and performance improvements for scalable applications.",
    ],
    skills: ["React", "Node.js", "Express", "Redux", "Zustand", "REST APIs"],
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-20">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all duration-200"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-red-400 font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                  <span className="text-gray-400 text-sm sm:text-right whitespace-nowrap mt-1">
                    {exp.dates}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-gray-300 text-sm flex gap-2">
                      <span className="text-red-500 mt-1 shrink-0">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/5 text-gray-400 border border-white/10 px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default WorkExperience;
