import React from "react";
import { RevealOnScroll } from "../RevealOnScroll.jsx";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center py-20"
      id="contact"
    >
      <RevealOnScroll>
        <div className="px-4 w-160">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          {/* Contact Details Section */}
          <div className="flex flex-col items-center justify-center space-y-4 mb-8">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-red-500" />
              <a
                href="mailto:danielchanda41@gmail.com"
                className="text-white hover:underline"
              >
                danielchanda41@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaLinkedin className="text-red-500" />
              <a
                href="https://www.linkedin.com/in/daniel-chanda/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                My LinkedIn
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-red-500" />
              <span className="text-white">+260 766994291</span>
            </div>
          </div>
          {/* Contact Form */}
          {/* <form action="" className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name..."
                className="w-full py-3 px-4 bg-white/5 rounded-xl border border-white/10 focus:outline-none focus:bg-red-500/5 focus:border-red-500 transition"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                required
                placeholder="Email (example: johndoe@example.com)"
                className="w-full py-3 px-4 bg-white/5 rounded-xl border border-white/10 focus:outline-none focus:bg-red-500/5 focus:border-red-500 transition"
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={8}
                placeholder="Your message..."
                className="w-full py-3 px-4 bg-white/5 rounded-xl border border-white/10 focus:outline-none focus:bg-red-500/5 focus:border-red-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]"
            >
              Send Message
            </button>
          </form> */}
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
