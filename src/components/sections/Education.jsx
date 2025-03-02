import React from "react";
import educationIcon from "../../assets/education.png"; // Adjust the path as necessary
import workIcon from "../../assets/work.png"; // Adjust the path as necessary
import { RevealOnScroll } from "../RevealOnScroll";

const Education = () => {
  return (
    <section id="education" className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <RevealOnScroll>
        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold flex items-center mb-4">
            <img
              src={educationIcon}
              alt="Education Icon"
              className="w-6 h-6 mr-2 filter invert"
            />
            Education
          </h3>
          <ul>
            <li>
              <strong>B.Eng. in Software Engineering</strong>
              <p>European University of Lefke (2019 - 2024)</p>
              <p>Lefke, Cyprus</p>
            </li>
          </ul>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold flex items-center mb-6">
            <img
              src={workIcon}
              alt="Work Icon"
              className="w-6 h-6 mr-2 filter invert"
            />
            Work Experience
          </h3>
          <ol className="list-decimal list-inside space-y-4 text-gray-300">
            <li>
              <strong>Front-end Developer Intern</strong>
              <p>Comtech KKTC (Jul 2023 - Sep 2023)</p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Developed and optimized React-based components, improving
                  performance and accessibility.
                </li>
                <li>
                  Collaborated with cross-functional teams to enhance UI/UX
                  design and implement state management solutions using Redux
                  and Zustand.
                </li>
                <li>
                  Built and maintained RESTful APIs with Node.js and Express,
                  integrating with databases for efficient data storage.
                </li>
                <li>
                  Worked on authentication, API security, and performance
                  improvements for scalable applications.
                </li>
              </ul>
            </li>
            <li>
              <strong>IT Support Intern</strong>
              <p>Comtech KKTC (Jul 2023 - Sep 2023)</p>
              <ul className="list-disc list-inside ml-4">
                <li>Provided technical support to clients and staff</li>
                <li>Assisted in troubleshooting hardware and software issues</li>
                <li>Maintained and updated IT documentation</li>
              </ul>
            </li>
          </ol>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Education;
