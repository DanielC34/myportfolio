/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent leading-right">
          Hi there, I'm Daniel Chanda
        </h1>

        <h2 className="text-lg md:text-2xl mb-8 max-w-lg mx-auto text-gray-200">
          Software Developer
        </h2>

        <div className="justify-center flex space-x-4">
          <a
            href="#projects"
            className="bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(255, 0, 0, 0.4)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-6 border hover:translate-y-0.5 border-red-500 hover:border-transparent rounded"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
