import React from "react";
import Github from "../../assets/github.png";
import { RevealOnScroll } from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
      {/* Featured Projects Section */}
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:bg-red-500/10 hover:shadow-[0_2px_rgba(255, 0, 0, 0.2)]">
            <h3 className="font-bold text-xl mb-2">Chat Application</h3>
            <p>
              Built a real-time chat platform powered by WebSockets for seamless
              live messaging.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "Socket.io",
                "Tailwind CSS",
                "MongoDB",
                "Express",
                "Zustand",
              ].map((skill, key) => (
                <span
                  key={key}
                  className="bg-red-500 text-white px-3 py-1 cursor-pointer rounded-full hover:bg-red-500/20 hover:shadow-[0_2px_rgba(255, 0, 0, 0.2)] transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-5">
              <a
                href="https://convocafe-chatapp.vercel.app/"
                className="text-red-400 hover:text-red-300 transition-colors flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/DanielC34/convocafe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Github}
                  alt="GitHub Repository"
                  className="w-6 h-6 ml-2 filter invert"
                />
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:bg-red-500/10 hover:shadow-[0_2px_rgba(255, 0, 0, 0.2)]">
            <h3 className="font-bold text-xl mb-2">
              FilmVault - Movie watchlist application
            </h3>
            <p>
              Built a movie watchlist application and utilized the TMDB API to render the movie and series data.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "Tailwind CSS",
                "MongoDB",
                "Express",
                "Zustand",
              ].map((skill, key) => (
                <span
                  key={key}
                  className="bg-red-500 text-white px-3 py-1 cursor-pointer rounded-full hover:bg-red-500/20 hover:shadow-[0_2px_rgba(255, 0, 0, 0.2)] transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-5">
              {/* <a
                href="https://convocafe-chatapp.vercel.app/"
                className="text-red-400 hover:text-red-300 transition-colors flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a> */}
              <a
                href="https://github.com/DanielC34/watchlist-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Github}
                  alt="GitHub Repository"
                  className="w-6 h-6 ml-2 filter invert"
                />
              </a>
            </div>
          </div>
        </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
