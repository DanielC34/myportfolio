import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const skillCategories = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "Python", "C#", "SQL"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Zustand", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "REST APIs", ".NET"],
  },
  {
    label: "Systems & Architecture",
    skills: ["Event-Driven Architecture", "Async Processing", "API Design"],
  },
  {
    label: "Messaging & Cloud",
    skills: ["Kafka", "RabbitMQ"],
  },
  {
    label: "Databases",
    skills: ["MongoDB", "MySQL", "SQL Server"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Figma", "Vite"],
  },
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* Bio */}
          <div className="rounded-xl p-8 border border-white/10 mb-6">
            <p className="text-gray-300 leading-relaxed">
              I'm a Full-Stack Developer focused on building scalable,
              user-centric applications with TypeScript, React, and Node.js.
              With hands-on experience shipping software in production
              environments, I'm comfortable across the full stack — from
              architecting APIs to building polished UIs. I thrive in fast-paced
              teams where I can take real ownership and contribute from day one.
            </p>
          </div>

          {/* Skills */}
          <div className="rounded-xl p-8 border border-white/10 mb-6">
            <h3 className="text-xl font-bold mb-6">Skills</h3>
            <div className="space-y-4">
              {skillCategories.map(({ label, skills }) => (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row sm:items-start gap-2"
                >
                  <span className="text-red-400 font-medium text-sm w-44 shrink-0 pt-0.5">
                    {label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm bg-white/5 text-gray-300 border border-white/10 px-3 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What I'm Looking For */}
          <div className="rounded-xl p-8 border border-white/10">
            <h3 className="text-xl font-bold mb-4">What I'm Looking For</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm looking for roles at growth-stage startups where I can
              contribute to core product development and take ownership of
              meaningful technical challenges. I'm drawn to teams that value
              clean code, ship fast, and care deeply about what they're
              building.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
