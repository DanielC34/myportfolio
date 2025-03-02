import React, { useEffect } from "react";
import PropTypes from "prop-types";
import HamburgerMenu from "../assets/hamburger.png";
import MobileMenu from "./MobileMenu";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-bold text-white font-mono text-xl">
            Daniel <span className="text-red-500">Chanda</span>
          </a>

          {/* Mobile Menu Icon */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg">
                <span className="text-white text-3xl">&times;</span>{" "}
                {/* Cross "X" symbol */}
              </div>
            ) : (
              <img
                src={HamburgerMenu}
                alt="Hamburger Menu"
                style={{ filter: "invert(1)" }}
              />
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#home"
              className="text-white hover:text-red-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-red-500 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-white hover:text-red-500 transition-colors"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-white hover:text-red-500 transition-colors"
            >
              Education
            </a>
            <a
              href="#experience"
              className="text-white hover:text-red-500 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-white hover:text-red-500 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
};

Navbar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default Navbar;
