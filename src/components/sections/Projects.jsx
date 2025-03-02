import React from 'react'

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen items-center justify-center py-20"
    >
      {/* Featured Projects Section */}
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3>Chat Application</h3>
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
                "MondoDB",
                "Express",
                "Zustand",
              ].map((skill, key) => (
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
    </section>
  );
}

export default Projects