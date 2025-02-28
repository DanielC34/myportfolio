import React from "react";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
// import MobileMenu from "./MobileMenu";
// import Home from "./sections/Home";
// import About from "./sections/About";
// import Projects from "./sections/Projects";
// import Contact from "./sections/Contact";

const MainPage = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Projects />
      <Contact /> */}
    </div>
  );
};

MainPage.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    setMenuOpen: PropTypes.func.isRequired,
};

export default MainPage;