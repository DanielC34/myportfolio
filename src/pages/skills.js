import React from 'react';
import chakra from '../images/chakra.jpg'

export default function Skills() {
  return (
    <div className="mx-auto max-w-6xl p-5 py-8 md:py-20" id="skills">
      <div className="mb-8 pb-4 text-6xl font-medium text-red-600 md:mb-16 md:text-left md:text-7xl">
        Skills
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {skills.map((skill, index) => {
          return (
            <div className="flex items-center space-x-2" key={`skill${index}`}>
              {skill.icon && <div className="flex text-2xl">{skill.icon}</div>}
              {skill.img && <img src={skill.img} className="h-6 w-6" alt={skill.skill} />}
              <div className="text-gray-500">{skill.skill}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const skills = [
  {
    icon: <i className="devicon-react-original colored"></i>,
    skill: 'React.js',
  },
  {
    icon: <i className="devicon-redux-original colored"></i>,
    skill: 'React Redux',
  },
  {
    icon: <i className="devicon-nodejs-plain colored"></i>,
    skill: 'Node.js',
  },
  {
    icon: <i className="devicon-express-original colored"></i>,
    skill: 'Express.js',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    skill: 'MongoDB',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    skill: 'Java',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    skill: 'C',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    skill: 'C++',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    skill: 'Bootstrap',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    skill: 'Material UI',
  },
  {
    img: chakra,
    skill: 'Chakra UI',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    skill: 'Tailwind CSS',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    skill: 'TypeScript',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    skill: 'Next.js',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    skill: 'HTML',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    skill: 'CSS',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg',
    skill: 'Vite',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    skill: 'Figma',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    skill: 'Git',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg',
    skill: 'Bitbucket',
  },
];
