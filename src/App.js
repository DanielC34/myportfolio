import React from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
// import Preloader from './components/preloader';
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
      loader.style.display = 'none';
    }
    setTimeout(() => {
      disablePreloader();
    }, 3000);
  }, []);

  return (
    <>
      {/* <Preloader></Preloader> */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home></Home>
              <Experience></Experience>
              <Projects></Projects>
              <School></School>
              <Skills></Skills>
              <About></About>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route path="/blogs-info/:name" element={<Education></Education>}></Route>
      </Routes>
    </>
  );
}

export default App;
