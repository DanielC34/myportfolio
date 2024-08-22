import React from 'react';
import Comtech from '../images/comtech-img.png';

export default function Experience() {
  return (
    <div className="mx-auto max-w-6xl p-5 py-8 md:py-20" id="experience">
      <div className="mb-8 pb-4 text-6xl font-medium text-red-600 md:mb-16 md:text-left md:text-7xl">
        Experience
      </div>
      {experiences.map((exp) => {
        return (
          <div className="mb-10" key={`experience${exp.company}`}>
            <div className="mb-2 flex flex-row items-center border-b-[1px] border-b-gray-200 pb-2">
              <div className="mr-4 flex h-[32px] w-[32px] items-center justify-center">
                <img
                  className="max-h-full max-w-full transform cursor-pointer rounded-md transition ease-in hover:scale-105"
                  src={exp.img}
                  alt={`${exp.company} logo`}
                  onClick={() => window.open(exp.companyUrl || window.location, '_blank')}
                />
              </div>

              <div className="flex-1 cursor-pointer">
                <div className="text-lg font-bold md:text-lg">{exp.company}</div>
                <div className="flex flex-col justify-between md:flex-row">
                  <div className="text-md md:text-md font-semibold text-gray-600">
                    {exp.position} - {exp.location}
                  </div>
                  <div className="text-sm font-semibold">{exp.date}</div>
                </div>
              </div>
            </div>

            <div className="pl-4 text-sm tracking-wide text-gray-500">
              <ul className="list-disc">
                {exp.details.map((detail, index) => (
                  <li key={`exp-details${index + exp.company}`}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const experiences = [
  {
    position: 'Web Developer Intern',
    location: 'Nicosia, Cyprus',
    company: 'Comtech KKTC',
    details: [
      'Developed Core Web Skills: Gained hands-on experience with HTML, CSS, and React.js, including component-based architecture and state management with React Redux.',
      'Assisted in integrating state management with React Redux, contributing to feature enhancements and ensuring seamless data flow in web applications.',
      'Demonstrated strong problem-solving skills by troubleshooting issues and refining web components, resulting in more efficient code and a smoother user experience.',
      'Enhanced quality assurance and testing by assisting in the development of comprehensive test suites and conducting usability testing.',
    ],
    date: 'Jul 2023 - Sep 2023',
    img: Comtech,
    companyUrl: 'http://www.comtechmax.com/',
  },
];
