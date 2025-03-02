import React from "react";
import PropTypes from "prop-types";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`md:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex flex-col items-center justify-start space-y-8 z-30 pt-24 transition-opacity duration-300 ${
        menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Mobile menu container */}

      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-white text-3xl"
        onClick={() => setMenuOpen(false)} // Close the menu when the button is clicked
        aria-label="Close menu"
      >
        &times; {/* Cross "X" symbol */}
      </button>

      {/* Home link */}
      <a
        href="#home"
        className="text-white text-2xl hover:text-red-500 transition-colors"
        onClick={() => setMenuOpen(false)} // Close the menu when the link is clicked
      >
        Home
      </a>

      {/* About link */}
      <a
        href="#about"
        className="text-white text-2xl hover:text-red-500 transition-colors"
        onClick={() => setMenuOpen(false)} // Close the menu when the link is clicked
      >
        About
      </a>

      {/* Projects link */}
      <a
        href="#projects"
        className="text-white text-2xl hover:text-red-500 transition-colors"
        onClick={() => setMenuOpen(false)} // Close the menu when the link is clicked
      >
        Projects
      </a>

      {/* Education link */}
      <a
        href="#education"
        className="text-white text-2xl hover:text-red-500 transition-colors"
        onClick={() => setMenuOpen(false)} // Close the menu when the link is clicked
      >
        Education
      </a>

      {/* Contact Me link */}
      <a
        href="#contact"
        className="text-white text-2xl hover:text-red-500 transition-colors"
        onClick={() => setMenuOpen(false)} // Close the menu when the link is clicked
      >
        Contact Me
      </a>
    </div>
  );
};

MobileMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired, // menuOpen should be a boolean and is required
  setMenuOpen: PropTypes.func.isRequired, // setMenuOpen should be a function and is required
};

export default MobileMenu;
