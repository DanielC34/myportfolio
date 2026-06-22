import React from "react";
import PropTypes from "prop-types";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`md:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex flex-col items-center justify-start space-y-8 z-30 pt-24 transition-opacity duration-300 ${
        menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-white text-3xl"
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
      >
        &times;
      </button>

      {[
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
      ].map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="text-white text-2xl hover:text-red-500 transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          {label}
        </a>
      ))}
    </div>
  );
};

MobileMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default MobileMenu;
