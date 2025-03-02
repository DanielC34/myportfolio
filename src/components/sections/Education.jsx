import React from "react";
import educationIcon from "../../assets/education.png"; // Adjust the path as necessary
import workIcon from "../../assets/work.png"; // Adjust the path as necessary
import { RevealOnScroll } from "../RevealOnScroll";
import WorkExperience from '../sections/WorkExperience.jsx';

const Education = () => {
  return (
    <section
      id="education"
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
    >
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

      <WorkExperience />
    </section>
  );
};

export default Education;
