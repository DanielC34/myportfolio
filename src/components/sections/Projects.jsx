import React from "react";
import Github from "../../assets/github.png";
import { FiGithub, FiExternalLink } from "react-icons/fi";
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
              <h3 className="font-bold text-xl mb-2">ApplyFlow</h3>
              <p className="text-gray-300 text-sm mb-3 font-medium">
                Full-Stack Job Application Tracker
              </p>
              <p className="text-gray-400 mb-4">
                A full-stack job application management system designed to help
                users track, organize, and manage job applications efficiently.
                Built a responsive dashboard with full CRUD functionality,
                implemented authentication and secure data storage using
                Supabase, and designed a modular service-layer architecture
                separating UI logic from backend communication. Focused on
                improving workflow efficiency for job seekers through structured
                application tracking.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Vite",
                  "TypeScript",
                  "Supabase",
                  "Edge Functions",
                ].map((skill, key) => (
                  <span
                    key={key}
                    className="bg-red-500 text-white px-3 py-1 cursor-pointer rounded-full hover:bg-red-500/20 hover:shadow-[0_2px_rgba(255, 0, 0, 0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 items-center mt-5">
                <a
                  href="https://github.com/DanielC34/applyflow"
                  className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ApplyFlow GitHub Repository"
                >
                  <FiGithub className="w-5 h-5" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://applyflow-xi.vercel.app/"
                  className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ApplyFlow Live Demo"
                >
                  <FiExternalLink className="w-5 h-5" />
                  <span className="text-sm">Live Demo</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:bg-red-500/10 hover:shadow-[0_2px_rgba(255, 0, 0, 0.2)]">
              <h3 className="font-bold text-xl mb-2">
                FilmVault - Movie watchlist application
              </h3>
              <p className="text-gray-400 mb-4">
                Architected a responsive movie exploration engine integrating
                the TMDB API. Focused on performance optimization through
                efficient data fetching and persistent client-side state,
                delivering a seamless user experience.
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
                <a
                  href="https://film-vault-two.vercel.app/"
                  className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="FilmVault Live Demo"
                >
                  <FiExternalLink className="w-5 h-5" />
                  <span className="text-sm">Live Demo</span>
                </a>
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
