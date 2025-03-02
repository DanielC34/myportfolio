import React from 'react'

const About = () => {

  const fronendSkillSet = [
    'HTML5',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Tailwind CSS',
    'Next.js',
    'Figma',
    'Zustand',
    'Redux'
  ];
  const backendSkillSet = [
    'Node.js',
    'Express',
    'MongoDB',
    'Mongoose',
    'MySQL',
    'RESTful APIs',
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent ">
          About Me
        </h2>

        {/*Small intro about myself along with both frontend and backend skills*/}
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            I'm a full-stack web developer with a passion for creating beautiful
            and functional websites. My goal is to provide value to businesses
            and individuals by creating high-quality web applications that meet
            their needs.
          </p>

          {/* */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {fronendSkillSet.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-red-500 text-white px-3 py-1 cursor-pointer
                    rounded-full hover:bg-red-500/20 hover:shadow-[0_2px_rgba(255, 0, 0, 0.2) transition]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkillSet.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-red-500 text-white px-3 py-1 cursor-pointer
                    rounded-full hover:bg-red-500/20 hover:shadow-[0_2px_rgba(255, 0, 0, 0.2) transition]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/*Education*/}
      </div>
    </section>
  );
}

export default About