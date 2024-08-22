import React from 'react';

export default function School() {
  return (
    <div className="relative overflow-hidden bg-black/90 text-gray-400" id="education">
      <div className="mx-auto max-w-6xl p-5 py-8 md:py-20">
        <div className="mb-16">
          <div className="pb-4 text-6xl font-medium text-gray-300 md:text-left md:text-7xl">
            Education
          </div>
          <div>Here is a summary of my educational background.</div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {EducationData.map((edu, index) => (
            <div
              className="duration-30 group border-l border-gray-400 p-2 px-2 text-xs transition ease-in-out hover:bg-gray-600/10 hover:text-white"
              key={`education${index}`}
            >
              <div className="text-lg font-bold text-green-500 group-hover:text-green-600">
                {edu.institution}
              </div>
              <div>{edu.degree}</div>
              <div className="mt-2 font-bold text-gray-200">
                <div className="space-x-2">
                  {edu.details.map((detail, index) => (
                    <div key={`edu-detail${index}`}>{detail}</div>
                  ))}
                </div>
              </div>
              <div className="mt-2 text-sm font-semibold">{edu.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const EducationData = [
  {
    institution: 'European University of Lefke',
    degree: "Bachelor's Degree in Software Engineering",
    details: [
      "Completed Bachelor's degree with a focus on software engineering.",
      'Acquired in-depth knowledge in various programming languages and software development methodologies.',
    ],
    date: '2019 - 2024',
  },
  {
    institution: 'Simba International School',
    degree: 'High School Diploma',
    details: [
      'Completed high school education with a strong foundation in various subjects.',
      'Participated in extracurricular activities and developed essential skills for higher education.',
    ],
    date: '2011 - 2018',
  },
];
