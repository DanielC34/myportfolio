import React from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Preloader from './components/preloader'; // Uncomment Preloader component
import About from './pages/about';
import School from './pages/school.js';
import Education from './pages/education.js';
import Experience from './pages/experience';
import Home from './pages/home';
import Projects from './pages/projects';
import Skills from './pages/skills';

function App() {
  useEffect(() => {
    function disablePreloader() {
      const loader = document.getElementsByClassName('preloader')[0];
      // Add a check to ensure the loader element exists
      if (loader) {
        loader.style.display = 'none';
      }
    }

    // Use setTimeout to disable the preloader after 3 seconds
    setTimeout(() => {
      disablePreloader();
    }, 3000);
  }, []);

  return (
    <>
      {/* Ensure Preloader is rendered */}
      <Preloader />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Experience />
              <Projects />
              <School />
              <Skills />
              <About />
              <Footer />
            </>
          }
        />
        <Route path="/blogs-info/:name" element={<Education />} />
      </Routes>
    </>
  );
}

export default App;
